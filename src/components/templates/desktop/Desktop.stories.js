import Desktop from './Desktop.vue';

export default {
    title: 'Template/Desktop',
    component: Desktop,
    argTypes: {
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
    theme: "light",
    sender: "user",
    receiver: "Linda & Jeremiah J.",
    message: "The quick brown fox jumps over the lazy dog",
    time: "12:00",
};

export const Dark = Template.bind({});
Dark.args = {
    value: true,
    theme: 'dark',
    sender: "user",
    receiver: "Linda & Jeremiah J.",
    message: "The quick brown fox jumps over the lazy dog",
    time: "12:00",
};
