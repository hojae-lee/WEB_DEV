<template>
  <ul>
    <li v-for="(item, index) in items" :key="index">
      <span>{{ item }}</span>
      <button @click="removeTodo(item, index)">삭제</button>
    </li>
  </ul>
</template>

<script>
import { watch } from "vue";

export default {
  props: ["items"],
  setup(props, context) {
    function removeTodo(item, index) {
      context.emit("remove", item, index);
    }

    watch(props.items, (newValue, oldValue) => {
      console.log(newValue, oldValue);
    });

    return {
      removeTodo,
    };
  },
};
</script>

<style lang="scss" scoped></style>
