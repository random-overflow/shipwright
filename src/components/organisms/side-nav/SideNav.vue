<template>
  <div
    class="flex flex-col justify-between w-full py-6 px-4 min-h-0 md:max-h-full"
    :class="classes"
  >
    <div class="flex flex-col">
      <div class="flex flex-row md:pt-4 md:pb-8">
        <logo class="mx-4" name="ship-logo" size="md" />
        <div class="uppercase">Menu</div>
      </div>
      <div v-if="!isMobile || (isMobile && open)" class="flex flex-col">
        <div
          v-for="i in 5"
          :key="i"
          class="flex flex-row justify-center px-2 py-6 capitalize"
          :class="classes"
        >
          {{ i }}
        </div>
      </div>
    </div>
    <div
    v-if="!isMobile || (isMobile && open)"
      class="flex flex-row justify-center items-center border-t-2 py-10 gap-4"
    >
      <avatar size="md" type="circle" />
      <div class="capitalize">User</div>
    </div>
  </div>
</template>

<script>
import { reactive, computed } from "vue";
import Logo from "../../atoms/logo/Logo.vue";
import Avatar from "../../atoms/avatar/Avatar.vue";

export default {
  name: "side-nav",

  components: {
    Logo,
    Avatar,
  },

  props: {
    value: {
      type: Boolean,
      required: true,
    },
    theme: {
      type: String,
    },
    isMobile: {
      type: Boolean,
    },
    open: {
      type: Boolean,
    }
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
          bg-01-${props.theme} text-high-contrast-${props.theme}
        `]: true,
        // [`bg-accent-01-${props.state}`]: true,
      })),
    };
  },
};
</script>