//plugins/i18n.js
import Vue from 'vue'
import VueI18n from 'vue-i18n'
Vue.use(VueI18n)

export default ({ app, store }) => {
    // inject our i18n instance into the app root to be used in middleware
    // we assume a store/index.js file has been defined and the variable 'locale' defined on store, we'll go into this in detail in the next code snippet


}