<template>
  <button
    type="button"
    class="flex flex-row px-8 py-2 rounded-md gap-4"
    :class="classes"
    @click="onClick"
  >
    <img :src="iconSrc" :alt="iconSrc" />
    {{ label }}
  </button>
</template>

<script>
import { reactive, computed } from "vue";

export default {
  name: "button-icon",

  props: {
    label: {
      type: String,
      required: true,
    },
    icon: {
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

  computed: {
    iconThemeFolder() {
      return "Dark";
    },

    iconSrc() {
      return `/${this.iconThemeFolder}/Large/${this.icon}.svg`;
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
        ['rounded-full py-8']: !props.label,
        // [`bg-accent-01-${props.state}`]: true,
      })),
      onClick() {
        emit("click");
      },
    };
  },
};
</script>
