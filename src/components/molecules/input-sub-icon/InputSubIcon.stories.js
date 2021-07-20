import InputSubIcon from './InputSubIcon.vue';

export default {
    title: 'Molecules/InputSubIcon',
    component: InputSubIcon,
    argTypes: {
        state: { control: { type: 'radio', options: ['success', 'danger', 'deactivate', 'active'] } },
        onClick: {},
    },
};

const Template = (args) => ({
    // Components used in your story `template` are defined in the `components` object
    components: { InputSubIcon },
    // The story's `args` need to be mapped into the template through the `setup()` method
    setup() {
        return { args };
    },
    // And then the `args` are bound to your component with `v-bind="args"`
    template: '<input-sub-icon v-bind="args" />',
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

