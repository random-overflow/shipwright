<template>
  <div
    class="flex flex-row justify-between align-middle w-full py-6 px-4"
    :class="classes"
  >
    <div class="flex flex-row">
      <input
        class="mx-1 outline-none"
        :class="classes"
        type="text"
        name="search"
        placeholder="Type a message..."
      />
    </div>
    <div class="flex flex-row">
      <img class="mx-6" :src="plusIconSrc" alt="add" />
    </div>
  </div>
</template>

<script>
import { reactive, computed } from "vue";

export default {
  name: "message-composer",

  props: {
    value: {
      type: Boolean,
      required: true,
    },
    theme: {
      type: String,
    },
  },

  computed: {
    iconThemeFolder() {
      return this.theme == "light" ? "Light" : "Dark";
    },

    plusIconSrc() {
      return `/${this.iconThemeFolder}/Large/ico-plus.svg`;
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
          bg-01-dark
        `]: props.theme == "dark",
        // [`bg-accent-01-${props.state}`]: true,
      })),
    };
  },
};
</script>