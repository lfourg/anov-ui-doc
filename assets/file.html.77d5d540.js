import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";import{o as d,c as l,b as e,a as i}from"./app.1db80555.js";const v={},r=i(`<h1 id="\u7EC4\u4EF6\u5F00\u53D1" tabindex="-1"><a class="header-anchor" href="#\u7EC4\u4EF6\u5F00\u53D1" aria-hidden="true">#</a> \u7EC4\u4EF6\u5F00\u53D1</h1><h2 id="\u7EC4\u4EF6\u76EE\u5F55\u7ED3\u6784" tabindex="-1"><a class="header-anchor" href="#\u7EC4\u4EF6\u76EE\u5F55\u7ED3\u6784" aria-hidden="true">#</a> \u7EC4\u4EF6\u76EE\u5F55\u7ED3\u6784</h2><p>\u672C\u8282\u4ECB\u7ECD\u5F00\u53D1\u8005\u5728\u5F00\u53D1\u7EC4\u4EF6\u65F6\uFF0C\u9700\u8981\u9075\u5FAA\u7684\u6587\u4EF6\u7ED3\u6784\u3002</p><p>\u5728\u5F00\u53D1\u7EC4\u4EF6\u4E4B\u524D\uFF0C\u60A8\u9700\u8981\u5728 <em>src/components</em> \u6587\u4EF6\u5939\u4E0B\u65B0\u5EFA\u4E00\u4E2A\u7EC4\u4EF6\u76EE\u5F55\uFF0C\u5728\u7EC4\u4EF6\u76EE\u5F55\u4E0B\u53EF\u4EE5\u6DFB\u52A0\u591A\u4E2A\u7EC4\u4EF6\uFF0C\u6BCF\u4E2A\u5177\u4F53\u7EC4\u4EF6\u5EFA\u8BAE\u4F7F\u7528\u7EC4\u4EF6\u7279\u6027\u4F5C\u4E3A\u76EE\u5F55\u540D\u3002\u{1F330} \u53C2\u8003 <strong>\u8868\u683C</strong> \u7EC4\u4EF6\u7684\u76EE\u5F55\u7ED3\u6784\u3002</p><p>:::vue . \u251C\u2500\u2500 <code>components</code> \u2502\xA0\xA0 \u251C\u2500\u2500 <code>table</code> <em>(<strong>\u7EC4\u4EF6\u76EE\u5F55\uFF1A\u8868\u683C</strong>)</em> \u2502\xA0\xA0 \u2502\xA0\xA0 \u251C\u2500\u2500 <code>normal</code> <em>(<strong>\u5E38\u89C4\u8868\u683C</strong>)</em> \u2502\xA0\xA0 \u2502\xA0\xA0 \u2502\xA0\xA0 \u251C\u2500\u2500 index.vue <em>(<strong>\u89C6\u56FE</strong>)</em> \u2502\xA0\xA0 \u2502\xA0\xA0 \u2502\xA0\xA0 \u251C\u2500\u2500 config.js <em>(<strong>\u914D\u7F6E\u6587\u4EF6</strong>)</em> \u2502\xA0\xA0 \u2502\xA0\xA0 \u251C\u2500\u2500 <code>top</code> <em>(<strong>TOP \u8868\u683C</strong>)</em> \u2502\xA0\xA0 \u2502\xA0\xA0 \u2502\xA0\xA0 \u251C\u2500\u2500 index.vue \u2502\xA0\xA0 \u2502\xA0\xA0 \u2502\xA0\xA0 \u251C\u2500\u2500 config.js \u2502\xA0\xA0 \u2502\xA0\xA0 \u251C\u2500\u2500 components.json <em>(<strong>\u5BFC\u51FA\u76EE\u5F55\u4E0B\u6240\u6709\u7EC4\u4EF6</strong>)</em> :::</p><h2 id="\u914D\u7F6E\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u6587\u4EF6" aria-hidden="true">#</a> \u914D\u7F6E\u6587\u4EF6</h2><p>\u60A8\u901A\u8FC7 <em>config.js</em> \u6587\u4EF6\u4E2D\u7684<code>getData</code>\u3001<code>getDataDes</code>\u51FD\u6570\uFF0C\u6765\u5B9A\u4E49\u5916\u89C2\u9762\u677F\u3001\u6570\u636E\u9762\u677F\u3001\u4EA4\u4E92\u9762\u677F\u7684\u663E\u793A\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>export default {
  getData() {
    return {
      option: {}, //\u5916\u89C2\u9762\u677F\u6570\u636E
      data: [], //\u9759\u6001\u6570\u636E \u975E\u5FC5\u987B
    };
  },
  getDataDes() {
    return {
      optionDes: {}, //\u5916\u89C2\u9762\u677F\u63CF\u8FF0
      sourceDes: {}, //\u6570\u636E\u9762\u677F\u63CF\u8FF0 \u975E\u5FC5\u987B
      actionsDes: {}, //\u4EA4\u4E92\u9762\u677F\u63CF\u8FF0 \u975E\u5FC5\u987B
    };
  },
};
</code></pre><div class="highlight-lines"><br><div class="highlight-line">\xA0</div><br><br><br><br><br><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>::: details \u6837\u4F8B-\u5916\u89C2\u9762\u677F</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>import Type from &quot;anov-ui/src/utils/panel/type&quot;;

export default {
  getData() {
    return {
      option: {
        input: &quot;\u6D4B\u8BD5\u6570\u636E&quot;,
        select: 1,
        color: &quot;&quot;,
      },
    };
  },
  getDataDes() {
    return {
      optionDes: {
        input: {
          name: &quot;\u6807\u9898&quot;,
          type: Type.input,
        },
        select: {
          name: &quot;\u7C7B\u578B&quot;,
          type: Type.select,
          options: [
            {
              value: 1,
              text: &quot;\u9009\u9879\u4E00&quot;,
            },
            {
              value: 2,
              text: &quot;\u9009\u9879\u4E8C&quot;,
            },
          ],
        },
        color: {
          name: &quot;\u989C\u8272\u9009\u62E9&quot;,
          type: Type.color,
        },
      },
    };
  },
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u5448\u73B0\u6548\u679C</p></blockquote>`,11),a=["src"],u=i(`<p>::: danger \u8B66\u544A \u5916\u89C2\u9762\u677F\u914D\u7F6E\u4E2D <code>\u6570\u636E</code>\u4E0E<code>\u63CF\u8FF0</code> \u6570\u636E\u7ED3\u6784\u8981\u5BF9\u5E94\uFF0C\u7ED3\u6784\u9519\u8BEF\u4F1A\u5BFC\u81F4\u5916\u89C2\u9762\u677F\u663E\u793A\u5F02\u5E38\u3002 :::</p><p>::: details \u6837\u4F8B-\u6570\u636E\u9762\u677F</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>export default {
  getData() {
    return {
      //\u9759\u6001\u6570\u636E
      data: [
        { area: &quot;\u5317\u4EAC&quot;, amount: &quot;38558&quot;, category: &quot;\u6587\u5316\u65C5\u6E38&quot; },
        { area: &quot;\u4E0A\u6D77&quot;, amount: &quot;48558&quot;, category: &quot;\u751F\u6001\u73AF\u5883&quot; },
        { area: &quot;\u6E56\u5357&quot;, amount: &quot;98558&quot;, category: &quot;\u533B\u7597\u5065\u5EB7&quot; },
        ...
      ],
    };
  },
  getDataDes() {
    return {
      //\u6570\u636E\u9762\u677F\uFF1A\u4E0D\u652F\u6301\u6570\u636E\u6620\u5C04\u7684\u7EC4\u4EF6\u53EF\u4E0D\u5199sourceDes\u914D\u7F6E
      sourceDes: {
        mapFields: [
          { field: &quot;area&quot;, mapField: &quot;area&quot;, des: &quot;\u533A\u57DF&quot; },
          { field: &quot;amount&quot;, mapField: &quot;amount&quot;, des: &quot;\u91D1\u989D&quot; },
          { field: &quot;category&quot;, mapField: &quot;category&quot;, des: &quot;\u884C\u4E1A&quot; },
        ],
      },
    };
  },
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u5448\u73B0\u6548\u679C</p></blockquote>`,4),t=["src"],c=i(`<p>::: tip \u63D0\u793A \u5F53\u63CF\u8FF0\u4E2D\u4E0D\u63D0\u4F9B sourceDes \u5C5E\u6027\u65F6\uFF0C\u4E0D\u4F1A\u663E\u793A\u6570\u636E\u9762\u677F\uFF1B\u9762\u677F\u914D\u7F6E\u6587\u4EF6\u4E2D\u53EA\u5F00\u653E<code>\u9759\u6001\u6570\u636E</code>\u3001<code>\u6620\u5C04\u5B57\u6BB5\u63CF\u8FF0</code>\u914D\u7F6E\uFF0C\u5176\u5B83\u90FD\u662F\u7EC4\u4EF6\u5E93\u5185\u7F6E\u7684\u4E00\u4E9B\u914D\u7F6E\u884C\u4E3A\u3002 :::</p><p>::: details \u6837\u4F8B-\u4EA4\u4E92\u9762\u677F</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>export default {
  getData() {
    return {};
  },
  getDataDes() {
    return {
      //\u4EA4\u4E92\u9762\u677F\uFF1A\u4E0D\u652F\u6301\u4EA4\u4E92\u7684\u7EC4\u4EF6\u53EF\u4E0D\u5199actionsDes\u914D\u7F6E
      actionsDes: {
        event: [
          {
            name: &quot;click&quot;,
            des: &quot;\u5355\u51FB\u4E8B\u4EF6&quot;,
          },
          ...
        ],
        mapFields: [  //\u975E\u5FC5\u987B
          {
            field: &quot;index&quot;,
            mapField: &quot;&quot;,
            des: &quot;\u884C\u7D22\u5F15&quot;,
          }
        ],
      },
    };
  },
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u5448\u73B0\u6548\u679C</p></blockquote>`,4),o=["src"],b=i(`<p>::: tip \u63D0\u793A \u5F53\u63CF\u8FF0\u4E2D\u4E0D\u63D0\u4F9B actionsDes \u5C5E\u6027\u65F6\uFF0C\u4E0D\u4F1A\u663E\u793A\u4EA4\u4E92\u9762\u677F\uFF1B\u9762\u677F\u914D\u7F6E\u6587\u4EF6\u4E2D\u53EA\u5F00\u653E<code>\u4EA4\u4E92\u884C\u4E3A</code>\u3001<code>\u5168\u5C40\u53C2\u6570\u6620\u5C04</code>\u914D\u7F6E\uFF0C\u5176\u5B83\u90FD\u662F\u7EC4\u4EF6\u5E93\u5185\u7F6E\u7684\u4E00\u4E9B\u914D\u7F6E\u884C\u4E3A\u3002 :::</p><h2 id="\u89C6\u56FE\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u89C6\u56FE\u6587\u4EF6" aria-hidden="true">#</a> \u89C6\u56FE\u6587\u4EF6</h2><p><em>index.vue</em>\u6587\u4EF6\u662F\u7EC4\u4EF6\u7684\u5165\u53E3\u6587\u4EF6\u3002\u4EE5\u4E0B\u63D0\u4F9B\u4E86\u4E00\u4E2A\u793A\u4F8B\u4F9B\u60A8\u53C2\u8003\uFF0C\u5E76\u4ECB\u7ECD\u4E86<em>index.vue</em>\u6587\u4EF6\u4E2D\u7684\u5E38\u7528\u51FD\u6570\uFF0C\u53EF\u4EE5\u6839\u636E\u9700\u8981\u53BB\u5B9E\u73B0\u8FD9\u4E9B\u51FD\u6570\u3002</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code>&lt;template&gt;
  &lt;div :style=&quot;{ ...size }&quot; @click=&quot;click&quot;&gt;
    &lt;div
      v-for=&quot;(item index) in data&quot;
      :key=&quot;index&quot;
      @click=&quot;onClick(index, item)&quot;
    &gt;
      ....
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
import anMixin from &quot;anov-ui/src/components/mixin/component.js&quot;;
export default {
  name: &quot;Table&quot;, //\u7EC4\u4EF6\u540D\u79F0\uFF0C\u91C7\u7528\u5E15\u65AF\u5361(pascal)\u547D\u540D\u6CD5
  data() {
    return {};
  },
  mixins: [anMixin],
  methods: {
    /**
     * \u7EC4\u4EF6\u521D\u59CB\u5316
     */
    init() {},
    /**
     * \u91CD\u65B0\u52A0\u8F7D\u7EC4\u4EF6\uFF0C\u4F1A\u6267\u884C\u52A8\u753B\u7EBF
     */
    reload() {},
    /**
     * \u5237\u65B0\uFF0C\u4FDD\u7559\u4E4B\u524D\u7684\u7F13\u5B58\u5185\u5BB9\uFF0C\u4E00\u822C\u7528\u4E8E\u4FEE\u6539\u6570\u636E\uFF0C\u4E0D\u4F1A\u6267\u884C\u52A8\u753B\u7EBF
     */
    refresh() {},
    /**
     * \u4E3B\u9898\u6539\u53D8\uFF0C\u7EC4\u4EF6\u6267\u884C\u7684\u64CD\u4F5C
     */
    changeTheme() {
      console.log(this.theme); //\u5F53\u524D\u4E3B\u9898
    },
    /**
     * \u5BB9\u5668\u5927\u5C0F\u6539\u53D8\uFF0C\u7EC4\u4EF6\u6267\u884C\u7684\u64CD\u4F5C
     */
    resize() {},
    /**
     * \u9500\u6BC1
     */
    destroy() {},
    /**
     * \u70B9\u51FB\u4E8B\u4EF6
     */
    onClick(index, params) {
      //\u7B2C\u4E00\u4E2A\u53C2\u6570click\u5BF9\u5E94\u7684\u662F\u4EA4\u4E92\u63CF\u8FF0\u4E2D\u7684 event.name
      //\u7B2C\u4E8C\u4E2A\u53C2\u6570\u4E2D index(\u884C\u7D22\u5F15)\u5BF9\u5E94\u7684\u662F\u4EA4\u4E92\u63CF\u8FF0\u4E2D \u5168\u5C40\u53C2\u6570\u6620\u5C04 \u4E2D\u7684index\uFF0Cdata\u662F\u5F53\u524D\u6570\u636E\u884C\u7684\u503C
      this.handleEvent(&quot;click&quot;, { index: index + 1, data: params });
    },
  },
};
&lt;/script&gt;
</code></pre><div class="highlight-lines"><br><br><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6DF7\u5165\u7684<em>mixin/component.js</em>\u63D0\u4F9B\u4E86\u7EC4\u4EF6\u63A5\u6536\u7684\u6570\u636E\uFF0C\u4EE5\u53CA\u901A\u7528\u51FD\u6570\u3002</p><p>::: details \u7EC4\u4EF6\u6570\u636E</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>export default {
  props: {
    option: {
      //\u5916\u89C2\u9762\u677F\u6570\u636E
      type: Object,
    },
    width: {
      type: String,
      default: 440,
    },
    height: {
      type: String,
      default: 246,
    },
    theme: {
      //\u5F53\u524D\u4E3B\u9898
      type: Object,
    },
    data: {}, //\u6570\u636E
  },
  computed: {
    size: function () {
      return {
        width: \`\${this.width}px\`,
        height: \`\${this.height}px\`,
      };
    },
  },
  methods: {
    /**
     * \u4E8B\u4EF6\u5904\u7406\u903B\u8F91
     * @param {*} eventName \u4E8B\u4EF6\u540D\u79F0
     * @param {*} params \u53C2\u6570
     */
    handleEvent(eventName, params = {}) {
      //\u5177\u4F53\u5B9E\u73B0\u903B\u8F91.....
    },
  },
};
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>:::</p><h2 id="\u5BFC\u51FA\u7EC4\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u5BFC\u51FA\u7EC4\u4EF6" aria-hidden="true">#</a> \u5BFC\u51FA\u7EC4\u4EF6</h2><p>\u5BFC\u51FA\u7EC4\u4EF6\u5206\u4E8C\u6B65\uFF1A</p><ol><li>\u9996\u5148\u5728\u7EC4\u4EF6\u76EE\u5F55\u4E0B\u7684 <em>components.json</em> \u6587\u4EF6\u4E2D\u5BFC\u51FA\u7EC4\u4EF6\u3002</li><li>\u7B2C\u4E8C\u6B65\u5728 <em>src/components.json</em> \u6587\u4EF6\u4E2D\u5F15\u5165\u8FD9\u4E2A\u7EC4\u4EF6\u7684 <em>components.json</em> \u6587\u4EF6\u3002</li></ol><p>\u8FD9\u6837\u505A\u7684\u76EE\u7684\uFF0C\u6211\u4EEC\u4E0D\u9700\u8981\u5728\u5165\u53E3\u6587\u4EF6 <em>src/index.js</em> \u4E2D\u624B\u52A8\u5F15\u5165\u5BFC\u51FA\u7684\u7EC4\u4EF6\uFF0C\u901A\u8FC7\u547D\u4EE4\u89E3\u6790 <em>src/components.json</em> \u914D\u7F6E\u7684\u7EC4\u4EF6\u4FE1\u606F\uFF0C\u52A8\u6001\u751F\u6210\u7EC4\u4EF6\u5165\u53E3\u6587\u4EF6\u3002</p><ul><li>\u5728\u7EC4\u4EF6\u76EE\u5F55\u4E0B\u7684 <em>components.json</em> \u6587\u4EF6\u4E2D\u5BFC\u51FA\u7EC4\u4EF6\uFF0C\u683C\u5F0F\u5982\u4E0B\uFF1A</li></ul><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code>{
  &quot;name&quot;: &quot;\u8868\u683C&quot;,
  &quot;other&quot;: {
    &quot;author&quot;: &quot;&quot;,
    &quot;company&quot;: &quot;&quot;,
    &quot;email&quot;: &quot;&quot;,
    &quot;remark&quot;: &quot;&quot;
  },
  &quot;components&quot;: [
    {
      &quot;name&quot;: &quot;Table&quot;, //\u4E0E\u89C6\u56FE\u6587\u4EF6\u4E2D\u7684name\u5BF9\u5E94
      &quot;c_name&quot;: &quot;\u5E38\u89C4\u8868\u683C&quot;,
      &quot;component&quot;: &quot;table/normal/index.vue&quot;,
      &quot;config&quot;: &quot;table/normal/config.js&quot;,
      &quot;view&quot;: {
        &quot;width&quot;: &quot;440px&quot;,
        &quot;height&quot;: &quot;246px&quot;,
        &quot;preview&quot;: &quot;&quot;
      }
    },
    {
      &quot;name&quot;: &quot;TopTable&quot;, //\u4E0E\u89C6\u56FE\u6587\u4EF6\u4E2D\u7684name\u5BF9\u5E94
      &quot;c_name&quot;: &quot;TOP\u8868\u683C&quot;,
      &quot;component&quot;: &quot;table/top/index.vue&quot;,
      &quot;config&quot;: &quot;table/top/config.js&quot;,
      &quot;view&quot;: {
        &quot;width&quot;: &quot;440px&quot;,
        &quot;height&quot;: &quot;246px&quot;,
        &quot;preview&quot;: &quot;&quot;
      }
    }
  ]
}
</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br><br><br><br><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u7B2C\u4E8C\u6B65\u5728 <em>src/components.json</em> \u6587\u4EF6\u4E2D\u5F15\u5165\u8FD9\u4E2A\u7EC4\u4EF6\u7684 <em>components.json</em> \u6587\u4EF6\uFF0C\u683C\u5F0F\u5982\u4E0B\uFF1A</li></ul><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code>[
  {
    &quot;name&quot;: &quot;\u5217\u8868&quot;,
    &quot;icon&quot;: &quot;iconbiaoge&quot;,
    &quot;list&quot;: [
      &quot;components/table/components.json&quot;
      .....
    ]
  },
  {
    &quot;name&quot;: &quot;\u56FE\u8868&quot;,
    &quot;icon&quot;: &quot;icontubiao&quot;,
    &quot;list&quot;: [
      &quot;components/chart/line/components.json&quot;,
      &quot;components/chart/bar/components.json&quot;
    ]
  },
  .....
]
</code></pre><div class="highlight-lines"><br><br><br><br><br><div class="highlight-line">\xA0</div><br><br><br><br><br><br><br><br><br><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>::: tip \u63D0\u793A \u5982\u4E0A <em>src/components.json</em> \u6587\u4EF6\uFF0C\u5B9A\u4E49\u4E86\u4E8C\u4E2A\u7C7B\u522B\uFF1A\u5217\u8868\u3001\u56FE\u8868\uFF0C\u76F8\u540C\u7C7B\u522B\u7684\u7EC4\u4EF6\u5EFA\u8BAE\u653E\u5230\u540C\u4E00\u4E2Alist\u4E0B\u9762\uFF0C\u4E5F\u53EF\u4EE5\u53C2\u8003\u4EE5\u4E0A\u683C\u5F0F\u81EA\u5DF1\u6269\u5C55\u7C7B\u522B\u3002\u8FD9\u91CC\u7684\u5206\u7C7B\u76EE\u524D\u4EC5\u4F5C\u4E3A\u5F00\u53D1\u9636\u6BB5\u7EC4\u4EF6\u5217\u8868\u7684\u5448\u73B0\u3002 :::</p><h2 id="\u5199\u5728\u6700\u540E" tabindex="-1"><a class="header-anchor" href="#\u5199\u5728\u6700\u540E" aria-hidden="true">#</a> \u5199\u5728\u6700\u540E</h2><p>\u6DFB\u52A0\u4E00\u4E2A\u7EC4\u4EF6\uFF0C\u5305\u542B\u4E09\u4E2A\u8981\u70B9\uFF1A\u914D\u7F6E\u6587\u4EF6(config.js)\u3001\u89C6\u56FE\u6587\u4EF6(index.vue)\u3001\u5BFC\u51FA\u7EC4\u4EF6(components.json)\u3002 \u4E09\u8981\u70B9\u6587\u4EF6\u547D\u540D\u5EFA\u8BAE\u53C2\u8003\u4EE5\u4E0A\u89C4\u8303\uFF0C\u4E5F\u53EF\u4EE5\u6839\u636E\u7528\u6237\u4E60\u60EF\u547D\u540D\u3002</p>`,19);function m(n,q){return d(),l("div",null,[r,e("img",{src:n.$withBase("/images/guide/file/panel.png"),style:{width:"350px"},alt:"\u5916\u89C2\u9762\u677F"},null,8,a),u,e("img",{src:n.$withBase("/images/guide/file/source.png"),style:{width:"300px"},alt:"\u6570\u636E\u9762\u677F"},null,8,t),c,e("img",{src:n.$withBase("/images/guide/file/action.png"),style:{width:"300px"},alt:"\u4EA4\u4E92\u9762\u677F"},null,8,o),b])}var g=s(v,[["render",m],["__file","file.html.vue"]]);export{g as default};
