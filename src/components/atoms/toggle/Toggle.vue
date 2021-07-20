<template>
  <label class="cursor-pointer" for="check">
    <input class="hidden" type="checkbox" id="check" :checked="value" />
    <div
      class="toggle relative w-14 h-8 border-2 border-gray-400 rounded-full"
      :class="classes"
    >
      <div
        class="
          circle
          absolute
          top-1
          left-auto
          right-1
          w-4
          h-4
          bg-gray-400
          rounded-full
          transition
          transform
        "
      ></div>
    </div>
  </label>
</template>

<style scoped>
input:checked ~ .toggle > .circle {
  @apply left-1 top-1 bg-blue-500;
}
</style>

<script>
import { reactive, computed } from "vue";

export default {
  name: "toggle",

  props: {
    value: {
      type: Boolean,
      required: true,
    },
    theme: {
      type: String,
    },
  },
  setup(props) {
    props = reactive(props);
    return {
      classes: computed(() => ({
        [`
          bg-white
        `]: props.theme == "light",
        [`
          bg-02-dark
        `]: props.theme == "dark",
        // [`bg-accent-01-${props.state}`]: true,
      })),
    };
  },
};
</script>