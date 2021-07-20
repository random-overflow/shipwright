import MessageComposer from './MessageComposer.vue';

export default {
    title: 'Organisms/MessageComposer',
    component: MessageComposer,
    argTypes: {
        onClick: {},
    },
};

const Template = (args) => ({
    // Components used in your story `template` are defined in the `components` object
    components: { MessageComposer },
    // The story's `args` need to be mapped into the template through the `setup()` method
    setup() {
        return { args };
    },
    // And then the `args` are bound to your component with `v-bind="args"`
    template: '<message-composer v-bind="args" />',
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
