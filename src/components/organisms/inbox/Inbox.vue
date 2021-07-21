<template>
  <div class="flex flex-col p-8 min-h-0" :class="classes">
    <div class="flex flex-row justify-between pb-10">
      <div class="text-5xl">Inbox</div>
      <button-icon label="Compose" icon="ico-edit" />
    </div>
    <div class="p-4 overflow-y-auto min-h-0">
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
import ButtonIcon from "../../atoms/button-icon/ButtonIcon.vue";

export default {
  name: "inbox",

  components: {
    ShipButton,
    CardMessage,
    ButtonIcon,
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
          bg-02-${props.theme} text-high-contrast-${props.theme}
        `]: true,
        // [`bg-accent-01-${props.state}`]: true,
      })),
    };
  },
};
</script>