import{_ as s,c as a,o as n,a as e}from"./app.e8b46c0e.js";const q=JSON.parse('{"title":"\u8C03\u7528 vscode \u7684\u547D\u4EE4","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u683C\u5F0F\u5316\u6587\u6863","slug":"\u683C\u5F0F\u5316\u6587\u6863"},{"level":2,"title":"\u91CD\u547D\u540D","slug":"\u91CD\u547D\u540D"},{"level":2,"title":"\u6298\u53E0\u4EE3\u7801","slug":"\u6298\u53E0\u4EE3\u7801"}],"relativePath":"vim/day18.md"}'),o={name:"vim/day18.md"},l=e(`<h1 id="\u8C03\u7528-vscode-\u7684\u547D\u4EE4" tabindex="-1">\u8C03\u7528 vscode \u7684\u547D\u4EE4 <a class="header-anchor" href="#\u8C03\u7528-vscode-\u7684\u547D\u4EE4" aria-hidden="true">#</a></h1><h2 id="\u683C\u5F0F\u5316\u6587\u6863" tabindex="-1">\u683C\u5F0F\u5316\u6587\u6863 <a class="header-anchor" href="#\u683C\u5F0F\u5316\u6587\u6863" aria-hidden="true">#</a></h2><p><code>&lt;Leader&gt;+f+d</code> \u683C\u5F0F\u5316\u6587\u6863 <code>shift+alt+f</code></p><h2 id="\u91CD\u547D\u540D" tabindex="-1">\u91CD\u547D\u540D <a class="header-anchor" href="#\u91CD\u547D\u540D" aria-hidden="true">#</a></h2><p><code>&lt;Leader&gt;+r+n</code> \u91CD\u547D\u540D <code>f2</code></p><h2 id="\u6298\u53E0\u4EE3\u7801" tabindex="-1">\u6298\u53E0\u4EE3\u7801 <a class="header-anchor" href="#\u6298\u53E0\u4EE3\u7801" aria-hidden="true">#</a></h2><p><code>&lt;Leader&gt;+[</code></p><div class="language-"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">  &quot;vim.normalModeKeyBindingsNonRecursive&quot;: [</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u683C\u5F0F\u5316\u6587\u6863</span></span>
<span class="line"><span style="color:#A6ACCD;">    {</span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;before&quot;: [&quot;&lt;leader&gt;&quot;, &quot;f&quot;, &quot;d&quot;],</span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;commands&quot;: [&quot;editor.action.formatDocument&quot;]</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u91CD\u547D\u540D</span></span>
<span class="line"><span style="color:#A6ACCD;">    {</span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;before&quot;: [&quot;&lt;leader&gt;&quot;, &quot;r&quot;, &quot;n&quot;],</span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;commands&quot;: [&quot;editor.action.rename&quot;]</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">    // \u6298\u53E0</span></span>
<span class="line"><span style="color:#A6ACCD;">    {</span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;before&quot;: [&quot;&lt;leader&gt;&quot;, &quot;[&quot;],</span></span>
<span class="line"><span style="color:#A6ACCD;">      &quot;command&quot;: [</span></span>
<span class="line"><span style="color:#A6ACCD;">        {</span></span>
<span class="line"><span style="color:#A6ACCD;">          &quot;command&quot;: &quot;editor.fold&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">        },</span></span>
<span class="line"><span style="color:#A6ACCD;">        {</span></span>
<span class="line"><span style="color:#A6ACCD;">          &quot;command&quot;: &quot;vim.remap&quot;,</span></span>
<span class="line"><span style="color:#A6ACCD;">          &quot;args&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">            &quot;after&quot;: [&quot;$&quot;, &quot;%&quot;]</span></span>
<span class="line"><span style="color:#A6ACCD;">          }</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">      ]</span></span>
<span class="line"><span style="color:#A6ACCD;">    },</span></span>
<span class="line"><span style="color:#A6ACCD;">  ]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,8),t=[l];function p(c,r,i,d,u,A){return n(),a("div",null,t)}var y=s(o,[["render",p]]);export{q as __pageData,y as default};
