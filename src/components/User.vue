<script setup>
import { ref, computed, defineProps } from 'vue';
let props = defineProps({
  hero: {
    id: Number,
    name: String,
    cloth: Number,
    voice: Number,
    sex: Number,
  },
});
console.log(props.hero);
let imgUrl = 'http://static.runoob.com/images/demo/demo2.jpg';
if (props.hero.cloth) {
  imgUrl = 'http://static.runoob.com/images/demo/demo1.jpg';
}
const borderColors = ['lightblue', 'lightpink'];
let borderColor = borderColors[0];
if (props.hero.sex) {
  borderColor = borderColors[props.hero.sex];
}

let isDragOver = false;
function handleDragOver() {
  isDragOver = true;
}
function handleDragEnd() {

}
</script>

<template>
  <div class="hero" :class="{'dragOver': isDragOver}" @dragover="handleDragOver" @drag>
    {{ hero.name }}
    <img :src="imgUrl" />
  </div>
</template>

<style lang="less" scope>
.hero {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: v-bind('borderColor');
  img {
    width: 50px;
    height: 80px;
  }
}

.dragOver {
  border: 4px solid lightgreen;
}

</style>
