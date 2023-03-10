<template>
  <div class="container mx-auto prosed md-content">
    <h1>Javascript example</h1>
    <div class="p-3 bg-gray-100 border border-gray-200 rounded-md not-prose dark:bg-black dark:border-neutral-800">
      <code-editor :code="initialCode" lang="javascript" @edit="codeChange($event)" :hljs="hljs"></code-editor>
    </div>
    <button class="mt-5 shadow dark:ring-0 btn bord-secondary" @click="runCode()">Run</button>

    <div class="mt-3">{{ result }}</div>

    <h2>Template Code</h2>
    <p>The style is made using Tailwind classes in this example, but you can use any custom css</p>
    <static-code-block :hljs="hljs" :code="templateCode" lang="html" class="not-prose"></static-code-block>

    <h2>Javascript Code</h2>
    <p>In a script setup tag</p>
    <static-code-block :hljs="hljs" :code="jsCode" lang="typescript" class="not-prose"></static-code-block>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { CodeEditor } from "vuecodit";
//import CodeEditor from "@/CodeEditor_OLD.vue";
//import "vuecodit/style.css";
//import "@/../../../dist/style.css";
import { StaticCodeBlock } from '@docdundee/vue';
import { hljs } from '@/conf';

const initialCode = `console.log('starting script');
const a = 1;
const b = 2;
console.log(a+b);
a+b`;
let editedCode = initialCode;
const result = ref("");
const templateCode = `<div class="p-3 bg-gray-100 border border-gray-200 rounded-md not-prose dark:bg-black dark:border-neutral-800">
  <code-editor 
    :hljs="hljs"
    :code="initialCode" 
    lang="javascript" 
    @edit="codeChange($event)">
  </code-editor>
</div>`;
const jsCode = `import { ref } from 'vue';
import { CodeEditor } from "vuecodit";
import "vuecodit/style.css";
import "highlight.js/styles/vs2015.css";
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
hljs.registerLanguage('javascript', javascript);

const initialCode = \`console.log('starting script');
const a = 1;
const b = 2;
console.log(a+b);
a+b\`;
let editedCode = initialCode;
const result = ref("");

function codeChange(e) {
  // update the code
  editedCode = e;
}

function runCode() {
  // execute the code
  result.value = eval(editedCode)
}`;

function codeChange(e) {
  // update the code
  editedCode = e;
}

function runCode() {
  // execute the code
  result.value = eval(editedCode)
}
</script>