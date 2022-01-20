<template>
  <Header @add="newItem" />
  <main class="font-averia w-full px-4 sm:px-6 md:px-8 flex flex-col items-center max-h-screen-nav overflow-y-auto">
    <section
      v-show="todoItems.length >= 1"
      class="w-full max-w-screen-md space-y-4 space-y-reverse flex flex-col-reverse py-8"
    >
      <Item
        v-for="(item, index) in todoItems"
        :item-content="item"
        :key="index"
        :item-index="index"
        @contentChange="updateItem"
        @deleteItem="deleteItem"
      />
    </section>
    <section
        v-if="todoItems.length === 0"
        class="w-full text-gray-600 max-w-screen-md flex flex-col items-center justify-center text-center min-h-screen-nav"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-24 w-24 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
        <h1 class="font-bold text-xl">
          Hears! this is a bit empty
        </h1>
        <p class="font-light">Why don't we add something to give an air of life around here?</p>
      </section>
  </main>
</template>

<script>
import Header from "./components/Header";
import Item from "./components/Item";

export default {
  name: "App",
  components: {
    Header,
    Item,
  },
  data() {
    return {
      todoItems: [],
    };
  },
  mounted() {
    this.getLocalStorage();
  },
  methods: {
    getLocalStorage() {
      this.todoItems = JSON.parse(localStorage.getItem("todoItems")) || [{
          title: "",
          description: "",
          done: false,
        }];
    },
    newItem() {
      this.todoItems.push({
        title: "",
        description: "",
        done: false,
      });
      localStorage.setItem("todoItems", JSON.stringify(this.todoItems));
    },
    updateItem(value) {
      this.todoItems[value.index] = {
        title: value.title,
        description: value.description,
        done: value.done,
      };
      localStorage.setItem("todoItems", JSON.stringify(this.todoItems));
    },
    deleteItem(index) {
      this.todoItems.splice(index, 1);
      localStorage.setItem("todoItems", JSON.stringify(this.todoItems));
    },
  },
};
</script>
