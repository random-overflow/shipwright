<template>
  <div class="flex flex-col p-8" :class="classes">
    <div class="flex flex-row justify-between">
      <div class="text-5xl">Inbox</div>
      <ship-button label="Compose" />
    </div>
    <div class="px-4 pt-12">
      <card-message
        v-for="i in 8"
        :key="i"
        username="Linda & Jeremiah J."
        message="The quick brown fox jumps over the lazy dog"
        time="12:00 AM"
        :secondary="i % 2 == 1"
        :theme="theme"
        class="my-4"
      />
    </div>
  </div>
</template>

<script>
import { reactive, computed } from "vue";
import ShipButton from "../../atoms/button/Button.vue";
import CardMessage from "../card-message/CardMessage.vue";

export default {
  name: "inbox",

  components: {
    ShipButton,
    CardMessage,
  },

  props: {
    theme: {
      type: String,
    },
    secondary: {
      type: Boolean,
    },
    username: {
      type: String,
    },
    message: {
      type: String,
    },
    time: {
      type: String,
    },
    read: {
      type: Boolean,
    },
  },

  setup(props) {
    props = reactive(props);
    return {
      classes: computed(() => ({
        [`
          bg-01-white text-high-contrast-light
        `]: props.theme == "light",
        [`
          bg-02-dark text-high-contrast-dark
        `]: props.theme == "dark",
        // [`bg-accent-01-${props.state}`]: true,
      })),
    };
  },
};
</script>