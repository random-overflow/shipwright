import Message from './Message.vue';

export default {
    title: 'Organisms/Message',
    component: Message,
    argTypes: {
        onClick: {},
    },
};

const Template = (args) => ({
    // Components used in your story `template` are defined in the `components` object
    components: { Message },
    // The story's `args` need to be mapped into the template through the `setup()` method
    setup() {
        return { args };
    },
    // And then the `args` are bound to your component with `v-bind="args"`
    template: '<message v-bind="args" />',
});

export const Light = Template.bind({});
Light.args = {
    username: "Linda & Jeremiah J.",
    message: "The quick brown fox jumps over the lazy dog",
    time: "12:00",
    theme: "light",
    isFirst: true,
    isSender: false,
};

export const Dark = Template.bind({});
Dark.args = {
    username: "Linda & Jeremiah J.",
    message: "The quick brown fox jumps over the lazy dog",
    time: "12:00",
    theme: 'dark',
    isFirst: true,
    isSender: false
};
