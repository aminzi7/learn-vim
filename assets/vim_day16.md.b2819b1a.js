import{_ as s,c as a,o as n,a as o}from"./app.e8b46c0e.js";const C=JSON.parse('{"title":"\u5220\u9664\u51FD\u6570","description":"","frontmatter":{},"headers":[{"level":2,"title":"vim-indent-object","slug":"vim-indent-object"},{"level":2,"title":"V$%d","slug":"v-d"}],"relativePath":"vim/day16.md"}'),e={name:"vim/day16.md"},t=o(`<h1 id="\u5220\u9664\u51FD\u6570" tabindex="-1">\u5220\u9664\u51FD\u6570 <a class="header-anchor" href="#\u5220\u9664\u51FD\u6570" aria-hidden="true">#</a></h1><p><code>%</code> \u5F53\u5149\u6807\u653E\u5728 <code>(</code> \u4E2D\u4F1A\u57FA\u4E8E <code>(</code> \u6765\u5339\u914D</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;"> function xx (){}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="vim-indent-object" tabindex="-1">vim-indent-object <a class="header-anchor" href="#vim-indent-object" aria-hidden="true">#</a></h2><p>\u57FA\u4E8E\u7F29\u8FDB\u6765\u9009\u4E2D</p><p>\u6CE8\u610F\uFF1A\u5149\u6807\u653E\u5728\u51FD\u6570\u4F53</p><p><code>&lt;operator&gt;ii</code> \u6839\u636E\u7F29\u8FDB\u9009\u4E2D\u51FD\u6570\u4F53</p><p><code>&lt;operator&gt;ai</code> \u6839\u636E\u7F29\u8FDB\u9009\u4E2D\u51FD\u6570\uFF0C\u5E26 <code>{}</code> \u9009\u4E0D\u4E2D</p><p><code>&lt;operator&gt;aI</code> \u6839\u636E\u7F29\u8FDB\u9009\u4E2D\u51FD\u6570\uFF0C\u5E26 <code>{}</code> \u80FD\u9009\u4E2D</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">&quot;vim.operatorPendingModeKeyBindings&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">    {</span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;before&quot;: [&quot;a&quot;, &quot;i&quot;],</span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;affect&quot;: [&quot;a&quot;, &quot;I&quot;]</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;vim.visualModeKeyBindings&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    {</span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;before&quot;: [&quot;a&quot;, &quot;i&quot;],</span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;after&quot;: [&quot;a&quot;, &quot;I&quot;]</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="v-d" tabindex="-1">V$%d <a class="header-anchor" href="#v-d" aria-hidden="true">#</a></h2><p>\u5149\u6807\u653E\u5728\u51FD\u6570\u8EAB\u4E0A</p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;vim.normalModeKeyBindings&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    {</span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;before&quot;: [&quot;&lt;leader&gt;&quot;, &quot;d&quot;, &quot;f&quot;],</span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;after&quot;: [&quot;V&quot;, &quot;$&quot;, &quot;%&quot;, &quot;d&quot;]</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">    {</span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;before&quot;: [&quot;&lt;leader&gt;&quot;, &quot;d&quot;, &quot;d&quot;,&quot;f&quot;],</span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;after&quot;: [&quot;V&quot;, &quot;$&quot;, &quot;%&quot;, &quot;$&quot;, &quot;%&quot;, &quot;d&quot;]</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,13),p=[t];function l(c,i,u,r,d,q){return n(),a("div",null,p)}var y=s(e,[["render",l]]);export{C as __pageData,y as default};
