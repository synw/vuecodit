<template>
  <div class="container mx-auto prosed md-content">
    <h1>Python example</h1>
    <div class="p-3 bg-gray-100 border border-gray-200 rounded-md not-prose dark:bg-black dark:border-neutral-800">
      <code-editor :code="initialCode" lang="python" @edit="codeChange($event)" :hljs="hljs"></code-editor>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { CodeEditor } from "vuecodit";
import "vuecodit/style.css";
import hljs from 'highlight.js/lib/core';
import python from 'highlight.js/lib/languages/python';
hljs.registerLanguage('python', python);

const initialCode = `# Program to display the Fibonacci sequence up to n-th term
nterms = 10
# first two terms
n1, n2 = 0, 1
count = 0
# check if the number of terms is valid
if nterms <= 0:
   print("Please enter a positive integer")
# if there is only one term, return n1
elif nterms == 1:
   print("Fibonacci sequence upto",nterms,":")
   print(n1)
# generate fibonacci sequence
else:
   print("Fibonacci sequence:")
   while count < nterms:
       print(n1)
       nth = n1 + n2
       # update values
       n1 = n2
       n2 = nth
       count += 1`;
let editedCode = initialCode;
const result = ref("");

function codeChange(e) {
  // update the code
  editedCode = e;
}
</script>