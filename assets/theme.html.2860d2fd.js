import{i as s}from"./app.8a8eb44e.js";import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=s(`<h1 id="\u4E3B\u9898\u5E94\u7528" tabindex="-1"><a class="header-anchor" href="#\u4E3B\u9898\u5E94\u7528" aria-hidden="true">#</a> \u4E3B\u9898\u5E94\u7528</h1><h2 id="\u4E3B\u9898\u6570\u636E\u7ED3\u6784" tabindex="-1"><a class="header-anchor" href="#\u4E3B\u9898\u6570\u636E\u7ED3\u6784" aria-hidden="true">#</a> \u4E3B\u9898\u6570\u636E\u7ED3\u6784</h2><p>\u7EC4\u4EF6\u5185\u7F6E\u591A\u5957\u4E3B\u9898\u98CE\u683C\uFF0C\u5982\u79D1\u6280\u84DD\u3001\u8D5B\u535A\u670B\u514B\u3001\u9ED1\u91D1\u3001\u9ED1\u51B0\u3001\u9752\u6A59\u7B49\uFF0C\u7528\u6237\u4E5F\u53EF\u4EE5\u6269\u5C55\u4E3B\u9898\u98CE\u683C\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>  <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;\u79D1\u6280\u84DD&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&quot;#115FEA&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">background</span><span class="token operator">:</span> <span class="token string">&quot;#05255F&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">pageBackground</span><span class="token operator">:</span> <span class="token string">&quot;#03091A&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&quot;#F0F0F0&quot;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">groups</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;#115FEA&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;#10EBE3&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;#10A9EB&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;#EB9C10&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;#2E10EB&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;#9B10EB&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="highlight-lines"><br><div class="highlight-line">\xA0</div><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="\u5355\u8272\u9009\u62E9\u5668" tabindex="-1"><a class="header-anchor" href="#\u5355\u8272\u9009\u62E9\u5668" aria-hidden="true">#</a> \u5355\u8272\u9009\u62E9\u5668</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span><span class="token string">&#39;color&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">theme</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token literal-property property">key</span><span class="token operator">:</span><span class="token string">&#39;color&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">opacity</span><span class="token operator">:</span> <span class="token number">1</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><ul><li>\u4E3B\u9898\u914D\u7F6E\u4E2D\u7684 <em>key</em> \u53EF\u4EE5\u662F\u4E3B\u9898\u6570\u636E\u7ED3\u6784\u4E2D\u7684\u4EFB\u4F55\u5C5E\u6027\u540D\uFF0C\u5982\uFF1Acolor\u3001background\u3001text \u7B49\uFF0C\u4E5F\u53EF\u4EE5\u53D6 groups \u6570\u7EC4\u4E2D\u7684\u67D0\u4E2A\u503C\uFF0C\u5982\uFF1A{key:&#39;groups.0&#39;}(groups \u4E2D\u7D22\u5F15\u4E3A 0 \u7684\u9879)\u3001{key:&#39;groups.3&#39;}(groups \u4E2D\u7D22\u5F15\u4E3A 3 \u7684\u9879)\u3002</li><li>\u4E3B\u9898\u914D\u7F6E\u4E2D\u7684\u900F\u660E\u5EA6 <em>opacity</em> \u53EF\u4EE5\u8BBE\u7F6E 0-1 \u7684\u503C\uFF0C\u9ED8\u8BA4\u503C\u4E3A 1\u3002</li></ul><h2 id="\u80CC\u666F\u8272\u9009\u62E9\u5668" tabindex="-1"><a class="header-anchor" href="#\u80CC\u666F\u8272\u9009\u62E9\u5668" aria-hidden="true">#</a> \u80CC\u666F\u8272\u9009\u62E9\u5668</h2><ol><li>\u5355\u8272\u914D\u7F6E\u65B9\u6848</li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span><span class="token string">&#39;bgcolor&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">theme</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token literal-property property">key</span><span class="token operator">:</span><span class="token string">&#39;color&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">opacity</span><span class="token operator">:</span> <span class="token number">1</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><ul><li>\u4E3B\u9898\u914D\u7F6E\u4E2D\u7684 <em>key</em> \u53EF\u4EE5\u662F\u4E3B\u9898\u6570\u636E\u7ED3\u6784\u4E2D\u7684\u4EFB\u4F55\u5C5E\u6027\u540D\uFF0C\u5982\uFF1Acolor\u3001background\u3001text \u7B49\uFF0C\u4E5F\u53EF\u4EE5\u53D6 groups \u6570\u7EC4\u4E2D\u7684\u67D0\u4E2A\u503C\uFF0C\u5982\uFF1A{key:&#39;groups.0&#39;}(groups \u4E2D\u7D22\u5F15\u4E3A 0 \u7684\u9879)\u3001{key:&#39;groups.3&#39;}(groups \u4E2D\u7D22\u5F15\u4E3A 3 \u7684\u9879)\u3002</li><li>\u4E3B\u9898\u914D\u7F6E\u4E2D\u7684\u900F\u660E\u5EA6 <em>opacity</em> \u53EF\u4EE5\u8BBE\u7F6E 0-1 \u7684\u503C\uFF0C\u9ED8\u8BA4\u503C\u4E3A 1\u3002</li></ul><ol start="2"><li>\u6E10\u53D8\u8272\u914D\u7F6E\u65B9\u6848</li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;bgcolor&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">theme</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&quot;linear&quot;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">degree</span><span class="token operator">:</span> <span class="token number">90</span><span class="token punctuation">,</span>
        <span class="token literal-property property">points</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span> <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">&quot;color&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">opacity</span><span class="token operator">:</span> <span class="token number">0.4</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span> <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">&quot;groups.3&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">opacity</span><span class="token operator">:</span> <span class="token number">0.4</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token operator">...</span><span class="token punctuation">.</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><ul><li>\u4E3B\u9898\u914D\u7F6E\u4E2D\u7684\u6E10\u53D8\u65B9\u5F0F <em>type</em> \u53EF\u4EE5\u8BBE\u7F6E linear\uFF1A\u7EBF\u6027\u6E10\u53D8(\u9ED8\u8BA4) radial\uFF1A\u5F84\u5411\u6E10\u53D8\u3002</li><li>\u4E3B\u9898\u914D\u7F6E\u4E2D\u7684\u65CB\u8F6C\u89D2\u5EA6 <em>degree</em> \u53EF\u4EE5\u8BBE\u7F6E 0-360 \u89D2\u5EA6\u7684\u503C\uFF0C\u9ED8\u8BA4\u503C\u4E3A 0\u3002</li><li>\u4E3B\u9898\u914D\u7F6E\u4E2D\u7684\u989C\u8272\u70B9 <em>points</em> \u53EF\u4EE5\u8BBE\u7F6E\u4E00\u7EC4\u989C\u8272\u503C\uFF0C\u5177\u4F53\u7EC4\u4E2D\u7684\u503C\u540C\u5355\u8272\u4E3B\u9898\u914D\u7F6E\u65B9\u6848\u4E2D\u7684 <a href="#%E8%83%8C%E6%99%AF%E8%89%B2%E9%80%89%E6%8B%A9%E5%99%A8">theme</a> \u7ED3\u6784\u3002</li></ul><h2 id="\u5199\u5728\u6700\u540E" tabindex="-1"><a class="header-anchor" href="#\u5199\u5728\u6700\u540E" aria-hidden="true">#</a> \u5199\u5728\u6700\u540E</h2><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><p>\u5982\u679C\u67D0\u4E2A\u5C5E\u6027\u914D\u7F6E\u4E86\u4E3B\u9898\u63CF\u8FF0\uFF0C\u5C5E\u6027\u503C\u53EF\u4EE5\u4E0D\u8BBE\u7F6E\u989C\u8272\u503C(\u503C\u4E3A null \u6216\u201C\u201D)\uFF0C\u7A0B\u5E8F\u4F1A\u6839\u636E\u914D\u7F6E\u7684\u4E3B\u9898\u63CF\u8FF0\u751F\u6210\u9ED8\u8BA4\u503C\u3002</p></div>`,16);function e(t,o){return p}var c=n(a,[["render",e]]);export{c as default};
