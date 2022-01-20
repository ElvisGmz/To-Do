<template>
  <Header @add="newItem" />
  <main class="w-full px-4 sm:px-6 md:px-8 py-8 flex flex-col items-center">
    <section
      class="w-full max-w-screen-md space-y-4 space-y-reverse flex flex-col-reverse"
    >
      <Item
        v-for="(item, index) in todoItems"
        :item-content="item"
        :key="index"
        :item-index="index"
        @contentChange="updateItem"
        @deleteItem="deleteItem"
      />
      <section
        v-if="todoItems.length === 0"
        class="w-full text-gray-700 max-w-screen-md flex flex-col items-center justify-center text-center py-16"
      >
        <h1>This is a list of things I need to do.</h1>
        <p>Add a new item by clicking the button</p>
      </section>
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
    this.todoItems = JSON.parse(localStorage.getItem("todoItems")) || [{
          title: "",
          description: "",
          done: false,
        }];
  },
  methods: {
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
