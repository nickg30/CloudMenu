!function(){function e(){p.keyboardSupport&&i("keydown",a)}function t(){if(document.body){var t=document.body,o=document.documentElement,a=window.innerHeight,n=t.scrollHeight;if(y=document.compatMode.indexOf("CSS")>=0?o:t,h=t,e(),b=!0,top!=self)g=!0;else if(n>a&&(t.offsetHeight<=a||o.offsetHeight<=a)){var r=!1;if(o.style.height="auto",setTimeout(function(){r||o.scrollHeight==document.height||(r=!0,setTimeout(function(){o.style.height=document.height+"px",r=!1},500))},10),y.offsetHeight<=a){var i=document.createElement("div");i.style.clear="both",t.appendChild(i)}}p.fixedBackground||w||(t.style.backgroundAttachment="scroll",o.style.backgroundAttachment="scroll")}}function o(e,t,o,a){if(a||(a=1e3),c(t,o),1!=p.accelerationMax){var n=+new Date-H;if(n<p.accelerationDelta){var r=(1+30/n)/2;r>1&&(r=Math.min(r,p.accelerationMax),t*=r,o*=r)}H=+new Date}if(S.push({x:t,y:o,lastX:t<0?.99:-.99,lastY:o<0?.99:-.99,start:+new Date}),!D){var i=e===document.body,l=function(n){for(var r=+new Date,c=0,u=0,s=0;s<S.length;s++){var d=S[s],h=r-d.start,m=h>=p.animationTime,w=m?1:h/p.animationTime;p.pulseAlgorithm&&(w=f(w));var g=d.x*w-d.lastX>>0,v=d.y*w-d.lastY>>0;c+=g,u+=v,d.lastX+=g,d.lastY+=v,m&&(S.splice(s,1),s--)}i?window.scrollBy(c,u):(c&&(e.scrollLeft+=c),u&&(e.scrollTop+=u)),t||o||(S=[]),S.length?z(l,e,a/p.frameRate+1):D=!1};z(l,e,0),D=!0}}function a(e){var t=e.target,a=e.ctrlKey||e.altKey||e.metaKey||e.shiftKey&&e.keyCode!==x.spacebar;if(/input|textarea|select|embed/i.test(t.nodeName)||t.isContentEditable||e.defaultPrevented||a)return!0;if(l(t,"button")&&e.keyCode===x.spacebar)return!0;var n=0,i=0,c=r(h),u=c.clientHeight;switch(c==document.body&&(u=window.innerHeight),e.keyCode){case x.up:i=-p.arrowScroll;break;case x.down:i=p.arrowScroll;break;case x.spacebar:i=-(e.shiftKey?1:-1)*u*.9;break;case x.pageup:i=.9*-u;break;case x.pagedown:i=.9*u;break;case x.home:i=-c.scrollTop;break;case x.end:var s=c.scrollHeight-c.scrollTop-u;i=s>0?s+10:0;break;case x.left:n=-p.arrowScroll;break;case x.right:n=p.arrowScroll;break;default:return!0}o(c,n,i),e.preventDefault()}function n(e,t){for(var o=e.length;o--;)M[C(e[o])]=t;return t}function r(e){var t=[],o=y.scrollHeight;do{var a=M[C(e)];if(a)return n(t,a);if(t.push(e),o===e.scrollHeight){if(!g||y.clientHeight+10<o)return n(t,document.body)}else if(e.clientHeight+10<e.scrollHeight&&(overflow=getComputedStyle(e,"").getPropertyValue("overflow-y"),"scroll"===overflow||"auto"===overflow))return n(t,e)}while(e=e.parentNode)}function i(e,t,o){window.addEventListener(e,t,o||!1)}function l(e,t){return(e.nodeName||"").toLowerCase()===t.toLowerCase()}function c(e,t){e=e>0?1:-1,t=t>0?1:-1,v.x===e&&v.y===t||(v.x=e,v.y=t,S=[],H=0)}function u(e){if(e)return e=Math.abs(e),k.push(e),k.shift(),clearTimeout(T),!(s(k[0],120)&&s(k[1],120)&&s(k[2],120))}function s(e,t){return Math.floor(e/t)==e/t}function d(e){var t,o;return e*=p.pulseScale,e<1?t=e-(1-Math.exp(-e)):(e-=1,t=(o=Math.exp(-1))+(1-Math.exp(-e))*(1-o)),t*p.pulseNormalize}function f(e){return e>=1?1:e<=0?0:(1==p.pulseNormalize&&(p.pulseNormalize/=d(1)),d(e))}var h,m={frameRate:150,animationTime:400,stepSize:120,pulseAlgorithm:!0,pulseScale:8,pulseNormalize:1,accelerationDelta:20,accelerationMax:1,keyboardSupport:!0,arrowScroll:50,touchpadSupport:!0,fixedBackground:!0,excluded:""},p=m,w=!1,g=!1,v={x:0,y:0},b=!1,y=document.documentElement,k=[120,120,120],x={left:37,up:38,right:39,down:40,spacebar:32,pageup:33,pagedown:34,end:35,home:36},p=m,S=[],D=!1,H=+new Date,M={};setInterval(function(){M={}},1e4);var T,C=function(){var e=0;return function(t){return t.uniqueID||(t.uniqueID=e++)}}(),z=window.requestAnimationFrame||window.webkitRequestAnimationFrame||function(e,t,o){window.setTimeout(e,o||1e3/60)},A=/chrome/i.test(window.navigator.userAgent),E=null;"onwheel"in document.createElement("div")?E="wheel":"onmousewheel"in document.createElement("div")&&(E="mousewheel"),E&&A&&(i(E,function(e){b||t();var a=e.target,n=r(a);if(!n||e.defaultPrevented||l(h,"embed")||l(a,"embed")&&/\.pdf/i.test(a.src))return!0;var i=e.wheelDeltaX||0,c=e.wheelDeltaY||0;if(i||c||(c=e.wheelDelta||0),!p.touchpadSupport&&u(c))return!0;Math.abs(i)>1.2&&(i*=p.stepSize/120),Math.abs(c)>1.2&&(c*=p.stepSize/120),o(n,-i,-c),e.preventDefault()}),i("mousedown",function(e){h=e.target}),i("load",t))}();