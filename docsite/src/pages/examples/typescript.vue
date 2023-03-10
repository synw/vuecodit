<template>
  <div class="container mx-auto prosed md-content">
    <h1>Typescript example</h1>
    <div class="p-3 bg-gray-100 border border-gray-200 rounded-md not-prose dark:bg-black dark:border-neutral-800">
      <code-editor :code="initialCode" lang="typescript" @edit="codeChange($event)" :hljs="hljs"></code-editor>
    </div>
    <button class="mt-5 shadow dark:ring-0 btn bord-secondary" @click="runCode()">Run</button>

    <div class="mt-3">{{ result }}</div>

    <h2>Template Code</h2>
    <p>The style is made using Tailwind classes in this example, but you can use any custom css</p>
    <static-code-block :hljs="hljs" :code="templateCode" lang="html" class="not-prose"></static-code-block>

    <h2>Typescript Code</h2>
    <p>In a script setup tag</p>
    <static-code-block :hljs="hljs" :code="jsCode" lang="typescript" class="not-prose"></static-code-block>
  </div>
</template>

<script setup lang="ts">
import { transpile } from "typescript";
import { ref } from 'vue';
import { CodeEditor } from "vuecodit";
import { StaticCodeBlock } from '@docdundee/vue';
import { hljs } from '@/conf';

const initialCode = `interface A {
  member: string;
}

function instanceOfA(object: any): object is A {
  return 'member' in object;
}

var a: any = {member: "foobar"};
return instanceOfA(a) ? 'is an instance' : 'is not an instance'`;
let editedCode = initialCode;
const result = ref("");
const templateCode = `<div class="p-3 bg-gray-100 border border-gray-200 rounded-md not-prose dark:bg-black dark:border-neutral-800">
  <code-editor 
    :hljs="hljs"
    :code="initialCode" 
    lang="typescript" 
    @edit="codeChange($event)">
  </code-editor>
</div>`;
const jsCode = `import { transpile } from "typescript";
import { ref } from 'vue';
import CodeEditor from "@/CodeEditor.vue";
import { StaticCodeBlock } from '@docdundee/vue';
import { hljs } from '@/conf';

const initialCode = \`interface A {
  member: string;
}

function instanceOfA(object: any): object is A {
  return 'member' in object;
}

var a: any = {member: "foobar"};
return instanceOfA(a) ? 'is an instance' : 'is not an instance'\`;
let editedCode = initialCode;
const result = ref("");

function codeChange(e) {
  // update the code
  editedCode = e;
}

async function runCode() {
  // execute the code
  const c = transpile(editedCode)
  const res = await Object.getPrototypeOf(async function () { }).constructor(c)();
  if (res) {
    result.value = res;
  }
}`;

function codeChange(e) {
  // update the code
  editedCode = e;
}

async function runCode() {
  // execute the code
  const c = transpile(editedCode)
  const res = await Object.getPrototypeOf(async function () { }).constructor(c)();
  if (res) {
    result.value = res;
  }
}
</script>