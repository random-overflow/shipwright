import ShipInput from './Input.vue';

export default {
    title: 'Atoms/Input',
    component: ShipInput,
    argTypes: {
        state: { control: { type: 'radio', options: ['success', 'danger', 'deactivate', 'active'] } },
        onClick: {},
    },
};

const Template = (args) => ({
    // Components used in your story `template` are defined in the `components` object
    components: { ShipInput },
    // The story's `args` need to be mapped into the template through the `setup()` method
    setup() {
        return { args };
    },
    // And then the `args` are bound to your component with `v-bind="args"`
    template: '<ship-input v-bind="args" />',
});

export const Light = Template.bind({});
Light.args = {
    value: 'Value',
    theme: "light"
};

export const Dark = Template.bind({});
Dark.args = {
    value: 'Value',
    theme: 'dark'
};

