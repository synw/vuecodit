import{W as y}from"./vuecodit-21e7fa18.js";import{d as R,H as g,r as A,o as h,c as B,a as f,b as C,u as _}from"./index-81c90fac.js";function v(e){const d=e.regex,s=/[\p{XID_Start}_]\p{XID_Continue}*/u,r=["and","as","assert","async","await","break","case","class","continue","def","del","elif","else","except","finally","for","from","global","if","import","in","is","lambda","match","nonlocal|10","not","or","pass","raise","return","try","while","with","yield"],o={$pattern:/[A-Za-z]\w+|__\w+__/,keyword:r,built_in:["__import__","abs","all","any","ascii","bin","bool","breakpoint","bytearray","bytes","callable","chr","classmethod","compile","complex","delattr","dict","dir","divmod","enumerate","eval","exec","filter","float","format","frozenset","getattr","globals","hasattr","hash","help","hex","id","input","int","isinstance","issubclass","iter","len","list","locals","map","max","memoryview","min","next","object","oct","open","ord","pow","print","property","range","repr","reversed","round","set","setattr","slice","sorted","staticmethod","str","sum","super","tuple","type","vars","zip"],literal:["__debug__","Ellipsis","False","None","NotImplemented","True"],type:["Any","Callable","Coroutine","Dict","List","Literal","Generic","Optional","Sequence","Set","Tuple","Type","Union"]},n={className:"meta",begin:/^(>>>|\.\.\.) /},i={className:"subst",begin:/\{/,end:/\}/,keywords:o,illegal:/#/},c={begin:/\{\{/,relevance:0},l={className:"string",contains:[e.BACKSLASH_ESCAPE],variants:[{begin:/([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?'''/,end:/'''/,contains:[e.BACKSLASH_ESCAPE,n],relevance:10},{begin:/([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?"""/,end:/"""/,contains:[e.BACKSLASH_ESCAPE,n],relevance:10},{begin:/([fF][rR]|[rR][fF]|[fF])'''/,end:/'''/,contains:[e.BACKSLASH_ESCAPE,n,c,i]},{begin:/([fF][rR]|[rR][fF]|[fF])"""/,end:/"""/,contains:[e.BACKSLASH_ESCAPE,n,c,i]},{begin:/([uU]|[rR])'/,end:/'/,relevance:10},{begin:/([uU]|[rR])"/,end:/"/,relevance:10},{begin:/([bB]|[bB][rR]|[rR][bB])'/,end:/'/},{begin:/([bB]|[bB][rR]|[rR][bB])"/,end:/"/},{begin:/([fF][rR]|[rR][fF]|[fF])'/,end:/'/,contains:[e.BACKSLASH_ESCAPE,c,i]},{begin:/([fF][rR]|[rR][fF]|[fF])"/,end:/"/,contains:[e.BACKSLASH_ESCAPE,c,i]},e.APOS_STRING_MODE,e.QUOTE_STRING_MODE]},t="[0-9](_?[0-9])*",m=`(\\b(${t}))?\\.(${t})|\\b(${t})\\.`,a=`\\b|${r.join("|")}`,b={className:"number",relevance:0,variants:[{begin:`(\\b(${t})|(${m}))[eE][+-]?(${t})[jJ]?(?=${a})`},{begin:`(${m})[jJ]?`},{begin:`\\b([1-9](_?[0-9])*|0+(_?0)*)[lLjJ]?(?=${a})`},{begin:`\\b0[bB](_?[01])+[lL]?(?=${a})`},{begin:`\\b0[oO](_?[0-7])+[lL]?(?=${a})`},{begin:`\\b0[xX](_?[0-9a-fA-F])+[lL]?(?=${a})`},{begin:`\\b(${t})[jJ](?=${a})`}]},E={className:"comment",begin:d.lookahead(/# type:/),end:/$/,keywords:o,contains:[{begin:/# type:/},{begin:/#/,end:/\b\B/,endsWithParent:!0}]},u={className:"params",variants:[{className:"",begin:/\(\s*\)/,skip:!0},{begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:o,contains:["self",n,b,l,e.HASH_COMMENT_MODE]}]};return i.contains=[l,b,n],{name:"Python",aliases:["py","gyp","ipython"],unicodeRegex:!0,keywords:o,illegal:/(<\/|->|\?)|=>/,contains:[n,b,{begin:/\bself\b/},{beginKeywords:"if",relevance:0},l,E,e.HASH_COMMENT_MODE,{match:[/\bdef/,/\s+/,s],scope:{1:"keyword",3:"title.function"},contains:[u]},{variants:[{match:[/\bclass/,/\s+/,s,/\s*/,/\(\s*/,s,/\s*\)/]},{match:[/\bclass/,/\s+/,s]}],scope:{1:"keyword",3:"title.class",6:"title.class.inherited"}},{className:"meta",begin:/^[\t ]*@/,end:/(?=#)|$/,contains:[b,u,l]}]}}const L={class:"container mx-auto prosed md-content"},N=f("h1",null,"Python example",-1),T={class:"p-3 bg-gray-100 border border-gray-200 rounded-md not-prose dark:bg-black dark:border-neutral-800"},w=R({__name:"python",setup(e){g.registerLanguage("python",v);const d=`# Program to display the Fibonacci sequence up to n-th term
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
       count += 1`;A("");function s(r){}return(r,p)=>(h(),B("div",L,[N,f("div",T,[C(_(y),{code:d,lang:"python",onEdit:p[0]||(p[0]=S=>void 0),hljs:_(g)},null,8,["hljs"])])]))}});export{w as default};
