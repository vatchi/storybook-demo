import Vue from 'vue';

import CtaButton from './components/CtaButton/CtaButton.vue';
import SearchBar from './components/SearchBar/SearchBar.vue';

const Components = {
    CtaButton,
    SearchBar
};

Object.keys(Components).forEach( name => {
    Vue.component(name, Components[name]);
});

export default Components;
