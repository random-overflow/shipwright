<template>
  <div class="grid grid-cols-12 h-screen w-screen" :class="classes">
    <side-nav :theme="theme" class="col-span-2 h-screen" />
    <div class="flex flex-col col-span-10">
      <toolbar :theme="theme" />
      <div class="flex flex-row flex-1">
        <inbox :theme="theme" class="height-right" />
        <message-thread
          class="height-right"
          :theme="theme"
          :time="time"
          :sender="sender"
          :receiver="receiver"
          :message="message"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.height-right {
  height: calc(100vh - 5rem);
}
</style>

<script>
import { reactive, computed } from "vue";
import SideNav from "../../organisms/side-nav/SideNav.vue";
import Inbox from "../../organisms/inbox/Inbox.vue";
import Toolbar from "../../organisms/nav/Toolbar.vue";
import MessageThread from "../../organisms/message-thread/MessageThread.vue";

export default {
  name: "desktop",

  components: {
    SideNav,
    Inbox,
    Toolbar,
    MessageThread,
  },

  props: {
    value: {
      type: Boolean,
      required: true,
    },
    theme: {
      type: String,
    },
    sender: {
      type: String,
    },
    receiver: {
      type: String,
    },
    message: {
      type: String,
    },
    time: {
      type: String,
    },
  },

  setup(props) {
    props = reactive(props);
    return {
      classes: computed(() => ({
        [`
          bg-white text-high-contrast-light
        `]: props.theme == "light",
        [`
          bg-01-dark text-high-contrast-dark
        `]: props.theme == "dark",
        // [`bg-accent-01-${props.state}`]: true,
      })),
    };
  },
};
</script>