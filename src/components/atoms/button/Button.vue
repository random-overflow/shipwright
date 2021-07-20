<template>
  <button
    type="button"
    class="px-8 py-2 rounded-md"
    :class="classes"
    @click="onClick"
  >
    {{ label }}
  </button>
</template>

<script>
import { reactive, computed } from "vue";

export default {
  name: "ship-button",

  props: {
    label: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      default: "active",
    },
    type: {
      type: String,
      default: "primary",
    },
  },

  emits: ["click"],

  setup(props, { emit }) {
    props = reactive(props);
    return {
      classes: computed(() => ({
        [`bg-accent-01-${props.state} hover:bg-accent-01-hover text-white`]:
          props.type == "primary",
        [`border border-accent-01-${props.state} hover:border-accent-01-hover text-accent-01-${props.state} hover:text-accent-01-hover`]:
          props.type == "secondary",
        [`text-accent-01-${props.state} hover:text-accent-01-hover hover:bg-accent-01-tertiary`]:
          props.type == "tertiary",
        // [`bg-accent-01-${props.state}`]: true,
      })),
      onClick() {
        emit("click");
      },
    };
  },
};
</script>
