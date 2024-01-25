<template>
  <TodoHeader :title="title" />
  <TodoInput @addTodo="addTodo" />
  <TodoList :items="todoItems" />
</template>

<script>
import { ref, onBeforeMount } from "vue";
import TodoHeader from "./components/TodoHeader.vue";
import TodoInput from "./components/TodoInput.vue";
import TodoList from "./components/TodoList.vue";

export default {
  components: {
    TodoHeader,
    TodoInput,
    TodoList,
  },
  setup() {
    // data
    const todoItems = ref([]);
    const title = ref("App");

    // methods
    // 전체 조회
    function fetchTodos() {
      const result = [];

      for (let i = 0; i < localStorage.length; i++) {
        const todoItem = localStorage.key(i);
        result.push(todoItem);
      }

      todoItems.value = result;
    }

    // 행 추가 조회
    function addTodo(todo) {
      todoItems.value.push(todo);
      localStorage.setItem(todo, todo);
    }

    // 첫 실행시 전체 조회 한 번
    onBeforeMount(() => {
      fetchTodos();
    });

    return {
      title,
      todoItems,
      fetchTodos,
      addTodo,
    };
  },
};
</script>

<style lang="scss" scoped></style>
