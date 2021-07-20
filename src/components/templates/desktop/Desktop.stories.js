import Desktop from './Desktop.vue';

export default {
    title: 'Template/Desktop',
    component: Desktop,
    argTypes: {
        size: { control: { type: 'radio', options: ["lg", "md", "sm"] } },
        type: { control: { type: 'radio', options: ["circle", "rounded", "square"] } },
        onClick: {},
    },
};

const Template = (args) => ({
    // Components used in your story `template` are defined in the `components` object
    components: { Desktop },
    // The story's `args` need to be mapped into the template through the `setup()` method
    setup() {
        return { args };
    },
    // And then the `args` are bound to your component with `v-bind="args"`
    template: '<desktop v-bind="args" />',
});
export const Light = Template.bind({});
Light.args = {
    value: true,
    theme: "light"
};

export const Dark = Template.bind({});
Dark.args = {
    value: true,
    theme: 'dark'
};
