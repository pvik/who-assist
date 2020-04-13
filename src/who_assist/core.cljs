(ns who-assist.core
  (:require [reagent.core :as r]
            [reagent.dom :as rdom]
            ;; [cljs-http.client :as http]
            ;; [cljs.core.async :refer [<!
            ;;                          >!
            ;;                          chan]]
            ;; [clojure.core.reducers :as reducers]
            ;; [cemerick.url :as url]
            ;; [clojure.walk :refer [keywordize-keys]]
            ;; [alandipert.storage-atom :refer [local-storage]]
            [dommy.core :as dommy]
            [who-assist.views :refer [;; handle-error
                                      ;; error-html
                                      main-html
                                      ;; post-html
                                      ;; loggedin-html
                                      ;; search-bar-html
                                      ]])
  ;; (:require-macros [cljs.core.async.macros :refer [go]])
  )

(enable-console-print!)

;; helper function to print to js/console
(defn console-log [msg & more-msgs]
  (.log js/console (str msg more-msgs)))

;; (def saved-posts (r/atom {}))
;; (def subreddits (r/atom {}))
;; (def get-posts? (r/atom true))
;; (def display-subreddit-filter-btn? (r/atom false))
;; (def csv-string (r/atom ""))

;; Starting point
;; making sure reddit api is initialized properly and proceed accordingly
(defn init []
  (console-log "Initializing...")
  (rdom/render [main-html] (dommy/sel1 :#app))
  ;; (handle-error error)
  )

;; initialize the HTML page
(set! (.-onload js/window) init)

;; (defn on-js-reload []
;;   ;; optionally touch your app-state to force rerendering depending on
;;   ;; your application
;;   ;; (swap! app-state update-in [:__figwheel_counter] inc)
;; )
