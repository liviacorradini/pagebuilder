/*! grapesjs-script-editor - 1.0.7 */
!function(t,e){'object'==typeof exports&&'object'==typeof module?module.exports=e():'function'==typeof define&&define.amd?define([],e):'object'==typeof exports?exports["grapesjs-script-editor"]=e():t["grapesjs-script-editor"]=e()}('undefined'!=typeof globalThis?globalThis:'undefined'!=typeof window?window:this,(()=>(()=>{"use strict";var t={d:(e,o)=>{for(var r in o)t.o(o,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:o[r]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r:t=>{'undefined'!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:'Module'}),Object.defineProperty(t,'__esModule',{value:!0})}},e={};function o(t){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(t)}function r(t){var e=function(t,e){if("object"!==o(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,e||"default");if("object"!==o(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"===o(e)?e:String(e)}function n(t,e,o){return(e=r(e))in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}t.r(e),t.d(e,{default:()=>p});var i='edit-script';function c(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,r)}return o}function a(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?c(Object(o),!0).forEach((function(e){n(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):c(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}const s=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=t.Commands,r=t.Modal,n=t.Components,c=e.modalTitle,s=e.codeViewOptions,u=e.commandAttachScript,l=e.toolbarIcon,p=e.onRun,d=e.onError,f=e.starter,b=e.scriptTypesSupport,g=null,m=function(t,e){e instanceof HTMLElement?t.appendChild(e):e&&t.insertAdjacentHTML('beforeend',e)};t.$.isString(b)&&(b=b.split(',')),t.$.isArray(b)&&(b=b.includes('*')?n.getTypes().map((function(t){return t.id})):b),b&&b.forEach((function(t){var o=n.getType(t).model;n.addType(t,{model:{initToolbar:function(){o.prototype.initToolbar.apply(this,arguments);var t=this.get('toolbar'),r=t.some((function(t){return t.command===i}));r||(t.unshift(a({command:i,label:l},e.toolbarBtnCustomScript)),this.set('toolbar',t))}}})})),o.add(i,a({run:function(t,e){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};this.editor=t,this.options=o,this.target=o.target||t.getSelected();var r=this.target;r&&this.showCustomCode(r)},stop:function(t){r.close()},showCustomCode:function(t){var e=this,o=this.editor,n=this.options.title||c;g||(g=this.getContent());var i=t.getScriptString()||f;r.open({title:n,content:g}).getModel().once('change:open',(function(){return o.stopCommand(e.id)})),this.getCodeViewer().setContent(i)},getPreContent:function(){},getPostContent:function(){},getContent:function(){var t=this.editor,e=document.createElement('div'),o=t.getConfig('stylePrefix');e.className="".concat(o,"attach-script"),m(e,this.getPreContent());var r=this.getCodeViewer();return r.refresh(),setTimeout((function(){return r.focus()}),0),e.appendChild(r.getElement()),m(e,this.getPostContent()),m(e,this.getContentActions()),e},getContentActions:function(){var t=this,o=this.editor,r=document.createElement('div');r.id="actns";var n=document.createElement('button'),i=o.getConfig('stylePrefix');n.innerHTML=e.buttonLabel,n.className="".concat(i,"btn-prim ").concat(i,"btn-save__inject-logic"),n.onclick=function(){return t.handleSave()};var c=document.createElement('div');return c.id="logic-toolbar",c.className="fa fa-bug",c.style="margin:5px;padding:10px;background:rgba(0,0,0,0.2);border-radius:3px;border:1px solid rgba(0,0,0,0.2);cursor:pointer",c.onclick=function(){return t.runCode()},r.appendChild(c),r.appendChild(n),r},handleSave:function(){var t=this.editor,e=this.target,o=this.getCodeViewer().getContent();e.set('script',o),t.Modal.close()},getCodeViewer:function(){var t=this.editor;return this.codeViewer||(this.codeViewer=t.CodeManager.createViewer(a({codeName:'javascript',theme:'hopscotch',readOnly:0,autoBeautify:1},s))),this.codeViewer},runCode:function(){try{var t=this.getCodeViewer().getContent();Function('"use strict";'+t)(),p&&p()}catch(t){console.log("error",t),d&&d(t)}}},u))};function u(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,r)}return o}function l(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?u(Object(o),!0).forEach((function(e){n(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):u(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}const p=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=l(l({},{starter:'let el = this',toolbarIcon:'<i class="fa fa-file-code-o"></i>',scriptTypesSupport:['default','wrapper','text','textnode','image','video','svg'],toolbarBtnCustomScript:{},onRun:function(){return console.log('valid syntax')},onError:function(t){return console.log('error',t)},modalTitle:'Script',codeLabel:'JS',codeViewOptions:{},buttonLabel:'Save',commandAttachScript:{}}),e);s(t,o)};return e})()));
//# sourceMappingURL=index.js.map