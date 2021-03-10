<template>
  <div class="p-5">
    <h3 class="text-2xl text-contrast">Top Upcoming</h3>
    <div class="flex flex-wrap">
      <AnimeImage
        v-for="anime in state.anime"
        :key="anime.mal_id"
        :animeData="anime"
      >
      </AnimeImage>
    </div>
  </div>
</template>

<script>
import { onMounted, reactive } from "vue";
import { getAPI } from "../axios_api";
import AnimeImage from "./AnimeImage.vue";

export default {
  name: "Hero",
  setup() {
    const state = reactive({
      anime: [],
      genre: [],
    });
    const getAdvice = async () => {
      const resp = await getAPI.get("/top/anime/1/upcoming");
      for (let i = 0; i <= 7; i++) {
        state.anime.push(resp.data.top[i]);
      }
    };

    const getGenre = async () => {
      for (let i = 1; i <= 7; i++) {
        const resp = await getAPI.get(`/genre/anime/${i}/`);
        console.log(resp.data.mal_url.name);
      }
    };

    onMounted(() => {
      getAdvice();
    });
    //console.log(state.genre);
    return {
      state,
      AnimeImage,
    };
  },
};
</script>
