<template>
  <div class="flex flex-col">
    <form @submit.prevent="search" class="p-4 m-auto">
      <input
        placeholder="Search for an anime!"
        type="text"
        class="p-4 rounded-md outline-none bg-grayBg"
        v-model="state.query"
        required
      />
    </form>
    <div class="flex flex-wrap" v-if="state.anime.length > 0">
      <AnimeImage
        v-for="anime in state.anime"
        :key="anime.mal_id"
        :animeData="anime"
      >
      </AnimeImage>
    </div>
    <div v-else>There is no results here, Sorry :(</div>
  </div>
</template>

<script>
import { reactive } from "vue";
import { getAPI } from "../axios_api";
import AnimeImage from "./AnimeImage.vue";

export default {
  name: "Search",
  setup() {
    const state = reactive({
      query: "",
      anime: [],
    });

    const search = async () => {
      const resp = await getAPI.get(
        `https://api.jikan.moe/v3/search/anime?q=${state.query}&page=1`
      );
      state.anime = resp.data.results;
      state.query = "";
    };

    return {
      state,
      search,
      AnimeImage,
    };
  },
};
</script>
