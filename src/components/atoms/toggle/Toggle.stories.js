import Toggle from './Toggle.vue';

export default {
    title: 'Atoms/Toggle',
    component: Toggle,
    argTypes: {
        value: { control: { type: 'boolean', options: [] } },
        onClick: {},
    },
};

const Template = (args) => ({
    // Components used in your story `template` are defined in the `components` object
    components: { Toggle },
    // The story's `args` need to be mapped into the template through the `setup()` method
    setup() {
        return { args };
    },
    // And then the `args` are bound to your component with `v-bind="args"`
    template: '<toggle v-bind="args" />',
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

