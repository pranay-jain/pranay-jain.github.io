(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"9eSz":function(e,t,a){"use strict";var r=a("TqRt");t.__esModule=!0,t.default=void 0;var i,n=r(a("PJYZ")),o=r(a("VbXa")),s=r(a("8OQS")),c=r(a("pVnL")),l=r(a("q1tI")),d=r(a("17x9")),u=function(e){var t=(0,c.default)({},e),a=t.resolutions,r=t.sizes,i=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),i&&(t.loading="eager"),t.fluid&&(t.fluid=w([].concat(t.fluid))),t.fixed&&(t.fixed=w([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(y&&!!window.matchMedia(t).matches)},p=function(e){var t=e.fluid,a=e.fixed,r=h(t||a||[]);return r&&r.src},h=function(e){if(y&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t];var a=e.findIndex((function(e){return void 0===e.media}));if(-1!==a)return e[a]}return e[0]},b=Object.create({}),m=function(e){var t=u(e),a=p(t);return b[a]||!1},g="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,y="undefined"!=typeof window,O=y&&window.IntersectionObserver,v=new WeakMap;function j(e){return e.map((function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return l.default.createElement(l.default.Fragment,{key:t},r&&l.default.createElement("source",{type:"image/webp",media:i,srcSet:r,sizes:n}),a&&l.default.createElement("source",{media:i,srcSet:a,sizes:n}))}))}function w(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function x(e){return e.map((function(e){var t=e.src,a=e.media,r=e.tracedSVG;return l.default.createElement("source",{key:t,media:a,srcSet:r})}))}function S(e){return e.map((function(e){var t=e.src,a=e.media,r=e.base64;return l.default.createElement("source",{key:t,media:a,srcSet:r})}))}function k(e,t){var a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(t?r:a)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var E=function(e,t){var a=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver((function(e){e.forEach((function(e){if(v.has(e.target)){var t=v.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),v.delete(e.target),t())}}))}),{rootMargin:"200px"})),i);return a&&(a.observe(e),v.set(e,t)),function(){a.unobserve(e),v.delete(e)}},I=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",s=e.height?'height="'+e.height+'" ':"",c=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",l=e.loading?'loading="'+e.loading+'" ':"",d=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?k(e,!0):"")+k(e)})).join("")+"<img "+l+o+s+a+r+t+n+i+c+d+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},R=l.default.forwardRef((function(e,t){var a=e.src,r=e.imageVariants,i=e.generateSources,n=e.spreadProps,o=e.ariaHidden,s=l.default.createElement(C,(0,c.default)({ref:t,src:a},n,{ariaHidden:o}));return r.length>1?l.default.createElement("picture",null,i(r),s):s})),C=l.default.forwardRef((function(e,t){var a=e.sizes,r=e.srcSet,i=e.src,n=e.style,o=e.onLoad,d=e.onError,u=e.loading,f=e.draggable,p=e.ariaHidden,h=(0,s.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return l.default.createElement("img",(0,c.default)({"aria-hidden":p,sizes:a,srcSet:r,src:i},h,{onLoad:o,onError:d,ref:t,loading:u,draggable:f,style:(0,c.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))}));C.propTypes={style:d.default.object,onError:d.default.func,onLoad:d.default.func};var L=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=y&&m(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!g&&O&&!a.isCritical&&!a.seenBefore;var r=a.isCritical||y&&(g||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn,isHydrated:!1},a.imageRef=l.default.createRef(),a.placeholderRef=t.placeholderRef||l.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,n.default)(a)),a.handleRef=a.handleRef.bind((0,n.default)(a)),a}(0,o.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.setState({isHydrated:y}),this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:m(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=E(e,(function(){var e=m(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),(a=p(t))&&(b[a]=!0),this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,n=void 0===i?{}:i,o=e.imgStyle,s=void 0===o?{}:o,d=e.placeholderStyle,f=void 0===d?{}:d,p=e.placeholderClassName,b=e.fluid,m=e.fixed,g=e.backgroundColor,y=e.durationFadeIn,O=e.Tag,v=e.itemProp,w=e.loading,k=e.draggable,E=b||m;if(!E)return null;var L=!1===this.state.fadeIn||this.state.imgLoaded,z=!0===this.state.fadeIn&&!this.state.imgCached,T=(0,c.default)({opacity:L?1:0,transition:z?"opacity "+y+"ms":"none"},s),P="boolean"==typeof g?"lightgray":g,V={transitionDelay:y+"ms"},W=(0,c.default)({opacity:this.state.imgLoaded?0:1},z&&V,s,f),A={title:t,alt:this.state.isVisible?"":a,style:W,className:p,itemProp:v},H=this.state.isHydrated?h(E):E[0];if(b)return l.default.createElement(O,{className:(r||"")+" gatsby-image-wrapper",style:(0,c.default)({position:"relative",overflow:"hidden",maxWidth:H.maxWidth?H.maxWidth+"px":null,maxHeight:H.maxHeight?H.maxHeight+"px":null},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(H.srcSet)},l.default.createElement(O,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/H.aspectRatio+"%"}}),P&&l.default.createElement(O,{"aria-hidden":!0,title:t,style:(0,c.default)({backgroundColor:P,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},z&&V)}),H.base64&&l.default.createElement(R,{ariaHidden:!0,ref:this.placeholderRef,src:H.base64,spreadProps:A,imageVariants:E,generateSources:S}),H.tracedSVG&&l.default.createElement(R,{ariaHidden:!0,ref:this.placeholderRef,src:H.tracedSVG,spreadProps:A,imageVariants:E,generateSources:x}),this.state.isVisible&&l.default.createElement("picture",null,j(E),l.default.createElement(C,{alt:a,title:t,sizes:H.sizes,src:H.src,crossOrigin:this.props.crossOrigin,srcSet:H.srcSet,style:T,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v,loading:w,draggable:k})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:I((0,c.default)({alt:a,title:t,loading:w},H,{imageVariants:E}))}}));if(m){var N=(0,c.default)({position:"relative",overflow:"hidden",display:"inline-block",width:H.width,height:H.height},n);return"inherit"===n.display&&delete N.display,l.default.createElement(O,{className:(r||"")+" gatsby-image-wrapper",style:N,ref:this.handleRef,key:"fixed-"+JSON.stringify(H.srcSet)},P&&l.default.createElement(O,{"aria-hidden":!0,title:t,style:(0,c.default)({backgroundColor:P,width:H.width,opacity:this.state.imgLoaded?0:1,height:H.height},z&&V)}),H.base64&&l.default.createElement(R,{ariaHidden:!0,ref:this.placeholderRef,src:H.base64,spreadProps:A,imageVariants:E,generateSources:S}),H.tracedSVG&&l.default.createElement(R,{ariaHidden:!0,ref:this.placeholderRef,src:H.tracedSVG,spreadProps:A,imageVariants:E,generateSources:x}),this.state.isVisible&&l.default.createElement("picture",null,j(E),l.default.createElement(C,{alt:a,title:t,width:H.width,height:H.height,sizes:H.sizes,src:H.src,crossOrigin:this.props.crossOrigin,srcSet:H.srcSet,style:T,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v,loading:w,draggable:k})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:I((0,c.default)({alt:a,title:t,loading:w},H,{imageVariants:E}))}}))}return null},t}(l.default.Component);L.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var z=d.default.shape({width:d.default.number.isRequired,height:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string}),T=d.default.shape({aspectRatio:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,sizes:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string,maxWidth:d.default.number,maxHeight:d.default.number});function P(e){return function(t,a,r){var i;if(!t.fixed&&!t.fluid)throw new Error("The prop `fluid` or `fixed` is marked as required in `"+r+"`, but their values are both `undefined`.");d.default.checkPropTypes(((i={})[a]=e,i),t,"prop",r)}}L.propTypes={resolutions:z,sizes:T,fixed:P(d.default.oneOfType([z,d.default.arrayOf(z)])),fluid:P(d.default.oneOfType([T,d.default.arrayOf(T)])),fadeIn:d.default.bool,durationFadeIn:d.default.number,title:d.default.string,alt:d.default.string,className:d.default.oneOfType([d.default.string,d.default.object]),critical:d.default.bool,crossOrigin:d.default.oneOfType([d.default.string,d.default.bool]),style:d.default.object,imgStyle:d.default.object,placeholderStyle:d.default.object,placeholderClassName:d.default.string,backgroundColor:d.default.oneOfType([d.default.string,d.default.bool]),onLoad:d.default.func,onError:d.default.func,onStartLoad:d.default.func,Tag:d.default.string,itemProp:d.default.string,loading:d.default.oneOf(["auto","lazy","eager"]),draggable:d.default.bool};var V=L;t.default=V},RXBc:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return M}));var r=a("q1tI"),i=a.n(r),n=a("2A+t"),o=a("MXbp"),s=a("izhR"),c=a("7O5W"),l=a("17x9"),d=a.n(l);function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function h(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(Object(a),!0).forEach((function(t){f(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function b(e,t){if(null==e)return{};var a,r,i=function(e,t){if(null==e)return{};var a,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}function m(e){return function(e){if(Array.isArray(e)){for(var t=0,a=new Array(e.length);t<e.length;t++)a[t]=e[t];return a}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function g(e){return t=e,(t-=0)==t?e:(e=e.replace(/[\-_\s]+(.)?/g,(function(e,t){return t?t.toUpperCase():""}))).substr(0,1).toLowerCase()+e.substr(1);var t}function y(e){return e.split(";").map((function(e){return e.trim()})).filter((function(e){return e})).reduce((function(e,t){var a,r=t.indexOf(":"),i=g(t.slice(0,r)),n=t.slice(r+1).trim();return i.startsWith("webkit")?e[(a=i,a.charAt(0).toUpperCase()+a.slice(1))]=n:e[i]=n,e}),{})}var O=!1;try{O=!0}catch(U){}function v(e){return null===e?null:"object"===u(e)&&e.prefix&&e.iconName?e:Array.isArray(e)&&2===e.length?{prefix:e[0],iconName:e[1]}:"string"==typeof e?{prefix:"fas",iconName:e}:void 0}function j(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?f({},e,t):{}}function w(e){var t=e.forwardedRef,a=b(e,["forwardedRef"]),r=a.icon,i=a.mask,n=a.symbol,o=a.className,s=a.title,l=v(r),d=j("classes",[].concat(m(function(e){var t,a=e.spin,r=e.pulse,i=e.fixedWidth,n=e.inverse,o=e.border,s=e.listItem,c=e.flip,l=e.size,d=e.rotation,u=e.pull,p=(f(t={"fa-spin":a,"fa-pulse":r,"fa-fw":i,"fa-inverse":n,"fa-border":o,"fa-li":s,"fa-flip-horizontal":"horizontal"===c||"both"===c,"fa-flip-vertical":"vertical"===c||"both"===c},"fa-".concat(l),null!=l),f(t,"fa-rotate-".concat(d),null!=d&&0!==d),f(t,"fa-pull-".concat(u),null!=u),f(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(p).map((function(e){return p[e]?e:null})).filter((function(e){return e}))}(a)),m(o.split(" ")))),u=j("transform","string"==typeof a.transform?c.parse.transform(a.transform):a.transform),p=j("mask",v(i)),g=Object(c.icon)(l,h({},d,{},u,{},p,{symbol:n,title:s}));if(!g)return function(){var e;!O&&console&&"function"==typeof console.error&&(e=console).error.apply(e,arguments)}("Could not find icon",l),null;var y=g.abstract,S={ref:t};return Object.keys(a).forEach((function(e){w.defaultProps.hasOwnProperty(e)||(S[e]=a[e])})),x(y[0],S)}w.displayName="FontAwesomeIcon",w.propTypes={border:d.a.bool,className:d.a.string,mask:d.a.oneOfType([d.a.object,d.a.array,d.a.string]),fixedWidth:d.a.bool,inverse:d.a.bool,flip:d.a.oneOf(["horizontal","vertical","both"]),icon:d.a.oneOfType([d.a.object,d.a.array,d.a.string]),listItem:d.a.bool,pull:d.a.oneOf(["right","left"]),pulse:d.a.bool,rotation:d.a.oneOf([0,90,180,270]),size:d.a.oneOf(["lg","xs","sm","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:d.a.bool,symbol:d.a.oneOfType([d.a.bool,d.a.string]),title:d.a.string,transform:d.a.oneOfType([d.a.string,d.a.object]),swapOpacity:d.a.bool},w.defaultProps={border:!1,className:"",mask:null,fixedWidth:!1,inverse:!1,flip:null,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,symbol:!1,title:"",transform:null,swapOpacity:!1};var x=function e(t,a){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"==typeof a)return a;var i=(a.children||[]).map((function(a){return e(t,a)})),n=Object.keys(a.attributes||{}).reduce((function(e,t){var r=a.attributes[t];switch(t){case"class":e.attrs.className=r,delete a.attributes.class;break;case"style":e.attrs.style=y(r);break;default:0===t.indexOf("aria-")||0===t.indexOf("data-")?e.attrs[t.toLowerCase()]=r:e.attrs[g(t)]=r}return e}),{attrs:{}}),o=r.style,s=void 0===o?{}:o,c=b(r,["style"]);return n.attrs.style=h({},n.attrs.style,{},s),t.apply(void 0,[a.tag,h({},n.attrs,{},c)].concat(m(i)))}.bind(null,i.a.createElement),S=a("Wbzz"),k=a("9eSz"),E=a.n(k),I=a("oCA+"),R={display:"block",textDecoration:"none",marginY:3,color:"text",fontFamily:"heading"},C=function(e){var t=e.icon,a=e.name,r=e.url;e.external;return Object(n.c)("div",{sx:R},Object(n.c)(s.d,{href:r,sx:Object.assign({},I.a,{paddingY:1,color:"text",":hover":Object.assign({color:"primary"},I.a[":hover"])}),target:"__blank"},Object(n.c)(w,{icon:t,sx:{fontSize:0}}),Object(n.c)("span",{sx:{fontSize:2,marginLeft:2}},a)))},L=function(e){var t=e.resp,a=Object(S.c)("2424021017");return t?Object(n.c)(z,{data:a}):Object(n.c)(T,{data:a})},z=function(e){var t=e.data,a=Object.assign({},I.a,{marginLeft:2,fontSize:2,fontWeight:"bold"});return Object(n.c)(s.a,{sx:{display:["block","none","none"],marginBottom:5}},Object(n.c)(s.c,{sx:{alignItems:"center"}},Object(n.c)(E.a,{fixed:t.smImg.childImageSharp.fixed,sx:{borderRadius:"100%",marginRight:3}}),Object(n.c)(s.c,{sx:{justifyContent:"space-between",width:"100%"}},Object(n.c)(s.c,null,Object(n.c)(s.d,{sx:a,href:"cv_pranay-jain.pdf",target:"__blank"},"CV"),Object(n.c)(s.d,{sx:a,href:"mailto:pranayjain1117@gmail.com"},"Email")),Object(n.c)(s.c,null,Object(n.c)(s.d,{sx:Object.assign({},a,{border:"none"}),href:"https://www.linkedin.com/in/pranayjain1/"},Object(n.c)(w,{icon:["fab","linkedin"],sx:{fontSize:2}})),Object(n.c)(s.d,{sx:Object.assign({},a,{border:"none"}),href:"http://github.com/pranay-jain/"},Object(n.c)(w,{icon:["fab","github"],sx:{fontSize:2}}))))))},T=function(e){var t=e.data;return Object(n.c)(s.a,{sx:{display:["none","block","block"],width:"20%",maxWidth:600,paddingY:4}},Object(n.c)(E.a,{fixed:t.bigImg.childImageSharp.fixed,sx:{boxShadow:"4px 4px 4px 0 #eaeaea",marginBottom:4}}),Object(n.c)(s.c,{sx:R},Object(n.c)(w,{icon:["fas","map-marked-alt"],sx:{fontSize:0}}),Object(n.c)(s.e,{as:"span",sx:{fontSize:2,marginLeft:2,fontWeight:"medium"}},"Vancouver, BC")),Object(n.c)(C,{name:"Curriculum Vitae",icon:["fas","file-pdf"],url:"cv_pranay-jain.pdf"}),Object(n.c)(C,{name:"Email",icon:["fas","envelope"],url:"mailto:pranayjain1117@gmail.com"}),Object(n.c)(C,{name:"Linkedin",icon:["fab","linkedin"],url:"https://www.linkedin.com/in/pranayjain1/"}),Object(n.c)(C,{name:"Github",icon:["fab","github"],url:"http://github.com/pranay-jain/"}))},P=function(e){var t=e.title,a=e.description,r=e.tags,i=e.linkTitle,c=e.linkHref,l=e.ext,d=S.a;return l&&(d=s.d),Object(n.c)(s.a,{sx:{marginBottom:5}},Object(n.c)(o.b.h5,{sx:{fontWeight:"medium",margin:0}},t),Object(n.c)(s.a,{sx:{marginY:2}},r.map((function(e){return Object(n.c)("span",{sx:{backgroundColor:"muted",padding:1,fontSize:0,color:"highlight",borderRadius:4,marginRight:1}},e)}))),Object(n.c)(s.e,{sx:{fontSize:1,marginBottom:3}},a||""),Object(n.c)(d,{to:c,href:c,sx:Object.assign({},I.a,{fontSize:0,fontWeight:"600"}),target:"__blank"},i))};function V(){return Object(n.c)(s.a,null,Object(n.c)(P,{title:"Socioeconomic Determinants of Health and COVID-19 Outcomes",tags:["Research","Data Science"],description:"Using publicly available county-level datasets in the US, we identified key socio-economic factors influencing susceptibility of a population to COVID-19. We focused this study on 6 socioeconomic determinants of health: education, unemployment, income, rural-urban classification, access to hospital beds and access to primary care physicians.",linkTitle:"VIEW PAPER",linkHref:"socioeconomic-covid.pdf",ext:!0}),Object(n.c)(P,{title:"Build A City",description:["Re-imagining the classic block-stacking experience with a virtual twist. An interactive multiplayer game which lets players build a city collaboratively using real world blocks and witnessing the city being constructed on a screen. Built as an OOH installation with the client ",Object(n.c)(s.d,{href:"https://www.thinkingbox.com/",target:"__blank",sx:Object.assign({},I.a,{color:"inherit"})},"Thinkingbox"),"."],tags:["Game Development","Mixed Reality","Unity"],linkTitle:"VIEW CASE STUDY",linkHref:"/buildacity/"}),Object(n.c)(P,{title:"Workaholic",description:"Workaholic uses the best health practices and reminds you in well thought-out intervals to practice ergonomic activities that help improve your health as you work.",tags:["Full-Stack Development","Under Construction"],linkTitle:"VIEW CASE STUDY",linkHref:"/workaholic/"}))}var W=a("JwsL"),A=function(e){var t=e.title;return Object(n.c)("div",null,Object(n.c)(o.b.h6,{sx:{marginTop:5,marginBottom:1}},t),Object(n.c)(s.b,{sx:{marginBottom:4}}))},H=function(e){var t=e.href,a=e.children;return Object(n.c)(s.d,{href:t,sx:I.a,target:"__blank"},a)};function N(){return Object(n.c)("div",{sx:{width:["90%","80%","60%"],margin:"auto",paddingTop:[2,5,5]}},Object(n.c)(s.c,{sx:{justifyContent:"space-between"}},Object(n.c)(s.a,{sx:{width:["100%","70%","70%"],paddingTop:4}},Object(n.c)(L,{resp:!0}),Object(n.c)(o.b.h1,{sx:{margin:0,fontWeight:"400"}},"Pranay Jain"),Object(n.c)(A,{title:"BACKGROUND"}),Object(n.c)(o.b.p,null,"I am a recent undergraduate from the University of British Columbia where I studied Computer Science and Mathematics. My research interests lie at the intersection of Algorithmic Game Theory and Artificial Intelligence. I currently work at the UBC"," ",Object(n.c)(H,{href:"https://www.cs.ubc.ca/cs-research/lci"},"Lab for Computational Intelligence"),", where I'm fortunate to be advised by"," ",Object(n.c)(s.d,{href:"https://www.cs.ubc.ca/~kevinlb/",sx:I.a},"Kevin Leyton-Brown"),"."),Object(n.c)(o.b.p,null,"I've previous experience as a full-stack software developer and have worked with a few startups to build their products. Some of them include ",Object(n.c)(H,{href:"https://dapperlabs.com"},"Dapper Labs"),","," ",Object(n.c)(H,{href:"https://collabware.com/"},"Collabware"),","," ",Object(n.c)(H,{href:"http://vitay.io/"},"Vitay")," and"," ",Object(n.c)(H,{href:"http://featherx.ai"},"FeatherX"),"."),Object(n.c)(s.a,{sx:{marginY:5}},Object(n.c)(A,{title:"RESEARCH"}),"My current research relates to the"," ",Object(n.c)(H,{href:"https://www.fcc.gov/about-fcc/fcc-initiatives/incentive-auctions"},"FCC Incentive Auction"," "),"that was designed to reallocate radio spectrum from less to more valuable uses. My work focusses on creating a generative model that produces instances of auction settings using little historical data. An 'auction setting' is a set of inputs needed for describing the results of an auction beyond the auction’s rules. In the case of spectrum auctions, this can be represented in the form of a constraint graph that models the spatial distribution of bidders and possible constraints on allocations. I've developed a generative model that produces such auction settings and can be used for benchmarking and comparing auction designs empirically."),Object(n.c)(s.a,{sx:{marginY:5}},Object(n.c)(A,{title:"SELECTED PROJECTS"}),Object(n.c)(V,null))),Object(n.c)(L,{resp:!1})),Object(n.c)(W.a,null))}var _=a("qhky"),B=a("8tEE"),D=a("wHSu");a("+EN/");function M(){return c.library.add(B.a,D.a),i.a.createElement(i.a.Fragment,null,i.a.createElement(_.a,null,i.a.createElement("meta",{charSet:"utf-8"}),i.a.createElement("title",null,"Pranay Jain")),i.a.createElement(N,null))}}}]);
//# sourceMappingURL=component---src-pages-index-js-70a974dadf8a97af2450.js.map