<template>
  <h1>TODO {{ newTitle }}</h1>
</template>

<script>
import { computed } from "vue";

export default {
  props: ["title"],
  setup(props) {
    const newTitle = computed(() => {
      return props.title + "!!";
    });

    return {
      newTitle,
    };
  },
};
</script>

<style lang="scss" scoped></style>
