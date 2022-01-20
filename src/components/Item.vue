<template>
  <div
    class="px-3 py-2 border border-dashed border-gray-400 rounded-md transition-all duration-300 ease-in-out flex justify-between items-center space-x-2"
    :class="{
      'bg-yellow-200': !done,
      'bg-green-300': done,
    }"
  >
    <div class="w-full flex items-start justify-center flex-col space-y-2">
      <input
        v-model="title"
        class="text-base placeholder-gray-500 font-bold text-gray-600 bg-transparent outline-none w-full"
        placeholder="Write your title here"
      />
      <textarea
        v-model="description"
        class="text-sm placeholder-gray-500 font-normal text-gray-700 bg-transparent outline-none w-full"
        placeholder="Write your description here"
        contenteditable="true"
      ></textarea>
    </div>
    <div
      class="flex items-center justify-center w-32 space-x-1.5 h-full text-gray-500 overflow-hidden group-hover:w-0"
    >
      <span
        class="cursor-pointer transition-all duration-300 ease-in-out hover:text-white rounded-md p-2 border border-dashed border-gray-400"
        :class="{ 'hover:bg-green-600': !done, 'hover:bg-yellow-500': done }"
        @click="toggleDone"
      >
        <svg
          v-if="!done"
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 sm:h-6 w-5 sm:w-6 transition-all duration-300 ease-in-out"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M5 13l4 4L19 7"
          />
        </svg>
        <svg
          v-if="done"
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 sm:h-6 w-5 sm:w-6"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
            clip-rule="evenodd"
          />
        </svg>
      </span>
      <span
        class="cursor-pointer transition-all duration-300 ease-in-out hover:bg-red-600 hover:text-white rounded-md p-2 border border-dashed border-gray-400"
        @click="deleteItem"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 sm:h-6 w-5 sm:w-6 transition-all duration-300 ease-in-out"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
          />
        </svg>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Item",
  props: {
    itemContent: {
      type: Object,
      default: () => ({
        title: "",
        description: "",
        done: false,
      }),
    },
    itemIndex: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      title: "",
      description: "",
      done: false,
    };
  },
  mounted() {
    this.title = this.itemContent.title;
    this.description = this.itemContent.description;
    this.done = this.itemContent.done;
  },
  methods: {
    updateItem({
      title = this.title,
      description = this.description,
      done = this.done,
    }) {
      this.$emit("contentChange", {
        index: this.itemIndex,
        title,
        description,
        done,
      });
    },
    deleteItem() {
      window.confirm(
        `Are you sure you want to remove the item called ${
          this.title ? `'${this.title}'` : "Nameless"
        }`
      ) && this.$emit("deleteItem", this.itemIndex);
    },
    toggleDone() {
      this.done = !this.done;
      this.updateItem({
        done: this.done,
      });
    },
  },
  watch: {
    itemContent: {
      handler(newValue) {
        this.title = newValue.title;
        this.description = newValue.description;
        this.done = newValue.done;
      },
      deep: true,
    },
    title(value) {
      this.updateItem({ title: value });
    },
    description(value) {
      this.updateItem({ description: value });
    },
    done(value) {
      this.updateItem({ done: value });
    },
  },
};
</script>
