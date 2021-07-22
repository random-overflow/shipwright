<template>
  <div class="grid grid-cols-12 auto-rows-min h-screen w-screen" :class="classes">
    <div class="flex flex-row col-span-12 md:col-span-2 ">
      <side-nav :theme="theme" :isMobile="false" class="h-screen hidden md:flex" />
      <side-nav :theme="theme" :isMobile="true" class="md:hidden" />
      <toolbar class="md:hidden" :theme="theme" />
    </div>
    <div class="hidden md:flex flex-col col-span-10">
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
    <div class="col-span-12 md:hidden">
      <inbox :theme="theme" class="height-right" />
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