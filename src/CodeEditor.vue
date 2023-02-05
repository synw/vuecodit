<template>
  <div class="relative" :style="`height:${height}`">
    <textarea :id="id"
      class="absolute top-0 left-0 z-30 w-full px-2 py-3 leading-6 text-transparent bg-transparent resize-none code-block"
      ref="textarea" v-model="input" spellcheck="false">
      </textarea>
    <code class="absolute top-0 left-0 z-20 code-preview " v-html="parsedCode"></code>
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
  // console.log("RESIZE", codeNum.value);
  const style = window.getComputedStyle(textarea.value);
  height.value = style.height;
  // console.log("->", height.value)
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
</style>
