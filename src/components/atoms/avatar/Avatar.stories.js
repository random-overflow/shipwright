import Avatar from './Avatar.vue';

export default {
    title: 'Atoms/Avatar',
    component: Avatar,
    argTypes: {
        size: { control: { type: 'radio', options: ["lg", "md", "sm"] } },
        type: { control: { type: 'radio', options: ["circle", "rounded", "square"] } },
        onClick: {},
    },
};

const Template = (args) => ({
    // Components used in your story `template` are defined in the `components` object
    components: { Avatar },
    // The story's `args` need to be mapped into the template through the `setup()` method
    setup() {
        return { args };
    },
    // And then the `args` are bound to your component with `v-bind="args"`
    template: '<avatar v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
    value: true,
    name: "Default",
    size: "lg",
    type: "rounded"
};
