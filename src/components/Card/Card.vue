<template>
  <div class="card" draggable="true" @dragstart="handleDragStart">
    <div class="cardHead">
      <div class="identifier">
        <div class="number">{{ card.number }}</div>
        <div class="flower">{{ flowerImg }}</div>
      </div>
      <div class="cardName">
        <span class="nameDecorator"> {{ cardInfo.name }} </span>
      </div>
    </div>
    <div class="cardBody">
      <div class="cardImg">
        <img :src="cardInfo.url" :alt="cardInfo.name" draggable="false"/>
      </div>
      <div class="cardDesc">
        <div>{{ cardInfo.desc }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, defineProps } from 'vue';
import { getCardById } from '../../const/card';
import { flowerImgs, CardData } from '../../const/default';
const props = defineProps({
  card: {
    number: Number,
    flower: Number,
    id: Number,
    left: String,
    index: Number,
  },
});
const flowerImg = flowerImgs[props.card.flower];
const cardInfo = getCardById(props.card.id);
console.log(props.card);
const cardLeft = `${props.card.left || 0}px`;
const cardWidth = `${CardData.width}px`;
const cardHeight = `${CardData.height}px`;

function handleDragStart(e) {
  e.dataTransfer.setData("text/plain", cardInfo);
}
</script>

<style lang="less" scope>
.card {
  border: 5px solid black;
  width: v-bind(cardWidth);
  height: v-bind(cardHeight);
  position: absolute;
  left: v-bind(cardLeft);
  background-color: beige;
}
.cardHead {
  display: flex;
  align-items: center;
  line-height: 14px;
  margin-top: 5px;
  .identifier {
    display: flex;
    flex-direction: column;
    margin-left: 5px;
    .flower {
      margin-top: 3px;
    }
  }
  .cardName {
    flex: 1;
    .nameDecorator {
      width: 30px;
      height: 20px;
      background-color: wheat;
      padding: 5px 10px;
      border-radius: 2px;
    }
  }
}
.cardBody {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 8px;
  .cardImg {
    display: flex;
    justify-content: center;
    img {
      width: 80px;
      height: 80px;
    }
  }
  .cardDesc {
    flex: 1;
  }
}
</style>
