<template>
  <div class="relative" :style="`height:${height}`">
    <textarea :id="id"
      class="absolute top-0 left-0 z-30 w-full px-2 py-3 leading-6 text-transparent bg-transparent resize-none code-block"
      ref="textarea" v-model="input" spellcheck="false">
      </textarea>
    <code class="absolute top-0 left-0 z-20 code-preview " v-html="parsedCode"></code>
  </div>
</template>

<script lang="js">
import { defineComponent, toRefs, ref, onBeforeMount, computed } from "vue";
import { useTextareaAutosize } from '@vueuse/core';

export default defineComponent({
  props: {
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
  },
  emits: ["edit"],
  setup(props, { emit }) {
    const { hljs, code } = toRefs(props);
    const id = props.id ?? `${+ new Date()}`;
    const height = ref('0');
    const { textarea, input } = useTextareaAutosize({
      onResize: () => {
        const style = window.getComputedStyle(document.getElementById(id));
        height.value = style.height;
      }
    });

    function sig() {
      emit("edit", input.value);
    }

    const parsedCode = computed(() => {
      //console.log("Parsed code change", width.value, height.value);
      sig()
      return hljs.value.highlight(input.value, { language: props.lang }).value;
    })

    onBeforeMount(() => {
      input.value = code.value;
    });

    return {
      parsedCode,
      textarea,
      input,
      height,
      id,
    };
  },
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
