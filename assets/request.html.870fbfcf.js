import{r as o,o as p,a as c,b as s,d as e,F as l,e as n,c as t}from"./app.dc721610.js";import{_ as r}from"./plugin-vue_export-helper.21dcd24c.js";const u={},i=s("h1",{id:"request",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#request","aria-hidden":"true"},"#"),n(" Request")],-1),d=s("h2",{id:"request-http",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#request-http","aria-hidden":"true"},"#"),n(),s("code",null,"Request.http")],-1),k=s("p",null,[n("\u7C7B\u578B\uFF1A"),s("code",null,"Function"),s("br"),n(" \u662F\u5426\u53EA\u8BFB\uFF1A\u662F")],-1),h=s("p",null,"\u53C2\u6570\uFF1A",-1),_=n("url - "),m=s("code",null,"string",-1),b=n(" | "),w={href:"http://nodejs.cn/api/url.html",target:"_blank",rel:"noopener noreferrer"},q=n("URL"),g=s("li",null,[n("method? - "),s("a",{href:"#request-requestmethod"},"Requestmethod"),n(" | "),s("code",null,"string")],-1),y=s("li",null,[n("param? - "),s("code",null,"Record<string,unknown>")],-1),f=s("li",null,[n("useMiddleware? - "),s("code",null,"boolean")],-1),x=t(`<p>\u4ECB\u7ECD\uFF1A\u4F7F\u7528method\u65B9\u5F0F\u53D1\u9001http\u8BF7\u6C42\uFF0C\u8BF7\u6C42\u5230url\u3002</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">request</span> <span class="token keyword">extends</span> <span class="token class-name">BaseRequest</span><span class="token punctuation">{</span>
	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">async</span> <span class="token function">req</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token keyword">const</span> raw <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">http</span><span class="token punctuation">(</span><span class="token string">&#39;http://www.baidu.com&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;GET&#39;</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">return</span> raw<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="request-https" tabindex="-1"><a class="header-anchor" href="#request-https" aria-hidden="true">#</a> <code>Request.https</code></h2><p>\u7C7B\u578B: <code>Function</code><br> \u662F\u5426\u53EA\u8BFB\uFF1A\u662F</p><p>\u53C2\u6570</p>`,5),v=n("url - "),R=s("code",null,"string",-1),E=n(" | "),B={href:"http://nodejs.cn/api/url.html",target:"_blank",rel:"noopener noreferrer"},T=n("URL"),F=s("li",null,[n("method? - "),s("a",{href:"#request-requestmethod"},"Requestmethod"),n(" | "),s("code",null,"string")],-1),L=s("li",null,[n("param? - "),s("code",null,"Record<string,unknown>")],-1),N=s("li",null,[n("useMiddleware - "),s("code",null,"boolean")],-1),V=t(`<p>\u4ECB\u7ECD\uFF1A \u4F7F\u7528method\u65B9\u5F0F\u53D1\u9001https\u8BF7\u6C42\uFF0C\u8BF7\u6C42\u5230url</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">class</span> <span class="token class-name">request</span> <span class="token keyword">extends</span> <span class="token class-name">BaseRequest</span><span class="token punctuation">{</span>
	<span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">async</span> <span class="token function">req</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
		<span class="token keyword">const</span> raw <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">https</span><span class="token punctuation">(</span><span class="token string">&#39;https://www.baidu.com&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;GET&#39;</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">return</span> raw<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="request-requestmethod" tabindex="-1"><a class="header-anchor" href="#request-requestmethod" aria-hidden="true">#</a> Request.Requestmethod</h2><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">Requestmethods</span> <span class="token operator">=</span> <span class="token string">&#39;GET&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;POST&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div>`,4);function G(j,I){const a=o("ExternalLinkIcon");return p(),c(l,null,[i,d,k,h,s("ul",null,[s("li",null,[_,m,b,s("a",w,[q,e(a)])]),g,y,f]),x,s("ul",null,[s("li",null,[v,R,E,s("a",B,[T,e(a)])]),F,L,N]),V],64)}var U=r(u,[["render",G]]);export{U as default};
