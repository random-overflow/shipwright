import InputSub from './InputSub.vue';

export default {
    title: 'Molecules/InputSub',
    component: InputSub,
    argTypes: {
        state: { control: { type: 'select', options: ['success', 'danger', 'deactivate', 'active'] } },
        onClick: {},
    },
};

const Template = (args) => ({
    // Components used in your story `template` are defined in the `components` object
    components: { InputSub },
    // The story's `args` need to be mapped into the template through the `setup()` method
    setup() {
        return { args };
    },
    // And then the `args` are bound to your component with `v-bind="args"`
    template: '<ship-input v-bind="args" />',
});

export const Light = Template.bind({});
Light.args = {
    label: 'Button',
    theme: "light"
};

export const Dark = Template.bind({});
Dark.args = {
    label: 'Button',
    theme: 'dark'
};

