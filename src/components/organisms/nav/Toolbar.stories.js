import Toolbar from './Toolbar.vue';

export default {
    title: 'Organisms/Toolbar',
    component: Toolbar,
    argTypes: {
        value: { control: { type: 'boolean', options: [] } },
        onClick: {},
    },
};

const Template = (args) => ({
    // Components used in your story `template` are defined in the `components` object
    components: { Toolbar },
    // The story's `args` need to be mapped into the template through the `setup()` method
    setup() {
        return { args };
    },
    // And then the `args` are bound to your component with `v-bind="args"`
    template: '<toolbar v-bind="args" />',
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
