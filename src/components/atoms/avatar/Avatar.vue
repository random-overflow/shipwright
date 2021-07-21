<template>
  <img :src="source" alt="avatar" :class="classes" />
</template>

<script>
import { reactive, computed } from "vue";

export default {
  name: "avatar",

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
      return "./Avatars/" + this.name + ".jpg";
    },
  },

  setup(props) {
    props = reactive(props);

    let height = () => {
      switch (props.size) {
        case "lg":
          return "h-24";
        case "md-1":
          return "h-14";
        case "md":
          return "h-8";
        case "sm":
          return "h-6";
        default:
          return "h-24";
      }
    };

    let roundSize = () => {
      switch (props.type) {
        case "circle":
          return "rounded-full";
        case "rounded":
          return "rounded-3xl";
        case "square":
          return "rounded-none";
        default:
          return "rounded-none";
      }
    };

    return {
      classes: computed(() => ({
        [`${height()} ${roundSize()}`]: true,
        // [`bg-accent-01-${props.state}`]: true,
      })),
    };
  },
};
</script>