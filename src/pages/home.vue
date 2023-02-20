<template>
  <h1>首页</h1>
  <!-- <User :hero="heros[0]" /> -->
  <CardList />
  <!-- <User :hero="heros[1]" /> -->
</template>

<script setup>
import User from '../components/User.vue';
import CardList from '../components/Card/CardList.vue';
const heros = [
  {
    id: 1,
    name: '孙尚香',
    cloth: 0,
    voice: 0,
    sex: 1,
  },
  {
    id: 2,
    name: '孙权',
    cloth: 0,
    voice: 0,
    sex: 0,
  },
];
</script>

<style scoped>
img {
  width: 500px;
}
</style>
