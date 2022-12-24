import{r as t,o as e,a as o,b as n,d as c,F as l,c as s,e as a}from"./app.dc721610.js";import{_ as r}from"./plugin-vue_export-helper.21dcd24c.js";const i={},u=s('<h1 id="\u4ECB\u7ECD" tabindex="-1"><a class="header-anchor" href="#\u4ECB\u7ECD" aria-hidden="true">#</a> \u4ECB\u7ECD</h1><h2 id="\u4EC0\u4E48\u662Fgachi" tabindex="-1"><a class="header-anchor" href="#\u4EC0\u4E48\u662Fgachi" aria-hidden="true">#</a> \u4EC0\u4E48\u662Fgachi</h2><p>gachi\u662F\u4E00\u4E2A\u7531typescript\u5F00\u53D1\u7684\u722C\u866B\u6846\u67B6\uFF0C\u6838\u5FC3\u662F\u5173\u6CE8\u4EA4\u4E92\u903B\u8F91\u3002\u6613\u4E0A\u624B\uFF0C\u7EF4\u62A4\u6210\u672C\u4F4E\u3002\u5C0F\u5230\u53EF\u4EE5\u5199\u4E00\u4E2A\u666E\u901A\u7684\u7EC3\u624B\u9879\u76EE\uFF0C\u5927\u5230\u53EF\u4EE5\u9876\u8D77\u6570\u636E\u722C\u53D6\u7684\u9879\u76EE\u3002</p><h2 id="\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u793A\u4F8B" aria-hidden="true">#</a> \u793A\u4F8B</h2><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>\u6211\u4EEC\u5DF2\u7ECF\u9ED8\u8BA4\u60A8\u638C\u63E1\u5E76\u80FD\u591F\u719F\u7EC3\u4F7F\u7528typescript\u57FA\u7840\uFF0CES6\u7279\u6027\u3002\u5982\u679C\u60A8\u6CA1\u6709\u638C\u63E1\uFF0C\u5EFA\u8BAE\u5148\u53BB\u6253\u597D\u57FA\u7840\uFF0C\u8FD9\u4F1A\u5BF9\u4F60\u7406\u89E3\u672C\u6559\u7A0B\u6709\u4FC3\u8FDB\u4F5C\u7528.</p></div>',5),k={class:"custom-container tip"},b=n("p",{class:"custom-container-title"},"TIP",-1),d=a("\u5982\u679C\u60A8\u8FD8\u6CA1\u6709\u5B89\u88C5\uFF0C\u90A3\u4E48\u8BF7\u5148\u9605\u8BFB"),m={href:"/install/",target:"_blank",rel:"noopener noreferrer"},g=a("\u5B89\u88C5"),f=s(`<p>\u8BA9\u6211\u4EEC\u5148\u6765\u7B80\u5355\u722C\u53D6\u4E00\u4E2AB\u7AD9Up\u4E3B\u7684\u7528\u6237\u4FE1\u606F\u628A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">//config.ts</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> Iconfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;gachi/interface/config&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> config<span class="token operator">:</span>Iconfig <span class="token operator">=</span> <span class="token punctuation">{</span>
	simple<span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token string-property property">&#39;getUserInfo&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			baseQuery<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
			baseQueryName<span class="token operator">:</span> <span class="token string">&#39;mid&#39;</span><span class="token punctuation">,</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> config<span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// index.ts</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>Simple<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;gachi&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> config <span class="token keyword">from</span> <span class="token string">&#39;./config&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>getUserInfo<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;gachi/api/user&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>Api<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;gachi/interface/api&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">getUserInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token keyword">const</span> simple <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Simple</span><span class="token punctuation">(</span>config<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">await</span> simple<span class="token punctuation">.</span><span class="token function">request</span><span class="token punctuation">(</span>
		<span class="token punctuation">(</span><span class="token punctuation">[</span>
			getUserInfo
		<span class="token punctuation">]</span> <span class="token keyword">as</span> Api<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">undefined</span>
	<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">const</span> raw <span class="token operator">=</span> simple<span class="token punctuation">.</span><span class="token function">getResponse</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>raw<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
app<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div>`,3);function h(y,_){const p=t("ExternalLinkIcon");return e(),o(l,null,[u,n("div",k,[b,n("p",null,[d,n("a",m,[g,c(p)])])]),f],64)}var v=r(i,[["render",h]]);export{v as default};
