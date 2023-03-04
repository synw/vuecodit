<template>
  <div class="code-wrapper" :style="`height:${height}`">
    <textarea :id="id" class="code-block" ref="textarea" v-model="input" spellcheck="false"></textarea>
    <code class="code-preview " v-html="parsedCode"></code>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watchEffect, nextTick } from "vue";
import { useTextareaAutosize } from '@vueuse/core';

const props = defineProps({
  hljs: {
    type: Object,
    required: true,
  },
  code: {
    type: String,
    required: true,
  },
  lang: {
    type: String,
    required: true,
  },
  id: {
    type: String
  }
})
const emit = defineEmits(["edit"]);
const id = props.id ?? `${+ new Date()}`;
const height = ref('0');
const codeNum = ref(0);
const { textarea, input } = useTextareaAutosize({
  onResize: getSize,
  watch: codeNum
});

function getSize() {
  const style = window.getComputedStyle(textarea.value);
  // @ts-ignore
  const lh = style["line-height"].replace("px", "");
  const h = parseInt(style.height.replace("px", "")) - parseInt(lh);
  height.value = `${h}px`;
}

function sig() {
  emit("edit", input.value);
}

const parsedCode = computed(() => {
  //console.log("Parsed code change", width.value, height.value);
  sig()
  return props.hljs.highlight(input.value, { language: props.lang }).value;
})

watchEffect(() => {
  input.value = props.code;
  nextTick(() => {
    ++codeNum.value
  })
});

</script>

<style lang="sass" scoped>
.code-block, .code-preview
  padding: 0px 20px 20px 0px
  font-family: Consolas, Monaco, monospace
  line-height: 1.5
  font-size: 16px
  white-space: pre
  word-wrap: normal  
.code-block
  overflow-y: hidden
  caret-color: rgba(127, 127, 127)
  @apply border-transparent focus:border-transparent focus:ring-0
  @apply absolute top-0 left-0 z-30 w-full leading-6 text-transparent bg-transparent resize-none
.code-preview
  @apply absolute top-0 left-0 z-20 w-full
.code-wrapper
  @apply relative
</style>
