<template>
  <div>
    <h1>this is the cart page</h1>
    <!-- vue x basics -->
    <p>points : {{ points }}</p>
    <button class="button" @click="updatePoints(1)">add points</button>
    <button class="button" @click="updatePoints(-1)">remove points</button>
    <!---->
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    const points = computed(() => store.state.points);
    const updatePoints = (point) => {
      store.commit("updatePoints", point);
    };

    return {
      points,
      updatePoints,
    };
  },
};
</script>

<style>
</style>