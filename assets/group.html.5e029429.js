import{_ as d}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as l,b as n,a as e}from"./app.1db80555.js";const r={},v=e(`<h1 id="\u5206\u7EC4\u4ECB\u7ECD" tabindex="-1"><a class="header-anchor" href="#\u5206\u7EC4\u4ECB\u7ECD" aria-hidden="true">#</a> \u5206\u7EC4\u4ECB\u7ECD</h1><p>\u5F53 <strong>\u5916\u89C2\u9762\u677F</strong> \u914D\u7F6E\u9879\u8FC7\u591A\u7684\u65F6\u5019\uFF0C\u63D0\u4F9B\u5BF9\u914D\u7F6E\u9879\u6309\u529F\u80FD\u5206\u7EC4\u7684\u80FD\u529B\uFF0C\u4E14\u5206\u7EC4\u4E0D\u9650\u4E2A\u6570\u3001\u4E0D\u9650\u5C42\u7EA7\u3002</p><p>\u5206\u7EC4\u5C5E\u6027 <em>group</em> \u63D0\u4F9B\u4EE5\u4E0B\u914D\u7F6E\u9879</p><table><thead><tr><th>\u5B57\u6BB5\u540D</th><th>\u542B\u4E49</th><th>\u7C7B\u578B</th><th>\u662F\u5426\u5FC5\u987B</th><th>\u9ED8\u8BA4\u503C</th><th>\u5907\u6CE8</th></tr></thead><tbody><tr><td>name</td><td>\u7EC4\u540D\u79F0</td><td>string</td><td>true</td><td></td><td></td></tr><tr><td>expand</td><td>\u662F\u5426\u5C55\u5F00</td><td>boolean</td><td>false</td><td>false</td><td></td></tr><tr><td>depends</td><td>\u63A7\u5236\u7EC4\u7684\u663E\u9690</td><td>function</td><td>false</td><td></td><td>\u51FD\u6570\u8FD4\u56DE\u503C\u4E3A true \u663E\u793A\u8BE5\u5206\u7EC4\uFF0Cfalse \u9690\u85CF\u8BE5\u5206\u7EC4</td></tr></tbody></table><p>depends \u51FD\u6570\u53C2\u6570</p><table><thead><tr><th>\u5B57\u6BB5\u540D</th><th>\u542B\u4E49</th><th>\u7C7B\u578B</th><th>\u5907\u6CE8</th></tr></thead><tbody><tr><td>rootOption</td><td>\u6837\u5F0F\u914D\u7F6E\u4FE1\u606F</td><td>object</td><td></td></tr><tr><td>rootDes</td><td>\u6837\u5F0F\u63CF\u8FF0\u4FE1\u606F</td><td>object</td><td></td></tr></tbody></table><p>\u{1F330} depends \u51FD\u6570\u5177\u4F53\u4F7F\u7528\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>group: {
  name: &quot;\u7EC4\u540D\u79F0&quot;,
  depends: ({ rootOption, rootDes }) =&gt; {
    //\u8FD4\u56DE\u503C\u4E3Atrue\uFF1A\u663E\u793A\u8BE5\u5206\u7EC4  false\uFF1A\u9690\u85CF\u8BE5\u5206\u7EC4
    return rootOption[attribute] &gt; value;
  },
},
</code></pre><div class="highlight-lines"><br><br><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u7B80\u5355\u5206\u7EC4" tabindex="-1"><a class="header-anchor" href="#\u7B80\u5355\u5206\u7EC4" aria-hidden="true">#</a> \u7B80\u5355\u5206\u7EC4</h2><p>\u{1F330} \u63D0\u4F9B\u57FA\u7840\u5C5E\u6027\u3001\u9AD8\u7EA7\u5C5E\u6027\u4E8C\u4E2A\u7EC4\uFF0C\u57FA\u7840\u5C5E\u6027\u7EC4\u9ED8\u8BA4\u5C55\u5F00\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>export default {
  getData() {
    return {
      option: {
        base: {
          number: 55,
          checkbox: true,
        },
        advance: {
          position: &quot;right&quot;,
        },
      },
    };
  },
  getDataDes() {
    return {
      optionDes: {
        base: {
          group: {
            name: &quot;\u57FA\u7840\u5C5E\u6027&quot;,
            expand: true, //\u5206\u7EC4\u662F\u5426\u5C55\u5F00\uFF0C\u9ED8\u8BA4\u4E0D\u5C55\u5F00
          },
          number: {
            name: &quot;\u6570\u5B57&quot;,
            type: &quot;number&quot;,
          },
          checkbox: {
            name: &quot;\u590D\u9009\u6846&quot;,
            type: &quot;checkbox&quot;,
          },
        },
        advance: {
          group: {
            name: &quot;\u9AD8\u7EA7\u5C5E\u6027&quot;,
          },
          position: {
            name: &quot;\u6C34\u5E73\u4F4D\u7F6E&quot;,
            type: &quot;position&quot;,
            mode: &quot;h&quot;,
          },
        },
      },
    };
  },
};
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u5448\u73B0\u6548\u679C</p></blockquote>`,12),t=["src"],a=e(`<h2 id="\u5D4C\u5957\u5206\u7EC4" tabindex="-1"><a class="header-anchor" href="#\u5D4C\u5957\u5206\u7EC4" aria-hidden="true">#</a> \u5D4C\u5957\u5206\u7EC4</h2><p>\u{1F330} \u63D0\u4F9B <strong>\u57FA\u7840\u5C5E\u6027\u7EC4</strong> \u4E0B\u9762\u5D4C\u5957 <strong>\u5B50\u5206\u7EC4</strong>\uFF0C\u57FA\u7840\u5C5E\u6027\u7EC4\u3001\u5B50\u5206\u7EC4\u9ED8\u8BA4\u90FD\u5C55\u5F00\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>export default {
  getData() {
    return {
      option: {
        base: {
          number: 55,
          child: {
            color: &quot;&quot;,
            image: &quot;&quot;,
          },
        },
        advance: {
          position: &quot;right&quot;,
        },
      },
    };
  },
  getDataDes() {
    return {
      optionDes: {
        base: {
          group: {
            name: &quot;\u57FA\u7840\u5C5E\u6027&quot;,
            expand: true, //\u5206\u7EC4\u662F\u5426\u5C55\u5F00\uFF0C\u9ED8\u8BA4\u4E0D\u5C55\u5F00
          },
          number: {
            name: &quot;\u6570\u5B57&quot;,
            type: &quot;number&quot;,
          },
          child: {
            group: {
              name: &quot;\u5B50\u5206\u7EC4&quot;,
              expand: true, // \u5206\u7EC4\u662F\u5426\u5C55\u5F00\uFF0C\u9ED8\u8BA4\u4E0D\u5C55\u5F00
              depends: ({ rootOption, rootDes }) =&gt; {
                // \u5F53\u7236\u7EA7number&gt;50\u7684\u65F6\u5019\u624D\u663E\u793A\u6B64\u5206\u7EC4
                return rootOption.base.number &gt; 50;
              },
            },
            color: {
              name: &quot;\u989C\u8272\u9009\u62E9&quot;,
              type: &quot;color&quot;,
            },
            image: {
              name: &quot;\u56FE\u7247\u4E0A\u4F20&quot;,
              type: &quot;image&quot;,
            },
          },
        },
        advance: {
          group: {
            name: &quot;\u9AD8\u7EA7\u5C5E\u6027&quot;,
          },
          position: {
            name: &quot;\u6C34\u5E73\u4F4D\u7F6E&quot;,
            type: &quot;position&quot;,
            mode: &quot;h&quot;,
          },
        },
      },
    };
  },
};
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><br><br><br><br><br><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u5448\u73B0\u6548\u679C</p></blockquote>`,4),b=["src"];function u(i,c){return s(),l("div",null,[v,n("img",{src:i.$withBase("/images/guide/group/baseGroup.png"),alt:"\u7B80\u5355\u5206\u7EC4"},null,8,t),a,n("img",{src:i.$withBase("/images/guide/group/advanceGroup.png"),alt:"\u5D4C\u5957\u5206\u7EC4"},null,8,b)])}var h=d(r,[["render",u],["__file","group.html.vue"]]);export{h as default};
