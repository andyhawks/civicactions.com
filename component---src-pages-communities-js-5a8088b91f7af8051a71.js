(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{198:function(e,t,n){"use strict";n.r(t),n.d(t,"communitiesQuery",function(){return p}),n(100);var a=n(0),r=n.n(a),i=n(234),o=n.n(i),s=n(231),l=n.n(s),u=n(213),c=n(235),f=n(220),d=n(301);t.default=function(e){var t=e.data,n=t.markdownRemark,a=t.allMediumPost,i=n.frontmatter,s=i.title,p=i.subtitle,m=i.agile_intro_text,h=i.dkan_intro_text,y=i.agl_logo,v=i.dkan_logo,g=a.group,_=o.a.first(g,function(e){return e}),b=o.a.map(_,function(e,t){return r.a.createElement(d.a,{posts:{post:e}})}),S=y?y.childImageSharp.resolutions:"",w=o.a.last(g,function(e){return e}),E=o.a.map(w,function(e,t){return r.a.createElement(d.a,{posts:{post:e}})}),L=v?v.childImageSharp.resolutions:"";return r.a.createElement(f.a,{heroTitle:s,heroSubtitle:p},r.a.createElement("section",{className:"section section__recent-posts"},r.a.createElement("div",{className:"usa-grid community__wrapper"},r.a.createElement("span",{className:"community__logo"},r.a.createElement(l.a,{resolutions:S})),r.a.createElement(u.a,{title:"Agile Government Leadership",subtitle:m}),b),r.a.createElement("div",{className:"usa-grid"},r.a.createElement(c.a,{button_text:"Visit AGL",link:"https://medium.com/agile-government-leadership",isExternal:!0}))),r.a.createElement("section",{className:"section section__recent-posts right-flipped"},r.a.createElement("div",{className:"usa-grid community__wrapper"},r.a.createElement("span",{className:"community__logo dkan"},r.a.createElement(l.a,{resolutions:L})),r.a.createElement(u.a,{title:"DKAN Open Data Plaform",subtitle:h}),E),r.a.createElement("div",{className:"usa-grid align-right"},r.a.createElement(c.a,{button_text:"Visit DKAN",link:"https://medium.com/dkan-blog",isExternal:!0}))))};var p="2416931207"},213:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function(e){var t=e.title,n=e.subtitle,a=n?r.a.createElement("p",{className:"section__subtitle"},n):"";return r.a.createElement("div",{className:"section__title--wrapper"},r.a.createElement("h2",{className:"section__title"},t),a)}},216:function(e,t,n){var a=n(4),r=n(8),i=n(24),o=/"/g,s=function(e,t,n,a){var r=String(i(e)),s="<"+t;return""!==n&&(s+=" "+n+'="'+String(a).replace(o,"&quot;")+'"'),s+">"+r+"</"+t+">"};e.exports=function(e,t){var n={};n[e]=t(s),a(a.P+a.F*r(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",n)}},217:function(e,t,n){var a=n(13).f,r=Function.prototype,i=/^\s*function ([^ (]*)/;"name"in r||n(14)&&a(r,"name",{configurable:!0,get:function(){try{return(""+this).match(i)[1]}catch(e){return""}}})},218:function(e,t){e.exports={}},219:function(e,t,n){"use strict";n(216)("link",function(e){return function(t){return e(this,"a","href",t)}})},224:function(e,t,n){"use strict";t.__esModule=!0;var a=o(n(245)),r=o(n(255)),i="function"==typeof r.default&&"symbol"==typeof a.default?function(e){return typeof e}:function(e){return e&&"function"==typeof r.default&&e.constructor===r.default&&e!==r.default.prototype?"symbol":typeof e};function o(e){return e&&e.__esModule?e:{default:e}}t.default="function"==typeof r.default&&"symbol"===i(a.default)?function(e){return void 0===e?"undefined":i(e)}:function(e){return e&&"function"==typeof r.default&&e.constructor===r.default&&e!==r.default.prototype?"symbol":void 0===e?"undefined":i(e)}},225:function(e,t,n){"use strict";var a=n(103),r=n(61),i=n(275),o=n(101),s=n(218),l=n(249),u=n(226),c=n(250),f=n(215)("iterator"),d=!([].keys&&"next"in[].keys()),p=function(){return this};e.exports=function(e,t,n,m,h,y,v){l(n,t,m);var g,_,b,S=function(e){if(!d&&e in x)return x[e];switch(e){case"keys":case"values":return function(){return new n(this,e)}}return function(){return new n(this,e)}},w=t+" Iterator",E="values"==h,L=!1,x=e.prototype,k=x[f]||x["@@iterator"]||h&&x[h],N=k||S(h),O=h?E?S("entries"):N:void 0,T="Array"==t&&x.entries||k;if(T&&(b=c(T.call(new e)))!==Object.prototype&&b.next&&(u(b,w,!0),a||"function"==typeof b[f]||o(b,f,p)),E&&k&&"values"!==k.name&&(L=!0,N=function(){return k.call(this)}),a&&!v||!d&&!L&&x[f]||o(x,f,N),s[t]=N,s[w]=p,h)if(g={values:E?N:S("values"),keys:y?N:S("keys"),entries:O},v)for(_ in g)_ in x||i(x,_,g[_]);else r(r.P+r.F*(d||L),t,g);return g}},231:function(e,t,n){"use strict";t.__esModule=!0;var a=c(n(243)),r=c(n(244)),i=c(n(260)),o=c(n(266)),s=c(n(267)),l=c(n(0)),u=c(n(12));function c(e){return e&&e.__esModule?e:{default:e}}var f=function(e){var t=(0,s.default)({},e);return t.responsiveResolution&&(t.resolutions=t.responsiveResolution,delete t.responsiveResolution),t.responsiveSizes&&(t.sizes=t.responsiveSizes,delete t.responsiveSizes),t},d={},p=function(e){var t=f(e),n=t.sizes?t.sizes.src:t.resolutions.src;return!!d[n]||(d[n]=!0,!1)},m=void 0,h=[],y=null,v=function(){if(null!==y)return y;var e="undefined"!=typeof window?window.document.createElement("canvas"):{};return y=!(!e.getContext||!e.getContext("2d"))&&0===e.toDataURL("image/webp").indexOf("data:image/webp")},g=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',n=e.srcSet?'srcset="'+e.srcSet+'" ':"",a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.title?'title="'+e.title+'" ':"",i=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",s=e.height?'height="'+e.height+'" ':"",l=e.opacity?e.opacity:"1";return"<img "+o+s+t+n+i+r+a+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+(e.transitionDelay?e.transitionDelay:"0.5s")+";opacity:"+l+';width:100%;height:100%;object-fit:cover;object-position:center"/>'},_=function(e){var t=e.style,n=e.onLoad,a=(0,o.default)(e,["style","onLoad"]);return l.default.createElement("img",(0,s.default)({},a,{onLoad:n,style:(0,s.default)({position:"absolute",top:0,left:0,transition:"opacity 0.5s",width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},t)}))};_.propTypes={style:u.default.object,onLoad:u.default.func};var b=function(e){function t(n){(0,a.default)(this,t);var i=(0,r.default)(this,e.call(this,n)),o=!0,s=!0,l=!1;return!p(n)&&"undefined"!=typeof window&&window.IntersectionObserver&&(o=!1,s=!1,l=!0),"undefined"==typeof window&&(o=!1,s=!1),i.state={isVisible:o,imgLoaded:s,IOSupported:l},i.handleRef=i.handleRef.bind(i),i}return(0,i.default)(t,e),t.prototype.handleRef=function(e){var t=this;this.state.IOSupported&&e&&function(e,t){(void 0===m&&"undefined"!=typeof window&&window.IntersectionObserver&&(m=new window.IntersectionObserver(function(e){e.forEach(function(e){h.forEach(function(t){t[0]===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(m.unobserve(t[0]),t[1]())})})},{rootMargin:"200px"})),m).observe(e),h.push([e,t])}(e,function(){t.setState({isVisible:!0,imgLoaded:!1})})},t.prototype.render=function(){var e,t=this,n=f(this.props),a=n.title,r=n.alt,i=n.className,o=n.outerWrapperClassName,u=n.style,c=void 0===u?{}:u,d=n.imgStyle,p=void 0===d?{}:d,m=n.placeholderStyle,h=void 0===m?{}:m,y=n.sizes,b=n.resolutions,S=n.backgroundColor,w=n.Tag;e="boolean"==typeof S?"lightgray":S;var E=(0,s.default)({opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s"},p,h),L=(0,s.default)({opacity:this.state.imgLoaded||!1===this.props.fadeIn?1:0},p);if(y){var x=y;return x.srcWebp&&x.srcSetWebp&&v()&&(x.src=x.srcWebp,x.srcSet=x.srcSetWebp),l.default.createElement(w,{className:(o||"")+" gatsby-image-outer-wrapper",style:{position:"absolute"===c.position?"initial":"relative"}},l.default.createElement(w,{className:(i||"")+" gatsby-image-wrapper",style:(0,s.default)({position:"relative",overflow:"hidden"},c),ref:this.handleRef},l.default.createElement(w,{style:{width:"100%",paddingBottom:100/x.aspectRatio+"%"}}),x.base64&&l.default.createElement(_,{alt:r,title:a,src:x.base64,style:E}),x.tracedSVG&&l.default.createElement(_,{alt:r,title:a,src:x.tracedSVG,style:E}),e&&l.default.createElement(w,{title:a,style:{backgroundColor:e,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.35s",right:0,left:0}}),this.state.isVisible&&l.default.createElement(_,{alt:r,title:a,srcSet:x.srcSet,src:x.src,sizes:x.sizes,style:L,onLoad:function(){t.state.IOSupported&&t.setState({imgLoaded:!0}),t.props.onLoad&&t.props.onLoad()}}),l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,s.default)({alt:r,title:a},x))}})))}if(b){var k=b,N=(0,s.default)({position:"relative",overflow:"hidden",display:"inline-block",width:k.width,height:k.height},c);return"inherit"===c.display&&delete N.display,k.srcWebp&&k.srcSetWebp&&v()&&(k.src=k.srcWebp,k.srcSet=k.srcSetWebp),l.default.createElement(w,{className:(o||"")+" gatsby-image-outer-wrapper",style:{position:"absolute"===c.position?"initial":"relative"}},l.default.createElement(w,{className:(i||"")+" gatsby-image-wrapper",style:N,ref:this.handleRef},k.base64&&l.default.createElement(_,{alt:r,title:a,src:k.base64,style:E}),k.tracedSVG&&l.default.createElement(_,{alt:r,title:a,src:k.tracedSVG,style:E}),e&&l.default.createElement(w,{title:a,style:{backgroundColor:e,width:k.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:k.height}}),this.state.isVisible&&l.default.createElement(_,{alt:r,title:a,width:k.width,height:k.height,srcSet:k.srcSet,src:k.src,style:L,onLoad:function(){t.setState({imgLoaded:!0}),t.props.onLoad&&t.props.onLoad()}}),l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,s.default)({alt:r,title:a,width:k.width,height:k.height},k))}})))}return null},t}(l.default.Component);b.defaultProps={fadeIn:!0,alt:"",Tag:"div"},b.propTypes={responsiveResolution:u.default.object,responsiveSizes:u.default.object,resolutions:u.default.object,sizes:u.default.object,fadeIn:u.default.bool,title:u.default.string,alt:u.default.string,className:u.default.oneOfType([u.default.string,u.default.object]),outerWrapperClassName:u.default.oneOfType([u.default.string,u.default.object]),style:u.default.object,imgStyle:u.default.object,placeholderStyle:u.default.object,position:u.default.string,backgroundColor:u.default.oneOfType([u.default.string,u.default.bool]),onLoad:u.default.func,Tag:u.default.string},t.default=b},243:function(e,t,n){"use strict";t.__esModule=!0,t.default=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},244:function(e,t,n){"use strict";t.__esModule=!0;var a,r=(a=n(224))&&a.__esModule?a:{default:a};t.default=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==(void 0===t?"undefined":(0,r.default)(t))&&"function"!=typeof t?e:t}},245:function(e,t,n){e.exports={default:n(246),__esModule:!0}},246:function(e,t,n){n(247),n(251),e.exports=n(271).f("iterator")},247:function(e,t,n){"use strict";var a=n(248)(!0);n(225)(String,"String",function(e){this._t=String(e),this._i=0},function(){var e,t=this._t,n=this._i;return n>=t.length?{value:void 0,done:!0}:(e=a(t,n),this._i+=e.length,{value:e,done:!1})})},248:function(e,t,n){var a=n(65),r=n(105);e.exports=function(e){return function(t,n){var i,o,s=String(r(t)),l=a(n),u=s.length;return l<0||l>=u?e?"":void 0:(i=s.charCodeAt(l))<55296||i>56319||l+1===u||(o=s.charCodeAt(l+1))<56320||o>57343?e?s.charAt(l):i:e?s.slice(l,l+2):o-56320+(i-55296<<10)+65536}}},249:function(e,t,n){"use strict";var a=n(104),r=n(102),i=n(226),o={};n(101)(o,n(215)("iterator"),function(){return this}),e.exports=function(e,t,n){e.prototype=a(o,{next:r(1,n)}),i(e,t+" Iterator")}},250:function(e,t,n){var a=n(62),r=n(272),i=n(66)("IE_PROTO"),o=Object.prototype;e.exports=Object.getPrototypeOf||function(e){return e=r(e),a(e,i)?e[i]:"function"==typeof e.constructor&&e instanceof e.constructor?e.constructor.prototype:e instanceof Object?o:null}},251:function(e,t,n){n(252);for(var a=n(34),r=n(101),i=n(218),o=n(215)("toStringTag"),s="CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","),l=0;l<s.length;l++){var u=s[l],c=a[u],f=c&&c.prototype;f&&!f[o]&&r(f,o,u),i[u]=i.Array}},252:function(e,t,n){"use strict";var a=n(253),r=n(254),i=n(218),o=n(63);e.exports=n(225)(Array,"Array",function(e,t){this._t=o(e),this._i=0,this._k=t},function(){var e=this._t,t=this._k,n=this._i++;return!e||n>=e.length?(this._t=void 0,r(1)):r(0,"keys"==t?n:"values"==t?e[n]:[n,e[n]])},"values"),i.Arguments=i.Array,a("keys"),a("values"),a("entries")},253:function(e,t){e.exports=function(){}},254:function(e,t){e.exports=function(e,t){return{value:t,done:!!e}}},255:function(e,t,n){e.exports={default:n(256),__esModule:!0}},256:function(e,t,n){n(274),n(257),n(258),n(259),e.exports=n(23).Symbol},257:function(e,t){},258:function(e,t,n){n(227)("asyncIterator")},259:function(e,t,n){n(227)("observable")},260:function(e,t,n){"use strict";t.__esModule=!0;var a=o(n(261)),r=o(n(265)),i=o(n(224));function o(e){return e&&e.__esModule?e:{default:e}}t.default=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+(void 0===t?"undefined":(0,i.default)(t)));e.prototype=(0,r.default)(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(a.default?(0,a.default)(e,t):e.__proto__=t)}},261:function(e,t,n){e.exports={default:n(262),__esModule:!0}},262:function(e,t,n){n(263),e.exports=n(23).Object.setPrototypeOf},263:function(e,t,n){var a=n(61);a(a.S,"Object",{setPrototypeOf:n(264).set})},264:function(e,t,n){var a=n(42),r=n(44),i=function(e,t){if(r(e),!a(t)&&null!==t)throw TypeError(t+": can't set as prototype!")};e.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(e,t,a){try{(a=n(107)(Function.call,n(276).f(Object.prototype,"__proto__").set,2))(e,[]),t=!(e instanceof Array)}catch(e){t=!0}return function(e,n){return i(e,n),t?e.__proto__=n:a(e,n),e}}({},!1):void 0),check:i}},265:function(e,t,n){e.exports={default:n(106),__esModule:!0}},266:function(e,t,n){"use strict";t.__esModule=!0,t.default=function(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}},267:function(e,t,n){"use strict";t.__esModule=!0;var a,r=(a=n(268))&&a.__esModule?a:{default:a};t.default=r.default||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}},268:function(e,t,n){e.exports={default:n(277),__esModule:!0}},284:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function(e){var t,n=e.teaserDate,a=e.teaserImage,i=e.teaserTitle,o=e.teaserText,s=e.teaserLink,l=e.teaserClass,u=(e.teaserType,"teaser"),c="";return l&&(u="teaser "+l),a&&(c=r.a.createElement("div",{className:"teaser__image--wrapper"},r.a.createElement("img",{src:a,alt:i}))),o&&(t=r.a.createElement("p",{className:"teaser__text"}," ",o," ")),r.a.createElement("div",{className:u},c,r.a.createElement("div",{className:"teaser__date"}," ",n," "),r.a.createElement("h3",{className:"teaser__title"}," ",i," "),t,r.a.createElement("div",{className:"teaser__link"}," ",r.a.createElement("a",{href:s},"Read More")," "))}},301:function(e,t,n){"use strict";n(100);var a=n(0),r=n.n(a),i=n(234),o=n.n(i),s=n(284);function l(e){var t=e.single,n="https://medium.com/civicactions/"+t.uniqueSlug,a=t.createdAt,i=t.title;return r.a.createElement(s.a,{teaserDate:a,teaserTitle:i,teaserLink:n})}var u=function(e){var t=e.data;return o.a.map(t,function(e){return o.a.map(e,function(e,t){return r.a.createElement("li",{key:t,className:"medium--teaser__item teaser__item"},r.a.createElement(l,{key:t,single:e.node}))})})};t.a=function(e){var t=e.posts;return o.a.map(t,function(e,t){return r.a.createElement("ul",{key:t,className:"medium--teasers teaser--wrapper"},r.a.createElement(u,{data:{article:e}}))})}}}]);
//# sourceMappingURL=component---src-pages-communities-js-5a8088b91f7af8051a71.js.map