/** The doc site name that will appear on top */
const libName = "vuecodit";
const libTitle = "Vuecodit";
const repoUrl = "https://github.com/synw/vuecodit";

/** Links to be displayed in the header bar */
const links: Array<{ href: string; name: string }> = [
  // { href: "/python", name: "Python api" },
];

// python runtime
const pipPackages = [];
const pyodidePackages = [];
const examplesExtension = "py";

/** Pick you hljs theme for light and dark */
async function loadHljsTheme(isDark: boolean) {
  if (isDark) {
    await import("../node_modules/highlight.js/styles/base16/material-darker.css")
  } else {
    await import("../node_modules/highlight.js/styles/stackoverflow-light.css")
  }
}

/** Import the languages you need for highlighting */
import hljs from 'highlight.js/lib/core';
import bash from 'highlight.js/lib/languages/bash';
import typescript from 'highlight.js/lib/languages/typescript';
import javascript from 'highlight.js/lib/languages/javascript';
import xml from 'highlight.js/lib/languages/xml';
hljs.registerLanguage('typescript', typescript);
hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('bash', bash);
hljs.registerLanguage('html', xml);


export { libName, libTitle, repoUrl, pipPackages, examplesExtension, pyodidePackages, links, hljs, loadHljsTheme }