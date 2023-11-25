var Y={};function j(e={}){Y={animate:!0,allowClose:!0,overlayOpacity:.7,smoothScroll:!1,disableActiveInteraction:!1,showProgress:!1,stagePadding:10,stageRadius:5,popoverOffset:10,showButtons:["next","previous","close"],disableButtons:[],overlayColor:"#000",...e}}function c(e){return e?Y[e]:Y}function O(e,t,n,i){return(e/=i/2)<1?n/2*e*e+t:-n/2*(--e*(e-2)-1)+t}function U(e){let t='a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled])';return e.flatMap(n=>{let i=n.matches(t),o=Array.from(n.querySelectorAll(t));return[...i?[n]:[],...o]}).filter(n=>getComputedStyle(n).pointerEvents!=="none"&&ge(n))}function ee(e){if(!e||he(e))return;let t=c("smoothScroll");e.scrollIntoView({behavior:!t||me(e)?"auto":"smooth",inline:"center",block:"center"})}function me(e){if(!e||!e.parentElement)return;let t=e.parentElement;return t.scrollHeight>t.clientHeight}function he(e){let t=e.getBoundingClientRect();return t.top>=0&&t.left>=0&&t.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&t.right<=(window.innerWidth||document.documentElement.clientWidth)}function ge(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)}var R={};function x(e,t){R[e]=t}function f(e){return e?R[e]:R}function X(){R={}}var q={};function W(e,t){q[e]=t}function $(e){var t;(t=q[e])==null||t.call(q)}function we(){q={}}function ye(e,t,n,i){let o=f("__activeStagePosition"),a=o||n.getBoundingClientRect(),l=i.getBoundingClientRect(),p=O(e,a.x,l.x-a.x,t),r=O(e,a.y,l.y-a.y,t),d=O(e,a.width,l.width-a.width,t),s=O(e,a.height,l.height-a.height,t);o={x:p,y:r,width:d,height:s},ne(o),x("__activeStagePosition",o)}function te(e){if(!e)return;let t=e.getBoundingClientRect(),n={x:t.x,y:t.y,width:t.width,height:t.height};x("__activeStagePosition",n),ne(n)}function be(){let e=f("__activeStagePosition"),t=f("__overlaySvg");if(!e)return;if(!t){console.warn("No stage svg found.");return}let n=window.innerWidth,i=window.innerHeight;t.setAttribute("viewBox",`0 0 ${n} ${i}`)}function xe(e){let t=Ce(e);document.body.appendChild(t),re(t,n=>{n.target.tagName==="path"&&$("overlayClick")}),x("__overlaySvg",t)}function ne(e){let t=f("__overlaySvg");if(!t){xe(e);return}let n=t.firstElementChild;if(n?.tagName!=="path")throw new Error("no path element found in stage svg");n.setAttribute("d",oe(e))}function Ce(e){let t=window.innerWidth,n=window.innerHeight,i=document.createElementNS("http://www.w3.org/2000/svg","svg");i.classList.add("driver-overlay","driver-overlay-animated"),i.setAttribute("viewBox",`0 0 ${t} ${n}`),i.setAttribute("xmlSpace","preserve"),i.setAttribute("xmlnsXlink","http://www.w3.org/1999/xlink"),i.setAttribute("version","1.1"),i.setAttribute("preserveAspectRatio","xMinYMin slice"),i.style.fillRule="evenodd",i.style.clipRule="evenodd",i.style.strokeLinejoin="round",i.style.strokeMiterlimit="2",i.style.zIndex="10000",i.style.position="fixed",i.style.top="0",i.style.left="0",i.style.width="100%",i.style.height="100%";let o=document.createElementNS("http://www.w3.org/2000/svg","path");return o.setAttribute("d",oe(e)),o.style.fill=c("overlayColor")||"rgb(0,0,0)",o.style.opacity=`${c("overlayOpacity")}`,o.style.pointerEvents="auto",o.style.cursor="auto",i.appendChild(o),i}function oe(e){let t=window.innerWidth,n=window.innerHeight,i=c("stagePadding")||0,o=c("stageRadius")||0,a=e.width+i*2,l=e.height+i*2,p=Math.min(o,a/2,l/2),r=Math.floor(Math.max(p,0)),d=e.x-i+r,s=e.y-i,u=a-r*2,v=l-r*2;return`M${t},0L0,0L0,${n}L${t},${n}L${t},0Z
    M${d},${s} h${u} a${r},${r} 0 0 1 ${r},${r} v${v} a${r},${r} 0 0 1 -${r},${r} h-${u} a${r},${r} 0 0 1 -${r},-${r} v-${v} a${r},${r} 0 0 1 ${r},-${r} z`}function Se(){let e=f("__overlaySvg");e&&e.remove()}function Le(){let e=document.getElementById("driver-dummy-element");if(e)return e;let t=document.createElement("div");return t.id="driver-dummy-element",t.style.width="0",t.style.height="0",t.style.pointerEvents="none",t.style.opacity="0",t.style.position="fixed",t.style.top="50%",t.style.left="50%",document.body.appendChild(t),t}function V(e){let{element:t}=e,n=typeof t=="string"?document.querySelector(t):t;n||(n=Le()),_e(n,e)}function ke(){let e=f("__activeElement"),t=f("__activeStep");e&&(te(e),be(),le(e,t))}function _e(e,t){let n=Date.now(),i=f("__activeStep"),o=f("__activeElement")||e,a=!o||o===e,l=e.id==="driver-dummy-element",p=o.id==="driver-dummy-element",r=c("animate"),d=t.onHighlightStarted||c("onHighlightStarted"),s=t?.onHighlighted||c("onHighlighted"),u=i?.onDeselected||c("onDeselected"),v=c(),m=f();!a&&u&&u(p?void 0:o,i,{config:v,state:m}),d&&d(l?void 0:e,t,{config:v,state:m});let w=!a&&r,g=!1;Ae(),x("previousStep",i),x("previousElement",o),x("activeStep",t),x("activeElement",e);let h=()=>{if(f("__transitionCallback")!==h)return;let y=Date.now()-n,L=400-y<=400/2;t.popover&&L&&!g&&w&&(Z(e,t),g=!0),c("animate")&&y<400?ye(y,400,o,e):(te(e),s&&s(l?void 0:e,t,{config:c(),state:f()}),x("__transitionCallback",void 0),x("__previousStep",i),x("__previousElement",o),x("__activeStep",t),x("__activeElement",e)),window.requestAnimationFrame(h)};x("__transitionCallback",h),window.requestAnimationFrame(h),ee(e),!w&&t.popover&&Z(e,t),o.classList.remove("driver-active-element","driver-no-interaction"),o.removeAttribute("aria-haspopup"),o.removeAttribute("aria-expanded"),o.removeAttribute("aria-controls"),c("disableActiveInteraction")&&e.classList.add("driver-no-interaction"),e.classList.add("driver-active-element"),e.setAttribute("aria-haspopup","dialog"),e.setAttribute("aria-expanded","true"),e.setAttribute("aria-controls","driver-popover-content")}function Ee(){var e;(e=document.getElementById("driver-dummy-element"))==null||e.remove(),document.querySelectorAll(".driver-active-element").forEach(t=>{t.classList.remove("driver-active-element","driver-no-interaction"),t.removeAttribute("aria-haspopup"),t.removeAttribute("aria-expanded"),t.removeAttribute("aria-controls")})}function A(){let e=f("__resizeTimeout");e&&window.cancelAnimationFrame(e),x("__resizeTimeout",window.requestAnimationFrame(ke))}function Pe(e){var t;if(!f("isInitialized")||!(e.key==="Tab"||e.keyCode===9))return;let n=f("__activeElement"),i=(t=f("popover"))==null?void 0:t.wrapper,o=U([...i?[i]:[],...n?[n]:[]]),a=o[0],l=o[o.length-1];if(e.preventDefault(),e.shiftKey){let p=o[o.indexOf(document.activeElement)-1]||l;p?.focus()}else{let p=o[o.indexOf(document.activeElement)+1]||a;p?.focus()}}function ie(e){var t;((t=c("allowKeyboardControl"))==null||t)&&(e.key==="Escape"?$("escapePress"):e.key==="ArrowRight"?$("arrowRightPress"):e.key==="ArrowLeft"&&$("arrowLeftPress"))}function re(e,t,n){let i=(o,a)=>{let l=o.target;e.contains(l)&&((!n||n(l))&&(o.preventDefault(),o.stopPropagation(),o.stopImmediatePropagation()),a?.(o))};document.addEventListener("pointerdown",i,!0),document.addEventListener("mousedown",i,!0),document.addEventListener("pointerup",i,!0),document.addEventListener("mouseup",i,!0),document.addEventListener("click",o=>{i(o,t)},!0)}function Ne(){window.addEventListener("keyup",ie,!1),window.addEventListener("keydown",Pe,!1),window.addEventListener("resize",A),window.addEventListener("scroll",A)}function $e(){window.removeEventListener("keyup",ie),window.removeEventListener("resize",A),window.removeEventListener("scroll",A)}function Ae(){let e=f("popover");e&&(e.wrapper.style.display="none")}function Z(e,t){var n,i;let o=f("popover");o&&document.body.removeChild(o.wrapper),o=Te(),document.body.appendChild(o.wrapper);let{title:a,description:l,showButtons:p,disableButtons:r,showProgress:d,nextBtnText:s=c("nextBtnText")||"Next &rarr;",prevBtnText:u=c("prevBtnText")||"&larr; Previous",progressText:v=c("progressText")||"{current} of {total}"}=t.popover||{};o.nextButton.innerHTML=s,o.previousButton.innerHTML=u,o.progress.innerHTML=v,a?(o.title.innerHTML=a,o.title.style.display="block"):o.title.style.display="none",l?(o.description.innerHTML=l,o.description.style.display="block"):o.description.style.display="none";let m=p||c("showButtons"),w=d||c("showProgress")||!1,g=m?.includes("next")||m?.includes("previous")||w;o.closeButton.style.display=m.includes("close")?"block":"none",g?(o.footer.style.display="flex",o.progress.style.display=w?"block":"none",o.nextButton.style.display=m.includes("next")?"block":"none",o.previousButton.style.display=m.includes("previous")?"block":"none"):o.footer.style.display="none";let h=r||c("disableButtons")||[];h!=null&&h.includes("next")&&(o.nextButton.disabled=!0,o.nextButton.classList.add("driver-popover-btn-disabled")),h!=null&&h.includes("previous")&&(o.previousButton.disabled=!0,o.previousButton.classList.add("driver-popover-btn-disabled")),h!=null&&h.includes("close")&&(o.closeButton.disabled=!0,o.closeButton.classList.add("driver-popover-btn-disabled"));let y=o.wrapper;y.style.display="block",y.style.left="",y.style.top="",y.style.bottom="",y.style.right="",y.id="driver-popover-content",y.setAttribute("role","dialog"),y.setAttribute("aria-labelledby","driver-popover-title"),y.setAttribute("aria-describedby","driver-popover-description");let L=o.arrow;L.className="driver-popover-arrow";let _=((n=t.popover)==null?void 0:n.popoverClass)||c("popoverClass")||"";y.className=`driver-popover ${_}`.trim(),re(o.wrapper,E=>{var B,T,H;let N=E.target,M=((B=t.popover)==null?void 0:B.onNextClick)||c("onNextClick"),I=((T=t.popover)==null?void 0:T.onPrevClick)||c("onPrevClick"),D=((H=t.popover)==null?void 0:H.onCloseClick)||c("onCloseClick");if(N.classList.contains("driver-popover-next-btn"))return M?M(e,t,{config:c(),state:f()}):$("nextClick");if(N.classList.contains("driver-popover-prev-btn"))return I?I(e,t,{config:c(),state:f()}):$("prevClick");if(N.classList.contains("driver-popover-close-btn"))return D?D(e,t,{config:c(),state:f()}):$("closeClick")},E=>!(o!=null&&o.description.contains(E))&&!(o!=null&&o.title.contains(E))&&typeof E.className=="string"&&E.className.includes("driver-popover")),x("popover",o);let b=((i=t.popover)==null?void 0:i.onPopoverRender)||c("onPopoverRender");b&&b(o,{config:c(),state:f()}),le(e,t),ee(y);let C=e.classList.contains("driver-dummy-element"),S=U([y,...C?[]:[e]]);S.length>0&&S[0].focus()}function se(){let e=f("popover");if(!(e!=null&&e.wrapper))return;let t=e.wrapper.getBoundingClientRect(),n=c("stagePadding")||0,i=c("popoverOffset")||0;return{width:t.width+n+i,height:t.height+n+i,realWidth:t.width,realHeight:t.height}}function G(e,t){let{elementDimensions:n,popoverDimensions:i,popoverPadding:o,popoverArrowDimensions:a}=t;return e==="start"?Math.max(Math.min(n.top-o,window.innerHeight-i.realHeight-a.width),a.width):e==="end"?Math.max(Math.min(n.top-i?.realHeight+n.height+o,window.innerHeight-i?.realHeight-a.width),a.width):e==="center"?Math.max(Math.min(n.top+n.height/2-i?.realHeight/2,window.innerHeight-i?.realHeight-a.width),a.width):0}function Q(e,t){let{elementDimensions:n,popoverDimensions:i,popoverPadding:o,popoverArrowDimensions:a}=t;return e==="start"?Math.max(Math.min(n.left-o,window.innerWidth-i.realWidth-a.width),a.width):e==="end"?Math.max(Math.min(n.left-i?.realWidth+n.width+o,window.innerWidth-i?.realWidth-a.width),a.width):e==="center"?Math.max(Math.min(n.left+n.width/2-i?.realWidth/2,window.innerWidth-i?.realWidth-a.width),a.width):0}function le(e,t){let n=f("popover");if(!n)return;let{align:i="start",side:o="left"}=t?.popover||{},a=i,l=e.id==="driver-dummy-element"?"over":o,p=c("stagePadding")||0,r=se(),d=n.arrow.getBoundingClientRect(),s=e.getBoundingClientRect(),u=s.top-r.height,v=u>=0,m=window.innerHeight-(s.bottom+r.height),w=m>=0,g=s.left-r.width,h=g>=0,y=window.innerWidth-(s.right+r.width),L=y>=0,_=!v&&!w&&!h&&!L,b=l;if(l==="top"&&v?L=h=w=!1:l==="bottom"&&w?L=h=v=!1:l==="left"&&h?L=v=w=!1:l==="right"&&L&&(h=v=w=!1),l==="over"){let C=window.innerWidth/2-r.realWidth/2,S=window.innerHeight/2-r.realHeight/2;n.wrapper.style.left=`${C}px`,n.wrapper.style.right="auto",n.wrapper.style.top=`${S}px`,n.wrapper.style.bottom="auto"}else if(_){let C=window.innerWidth/2-r?.realWidth/2,S=10;n.wrapper.style.left=`${C}px`,n.wrapper.style.right="auto",n.wrapper.style.bottom=`${S}px`,n.wrapper.style.top="auto"}else if(h){let C=Math.min(g,window.innerWidth-r?.realWidth-d.width),S=G(a,{elementDimensions:s,popoverDimensions:r,popoverPadding:p,popoverArrowDimensions:d});n.wrapper.style.left=`${C}px`,n.wrapper.style.top=`${S}px`,n.wrapper.style.bottom="auto",n.wrapper.style.right="auto",b="left"}else if(L){let C=Math.min(y,window.innerWidth-r?.realWidth-d.width),S=G(a,{elementDimensions:s,popoverDimensions:r,popoverPadding:p,popoverArrowDimensions:d});n.wrapper.style.right=`${C}px`,n.wrapper.style.top=`${S}px`,n.wrapper.style.bottom="auto",n.wrapper.style.left="auto",b="right"}else if(v){let C=Math.min(u,window.innerHeight-r.realHeight-d.width),S=Q(a,{elementDimensions:s,popoverDimensions:r,popoverPadding:p,popoverArrowDimensions:d});n.wrapper.style.top=`${C}px`,n.wrapper.style.left=`${S}px`,n.wrapper.style.bottom="auto",n.wrapper.style.right="auto",b="top"}else if(w){let C=Math.min(m,window.innerHeight-r?.realHeight-d.width),S=Q(a,{elementDimensions:s,popoverDimensions:r,popoverPadding:p,popoverArrowDimensions:d});n.wrapper.style.left=`${S}px`,n.wrapper.style.bottom=`${C}px`,n.wrapper.style.top="auto",n.wrapper.style.right="auto",b="bottom"}_?n.arrow.classList.add("driver-popover-arrow-none"):Be(a,b,e)}function Be(e,t,n){let i=f("popover");if(!i)return;let o=n.getBoundingClientRect(),a=se(),l=i.arrow,p=a.width,r=window.innerWidth,d=o.width,s=o.left,u=a.height,v=window.innerHeight,m=o.top,w=o.height;l.className="driver-popover-arrow";let g=t,h=e;t==="top"?(s+d<=0?(g="right",h="end"):s+d-p<=0&&(g="top",h="start"),s>=r?(g="left",h="end"):s+p>=r&&(g="top",h="end")):t==="bottom"?(s+d<=0?(g="right",h="start"):s+d-p<=0&&(g="bottom",h="start"),s>=r?(g="left",h="start"):s+p>=r&&(g="bottom",h="end")):t==="left"?(m+w<=0?(g="bottom",h="end"):m+w-u<=0&&(g="left",h="start"),m>=v?(g="top",h="end"):m+u>=v&&(g="left",h="end")):t==="right"&&(m+w<=0?(g="bottom",h="start"):m+w-u<=0&&(g="right",h="start"),m>=v?(g="top",h="start"):m+u>=v&&(g="right",h="end")),g?(l.classList.add(`driver-popover-arrow-side-${g}`),l.classList.add(`driver-popover-arrow-align-${h}`)):l.classList.add("driver-popover-arrow-none")}function Te(){let e=document.createElement("div");e.classList.add("driver-popover");let t=document.createElement("div");t.classList.add("driver-popover-arrow");let n=document.createElement("header");n.id="driver-popover-title",n.classList.add("driver-popover-title"),n.style.display="none",n.innerText="Popover Title";let i=document.createElement("div");i.id="driver-popover-description",i.classList.add("driver-popover-description"),i.style.display="none",i.innerText="Popover description is here";let o=document.createElement("button");o.type="button",o.classList.add("driver-popover-close-btn"),o.setAttribute("aria-label","Close"),o.innerHTML="&times;";let a=document.createElement("footer");a.classList.add("driver-popover-footer");let l=document.createElement("span");l.classList.add("driver-popover-progress-text"),l.innerText="";let p=document.createElement("span");p.classList.add("driver-popover-navigation-btns");let r=document.createElement("button");r.type="button",r.classList.add("driver-popover-prev-btn"),r.innerHTML="&larr; Previous";let d=document.createElement("button");return d.type="button",d.classList.add("driver-popover-next-btn"),d.innerHTML="Next &rarr;",p.appendChild(r),p.appendChild(d),a.appendChild(l),a.appendChild(p),e.appendChild(o),e.appendChild(t),e.appendChild(n),e.appendChild(i),e.appendChild(a),{wrapper:e,arrow:t,title:n,description:i,footer:a,previousButton:r,nextButton:d,closeButton:o,footerButtons:p,progress:l}}function He(){var e;let t=f("popover");t&&((e=t.wrapper.parentElement)==null||e.removeChild(t.wrapper))}function J(e={}){j(e);function t(){c("allowClose")&&d()}function n(){let s=f("activeIndex"),u=c("steps")||[];if(typeof s>"u")return;let v=s+1;u[v]?r(v):d()}function i(){let s=f("activeIndex"),u=c("steps")||[];if(typeof s>"u")return;let v=s-1;u[v]?r(v):d()}function o(s){(c("steps")||[])[s]?r(s):d()}function a(){var s;if(f("__transitionCallback"))return;let u=f("activeIndex"),v=f("__activeStep"),m=f("__activeElement");if(typeof u>"u"||typeof v>"u"||typeof f("activeIndex")>"u")return;let w=((s=v.popover)==null?void 0:s.onPrevClick)||c("onPrevClick");if(w)return w(m,v,{config:c(),state:f()});i()}function l(){var s;if(f("__transitionCallback"))return;let u=f("activeIndex"),v=f("__activeStep"),m=f("__activeElement");if(typeof u>"u"||typeof v>"u")return;let w=((s=v.popover)==null?void 0:s.onNextClick)||c("onNextClick");if(w)return w(m,v,{config:c(),state:f()});n()}function p(){f("isInitialized")||(x("isInitialized",!0),document.body.classList.add("driver-active",c("animate")?"driver-fade":"driver-simple"),Ne(),W("overlayClick",t),W("escapePress",t),W("arrowLeftPress",a),W("arrowRightPress",l))}function r(s=0){var u,v,m,w,g,h,y,L;let _=c("steps");if(!_){console.error("No steps to drive through"),d();return}if(!_[s]){d();return}x("__activeOnDestroyed",document.activeElement),x("activeIndex",s);let b=_[s],C=_[s+1],S=_[s-1],E=((u=b.popover)==null?void 0:u.doneBtnText)||c("doneBtnText")||"Done",B=c("allowClose"),T=typeof((v=b.popover)==null?void 0:v.showProgress)<"u"?(m=b.popover)==null?void 0:m.showProgress:c("showProgress"),H=(((w=b.popover)==null?void 0:w.progressText)||c("progressText")||"{{current}} of {{total}}").replace("{{current}}",`${s+1}`).replace("{{total}}",`${_.length}`),N=((g=b.popover)==null?void 0:g.showButtons)||c("showButtons"),M=["next","previous",...B?["close"]:[]].filter(fe=>!(N!=null&&N.length)||N.includes(fe)),I=((h=b.popover)==null?void 0:h.onNextClick)||c("onNextClick"),D=((y=b.popover)==null?void 0:y.onPrevClick)||c("onPrevClick"),ve=((L=b.popover)==null?void 0:L.onCloseClick)||c("onCloseClick");V({...b,popover:{showButtons:M,nextBtnText:C?void 0:E,disableButtons:[...S?[]:["previous"]],showProgress:T,progressText:H,onNextClick:I||(()=>{C?r(s+1):d()}),onPrevClick:D||(()=>{r(s-1)}),onCloseClick:ve||(()=>{d()}),...b?.popover||{}}})}function d(s=!0){let u=f("__activeElement"),v=f("__activeStep"),m=f("__activeOnDestroyed"),w=c("onDestroyStarted");if(s&&w){let y=!u||u?.id==="driver-dummy-element";w(y?void 0:u,v,{config:c(),state:f()});return}let g=v?.onDeselected||c("onDeselected"),h=c("onDestroyed");if(document.body.classList.remove("driver-active","driver-fade","driver-simple"),$e(),He(),Ee(),Se(),we(),X(),u&&v){let y=u.id==="driver-dummy-element";g&&g(y?void 0:u,v,{config:c(),state:f()}),h&&h(y?void 0:u,v,{config:c(),state:f()})}m&&m.focus()}return{isActive:()=>f("isInitialized")||!1,refresh:A,drive:(s=0)=>{p(),r(s)},setConfig:j,setSteps:s=>{X(),j({...c(),steps:s})},getConfig:c,getState:f,getActiveIndex:()=>f("activeIndex"),isFirstStep:()=>f("activeIndex")===0,isLastStep:()=>{let s=c("steps")||[],u=f("activeIndex");return u!==void 0&&u===s.length-1},getActiveStep:()=>f("activeStep"),getActiveElement:()=>f("activeElement"),getPreviousElement:()=>f("previousElement"),getPreviousStep:()=>f("previousStep"),moveNext:n,movePrevious:i,moveTo:o,hasNextStep:()=>{let s=c("steps")||[],u=f("activeIndex");return u!==void 0&&s[u+1]},hasPreviousStep:()=>{let s=c("steps")||[],u=f("activeIndex");return u!==void 0&&s[u-1]},highlight:s=>{p(),V({...s,popover:s.popover?{showButtons:[],showProgress:!1,progressText:"",...s.popover}:void 0})},destroy:()=>{d(!1)}}}var de=0,ce=0,P=!1,Me=window.navigator.clipboard,K=!1,z=null,k=document.querySelector("#circle-cursor");function pe(){Livewire.on("filament-tour::change-css-selector-status",function({enabled:e}){if(e){let t=function(n){n.key==="Escape"&&(P=!1,z=null,k.style.display="none")};document.onmousemove=Oe,document.onkeyup=t,document.onmouseover=We,document.onmouseleave=Re,document.addEventListener("keydown",function(n){n.ctrlKey&&n.code==="Space"&&!P&&(Me?(P=!0,ue(de,ce),k.style.display="block",new FilamentNotification().title("Filament Tour - CSS Selector").body("Activated !<br>Press Ctrl + C to copy the CSS Selector of the selected element !").success().send()):new FilamentNotification().title("Filament Tour - CSS Selector").body("Your browser does not support the Clipboard API !<br>Don't forget to be in <b>https://</b> protocol").danger().send()),n.ctrlKey&&n.code==="KeyC"&&P&&(navigator.clipboard.writeText(Ie(z)??"Nothing selected !"),P=!1,z=null,k.style.display="none",new FilamentNotification().title("Filament Tour - CSS Selector").body("CSS Selector copied to clipboard !").success().send())})}})}function ae(e){return e.replace(/([!"#$%&'()*+,./:;<=>?@[\]^`{|}~])/g,"\\$1")}function Ie(e){let t=F(e);return De(t)}function De(e){let t=e.split(" > ");for(let n=t.length-2;n>=0;n--){let i=t.slice(n).join(" > ");if(document.querySelectorAll(i).length===1)return i}return e}function F(e){if(!e)return"";if(e.id)return"#"+ae(e.id);if(e===document.body)return"body";let t=e.tagName.toLowerCase(),n=e.className.split(/\s+/).filter(a=>a&&!a.startsWith("--")),i=n.length?"."+n.map(ae).join("."):"",o=t+i;try{let a=Array.from(e.parentNode.querySelectorAll(o));if(a.length===1&&a[0]===e)return F(e.parentNode)+" > "+o;let p=Array.from(e.parentNode.children).filter(r=>r.tagName===e.tagName&&r.className===e.className);if(p.length>1){let r=p.indexOf(e)+1;return F(e.parentNode)+" > "+t+i+":nth-of-type("+r+")"}else return F(e.parentNode)+" > "+t+i}catch{}}function Oe(e){de=e.clientX,ce=e.clientY,ue(e.clientX,e.clientY)}function ue(e,t){if(!P)return;let n=10;K||(k.style.left=e-n+"px",k.style.top=t-n+"px",k.style.width="20px",k.style.height="20px",k.style.borderRadius="50%")}function We(e){if(e.stopPropagation(),!P)return;K=!0;let t=e.target;for(;t.lastElementChild;)t=t.lastElementChild;if(t){let n=t.offsetParent?t.offsetLeft+t.offsetParent.offsetLeft:t.offsetLeft,i=t.offsetParent?t.offsetTop+t.offsetParent.offsetTop:t.offsetTop,o=t.offsetWidth,a=t.offsetHeight,l=6;z=t,k.style.left=n-l+"px",k.style.top=i-l+"px",k.style.width=o+l*2-1+"px",k.style.height=a+l*2-1+"px",k.style.borderRadius="5px"}}function Re(e){P&&(K=!1)}document.addEventListener("livewire:initialized",async function(){pe();let e,t=[],n=[];function i(l,p){if(document.querySelector(l)){p(document.querySelector(l));return}let r=new MutationObserver(function(d){document.querySelector(l)&&(p(document.querySelector(l)),r.disconnect())});r.observe(document.body,{childList:!0,subtree:!0})}Livewire.dispatch("filament-tour::load-elements",{request:window.location}),Livewire.on("filament-tour::loaded-elements",function(l){e=l,e.tours.forEach(p=>{t.push(p),localStorage.getItem("tours")||localStorage.setItem("tours","[]")}),o(t),e.highlights.forEach(p=>{p.route===window.location.pathname&&(i(p.parent,function(r){r.parentNode.style.position="relative";let d=document.createElement("div");d.innerHTML=p.button,d.firstChild.classList.add(p.position),r.parentNode.insertBefore(d.firstChild,r)}),n.push(p))})});function o(l,p=0){for(let r=p;r<l.length;r++){let d=l[r],s=d.alwaysShow,u=d.routesIgnored,v=d.route===window.location.pathname,m=!e.only_visible_once||e.only_visible_once&&!localStorage.getItem("tours").includes(d.id);if(s&&u||s&&!u&&v||u&&m||v&&m){a(d);break}}}Livewire.on("filament-tour::open-highlight",function(l){let p=n.find(r=>r.id===l);p?J({overlayColor:localStorage.theme==="light"?p.colors.light:p.colors.dark,onPopoverRender:(r,{config:d,state:s})=>{r.title.innerHTML="",r.title.innerHTML=s.activeStep.popover.title,s.activeStep.popover.description||(r.title.firstChild.style.justifyContent="center");let u="p-6 dark:text-white fi-section rounded-xl bg-white shadow-sm ring-1 ring-gray-950/5 dark:bg-gray-900 dark:ring-white/10 mb-4";r.footer.parentElement.classList.add(...u.split(" "))}}).highlight(p):console.error(`Highlight with id '${l}' not found`)}),Livewire.on("filament-tour::open-tour",function(l){let p=t.find(r=>r.id===l);p?a(p):console.error(`Tour with id '${l}' not found`)});function a(l){let p=JSON.parse(l.steps);if(p.length>0){let r=J({allowClose:!0,disableActiveInteraction:!0,overlayColor:localStorage.theme==="light"?l.colors.light:l.colors.dark,onDeselected:(d,s,{config:u,state:v})=>{},onCloseClick:(d,s,{config:u,state:v})=>{v.activeStep&&(!v.activeStep.uncloseable||l.uncloseable)&&r.destroy(),localStorage.getItem("tours").includes(l.id)||localStorage.setItem("tours",JSON.stringify([...JSON.parse(localStorage.getItem("tours")),l.id]))},onDestroyStarted:(d,s,{config:u,state:v})=>{v.activeStep&&!v.activeStep.uncloseable&&!l.uncloseable&&r.destroy()},onDestroyed:(d,s,{config:u,state:v})=>{},onNextClick:(d,s,{config:u,state:v})=>{if(t.length>1&&r.isLastStep()){let m=t.findIndex(w=>w.id===l.id);if(m!==-1&&m<t.length-1){let w=m+1;o(t,w)}}r.isLastStep()&&(localStorage.getItem("tours").includes(l.id)||localStorage.setItem("tours",JSON.stringify([...JSON.parse(localStorage.getItem("tours")),l.id])),r.destroy()),s.events&&(s.events.notifyOnNext&&new FilamentNotification().title(s.events.notifyOnNext.title).body(s.events.notifyOnNext.body).icon(s.events.notifyOnNext.icon).iconColor(s.events.notifyOnNext.iconColor).color(s.events.notifyOnNext.color).duration(s.events.notifyOnNext.duration).send(),s.events.dispatchOnNext&&Livewire.dispatch(s.events.dispatchOnNext.name,s.events.dispatchOnNext.params),s.events.clickOnNext&&document.querySelector(s.events.clickOnNext).click(),s.events.redirectOnNext&&window.open(s.events.redirectOnNext.url,s.events.redirectOnNext.newTab?"_blank":"_self")),r.moveNext()},onPopoverRender:(d,{config:s,state:u})=>{(u.activeStep.uncloseable||l.uncloseable)&&document.querySelector(".driver-popover-close-btn").remove(),d.title.innerHTML="",d.title.innerHTML=u.activeStep.popover.title,u.activeStep.popover.description||(d.title.firstChild.style.justifyContent="center");let v="p-6 dark:text-white fi-section rounded-xl bg-white shadow-sm ring-1 ring-gray-950/5 dark:bg-gray-900 dark:ring-white/10 mb-4";d.footer.parentElement.classList.add(...v.split(" ")),d.footer.innerHTML="",d.footer.classList.add("flex","mt-6","gap-3"),d.footer.classList.remove("driver-popover-footer");let m=document.createElement("button"),w="fi-btn fi-btn-size-md relative grid-flow-col items-center justify-center font-semibold outline-none transition duration-75 focus:ring-2 disabled:pointer-events-none disabled:opacity-70 rounded-lg fi-btn-color-primary gap-1.5 px-3 py-2 text-sm inline-grid shadow-sm bg-custom-600 text-white hover:bg-custom-500 dark:bg-custom-500 dark:hover:bg-custom-400 focus:ring-custom-500/50 dark:focus:ring-custom-400/50 fi-ac-btn-action";m.classList.add(...w.split(" "),"driver-popover-next-btn"),m.innerText=r.isLastStep()?l.doneButtonLabel:l.nextButtonLabel,m.style.setProperty("--c-400","var(--primary-400"),m.style.setProperty("--c-500","var(--primary-500"),m.style.setProperty("--c-600","var(--primary-600");let g=document.createElement("button"),h="fi-btn fi-btn-size-md relative grid-flow-col items-center justify-center font-semibold outline-none transition duration-75 focus:ring-2 disabled:pointer-events-none disabled:opacity-70 rounded-lg fi-btn-color-gray gap-1.5 px-3 py-2 text-sm inline-grid shadow-sm bg-white text-gray-950 hover:bg-gray-50 dark:bg-white/5 dark:text-white dark:hover:bg-white/10 ring-1 ring-gray-950/10 dark:ring-white/20 fi-ac-btn-action";g.classList.add(...h.split(" "),"driver-popover-prev-btn"),g.innerText=l.previousButtonLabel,r.isFirstStep()||d.footer.appendChild(g),d.footer.appendChild(m)},steps:p});r.drive()}}});
