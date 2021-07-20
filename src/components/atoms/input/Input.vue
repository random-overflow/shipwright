<template>
  <input
    type="text"
    :name="name"
    class="outline-none rounded-xl h-14 p-4 border-2"
    :value="value"
    :class="classes"
    :disabled="state == 'deactivate'"
  />
</template>

<style scoped>
.caret-light {
  caret-color: #0069b4;
}
.caret-dark {
  caret-color: #129aa6;
}
</style>

<script>
import { reactive, computed } from "vue";

export default {
  name: "ship-input",

  props: {
    value: {
      type: String,
      required: true,
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
        [`caret-${props.theme}
          outline-none
          bg-01-${props.theme}
          border-gray-${props.theme == "light" ? "200" : "500"}
          focus:border-accent-${props.theme == "light" ? "02" : "01"}-hover
          text-high-contrast-${props.theme}
        `]: props.state != "deactivate",
        [`border-${props.state} focus:border-${props.state}`]:
          props.state != "active" && props.state != "deactivate",

        // [`bg-accent-01-${props.state}`]: true,
      })),
    };
  },
};
</script>