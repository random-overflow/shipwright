<template>
  <img :src="source" alt="avatar" :class="classes" />
</template>

<script>
import { reactive, computed } from "vue";

export default {
  name: "logo",

  props: {
    name: {
      type: String,
      default: "Default",
    },
    type: {
      type: String,
    },
    size: {
      type: Number,
      default: "lg",
    },
  },

  computed: {
    source() {
      return "./Logos/" + this.name + ".png";
    },
  },

  setup(props) {
    props = reactive(props);

    let height = () => {
      switch (props.size) {
        case "lg":
          return 24;
        case "md":
          return 10;
        case "sm":
          return 6;
        default:
          return 24;
      }
    };

    let roundSize = () => {
      switch (props.type) {
        case "circle":
          return "full";
        case "rounded":
          return "3xl";
        case "square":
          return "none";
        default:
          return "none";
      }
    };

    return {
      classes: computed(() => ({
        [`max-h-${height()} rounded-${roundSize()}`]: true,
        // [`bg-accent-01-${props.state}`]: true,
      })),
    };
  },
};
</script>