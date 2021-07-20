<template>
  <div
    class="flex flex-row justify-between align-middle w-full py-6 px-4"
    :class="classes"
  >
    <div class="flex flex-row">
      <img class="mx-1" :src="SearchIconSrc" alt="search" />
      <input
        class="mx-1 outline-none"
        :class="classes"
        type="text"
        name="search"
        placeholder="Search..."
      />
    </div>
    <div class="flex flex-row">
      <img class="mx-6" :src="NotificationsIconSrc" alt="notifications" />
      <img class="mx-6" :src="SettingsIconSrc" alt="settings" />
      <toggle class="ml-6 mr-3" :theme="theme" />
    </div>
  </div>
</template>

<script>
import { reactive, computed } from "vue";
import Toggle from "../../atoms/toggle/Toggle.vue";

export default {
  name: "toolbar",

  components: {
    Toggle,
  },

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

    SearchIconSrc() {
      return `/${this.iconThemeFolder}/Large/ico-search.svg`;
    },

    NotificationsIconSrc() {
      return `/${this.iconThemeFolder}/Large/ico-notifications.svg`;
    },

    SettingsIconSrc() {
      return `/${this.iconThemeFolder}/Large/ico-settings.svg`;
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