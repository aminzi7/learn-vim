import{_ as s,c as a,o as e,a as n}from"./app.6ebf857e.js";const h=JSON.parse('{"title":"\u5728 vim \u4E2D\u6D3B\u4E0B\u53BB","description":"","frontmatter":{},"headers":[{"level":2,"title":"vim\u6A21\u5F0F","slug":"vim\u6A21\u5F0F"},{"level":3,"title":"normal \u6A21\u5F0F","slug":"normal-\u6A21\u5F0F"},{"level":3,"title":"insert \u6A21\u5F0F","slug":"insert-\u6A21\u5F0F"},{"level":3,"title":"\u6539\u952E","slug":"\u6539\u952E"},{"level":3,"title":"\u5728\u7EC8\u7AEF\u9000\u51FA","slug":"\u5728\u7EC8\u7AEF\u9000\u51FA"},{"level":2,"title":"win","slug":"win"}],"relativePath":"vim/day01.md"}'),o={name:"vim/day01.md"},l=n(`<h1 id="\u5728-vim-\u4E2D\u6D3B\u4E0B\u53BB" tabindex="-1">\u5728 vim \u4E2D\u6D3B\u4E0B\u53BB <a class="header-anchor" href="#\u5728-vim-\u4E2D\u6D3B\u4E0B\u53BB" aria-hidden="true">#</a></h1><h2 id="vim\u6A21\u5F0F" tabindex="-1">vim\u6A21\u5F0F <a class="header-anchor" href="#vim\u6A21\u5F0F" aria-hidden="true">#</a></h2><p>\u8FD9\u91CC\u5148\u5B66\u4E24\u4E2A\u6A21\u5F0F\uFF1Anormal \u6A21\u5F0F\u3001insert \u6A21\u5F0F</p><h3 id="normal-\u6A21\u5F0F" tabindex="-1">normal \u6A21\u5F0F <a class="header-anchor" href="#normal-\u6A21\u5F0F" aria-hidden="true">#</a></h3><p>\u662F\u4F7F\u7528 <code>h</code>\u5DE6 \uFF0C<code>j</code>\u4E0B\uFF0C <code>k</code> \u4E0A\uFF0C<code>l</code> \u53F3 \u6765\u8FDB\u884C\u79FB\u52A8\u7684</p><h3 id="insert-\u6A21\u5F0F" tabindex="-1">insert \u6A21\u5F0F <a class="header-anchor" href="#insert-\u6A21\u5F0F" aria-hidden="true">#</a></h3><p>\u662F\u5E73\u65F6\u7684\u8F93\u5165\u6CD5\u8F93\u5165\u6587\u5B57 \u9000\u51FAinsert\u6A21\u5F0F <code>esc</code> \u6216\u8005 <code>ctrl + [</code></p><h3 id="\u6539\u952E" tabindex="-1">\u6539\u952E <a class="header-anchor" href="#\u6539\u952E" aria-hidden="true">#</a></h3><p><code>esc</code> \u8FD9\u4E2A\u6309\u952E\u6BD4\u8F83\u8FDC\uFF0C\u6240\u4EE5\u53EF\u4EE5\u6539\u952E\u3002\uFF08\u770B\u4F60\u7684\u9700\u6C42\uFF09</p><p>vscode \u73AF\u5883,<code>ctrl shift p</code> \u6253\u5F00 <code>settings</code></p><div class="language-json"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">vim.insertModeKeyBindings</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">: </span><span style="color:#89DDFF;">[</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">before</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">j</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">j</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">],</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">after</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">&lt;Esc&gt;</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;">,</span></span>
<span class="line"></span></code></pre></div><h3 id="\u5728\u7EC8\u7AEF\u9000\u51FA" tabindex="-1">\u5728\u7EC8\u7AEF\u9000\u51FA <a class="header-anchor" href="#\u5728\u7EC8\u7AEF\u9000\u51FA" aria-hidden="true">#</a></h3><ul><li><p>\u4FDD\u5B58\u5E76\u9000\u51FA <code>:wq</code></p></li><li><p>\u5F3A\u5236\u9000\u51FA\uFF0C\u4E0D\u4FDD\u5B58 <code>:q!</code></p></li></ul><p><code>Ctrl</code> \u548C <code>caps</code> \u8C03\u6362\u4F4D\u7F6E</p><ul><li>\u4FEE\u6539\u540E\u9000\u51FA insert \u6A21\u5F0F <code>caps + [</code></li></ul><h2 id="win" tabindex="-1">win <a class="header-anchor" href="#win" aria-hidden="true">#</a></h2><ul><li>window \u73AF\u5883\u4E0B <code>crtl</code> + <code>[</code> \u6CA1\u53CD\u5E94</li></ul><div class="language-json"><span class="copy"></span><pre><code><span class="line"><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">vim.useCtrlKeys</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">:</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">true</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span></code></pre></div>`,18),p=[l];function c(t,r,i,d,D,F){return e(),a("div",null,p)}var u=s(o,[["render",c]]);export{h as __pageData,u as default};