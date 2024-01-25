<template>
  <div>
    <input type="text" v-model="todoInput" />
    <button type="button" @click="addTodo">추가</button>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup(props, { emit }) {
    const todoInput = ref("");

    const addTodo = () => {
      const todo = todoInput.value;
      emit("addTodo", todo);
      clearInput();
    };

    const clearInput = () => (todoInput.value = "");

    return {
      todoInput,
      addTodo,
    };
  },
};
</script>

<style lang="scss" scoped></style>
