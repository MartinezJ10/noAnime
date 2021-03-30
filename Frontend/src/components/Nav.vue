<template>
  <div class="text-text bg-grayDark flex-shrink-0">
    <div
      class="flex items-center justify-around md:justify-center md:py-1 py-4"
    >
      <router-link class="text-2xl text-text font-semibold" :to="{ path: '/' }">
        <span class="text-contrast"> ></span>noAnime</router-link
      >
      <div class="block sm:hidden">
        <button
          @click="toggle"
          class="flex items-center px-3 py-2 border rounded text-teal-lighter border-teal-light hover:text-white hover:border-white"
        >
          <svg
            class="fill-current h-5 w-5"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
    </div>
    <div
      :class="state.open ? 'block' : 'hidden'"
      class="sm:flex sm:items-center sm:w-auto grid grid-cols-2 justify-center p-2"
    >
      <router-link
        :to="{ path: '/' }"
        class="flex p-4 cursor-pointer items-center hover:text-contrast hover:bg-grayBg duration-300 rounded-md"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          class="w-6 mr-3"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.4"
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          />
        </svg>

        Home</router-link
      >
      <router-link
        :to="{ path: '/browse' }"
        class="p-4 flex cursor-pointer items-center hover:text-contrast hover:bg-grayBg duration-300 rounded-md"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          class="w-6 mr-3"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        Browse</router-link
      >
      <router-link
        to="#"
        class="p-4 flex cursor-pointer items-center hover:text-red hover:bg-grayBg duration-300 rounded-md"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          class="w-6 mr-3"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
        Favourites
      </router-link>
      <router-link
        to="#"
        class="p-4 flex cursor-pointer items-center hover:text-lightBlue hover:bg-grayBg duration-300 rounded-md"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          class="w-6 mr-3"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
          />
        </svg>
        Watching
      </router-link>
      <router-link
        to="#"
        class="p-4 flex cursor-pointer items-center hover:text-lighGreen hover:bg-grayBg duration-300 rounded-md"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          class="w-6 mr-3"
        >
          <path
            fill-rule="evenodd"
            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
            clip-rule="evenodd"
          />
        </svg>
        Finished</router-link
      >
    </div>
  </div>
</template>

<script>
import { reactive } from "vue";
export default {
  name: "Nav",
  setup() {
    const state = reactive({
      open: false,
    });
    function toggle() {
      state.open = !state.open;
    }
    return {
      toggle,
      state,
    };
  },
};
</script>
