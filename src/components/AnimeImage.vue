<template>
  <figure class="relative max-w-xs p-3 cursor-pointer">
    <img class="img rounded-md" :src="animeData.image_url" />
    <figcaption class="absolute text-lg -mt-16 text-white px-4">
      <div>
        <h1>{{ state.trimedTitle }}</h1>
      </div>
    </figcaption>
  </figure>
</template>

<script>
import { onMounted, reactive } from "vue";
export default {
  name: "AnimeImage",
  props: {
    animeData: Object,
  },
  setup(props) {
    const state = reactive({
      trimedTitle: "",
    });
    const animeTitle = props.animeData.title;
    function trimTitle(title) {
      if (title.length >= 30) {
        state.trimedTitle = title.slice(0, 30) + "...";
      }
    }
    onMounted(() => {
      trimTitle(animeTitle);
    });
    return {
      state,
    };
  },
};
</script>
