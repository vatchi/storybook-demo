import CtaButton from './CtaButton.vue';

export default {
    title: 'Components/CtaButton',
    component: CtaButton,
    argTypes: {
        backgroundColor: { control: 'color' },
        size: {
            control: { type: 'select', options: ['small', 'medium', 'large'] },
        },
    },
};

const Template = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    components: { CtaButton },
    template: '<cta-button @onClick="onClick" v-bind="$props" />',
});

export const Small = Template.bind({});
Small.args = {
    size: 'small',
    label: 'Cta Button',
};

export const Medium = Template.bind({});
Medium.args = {
    size: 'medium',
    label: 'Cta Button',
};

export const Large = Template.bind({});
Large.args = {
    size: 'large',
    label: 'Cta Button',
};
