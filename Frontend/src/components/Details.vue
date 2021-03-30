<template>
  <div class="flex flex-col p-3">
    <h1 class="text-center mt-2 text-xl md:text-2xl">{{ anime.title }}</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 p-3">
      <div class="flex items-center justify-center">
        <img class="object-cover rounded-md" :src="anime.image_url" alt="" />
      </div>
      <div class="p-4">
        <p>{{ anime.synopsis }}</p>
        <h3 class="font-bold text-contrast">{{ anime.premiered }}</h3>
        <div class="flex items-center p-4">
          <a
            href="#"
            class="p-4 bg-red rounded-md hover:bg-opacity-75 duration-300"
            >Add to Favourites</a
          >
          <a
            href="#"
            class="p-4 bg-lightBlue rounded-md mx-3 hover:bg-opacity-75 duration-300"
            >Add to Watching</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted, reactive, toRefs } from "vue";
import { useRoute } from "vue-router";
import { getAPI } from "../axios_api";

export default {
  name: "Details",
  setup() {
    const state = reactive({
      anime: [],
    });
    const route = useRoute();

    const id = computed(() => route.params.id);

    const animeDetail = async () => {
      const resp = await getAPI.get(`/anime/${id.value}`);
      state.anime = resp.data;
    };
    onMounted(() => {
      animeDetail();
    });

    return {
      ...toRefs(state),
    };
  },
};
</script>
