/*!
 * ScrollSmoother 3.11.4
 * https://greensock.com
 *
 * @license Copyright 2022, GreenSock. All rights reserved.
 * This plugin is a membership benefit of Club GreenSock and is only authorized for use in sites/apps/products developed by individuals/companies with an active Club GreenSock membership. See https://greensock.com/club
 * @author: Jack Doyle, jack@greensock.com
*/ !function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e=e||self).window=e.window||{})}(this,function(e){"use strict";function t(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function r(){return"undefined"!=typeof window}function n(){return a||r()&&(a=window.gsap)&&a.registerPlugin&&a}var o,i,s,a,l,c,u,f,d,g,h,p,$,v,m,y,_,w,b=(S.register=function e(t){return l||(a=t||n(),r()&&window.document&&(c=window,f=(u=document).documentElement,d=u.body),a&&(g=a.utils.toArray,h=a.utils.clamp,v=a.parseEase("expo"),_=a.core.context||function(){},w=a.delayedCall(.2,function(){return p.isRefreshing||$&&$.refresh()}).pause(),p=a.core.globals().ScrollTrigger,a.core.globals("ScrollSmoother",S),d&&p&&(m=p.core._getVelocityProp,y=p.core._inputObserver,S.refresh=p.refresh,l=1))),l},o=S,i=[{key:"progress",get:function e(){return this.scrollTrigger?this.scrollTrigger.animation._time/100:0}},],t(o.prototype,i),s&&t(o,s),S);function S(e){var t=this;function r(){return el.update(-ei)}function n(){return A.style.overflow="visible"}function o(e){e.update();var t=e.getTween();t&&(t.pause(),t._time=t._dur,t._tTime=t._tDur),F=!1,e.animation.progress(e.progress,!0)}function i(e,t){(e!==ei&&!M||t)&&(X&&(e=Math.round(e)),en&&(A.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+e+", 0, 1)",A._gsap.y=e+"px"),es=e-ei,ei=e,p.isUpdating||p.update())}function s(e){return arguments.length?(e<0&&(e=0),ec.y=-e,F=!0,M?ei=-e:i(-e),p.isRefreshing?H.update():er(e),this):-ei}function b(e){z.scrollTop=0,e.target.contains&&e.target.contains(z)||J&&!1===J(t,e)||(p.isInViewport(e.target)||e.target===Y||t.scrollTo(e.target,!1,"center center"),Y=e.target)}function T(e){var t,r,n,o;L.forEach(function(i){t=i.pins,o=i.markers,e.forEach(function(e){i.trigger&&e.trigger&&i!==e&&(e.trigger===i.trigger||e.pinnedContainer===i.trigger||i.trigger.contains(e.trigger))&&(n=((r=e.start)-i.start-i.offset)/i.ratio-(r-i.start),t.forEach(function(e){return n-=e.distance/i.ratio-e.distance}),e.setPositions(r+n,e.end+n),e.markerStart&&o.push(a.quickSetter([e.markerStart,e.markerEnd],"y","px")),e.pin&&0<e.end&&(n=e.end-e.start,t.push({start:e.start,end:e.end,distance:n,trig:e}),i.setPositions(i.start,i.end+n),i.vars.onRefresh(i)))})})}function x(){n(),requestAnimationFrame(n),L&&(L.forEach(function(e){var t=e.start,r=e.auto?Math.min(p.maxScroll(e.scroller),e.end):t+(e.end-t)/e.ratio,n=(r-e.end)/2;t-=n,r-=n,e.offset=n||1e-4,e.pins.length=0,e.setPositions(Math.min(t,r),Math.max(t,r)),e.vars.onRefresh(e)}),T(p.sort())),el.reset()}function E(){return p.addEventListener("refresh",x)}function P(){return L&&L.forEach(function(e){return e.vars.onRefresh(e)})}function k(){return L&&L.forEach(function(e){return e.vars.onRefreshInit(e)}),P}function R(e,t,r,n){return function(){var o="function"==typeof t?t(r,n):t;return o||0===o||(o=n.getAttribute("data-"+et+e)||("speed"===e?1:0)),n.setAttribute("data-"+et+e,o),"auto"===o?o:parseFloat(o)}}function C(e,t,r,n,o){function i(){t=_(),r=w(),u=parseFloat(t)||1,m=(g="auto"===t)?0:.5,$&&$.kill(),$=r&&a.to(e,{ease:v,overwrite:!1,y:"+=0",duration:r}),d&&(d.ratio=u,d.autoSpeed=g)}function s(){S.y=b+"px",S.renderTransform(1),i()}function l(t){if(g){s();var r,n,o,i,a,l,d,p,v,m,_,w=(r=e,n=h(0,1,-t.start/(t.end-t.start)),a=r.parentNode||f,l=r.getBoundingClientRect(),p=(d=a.getBoundingClientRect()).top-l.top,_=-(m=(Math.abs(p)>Math.abs(v=d.bottom-l.bottom)?p:v)/(1-n))*n,0<m&&(i=.5==(o=d.height/(c.innerHeight+d.height))?2*d.height:2*Math.min(d.height,-m*o/(2*o-1))*(n||1),_+=n?-i*n:-i/2,m+=i),{change:m,offset:_});E=w.change,y=w.offset}else E=(t.end-t.start)*(1-u),y=0;T.forEach(function(e){return E-=e.distance*(1-u)}),t.vars.onUpdate(t),$&&$.progress(1)}o=("function"==typeof o?o(n,e):o)||0;var u,d,g,$,m,y,_=R("speed",t,n,e),w=R("lag",r,n,e),b=a.getProperty(e,"y"),S=e._gsap,T=[],x=[],E=0;return i(),(1!==u||g||$)&&(l(d=p.create({trigger:g?e.parentNode:e,start:"top bottom+="+o,end:"bottom top-="+o,scroller:z,scrub:!0,refreshPriority:-999,onRefreshInit:s,onRefresh:l,onKill:function e(t){var r=L.indexOf(t);0<=r&&L.splice(r,1),s()},onUpdate:function e(t){var r,n,o,i,s=b+E*(t.progress-m),l=T.length,c=0;if(t.offset){if(l){for(o=-ei,i=t.end;l--;){if((n=T[l]).trig.isActive||o>=n.start&&o<=n.end)return void($&&(n.trig.progress+=n.trig.direction<0?.001:-.001,n.trig.update(0,0,1),$.resetTo("y",parseFloat(S.y),-es,!0),ea&&$.progress(1)));o>n.end&&(c+=n.distance),i-=n.distance}s=b+c+E*((a.utils.clamp(t.start,t.end,o)-t.start-c)/(i-t.start)-m)}s=Math.round(1e5*(r=s+y))/1e5||0,x.length&&!g&&x.forEach(function(e){return e(s-c)}),$?($.resetTo("y",s,-es,!0),ea&&$.progress(1)):(S.y=s+"px",S.renderTransform(1))}}})),a.core.getCache(d.trigger).stRevert=k,d.startY=b,d.pins=T,d.markers=x,d.ratio=u,d.autoSpeed=g,e.style.willChange="transform"),d}l||S.register(a)||console.warn("Please gsap.registerPlugin(ScrollSmoother)"),e=this.vars=e||{},$&&$.kill(),_($=this);var A,z,B,H,L,I,U,V,D,M,N,O,q,F,Y,j=e.smoothTouch,K=e.onUpdate,W=e.onStop,G=e.smooth,J=e.onFocusIn,Q=e.normalizeScroll,X=e.wholePixels,Z=this,ee="undefined"!=typeof ResizeObserver&&!1!==e.autoResize&&new ResizeObserver(function(){return p.isRefreshing||w.restart(!0)}),et=e.effectsPrefix||"",er=p.getScrollFunc(c),en=1===p.isTouch?!0===j?.8:parseFloat(j)||0:0===G||!1===G?0:parseFloat(G)||.8,eo=en&&+e.speed||1,ei=0,es=0,ea=1,el=m(0),ec={y:0};function eu(){return B=A.clientHeight,A.style.overflow="visible",d.style.height=c.innerHeight+(B-c.innerHeight)/eo+"px",B-c.innerHeight}E(),p.addEventListener("killAll",E),a.delayedCall(.5,function(){return ea=0}),this.scrollTop=s,this.scrollTo=function(e,r,n){var o=a.utils.clamp(0,p.maxScroll(c),isNaN(e)?t.offset(e,n):+e);r?M?a.to(t,{duration:en,scrollTop:o,overwrite:"auto",ease:v}):er(o):s(o)},this.offset=function(e,t){var r,n=(e=g(e)[0]).style.cssText,o=p.create({trigger:e,start:t||"top top"});return L&&T([o]),r=o.start,o.kill(!1),e.style.cssText=n,a.core.getCache(e).uncache=1,r},this.content=function(e){if(arguments.length){var t=g(e||"#smooth-content")[0]||console.warn("ScrollSmoother needs a valid content element.")||d.children[0];return t!==A&&(D=(A=t).getAttribute("style")||"",ee&&ee.observe(A),a.set(A,{overflow:"visible",width:"100%",boxSizing:"border-box",y:"+=0"}),en||a.set(A,{clearProps:"transform"})),this}return A},this.wrapper=function(e){var t,r;return arguments.length?(V=(z=g(e||"#smooth-wrapper")[0]||(t=A,(r=u.querySelector(".ScrollSmoother-wrapper"))||((r=u.createElement("div")).classList.add("ScrollSmoother-wrapper"),t.parentNode.insertBefore(r,t),r.appendChild(t)),r)).getAttribute("style")||"",eu(),a.set(z,en?{overflow:"hidden",position:"fixed",height:"100%",width:"100%",top:0,left:0,right:0,bottom:0}:{overflow:"visible",position:"relative",width:"100%",height:"auto",top:"auto",bottom:"auto",left:"auto",right:"auto"}),this):z},this.effects=function(e,t){if(L=L||[],!e)return L.slice(0);(e=g(e)).forEach(function(e){for(var t=L.length;t--;)L[t].trigger===e&&L[t].kill()});var r,n,o=(t=t||{}).speed,i=t.lag,s=t.effectsPadding,a=[];for(r=0;r<e.length;r++)(n=C(e[r],o,i,r,s))&&a.push(n);return L.push.apply(L,a),a},this.sections=function(e,t){if(I=I||[],!e)return I.slice(0);var r=g(e).map(function(e){return p.create({trigger:e,start:"top 120%",end:"bottom -20%",onToggle:function t(r){e.style.opacity=r.isActive?"1":"0",e.style.pointerEvents=r.isActive?"all":"none"}})});return t&&t.add?I.push.apply(I,r):I=r.slice(0),r},this.content(e.content),this.wrapper(e.wrapper),this.render=function(e){return i(e||0===e?e:ei)},this.getVelocity=function(){return el.getVelocity(-ei)},p.scrollerProxy(z,{scrollTop:s,scrollHeight:function e(){return eu()&&d.scrollHeight},fixedMarkers:!1!==e.fixedMarkers&&!!en,content:A,getBoundingClientRect:function e(){return{top:0,left:0,width:c.innerWidth,height:c.innerHeight}}}),p.defaults({scroller:z});var ef=p.getAll().filter(function(e){return e.scroller===c||e.scroller===z});ef.forEach(function(e){return e.revert(!0,!0)}),H=p.create({animation:a.fromTo(ec,{y:0},{y:function e(){return-eu()},immediateRender:!1,ease:"none",data:"ScrollSmoother",duration:100,onUpdate:function e(){if(this._dur){var t=F;t&&(o(H),ec.y=ei),i(ec.y,t),r(),K&&!M&&K(Z)}}}),onRefreshInit:function e(t){if(L){var r=p.getAll().filter(function(e){return!!e.pin});L.forEach(function(e){e.vars.pinnedContainer||r.forEach(function(t){if(t.pin.contains(e.trigger)){var r=e.vars;r.pinnedContainer=t.pin,e.vars=null,e.init(r,e.animation)}})})}var n=t.getTween();q=n&&n._end>n._dp._time,O=ei,ec.y=0,en&&(z.style.pointerEvents="none",z.scrollTop=0,setTimeout(function(){return z.style.removeProperty("pointer-events")},50))},onRefresh:function e(t){t.animation.invalidate(),t.setPositions(t.start,eu()/eo),q||o(t),ec.y=-er(),i(ec.y),ea||t.animation.progress(a.utils.clamp(0,1,-(O/t.end))),q&&(t.progress-=.001,t.update())},id:"ScrollSmoother",scroller:c,invalidateOnRefresh:!0,start:0,refreshPriority:-9999,end:function e(){return eu()/eo},onScrubComplete:function e(){el.reset(),W&&W(t)},scrub:en||!0}),this.smooth=function(t){return arguments.length&&(eo=(en=t||0)&&+e.speed||1,H.scrubDuration(t)),H.getTween()?H.getTween().duration():0},H.getTween()&&(H.getTween().vars.ease=e.ease||v),this.scrollTrigger=H,e.effects&&this.effects(!0===e.effects?"[data-"+et+"speed], [data-"+et+"lag]":e.effects,{effectsPadding:e.effectsPadding}),e.sections&&this.sections(!0===e.sections?"[data-section]":e.sections),ef.forEach(function(e){e.vars.scroller=z,e.revert(!1,!0),e.init(e.vars,e.animation)}),this.paused=function(e,t){return arguments.length?(!!M!==e&&(e?(H.getTween()&&H.getTween().pause(),er(-ei),el.reset(),(N=p.normalizeScroll())&&N.disable(),(M=p.observe({preventDefault:!0,type:"wheel,touch,scroll",debounce:!1,allowClicks:!0,onChangeY:function e(){return s(-ei)}})).nested=y(f,"wheel,touch,scroll",!0,!1!==t)):(M.nested.kill(),M.kill(),M=0,N&&N.enable(),H.progress=(-ei-H.start)/(H.end-H.start),o(H))),this):!!M},this.kill=this.revert=function(){t.paused(!1),o(H),H.kill();for(var e=(L||[]).concat(I||[]),r=e.length;r--;)e[r].kill();p.scrollerProxy(z),p.removeEventListener("killAll",E),p.removeEventListener("refresh",x),z.style.cssText=V,A.style.cssText=D;var n=p.defaults({});n&&n.scroller===z&&p.defaults({scroller:c}),t.normalizer&&p.normalizeScroll(!1),clearInterval(U),$=null,ee&&ee.disconnect(),d.style.removeProperty("height"),c.removeEventListener("focusin",b)},this.refresh=function(e,t){return H.refresh(e,t)},Q&&(this.normalizer=p.normalizeScroll(!0===Q?{debounce:!0,content:!en&&A}:Q)),p.config(e),"overscrollBehavior"in c.getComputedStyle(d)&&a.set([d,f],{overscrollBehavior:"none"}),"scrollBehavior"in c.getComputedStyle(d)&&a.set([d,f],{scrollBehavior:"auto"}),c.addEventListener("focusin",b),U=setInterval(r,250),"loading"===u.readyState||requestAnimationFrame(function(){return p.refresh()})}b.version="3.11.4",b.create=function(e){return $&&e&&$.content()===g(e.content)[0]?$:new b(e)},b.get=function(){return $},n()&&a.registerPlugin(b),e.ScrollSmoother=b,e.default=b,"undefined"==typeof window||window!==e?Object.defineProperty(e,"__esModule",{value:!0}):delete e.default});