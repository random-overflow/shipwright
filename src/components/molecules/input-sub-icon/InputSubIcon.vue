<template>
  <div class="block">
    <ship-input :value="value" :state="state" :theme="theme" :name="name" />
    <div class="flex flex-row">
      <img :src="iconSrc" :alt="iconSrc" />
      <p class="text-lg pt-1" :class="classes">
        {{ subtitle }}
      </p>
    </div>
  </div>
</template>

<script>
import { reactive, computed } from "vue";
import ShipInput from "../../atoms/input/Input.vue";

export default {
  name: "input-sub-icon",
  components: {
    ShipInput,
  },
  props: {
    value: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      default: "ico-close",
    },
    subtitle: {
      type: String,
      default: "Subtitle",
    },
    state: {
      type: String,
      default: "active",
    },
    theme: {
      type: String,
    },
    name: {
      type: String,
    },
  },

  computed: {
    iconSrc() {
      let theme = this.theme[0].toUpperCase() + this.theme.slice(1);
      return `/${theme}/Small/${this.icon}.svg`;
    },
  },

  setup(props) {
    props = reactive(props);
    return {
      classes: computed(() => ({
        [`
          text-high-contrast-${props.theme}
        `]: props.state == "active" || props.state == "deactivate",
        [`
          text-${props.state}
        `]: props.state != "active" && props.state != "deactivate",
        // [`bg-accent-01-${props.state}`]: true,
      })),
    };
  },
};
</script>