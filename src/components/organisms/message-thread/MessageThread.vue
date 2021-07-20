<template>
  <div class="flex flex-col w-full h-full" :class="classes">
    <div
      class="
        flex flex-row
        justify-between
        items-center
        border-b-2 border-gray-500
        p-8
      "
    >
      <h1 class="capitalize">Welcome to the team!</h1>
      <div class="flex flex-row gap-4">
        <div class="flex flex-row">
          <avatar
            v-for="i in 3"
            :key="i"
            size="md"
            type="circle"
            class="-ml-4 hover:m-4"
          />
        </div>
        <img :src="dotMenuSrc" alt="menu" />
      </div>
    </div>
    <div class="flex flex-1 flex-col-reverse overflow-auto mb-12 h-3/4">
      <div class="mt-auto w-1/3">
        <message
          :message="message"
          :username="receiver"
          time="12:00 AM"
          :isFirst="true"
          :theme="theme"
        />
        <message
          v-for="i in 3"
          :key="i"
          :message="message"
          :username="receiver"
          time="12:00 AM"
          :isFirst="false"
          :theme="theme"
        />
      </div>
      <div class="mt-auto ml-auto w-1/3">
        <message
          :message="message"
          :username="sender"
          time="12:00 AM"
          :isSender="true"
          :isFirst="true"
          :theme="theme"
        />
        <message
          v-for="i in 3"
          :key="i"
          :message="message"
          :username="sender"
          :isSender="true"
          time="12:00 AM"
          :isFirst="false"
          :theme="theme"
        />
      </div>
    </div>
    <div class="sticky bottom-0 w-full">
      <message-composer :theme="theme" />
    </div>
  </div>
</template>

<script>
import { reactive, computed } from "vue";
import Message from "../message/Message.vue";
import Avatar from "../../atoms/avatar/Avatar.vue";
import MessageComposer from "../message-composer/MessageComposer.vue";

export default {
  name: "card-message",

  components: {
    Message,
    Avatar,
    MessageComposer,
  },

  props: {
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
    read: {
      type: Boolean,
    },
  },

  computed: {
    iconThemeFolder() {
      return this.theme == "light" ? "Light" : "Dark";
    },

    dotMenuSrc() {
      return `/${this.iconThemeFolder}/Large/ico-dot menu.svg`;
    },
  },

  setup(props) {
    props = reactive(props);
    return {
      notify: computed(() => ({
        [`bg-gray-500`]: props.read,
        [`bg-blue-700`]: !props.read,
      })),
      classes: computed(() => ({
        [`
          bg-01-white text-high-contrast-light
        `]: props.theme == "light",
        [`
          bg-01-dark text-high-contrast-dark
        `]: props.theme == "dark",
        [`
					bg-02-${props.theme}
				`]: props.secondary,
        // [`bg-accent-01-${props.state}`]: true,
      })),
    };
  },
};
</script>