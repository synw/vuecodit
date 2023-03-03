<template>
  <div class="container mx-auto">
    <div class="p-3 mt-5 editor">
      <code-editor :code="code" lang="python" @edit="codeChange($event)" :hljs="hljs"></code-editor>
    </div>
  </div>
</template>

<script setup lang="ts">
import CodeEditor from "@/packages/editor/CodeEditor.vue";
import "vuecodit/style.css";
import "highlight.js/styles/stackoverflow-light.css";
import python from 'highlight.js/lib/languages/python';
import hljs from 'highlight.js/lib/core';
hljs.registerLanguage('python', python);

const code = `print('starting python script')
a = 1
b = 2
print('finished python script')
c = a + b
# return value
c`;

function codeChange(e) {
  console.log("Code change", e)
}
</script>

<style lang="sass">
.editor
  @apply border border-neutral-200 bg-neutral-100 dark:bg-neutral-900 dark:border-neutral-700
</style>