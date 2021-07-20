import CardMessage from './CardMessage.vue';

export default {
    title: 'Organisms/CardMessage',
    component: CardMessage,
    argTypes: {
        onClick: {},
    },
};

const Template = (args) => ({
    // Components used in your story `template` are defined in the `components` object
    components: { CardMessage },
    // The story's `args` need to be mapped into the template through the `setup()` method
    setup() {
        return { args };
    },
    // And then the `args` are bound to your component with `v-bind="args"`
    template: '<card-message v-bind="args" />',
});

export const Light = Template.bind({});
Light.args = {
    username: "Linda & Jeremiah J.",
    message: "The quick brown fox jumps over the lazy dog",
    time: "12:00",
    secondary: false,
    read: false,
    theme: "light",
};

export const Dark = Template.bind({});
Dark.args = {
    username: "Linda & Jeremiah J.",
    message: "The quick brown fox jumps over the lazy dog",
    time: "12:00",
    secondary: false,
    read: false,
    theme: 'dark'
};
