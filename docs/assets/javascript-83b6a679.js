import{W}from"./vuecodit-21e7fa18.js";import{d as defineComponent,r as ref,o as openBlock,c as createElementBlock,a as createBaseVNode,b as createVNode,u as unref,H as HighlightJS,t as toDisplayString,T as Tt}from"./index-81c90fac.js";const _hoisted_1={class:"container mx-auto prosed md-content"},_hoisted_2=createBaseVNode("h1",null,"Javascript example",-1),_hoisted_3={class:"p-3 bg-gray-100 border border-gray-200 rounded-md not-prose dark:bg-black dark:border-neutral-800"},_hoisted_4={class:"mt-3"},_hoisted_5=createBaseVNode("h2",null,"Template Code",-1),_hoisted_6=createBaseVNode("p",null,"The style is made using Tailwind classes in this example, but you can use any custom css",-1),_hoisted_7=createBaseVNode("h2",null,"Javascript Code",-1),_hoisted_8=createBaseVNode("p",null,"In a script setup tag",-1),_sfc_main=defineComponent({__name:"javascript",setup(__props){const initialCode=`console.log('starting script');
const a = 1;
const b = 2;
console.log(a+b);
a+b`;let editedCode=initialCode;const result=ref(""),templateCode=`<div class="p-3 bg-gray-100 border border-gray-200 rounded-md not-prose dark:bg-black dark:border-neutral-800">
  <code-editor 
    :hljs="hljs"
    :code="initialCode" 
    lang="javascript" 
    @edit="codeChange($event)">
  </code-editor>
</div>`,jsCode=`import { ref } from 'vue';
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
}`;function codeChange(t){editedCode=t}function runCode(){result.value=eval(editedCode)}return(t,e)=>(openBlock(),createElementBlock("div",_hoisted_1,[_hoisted_2,createBaseVNode("div",_hoisted_3,[createVNode(unref(W),{code:initialCode,lang:"javascript",onEdit:e[0]||(e[0]=o=>codeChange(o)),hljs:unref(HighlightJS)},null,8,["hljs"])]),createBaseVNode("button",{class:"mt-5 shadow dark:ring-0 btn bord-secondary",onClick:e[1]||(e[1]=o=>runCode())},"Run"),createBaseVNode("div",_hoisted_4,toDisplayString(result.value),1),_hoisted_5,_hoisted_6,createVNode(unref(Tt),{hljs:unref(HighlightJS),code:templateCode,lang:"html",class:"not-prose"},null,8,["hljs"]),_hoisted_7,_hoisted_8,createVNode(unref(Tt),{hljs:unref(HighlightJS),code:jsCode,lang:"typescript",class:"not-prose"},null,8,["hljs"])]))}});export{_sfc_main as default};
