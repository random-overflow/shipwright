<template>
  <div
    class="flex flex-row w-full py-6 px-4 rounded-2xl hover:shadow-lg"
    :class="classes"
  >
    <div class="flex flex-col flex-1">
      <div class="rounded-full h-4 w-4 ml-auto" :class="notify"></div>
      <div class="flex flex-row items-center gap-6">
        <avatar type="circle" />
        <div class="flex flex-col flex-1">
          <div class="flex flex-row justify-between">
            <div class="text-3xl font-black">{{ username }}</div>
            <div class="text-xl font-normal">{{ time }}</div>
          </div>
          <div class="text-xl font-black">{{ message }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, computed } from "vue";
import Avatar from "../../atoms/avatar/Avatar.vue";

export default {
  name: "card-message",

  components: {
    Avatar,
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