<template>
  <div class="container mx-auto dark">
    <div class="w-full h-full p-8 background">
      <code-editor :code="initialCode" lang="javascript" @edit="codeChange($event)" :hljs="hljs"></code-editor>
      <button class="mt-5 btn secondary" @click="runCode()">Run</button>
    </div>
    <div class="mt-5">{{ result }}</div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { CodeEditor } from "vuecodit";
import "vuecodit/style.css";
import "highlight.js/styles/vs2015.css";
import javascript from 'highlight.js/lib/languages/javascript';
import hljs from 'highlight.js/lib/core';
hljs.registerLanguage('javascript', javascript);

const initialCode = `console.log('starting script');
const a = 1;
const b = 2;
console.log(a+b);
a+b`;
let editedCode = initialCode;
const result = ref("");

function codeChange(e) {
  // update the code
  editedCode = e;
}

function runCode() {
  // execute the code
  result.value = eval(editedCode)
}
</script>