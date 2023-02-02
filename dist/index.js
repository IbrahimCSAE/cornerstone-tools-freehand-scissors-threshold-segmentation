!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("cornerstone-tools"),require("cornerstone-core")):"function"==typeof define&&define.amd?define("FreehandScissorsThresholdSegmentation",["cornerstone-tools","cornerstone-core"],t):"object"==typeof exports?exports.FreehandScissorsThresholdSegmentation=t(require("cornerstone-tools"),require("cornerstone-core")):e.FreehandScissorsThresholdSegmentation=t(e.cornerstoneTools,e.cornerstone)}(self,((e,t)=>(()=>{"use strict";var o={213:e=>{e.exports=t},353:t=>{t.exports=e}},n={};function r(e){var t=n[e];if(void 0!==t)return t.exports;var s=n[e]={exports:{}};return o[e](s,s.exports,r),s.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var s={};return(()=>{r.d(s,{default:()=>u});var e=r(353),t=r.n(e),o=r(213),n=r.n(o);const{getBoundingBoxAroundPolygon:i,getDiffBetweenPixelData:a}=t().import("util/segmentationUtils"),l=t().import("util/isPointInPolygon"),d=t().import("util/triggerEvent"),c=t().import("util/getLogger")("util:segmentation:operations:paintWithinThresholdInsideOrOutsideFreehandShape");function h(e,o){const{points:r,configuration:s}=o,{image:h}=e.detail,g=r.map((e=>[e.x,e.y])),[p,u]=i(g,h);!function(e,o,r,s,i,l){const h=e.detail.element,g=t().getToolState(h,"stack").data[0],{imageIds:p,currentImageIdIndex:u}=g,{segmentIndex:m}=o,{getters:f,setters:x}=t().getModule("segmentation"),I=function(e,t,o){const r=[];let s=e;for(let e=0;e<o;e++){let o=s+e;if(o>=t.length)break;r.push({imageIdIndex:o,image:n().imageCache.imageCache[t[o]]?.image})}return r}(u,p,l.numberOfSlices),{width:b,height:y}=e.detail.image,[S,D]=s,[L,v]=i;if(!l.inside){const e=[];for(let t=0;t<I.length;t++){const{image:o,imageIdIndex:n}=I[t];if(!o){c.warn("Image is undefined, it most likely has not been cached yet.");continue}const r=f.activeLabelmapIndex(h),d=f.labelmap3D(h,r),g=f.labelmap2DByImageIdIndex(d,n,o.rows,o.columns),{pixelData:p}=g,u=p.slice();for(let e=0;e<b;e++)for(let t=0;t<s[1];t++){const n=t*b+e,r=o.getPixelData()[n]*o.slope+o.intercept;r>=l.thresholdLow&&r<=l.thresholdHigh&&(p[n]=m)}for(let e=0;e<s[0];e++)for(let t=s[1];t<i[1];t++){const n=t*b+e,r=o.getPixelData()[n]*o.slope+o.intercept;r>=l.thresholdLow&&r<=l.thresholdHigh&&(p[n]=m)}for(let e=i[0];e<b;e++)for(let t=s[1];t<i[1];t++){const n=t*b+e,r=o.getPixelData()[n]*o.slope+o.intercept;r>=l.thresholdLow&&r<=l.thresholdHigh&&(p[n]=m)}for(let e=0;e<b;e++)for(let t=i[1];t<y;t++){const n=t*b+e,r=o.getPixelData()[n]*o.slope+o.intercept;r>=l.thresholdLow&&r<=l.thresholdHigh&&(p[n]=m)}const S={imageIdIndex:n,diff:a(u,p)};e.push(S),x.updateSegmentsOnLabelmap2D(g)}for(let o=e.length-1;o>=0;o--)x.pushState(h,[e[o]]),d(h,t().EVENTS.LABELMAP_MODIFIED,{labelmapIndex:f.activeLabelmapIndex(h)});return}const P=[];for(let e=0;e<I.length;e++){const{image:t,imageIdIndex:o}=I[e];if(!t){c.warn("Image is undefined, it most likely has not been cached yet.");continue}const n=f.activeLabelmapIndex(h),s=f.labelmap3D(h,n),i=f.labelmap2DByImageIdIndex(s,o,t.rows,t.columns),{pixelData:d}=i,g=d.slice();for(let e=S;e<L;e++)for(let o=D;o<v;o++)if(r({x:e,y:o})){const n=o*b+e,r=t.getPixelData()[n]*t.slope+t.intercept;r>=l.thresholdLow&&r<=l.thresholdHigh&&(d[n]=m)}const p={imageIdIndex:o,diff:a(g,d)};P.push(p),x.updateSegmentsOnLabelmap2D(i)}for(let e=P.length-1;e>=0;e--)x.pushState(h,[P[e]]),d(h,t().EVENTS.LABELMAP_MODIFIED,{labelmapIndex:f.activeLabelmapIndex(h)})}(e,o,(e=>l([e.x,e.y],g)),p,u,s)}const g=t().import("base/BaseTool"),{freehandFillInsideCursor:p}=t().import("tools/cursors");const u=class extends g{constructor(e={}){super(e,{name:"FreehandScissorsThresholdSegmentation",strategies:{PAINT:h},cursors:{PAINT:p},configuration:{thresholdLow:200,thresholdHigh:1e3,numberOfSlices:200,inside:!0},defaultStrategy:"PAINT",supportedInteractionTypes:["Mouse","Touch"],svgCursor:p,mixins:["freehandSegmentationMixin"]})}applyActiveStrategy(e,t){return t.configuration=this.configuration,this.strategies[this.activeStrategy].call(this,e,t)}}})(),s=s.default})()));