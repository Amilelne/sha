<template>
  <div class="cardList">
    <template v-for="card in cards">
      <Card :card="card"/>
    </template>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import Card from './Card.vue';
import { CardData } from '@/const/default';

const width = window.innerWidth * 0.8;

const cards = [
  {
    number: 7,
    flower: 0,
    id: 'sha',
  },
  {
    number: 5,
    flower: 1,
    id: 'tao',
  },
  {
    number: 1,
    flower: 2,
    id: 'sha',
  },
];

let cardWidth = CardData.width;
if (cards.length) {
  cardWidth = Math.min(width / cards.length, CardData.width + 15);
}
cards.forEach((card, index) => {
  card['left'] = cardWidth * index;
});
</script>

<style scope>
.cardList {
  display: flex;
  position: relative;
}
</style>
