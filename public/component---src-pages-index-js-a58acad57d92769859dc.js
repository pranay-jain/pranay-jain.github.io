(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"9eSz":function(e,t,r){"use strict";var a=r("TqRt");t.__esModule=!0,t.default=void 0;var i,n=a(r("PJYZ")),o=a(r("VbXa")),s=a(r("8OQS")),c=a(r("pVnL")),l=a(r("q1tI")),d=a(r("17x9")),u=function(e){var t=(0,c.default)({},e),r=t.resolutions,a=t.sizes,i=t.critical;return r&&(t.fixed=r,delete t.resolutions),a&&(t.fluid=a,delete t.sizes),i&&(t.loading="eager"),t.fluid&&(t.fluid=j([].concat(t.fluid))),t.fixed&&(t.fixed=j([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(y&&!!window.matchMedia(t).matches)},p=function(e){var t=e.fluid,r=e.fixed,a=g(t||r||[]);return a&&a.src},g=function(e){if(y&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t];var r=e.findIndex((function(e){return void 0===e.media}));if(-1!==r)return e[r]}return e[0]},b=Object.create({}),h=function(e){var t=u(e),r=p(t);return b[r]||!1},m="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,y="undefined"!=typeof window,O=y&&window.IntersectionObserver,v=new WeakMap;function w(e){return e.map((function(e){var t=e.src,r=e.srcSet,a=e.srcSetWebp,i=e.media,n=e.sizes;return l.default.createElement(l.default.Fragment,{key:t},a&&l.default.createElement("source",{type:"image/webp",media:i,srcSet:a,sizes:n}),r&&l.default.createElement("source",{media:i,srcSet:r,sizes:n}))}))}function j(e){var t=[],r=[];return e.forEach((function(e){return(e.media?t:r).push(e)})),[].concat(t,r)}function S(e){return e.map((function(e){var t=e.src,r=e.media,a=e.tracedSVG;return l.default.createElement("source",{key:t,media:r,srcSet:a})}))}function x(e){return e.map((function(e){var t=e.src,r=e.media,a=e.base64;return l.default.createElement("source",{key:t,media:r,srcSet:a})}))}function k(e,t){var r=e.srcSet,a=e.srcSetWebp,i=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(t?a:r)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var E=function(e,t){var r=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver((function(e){e.forEach((function(e){if(v.has(e.target)){var t=v.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),v.delete(e.target),t())}}))}),{rootMargin:"200px"})),i);return r&&(r.observe(e),v.set(e,t)),function(){r.unobserve(e),v.delete(e)}},I=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',r=e.sizes?'sizes="'+e.sizes+'" ':"",a=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",s=e.height?'height="'+e.height+'" ':"",c=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",l=e.loading?'loading="'+e.loading+'" ':"",d=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?k(e,!0):"")+k(e)})).join("")+"<img "+l+o+s+r+a+t+n+i+c+d+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},R=l.default.forwardRef((function(e,t){var r=e.src,a=e.imageVariants,i=e.generateSources,n=e.spreadProps,o=e.ariaHidden,s=l.default.createElement(L,(0,c.default)({ref:t,src:r},n,{ariaHidden:o}));return a.length>1?l.default.createElement("picture",null,i(a),s):s})),L=l.default.forwardRef((function(e,t){var r=e.sizes,a=e.srcSet,i=e.src,n=e.style,o=e.onLoad,d=e.onError,u=e.loading,f=e.draggable,p=e.ariaHidden,g=(0,s.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return l.default.createElement("img",(0,c.default)({"aria-hidden":p,sizes:r,srcSet:a,src:i},g,{onLoad:o,onError:d,ref:t,loading:u,draggable:f,style:(0,c.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))}));L.propTypes={style:d.default.object,onError:d.default.func,onLoad:d.default.func};var C=function(e){function t(t){var r;(r=e.call(this,t)||this).seenBefore=y&&h(t),r.isCritical="eager"===t.loading||t.critical,r.addNoScript=!(r.isCritical&&!t.fadeIn),r.useIOSupport=!m&&O&&!r.isCritical&&!r.seenBefore;var a=r.isCritical||y&&(m||!r.useIOSupport);return r.state={isVisible:a,imgLoaded:!1,imgCached:!1,fadeIn:!r.seenBefore&&t.fadeIn,isHydrated:!1},r.imageRef=l.default.createRef(),r.placeholderRef=t.placeholderRef||l.default.createRef(),r.handleImageLoaded=r.handleImageLoaded.bind((0,n.default)(r)),r.handleRef=r.handleRef.bind((0,n.default)(r)),r}(0,o.default)(t,e);var r=t.prototype;return r.componentDidMount=function(){if(this.setState({isHydrated:y}),this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:h(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},r.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},r.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=E(e,(function(){var e=h(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},r.handleImageLoaded=function(){var e,t,r;e=this.props,t=u(e),(r=p(t))&&(b[r]=!0),this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},r.render=function(){var e=u(this.props),t=e.title,r=e.alt,a=e.className,i=e.style,n=void 0===i?{}:i,o=e.imgStyle,s=void 0===o?{}:o,d=e.placeholderStyle,f=void 0===d?{}:d,p=e.placeholderClassName,b=e.fluid,h=e.fixed,m=e.backgroundColor,y=e.durationFadeIn,O=e.Tag,v=e.itemProp,j=e.loading,k=e.draggable,E=b||h;if(!E)return null;var C=!1===this.state.fadeIn||this.state.imgLoaded,z=!0===this.state.fadeIn&&!this.state.imgCached,T=(0,c.default)({opacity:C?1:0,transition:z?"opacity "+y+"ms":"none"},s),P="boolean"==typeof m?"lightgray":m,V={transitionDelay:y+"ms"},W=(0,c.default)({opacity:this.state.imgLoaded?0:1},z&&V,s,f),A={title:t,alt:this.state.isVisible?"":r,style:W,className:p,itemProp:v},H=this.state.isHydrated?g(E):E[0];if(b)return l.default.createElement(O,{className:(a||"")+" gatsby-image-wrapper",style:(0,c.default)({position:"relative",overflow:"hidden",maxWidth:H.maxWidth?H.maxWidth+"px":null,maxHeight:H.maxHeight?H.maxHeight+"px":null},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(H.srcSet)},l.default.createElement(O,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/H.aspectRatio+"%"}}),P&&l.default.createElement(O,{"aria-hidden":!0,title:t,style:(0,c.default)({backgroundColor:P,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},z&&V)}),H.base64&&l.default.createElement(R,{ariaHidden:!0,ref:this.placeholderRef,src:H.base64,spreadProps:A,imageVariants:E,generateSources:x}),H.tracedSVG&&l.default.createElement(R,{ariaHidden:!0,ref:this.placeholderRef,src:H.tracedSVG,spreadProps:A,imageVariants:E,generateSources:S}),this.state.isVisible&&l.default.createElement("picture",null,w(E),l.default.createElement(L,{alt:r,title:t,sizes:H.sizes,src:H.src,crossOrigin:this.props.crossOrigin,srcSet:H.srcSet,style:T,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v,loading:j,draggable:k})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:I((0,c.default)({alt:r,title:t,loading:j},H,{imageVariants:E}))}}));if(h){var N=(0,c.default)({position:"relative",overflow:"hidden",display:"inline-block",width:H.width,height:H.height},n);return"inherit"===n.display&&delete N.display,l.default.createElement(O,{className:(a||"")+" gatsby-image-wrapper",style:N,ref:this.handleRef,key:"fixed-"+JSON.stringify(H.srcSet)},P&&l.default.createElement(O,{"aria-hidden":!0,title:t,style:(0,c.default)({backgroundColor:P,width:H.width,opacity:this.state.imgLoaded?0:1,height:H.height},z&&V)}),H.base64&&l.default.createElement(R,{ariaHidden:!0,ref:this.placeholderRef,src:H.base64,spreadProps:A,imageVariants:E,generateSources:x}),H.tracedSVG&&l.default.createElement(R,{ariaHidden:!0,ref:this.placeholderRef,src:H.tracedSVG,spreadProps:A,imageVariants:E,generateSources:S}),this.state.isVisible&&l.default.createElement("picture",null,w(E),l.default.createElement(L,{alt:r,title:t,width:H.width,height:H.height,sizes:H.sizes,src:H.src,crossOrigin:this.props.crossOrigin,srcSet:H.srcSet,style:T,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v,loading:j,draggable:k})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:I((0,c.default)({alt:r,title:t,loading:j},H,{imageVariants:E}))}}))}return null},t}(l.default.Component);C.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var z=d.default.shape({width:d.default.number.isRequired,height:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string}),T=d.default.shape({aspectRatio:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,sizes:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string,maxWidth:d.default.number,maxHeight:d.default.number});function P(e){return function(t,r,a){var i;if(!t.fixed&&!t.fluid)throw new Error("The prop `fluid` or `fixed` is marked as required in `"+a+"`, but their values are both `undefined`.");d.default.checkPropTypes(((i={})[r]=e,i),t,"prop",a)}}C.propTypes={resolutions:z,sizes:T,fixed:P(d.default.oneOfType([z,d.default.arrayOf(z)])),fluid:P(d.default.oneOfType([T,d.default.arrayOf(T)])),fadeIn:d.default.bool,durationFadeIn:d.default.number,title:d.default.string,alt:d.default.string,className:d.default.oneOfType([d.default.string,d.default.object]),critical:d.default.bool,crossOrigin:d.default.oneOfType([d.default.string,d.default.bool]),style:d.default.object,imgStyle:d.default.object,placeholderStyle:d.default.object,placeholderClassName:d.default.string,backgroundColor:d.default.oneOfType([d.default.string,d.default.bool]),onLoad:d.default.func,onError:d.default.func,onStartLoad:d.default.func,Tag:d.default.string,itemProp:d.default.string,loading:d.default.oneOf(["auto","lazy","eager"]),draggable:d.default.bool};var V=C;t.default=V},RXBc:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return D}));var a=r("q1tI"),i=r.n(a),n=r("2A+t"),o=r("MXbp"),s=r("izhR"),c=r("7O5W"),l=r("17x9"),d=r.n(l);function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function g(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){f(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function b(e,t){if(null==e)return{};var r,a,i=function(e,t){if(null==e)return{};var r,a,i={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}function h(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function m(e){return t=e,(t-=0)==t?e:(e=e.replace(/[\-_\s]+(.)?/g,(function(e,t){return t?t.toUpperCase():""}))).substr(0,1).toLowerCase()+e.substr(1);var t}function y(e){return e.split(";").map((function(e){return e.trim()})).filter((function(e){return e})).reduce((function(e,t){var r,a=t.indexOf(":"),i=m(t.slice(0,a)),n=t.slice(a+1).trim();return i.startsWith("webkit")?e[(r=i,r.charAt(0).toUpperCase()+r.slice(1))]=n:e[i]=n,e}),{})}var O=!1;try{O=!0}catch(_){}function v(e){return null===e?null:"object"===u(e)&&e.prefix&&e.iconName?e:Array.isArray(e)&&2===e.length?{prefix:e[0],iconName:e[1]}:"string"==typeof e?{prefix:"fas",iconName:e}:void 0}function w(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?f({},e,t):{}}function j(e){var t=e.forwardedRef,r=b(e,["forwardedRef"]),a=r.icon,i=r.mask,n=r.symbol,o=r.className,s=r.title,l=v(a),d=w("classes",[].concat(h(function(e){var t,r=e.spin,a=e.pulse,i=e.fixedWidth,n=e.inverse,o=e.border,s=e.listItem,c=e.flip,l=e.size,d=e.rotation,u=e.pull,p=(f(t={"fa-spin":r,"fa-pulse":a,"fa-fw":i,"fa-inverse":n,"fa-border":o,"fa-li":s,"fa-flip-horizontal":"horizontal"===c||"both"===c,"fa-flip-vertical":"vertical"===c||"both"===c},"fa-".concat(l),null!=l),f(t,"fa-rotate-".concat(d),null!=d&&0!==d),f(t,"fa-pull-".concat(u),null!=u),f(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(p).map((function(e){return p[e]?e:null})).filter((function(e){return e}))}(r)),h(o.split(" ")))),u=w("transform","string"==typeof r.transform?c.parse.transform(r.transform):r.transform),p=w("mask",v(i)),m=Object(c.icon)(l,g({},d,{},u,{},p,{symbol:n,title:s}));if(!m)return function(){var e;!O&&console&&"function"==typeof console.error&&(e=console).error.apply(e,arguments)}("Could not find icon",l),null;var y=m.abstract,x={ref:t};return Object.keys(r).forEach((function(e){j.defaultProps.hasOwnProperty(e)||(x[e]=r[e])})),S(y[0],x)}j.displayName="FontAwesomeIcon",j.propTypes={border:d.a.bool,className:d.a.string,mask:d.a.oneOfType([d.a.object,d.a.array,d.a.string]),fixedWidth:d.a.bool,inverse:d.a.bool,flip:d.a.oneOf(["horizontal","vertical","both"]),icon:d.a.oneOfType([d.a.object,d.a.array,d.a.string]),listItem:d.a.bool,pull:d.a.oneOf(["right","left"]),pulse:d.a.bool,rotation:d.a.oneOf([0,90,180,270]),size:d.a.oneOf(["lg","xs","sm","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:d.a.bool,symbol:d.a.oneOfType([d.a.bool,d.a.string]),title:d.a.string,transform:d.a.oneOfType([d.a.string,d.a.object]),swapOpacity:d.a.bool},j.defaultProps={border:!1,className:"",mask:null,fixedWidth:!1,inverse:!1,flip:null,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,symbol:!1,title:"",transform:null,swapOpacity:!1};var S=function e(t,r){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"==typeof r)return r;var i=(r.children||[]).map((function(r){return e(t,r)})),n=Object.keys(r.attributes||{}).reduce((function(e,t){var a=r.attributes[t];switch(t){case"class":e.attrs.className=a,delete r.attributes.class;break;case"style":e.attrs.style=y(a);break;default:0===t.indexOf("aria-")||0===t.indexOf("data-")?e.attrs[t.toLowerCase()]=a:e.attrs[m(t)]=a}return e}),{attrs:{}}),o=a.style,s=void 0===o?{}:o,c=b(a,["style"]);return n.attrs.style=g({},n.attrs.style,{},s),t.apply(void 0,[r.tag,g({},n.attrs,{},c)].concat(h(i)))}.bind(null,i.a.createElement),x=r("Wbzz"),k=r("9eSz"),E=r.n(k),I=r("oCA+"),R={display:"block",textDecoration:"none",marginY:3,color:"text",cursor:"pointer",fontFamily:"heading"},L=function(e){var t=e.icon,r=e.name,a=e.url;return Object(n.c)(s.d,{href:a,sx:R,target:"__blank"},Object(n.c)(j,{icon:t,sx:{fontSize:2}}),Object(n.c)("span",{sx:{fontSize:2,marginLeft:2}},r))},C=function(){var e=Object(x.c)("3567133932");return Object(n.c)(s.a,{sx:{display:["block","none","none"],marginBottom:5}},Object(n.c)(s.c,{sx:{alignItems:"center"}},Object(n.c)(E.a,{fixed:e.smImg.childImageSharp.fixed,sx:{borderRadius:"100%",marginRight:3}}),Object(n.c)(s.c,null,Object(n.c)(s.d,{sx:Object.assign({},I.a,{marginLeft:2,fontSize:1,fontWeight:"bold"})},"CV"),Object(n.c)(s.d,{sx:Object.assign({},I.a,{marginLeft:2,fontSize:1,fontWeight:"bold"})},"Email"))))},z=function(){var e=Object(x.c)("3567133932");return Object(n.c)(s.a,{sx:{display:["none","block","block"],width:"20%",maxWidth:600,paddingY:4}},Object(n.c)(E.a,{fixed:e.bigImg.childImageSharp.fixed,sx:{borderRadius:"4px",marginBottom:4}}),Object(n.c)(s.c,{sx:R},Object(n.c)(j,{icon:["fas","map-marked-alt"],sx:{fontSize:2}}),Object(n.c)(s.e,{as:"span",sx:{fontSize:2,marginLeft:2}},"Vancouver, BC")),Object(n.c)(L,{name:"Email",icon:["fas","inbox"],url:"mailto:pranayjain1117@gmail.com"}),Object(n.c)(L,{name:"Linkedin",icon:["fab","linkedin"],url:"https://www.linkedin.com/in/pranayjain1/"}),Object(n.c)(L,{name:"Github",icon:["fab","github"],url:"http://github.com/pranay-jain/"}))},T=function(e){var t=e.title,r=e.description,a=e.tags,i=e.linkTitle,c=e.linkHref;return Object(n.c)(s.a,{sx:{marginBottom:5}},Object(n.c)(o.b.h5,{sx:{fontWeight:"medium",margin:0}},t),Object(n.c)(s.a,{sx:{marginY:2}},a.map((function(e){return Object(n.c)("span",{sx:{backgroundColor:"#efefef",padding:1,fontSize:0,color:"highlight",borderRadius:4,marginRight:1}},e)}))),Object(n.c)(s.e,{sx:{fontSize:1,marginBottom:3}},r||""),Object(n.c)(x.a,{to:c,sx:Object.assign({},I.a,{fontSize:0,fontWeight:"600"}),target:"__blank"},i))};function P(){return Object(n.c)(s.a,null,Object(n.c)(T,{title:"Socioeconomic Determinants of Health and COVID-19 Outcomes",tags:["Research","Data Science"],linkTitle:"VIEW PAPER",linkHref:"#"}),Object(n.c)(T,{title:"Build A City",description:["Re-imagining the classic block-stacking experience with a virtual twist. An interactive multiplayer game which lets players build a city collaboratively using real world blocks and witnessing the city being constructed on a screen. Built as an OOH installation with the client ",Object(n.c)(x.a,{href:"https://www.thinkingbox.com/",target:"__blank",sx:Object.assign({},I.a,{color:"inherit"})},"Thinkingbox"),"."],tags:["Game Development","Mixed Reality","Unity"],linkTitle:"VIEW CASE STUDY",linkHref:"/buildacity/"}),Object(n.c)(T,{title:"Workaholic",description:"Workaholic uses the best health practices and reminds you in well thought-out intervals to practice ergonomic activities that help improve your health as you work.",tags:["Full-Stack Development","Under Construction"],linkTitle:"VIEW CASE STUDY",linkHref:"/workaholic/"}))}var V=r("JwsL"),W=function(e){var t=e.title;return Object(n.c)("div",null,Object(n.c)(o.b.h6,{sx:{marginTop:5,marginBottom:1}},t),Object(n.c)(s.b,{sx:{marginBottom:4}}))},A=function(e){var t=e.href,r=e.children;return Object(n.c)(s.d,{href:t,sx:I.a,target:"__blank"},r)};function H(){return Object(n.c)("div",{sx:{width:["90%","80%","70%"],margin:"auto",paddingTop:[2,5,5]}},Object(n.c)(s.c,{sx:{justifyContent:"space-between"}},Object(n.c)(s.a,{sx:{width:["100%","70%","70%"],paddingTop:4}},Object(n.c)(C,null),Object(n.c)(o.b.h1,{sx:{margin:0,fontWeight:"light"}},"Pranay Jain"),Object(n.c)(W,{title:"BACKGROUND"}),Object(n.c)(o.b.p,null,"I am a recent undergraduate from the University of British Columbia where I studied Computer Science and Mathematics. My research interests lie at the intersection of Algorithmic Game Theory and Artificial Intelligence. I currently work at the UBC"," ",Object(n.c)(A,{href:"https://www.cs.ubc.ca/cs-research/lci"},"Lab for Computational Intelligence"),", where I'm fortunate to be advised by"," ",Object(n.c)(s.d,{href:"https://www.cs.ubc.ca/~kevinlb/",sx:I.a},"Kevin Leyton-Brown"),"."),Object(n.c)(o.b.p,null,"I've previous experience as a full-stack software developer and have worked with a few startups to build their products. Some of them include ",Object(n.c)(A,{href:"dapperlabs.com"},"Dapper Labs"),","," ",Object(n.c)(A,{href:"https://collabware.com/"},"Collabware"),","," ",Object(n.c)(A,{href:"http://vitay.io/"},"Vitay")," and"," ",Object(n.c)(A,{href:"featherx.ai"},"FeatherX"),"."),Object(n.c)(s.a,{sx:{marginY:5}},Object(n.c)(W,{title:"RESEARCH"}),"My current research relates to the"," ",Object(n.c)(A,{href:"https://www.fcc.gov/about-fcc/fcc-initiatives/incentive-auctions"},"FCC Incentive Auction"," "),", that consisted of a descending clock reverse auction designed to procure broadcasting rights from TV stations. I am currently working on developing a generative model for constraint graphs that can be used for simulating reverse auctions in different spectrum auction settings."),Object(n.c)(s.a,{sx:{marginY:5}},Object(n.c)(W,{title:"SELECTED PROJECTS"}),Object(n.c)(P,null))),Object(n.c)(z,null)),Object(n.c)(V.a,null))}var N=r("8tEE"),B=r("wHSu");function D(){return c.library.add(N.a,B.a),i.a.createElement(i.a.Fragment,null,i.a.createElement(H,null))}}}]);
//# sourceMappingURL=component---src-pages-index-js-a58acad57d92769859dc.js.map