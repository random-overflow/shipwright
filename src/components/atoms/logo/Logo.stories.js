import Logo from './Logo.vue';

export default {
    title: 'Atoms/Logo',
    component: Logo,
    argTypes: {
        size: { control: { type: 'radio', options: ["lg", "md", "sm"] } },
        type: { control: { type: 'radio', options: ["circle", "rounded", "square"] } },
        onClick: {},
    },
};

const Template = (args) => ({
    // Components used in your story `template` are defined in the `components` object
    components: { Logo },
    // The story's `args` need to be mapped into the template through the `setup()` method
    setup() {
        return { args };
    },
    // And then the `args` are bound to your component with `v-bind="args"`
    template: '<logo v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
    value: true,
    name: "ship-logo",
    size: "lg",
    type: "rounded"
};
