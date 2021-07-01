import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import wrap from "@vue/web-component-wrapper";

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

const wrappedElement = wrap(Vue, App);

window.customElements.define("v-card", wrappedElement);