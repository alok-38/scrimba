<script setup>
import { ref } from "vue";
import viteLogo from "../assets/vite.svg";
import heroImg from "../assets/hero.png";
import vueLogo from "../assets/vue.svg";

const count = ref(0);
</script>

<template>
  <div class="mt-5 flex flex-col items-center justify-center">
    <h1 class="text-4xl font-bold text-gray-800">Hello World</h1>
    <p class="text-xl text-gray-600 mb-4">
      Count: {{count}}
    </p>
    <button @click="count++"
    class="px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition cursor-pointer
    active:scale-95 active:bg-blue-600">
    Increment
    </button>
  </div>
</template>
