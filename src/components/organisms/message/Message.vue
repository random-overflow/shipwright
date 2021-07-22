<template>
  <div class="flex flex-col min-w-0 max-w-max gap-4" :class="classes">
    <div class="flex flex-row items-center gap-4">
      <template v-if="isFirst">
        <div class="flex flex-row gap-4 items-center pt-4 flex-1">
          <avatar size="md-1" type="circle" />
          <div class="flex flex-row justify-between flex-1 w-full">
            <div class="text-2xl font-black">
              {{ username }}
            </div>
            <div class="text-xl">
              {{ time }}
            </div>
          </div>
        </div>
      </template>
    </div>
    <div class="rounded-2xl max-w-max" :class="cloud">
      <div class="p-8">
        {{ message }}
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, computed } from "vue";
import Avatar from "../../atoms/avatar/Avatar.vue";

export default {
  name: "message",

  components: {
    Avatar,
  },

  props: {
    theme: {
      type: String,
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
    isSender: {
      type: Boolean,
    },
    isFirst: {
      type: Boolean,
    },
  },

  setup(props) {
    props = reactive(props);
    return {
      cloud: computed(() => ({
        [`bg-02-${props.theme} text-high-contrast-${props.theme}`]:
          props.isSender,
        [`bg-blue-500 text-white`]: !props.isSender,
      })),
      classes: computed(() => ({
        [`
          text-high-contrast-${props.theme}
        `]: true,
        // [`bg-accent-01-${props.state}`]: true,
      })),
    };
  },
};
</script>