import{_ as s,c as a,o as n,a as e}from"./app.dc7ced2f.js";const q=JSON.parse('{"title":"\u638C\u63E1\u7A97\u53E3\u7684\u7BA1\u7406","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u9ED8\u8BA4","slug":"\u9ED8\u8BA4"},{"level":3,"title":"\u65B0\u5EFA\u7A97\u53E3","slug":"\u65B0\u5EFA\u7A97\u53E3"},{"level":3,"title":"\u5173\u95ED\u7A97\u53E3","slug":"\u5173\u95ED\u7A97\u53E3"},{"level":3,"title":"\u7A97\u53E3\u5207\u6362","slug":"\u7A97\u53E3\u5207\u6362"},{"level":3,"title":"\u53EA\u4FDD\u7559\u5F53\u524D\u7A97\u53E3\uFF0C\u5173\u95ED\u5176\u4ED6\u7A97\u53E3","slug":"\u53EA\u4FDD\u7559\u5F53\u524D\u7A97\u53E3\uFF0C\u5173\u95ED\u5176\u4ED6\u7A97\u53E3"},{"level":2,"title":"\u6539\u5EFA\u6269\u5C55","slug":"\u6539\u5EFA\u6269\u5C55"},{"level":3,"title":"\u65B0\u5EFA\u7A97\u53E3","slug":"\u65B0\u5EFA\u7A97\u53E3-1"},{"level":3,"title":"\u5173\u95ED\u7A97\u53E3","slug":"\u5173\u95ED\u7A97\u53E3-1"},{"level":3,"title":"\u7A97\u53E3\u5207\u6362","slug":"\u7A97\u53E3\u5207\u6362-1"}],"relativePath":"vim/day15.md"}'),o={name:"vim/day15.md"},l=e(`<h1 id="\u638C\u63E1\u7A97\u53E3\u7684\u7BA1\u7406" tabindex="-1">\u638C\u63E1\u7A97\u53E3\u7684\u7BA1\u7406 <a class="header-anchor" href="#\u638C\u63E1\u7A97\u53E3\u7684\u7BA1\u7406" aria-hidden="true">#</a></h1><h2 id="\u9ED8\u8BA4" tabindex="-1">\u9ED8\u8BA4 <a class="header-anchor" href="#\u9ED8\u8BA4" aria-hidden="true">#</a></h2><h3 id="\u65B0\u5EFA\u7A97\u53E3" tabindex="-1">\u65B0\u5EFA\u7A97\u53E3 <a class="header-anchor" href="#\u65B0\u5EFA\u7A97\u53E3" aria-hidden="true">#</a></h3><p><code>C-w v</code> \u5DE6\u53F3</p><p><code>C-w s</code> \u4E0A\u4E0B</p><h3 id="\u5173\u95ED\u7A97\u53E3" tabindex="-1">\u5173\u95ED\u7A97\u53E3 <a class="header-anchor" href="#\u5173\u95ED\u7A97\u53E3" aria-hidden="true">#</a></h3><p><code>C-w+c</code></p><h3 id="\u7A97\u53E3\u5207\u6362" tabindex="-1">\u7A97\u53E3\u5207\u6362 <a class="header-anchor" href="#\u7A97\u53E3\u5207\u6362" aria-hidden="true">#</a></h3><p><code>C-w hjkl</code></p><p><code>C-w w</code></p><h3 id="\u53EA\u4FDD\u7559\u5F53\u524D\u7A97\u53E3\uFF0C\u5173\u95ED\u5176\u4ED6\u7A97\u53E3" tabindex="-1">\u53EA\u4FDD\u7559\u5F53\u524D\u7A97\u53E3\uFF0C\u5173\u95ED\u5176\u4ED6\u7A97\u53E3 <a class="header-anchor" href="#\u53EA\u4FDD\u7559\u5F53\u524D\u7A97\u53E3\uFF0C\u5173\u95ED\u5176\u4ED6\u7A97\u53E3" aria-hidden="true">#</a></h3><p><code>C-w o</code></p><h2 id="\u6539\u5EFA\u6269\u5C55" tabindex="-1">\u6539\u5EFA\u6269\u5C55 <a class="header-anchor" href="#\u6539\u5EFA\u6269\u5C55" aria-hidden="true">#</a></h2><h3 id="\u65B0\u5EFA\u7A97\u53E3-1" tabindex="-1">\u65B0\u5EFA\u7A97\u53E3 <a class="header-anchor" href="#\u65B0\u5EFA\u7A97\u53E3-1" aria-hidden="true">#</a></h3><p><code>ctrl+\\</code> \u5DE6\u53F3</p><p><code>alt+ctrl+\\</code> \u4E0A\u4E0B</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">\u8FD9\u4E2A\u9700\u8981\u914D\u7F6E</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">&gt;split editor up    \u8BBE\u7F6E\u6309\u94AE</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>mac</p><p><code>command+\\</code></p><p><code>command+ctrl+\\</code></p><h3 id="\u5173\u95ED\u7A97\u53E3-1" tabindex="-1">\u5173\u95ED\u7A97\u53E3 <a class="header-anchor" href="#\u5173\u95ED\u7A97\u53E3-1" aria-hidden="true">#</a></h3><p><code>ctrl+w</code></p><p><code>ctrl+k+w</code></p><p>mac <code>command+w</code></p><p><code>command+k+w</code></p><h3 id="\u7A97\u53E3\u5207\u6362-1" tabindex="-1">\u7A97\u53E3\u5207\u6362 <a class="header-anchor" href="#\u7A97\u53E3\u5207\u6362-1" aria-hidden="true">#</a></h3><p><code>shift+\u65B9\u5411\u952E</code></p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">&gt;keybindings.json</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">  {</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;key&quot;: &quot;shift+left&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;command&quot;: &quot;vim.remap&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;when&quot;: &quot;vim.mode == &#39;Normal&#39;&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;args&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;after&quot;: [&quot;&lt;c-w&gt;&quot;, &quot;h&quot;]</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  {</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;key&quot;: &quot;shift+right&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;command&quot;: &quot;vim.remap&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;when&quot;: &quot;vim.mode == &#39;Normal&#39;&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;args&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;after&quot;: [&quot;&lt;c-w&gt;&quot;, &quot;l&quot;]</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  {</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;key&quot;: &quot;shift+down&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;command&quot;: &quot;vim.remap&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;when&quot;: &quot;vim.mode == &#39;Normal&#39;&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;args&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;after&quot;: [&quot;&lt;c-w&gt;&quot;, &quot;j&quot;]</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  {</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;key&quot;: &quot;shift+up&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;command&quot;: &quot;vim.remap&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;when&quot;: &quot;vim.mode == &#39;Normal&#39;&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;args&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;after&quot;: [&quot;&lt;c-w&gt;&quot;, &quot;k&quot;]</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><code>shift+ctrl+hjkl</code> \u6CA1\u6539\u5EFA\u7684\u8BDD</p>`,30),p=[l];function t(c,r,i,d,u,C){return n(),a("div",null,p)}var h=s(o,[["render",t]]);export{q as __pageData,h as default};
