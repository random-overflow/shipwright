import ButtonIcon from './ButtonIcon.vue';

export default {
  title: 'Atoms/ButtonIcon',
  component: ButtonIcon,
  argTypes: {
    state: { control: { type: 'radio', options: ['active', 'inactive', 'selected', 'hover'] } },
    onClick: {},
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { ButtonIcon },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<button-icon v-bind="args" />',
});

export const Primary = Template.bind({});
Primary.args = {
  label: 'Button',
  type: "primary",
  state: "active",
  icon: "ico-email"
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
  type: 'secondary',
  state: "active",
  icon: "ico-email"
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  label: 'Button',
  type: 'tertiary',
  state: "active",
  icon: "ico-email"
};

