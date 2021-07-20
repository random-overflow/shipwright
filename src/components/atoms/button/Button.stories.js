import ShipButton from './Button.vue';

export default {
  title: 'Atoms/Button',
  component: ShipButton,
  argTypes: {
    state: { control: { type: 'radio', options: ['active', 'inactive', 'selected', 'hover'] } },
    onClick: {},
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { ShipButton },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<ship-button v-bind="args" />',
});

export const Primary = Template.bind({});
Primary.args = {
  label: 'Button',
  type: "primary",
  state: "active",
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
  type: 'secondary',
  state: "active",

};

export const Tertiary = Template.bind({});
Tertiary.args = {
  label: 'Button',
  type: 'tertiary',
  state: "active",
};

