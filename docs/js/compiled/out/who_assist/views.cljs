(ns who-assist.views
  (:require [reagent.core :as r]
            [dommy.core :as dom]
            ))

(defonce substances
  {:a "Tobacco products (cigarettes, chewing tobacco, cigars, etc.)"
   :b "Alcoholic beverages (beer, wine, spirits, etc.)"
   :c "Cannabis (marijuana, pot, grass, hash, etc.)"
   :d "Cocaine (coke, crack, etc.)"
   :e "Amphetamine type stimulants (speed, diet pills, ecstasy, etc.)"
   :f "Inhalants (nitrous, glue, petrol, paint thinner, etc.)"
   :g "Sedatives or Sleeping Pills (Valium, Serepax, Rohypnol, etc.)"
   :h "Hallucinogens (LSD, acid, mushrooms, PCP, Special K, etc.)"
   :i "Opioids (heroin, morphine, methadone, codeine, etc.)"
   :j "Other"})

(defonce questions
  {:1 {:question "In your life, which of the following substances have you ever used? (NON-MEDICAL USE ONLY)"
       :options {"No" 0 "Yes" 3}
       :notes "if completing follow-up please cross check the patient’s answers with the answers given for Q1 at baseline. Any differences on this question should be queried"}
   :2 {:question "In the past three months, how often have you used the substances you mentioned?"
       :options {"Never" 0
                 "Once/Twice" 2
                 "Monthly" 3
                 "Weekly" 4
                 "Daily/Mostly Daily" 6}}
   :3 {:question "During the past three months, how often have you had a strong desire or urge to use?"
       :options {"Never" 0
                 "Once/Twice" 3
                 "Monthly" 4
                 "Weekly" 5
                 "Daily/Mostly Daily" 6}}
   :4 {:question "During the past three months, how often has your use of substances you mentioned led to health, social, legal, or financial problems?"
       :options {"Never" 0
                 "Once/Twice" 4
                 "Monthly" 5
                 "Weekly" 6
                 "Daily/Mostly Daily" 7}}
   :5 {:question "During the past three months, how often have you failed to do what was normally expected of you because of your use of substances?"
       :options {"Never" 0
                 "Once/Twice" 5
                 "Monthly" 6
                 "Weekly" 7
                 "Daily/Mostly Daily" 8}}
   :6 {:question "Has a friend or relative ever expressed concerned concern about your use of substances?"
       :options {"Never" 0
                 "Yes, in past 3 months" 6
                 "Yes, but not in past 3 months" 3}}
   :7 {:question "Have you ever tried and failed to control, cut down or stop using substances?"
       :options {"Never" 0
                 "Yes, in past 3 months" 6
                 "Yes, but not in past 3 months" 3}}
   :8 {:question "Have you ever used any drug by injection?"
       :options {"Never" 0
                 "Yes, in past 3 months" 0
                 "Yes, but not in past 3 months" 0}}   })

(def q-score (r/atom {}))
(def visible-substance (r/atom #{}))
(def lvl2-substances (r/atom #{}))

(def lvl1 (r/atom false))
(def lvl2 (r/atom false))

(defn set-lvl1 []
  (if (= (count @visible-substance) 0)
    (reset! lvl1 false)
    (reset! lvl1 true)))

(defn set-lvl2 []
  (if (= (count @lvl2-substances) 0)
    (reset! lvl2 false)
    (reset! lvl2 true)))

(defn question [n]
  (let [q1?       (= n 1)
        q2?       (= n 2)
        q8?       (= n 8)
        lvl2-q?   (and (> n 2) (< n 6))
        scorable? (and (> n 1) (< n 8))
        q-kw      (keyword (str n))
        q-map     (q-kw questions)
        q         (:question q-map)
        q-opts    (:options q-map)
        q-notes   (:notes q-map)]
    (fn []
      [:div.col {:id (str "q" n)}
       [:div.panel
        [:div.panel-header
         [:h5 (str "Question " n)]
         [:h6 (str q)]]
        [:div.panel-body
         (when q-notes
           [:p [:i q-notes]])
         (doall
          (for [ss    (if q8?
                        {:z ""}
                        (sort-by first substances))
                :let  [ss-name (second ss)
                       ss-kw (first ss)]
                :when (or q1?
                          q8?
                          (and (not lvl2-q?) (contains? @visible-substance ss-kw))
                          (and lvl2-q? (contains? @lvl2-substances ss-kw)))]
            ^{:key (str "q" n (name ss-kw))}         
            [:div.form-control-group
             [:div.form-control.grow-3x
              [:label (str (if q8? "" (str (name ss-kw) ". ")) ss-name)]
              (when (and (= n 1) (= ss-name "Other"))
                [:input {:id "other" :type "text" :placeholder "Other"}])]
             (doall
              (for [opt-kv q-opts                
                    :let   [opt (first opt-kv)
                            opt-val (second opt-kv)]]
                ^{:key (str "q" n (name ss-kw) opt-val)}
                [:div.form-control
                 [:label
                  [:input {:type     :radio
                           :value    opt-val
                           :name     (str "q" n (name ss-kw))
                           :on-click #(do (when q1?
                                            (case opt
                                              "Yes" (do
                                                      (swap! visible-substance conj ss-kw)
                                                      (set-lvl1))
                                              "No"  (do
                                                      (swap! visible-substance disj ss-kw)
                                                      (set-lvl1))))
                                          (when q2?
                                            (if (= opt "Never")
                                              (do
                                                (swap! lvl2-substances disj ss-kw)
                                                (set-lvl2))
                                              (do
                                                (swap! lvl2-substances conj ss-kw)
                                                (set-lvl2))))
                                          (when scorable?
                                            (swap! q-score assoc-in [q-kw ss-kw] opt-val)))}]
                  opt]]))]))]]])))

(defn intervention-level [subst val]
  (cond
    (> val 26) "More intensive treatment"
    (= subst :b) (cond
                   (> val 10) "receive brief intervention"
                   :else "no intervention")
    (> val 3) "receive brief intervention"
    :else "no intervention"))

(defn score-table []
  (let [scores (reduce (fn [acc [q-n q-subst-score]]
                         (reduce (fn [acc2 [subst val]]
                                   (let [v (if (and  (= q-n :5) (= subst :a))
                                             0
                                             val)]
                                     (assoc acc2 subst (+ v (get acc subst 0)))))
                                 acc
                                 q-subst-score))
                       {}
                       @q-score)
        ;; _ (println scores)
        ]
    [:section
     [:h6 "Substance Involvement Score"]
     [:table
      [:tbody
       (doall
        (for [ss scores
              :let [subst (first ss)
                    scr (second ss)]]
          ^{:key subst}
          [:tr
           [:td (str (subst substances))]
           [:td (str scr)]
           [:td [intervention-level subst scr]]]))]]]))

(defn save-pdf [_]
  (let [interviewer-id (.-value (dom/sel1 :#interviewer_id))
        clinic         (.-value (dom/sel1 :#clinic))
        patient-id     (.-value (dom/sel1 :#patient_id))
        ;; _              (println (.getTime (js/Date.)))
        date           (str (.getDate (js/Date.))
                            "_" (.getMonth (js/Date.))
                            "_" (.getFullYear (js/Date.)))
        name           (str "assist_" interviewer-id "_" clinic "_" patient-id "_" date ".pdf")
        body-element   (.getElementById js/document "app-body")]
    (.save 
     (.from 
      (.set (new js/html2pdf) 
            (clj->js 
             {"margin"   (array 0.5 3 0.5 0.5)
              "filename" name
              "jsPDF"    {"format"      "a4"
                          "unit"        "cm"
                          "orientation" "landscape"}})) 
      body-element))
    ))

(defn main-html []
  [:div
   ;; [:p (str @q-score)]
   [question 1]
   (when @lvl1
     [:div
      [question 2]
      (when @lvl2
        [:div
         [question 3]
         [question 4]
         [question 5]
         ])
      [question 6]
      [question 7]
      [question 8]
      [score-table]
      [:div.col
       [:button.button-primary
        {:on-click save-pdf}
        "Save as PDF"]]])])
