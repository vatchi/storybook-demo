import SearchBar from './SearchBar.vue';

export default {
    title: 'Components/SearchBar',
    component: SearchBar,
};

const Template = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { SearchBar },
    template:
        '<search-bar @onSearch="onSearch" @onQueryChanged="onQueryChanged" v-bind="$props" />',
});

export const Default = Template.bind({});
Default.args = {
    label: 'Sök efter bilder:',
    placeholder: 'Sök bland 26356 bilder...',
    button: 'Sök'
};
