<template>
  <nav
    ref="navbar"
    class="font-averia w-full px-4 sm:px-6 md:px-8 py-4 flex flex-col items-center border-b border-dashed border-gray-400"
  >
    <div
      class="w-full max-w-screen-md text-xl flex items-center justify-between text-pink-500 font-light"
    >
      <span class="whitespace-nowrap">
        <span v-if="userName !== ''">Hello</span>
        <input
          class="font-bold px-1 outline-none w-40"
          maxlength="16"
          :placeholder="'Write your name here'"
          v-model="userName"
        />
      </span>
      <span>
        <button
          class="bg-blue-400 whitespace-nowrap border border-dashed border-white hover:bg-blue-500 transition-all duration-300 text-base px-4 py-2.5 text-white rounded-md"
          @click="addItem"
        >
          + New
        </button>
      </span>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      userName: "",
    };
  },
  methods: {
    addItem() {
      this.$emit("add", this.userName);
    },
  },
  mounted() {
    this.userName = localStorage.getItem("userName") || "";
    document.documentElement.style.setProperty(
      "--screen-nav",
      `calc((100vh - 1px) - ${this.$refs.navbar.clientHeight}px)`
    );
  },
  watch: {
    modelValue(value) {
      localStorage.setItem("userName", value);
    },
    userName(value) {
      localStorage.setItem("userName", value);
    },
  },
};
</script>
