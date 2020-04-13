(ns who-assist.views
  (:require [reagent.core :as r]
            [dommy.core :as dommy]))

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
                 "Yes, but not in past 3 months" 3}}})

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
  (let [q1?     (= n 1)
        q2?     (= n 2)
        q-kw    (keyword (str n))
        q-map   (q-kw questions)
        q       (:question q-map)
        q-opts  (:options q-map)
        q-notes (:notes q-map)]
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
          (for [ss    (sort-by first substances)
                :let  [ss-name (second ss)
                       ss-kw (first ss)]
                :when (or q1?
                          (contains? @visible-substance ss-kw))]
            ^{:key (str "q" n (name ss-kw))}         
            [:div.form-control-group
             [:div.form-control.grow-3x
              [:label (str (name ss-kw) ". " ss-name)]
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
                                                (set-lvl2)))))}]
                  opt]]))]))]]])))

(defn main-html []
  [:div
   [question 1]
   (when @lvl1
     [question 2])
   (when @lvl2
     [question 3])
   (when @lvl2
     [question 4])
   (when @lvl2
     [question 5])
   (when @lvl1
     [question 6])
   (when @lvl1
     [question 7])])
