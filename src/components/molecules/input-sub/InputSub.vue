<template>
  <div class="block">
    <ship-input :value="value" :state="state" :theme="theme" :name="name" />
    <p class="text-lg pt-1" :class="classes">{{ subtitle }}</p>
  </div>
</template>

<script>
import { reactive, computed } from "vue";
import ShipInput from "../../atoms/input/Input.vue";

export default {
  name: "input-sub",
  components: {
    ShipInput,
  },
  props: {
    value: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
    },
    state: {
      type: String,
      default: "active",
    },
    theme: {
      type: String,
    },
    name: {
      type: String,
    },
  },
  setup(props) {
    props = reactive(props);
    return {
      classes: computed(() => ({
        [`
          text-high-contrast-${props.theme}
        `]: props.state == "active" || props.state == "deactivate",
        [`
          text-${props.state}
        `]: props.state != "active" && props.state != "deactivate",
        // [`bg-accent-01-${props.state}`]: true,
      })),
    };
  },
};
</script>