"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[631],{9631:function(e,n,t){t.r(n),t.d(n,{default:function(){return S}});var r,a,o,u=t(5861),i=t(9439),s=t(4687),c=t.n(s),p=t(8861),l=t(168),f=t(7304),h=t(9128),d=f.Z.form(r||(r=(0,l.Z)(["\n  margin-top: 10px;\n  display: inline-flex;\n  align-items: center;\n  position: relative;\n"]))),v=f.Z.input(a||(a=(0,l.Z)(["\n  padding: 12px 32px 12px 12px;\n  width: 300px;\n  font-size: 22px;\n  border: none;\n  border: 1px solid black;\n  background: #f6f6f6;\n  background-color: transparent;\n  &:active,\n  :hover,\n  :focus {\n    outline: 0;\n    outline-offset: 0;\n  }\n"]))),x=(0,f.Z)(h.G4C)(o||(o=(0,l.Z)(["\n  width: 24px;\n  height: 24px;\n  position: absolute;\n  right: 6px;\n"]))),g=t(2791),m=t(7596),b=t(184);function Z(e){var n=e.onUrlChange,t=(0,g.useState)(""),r=(0,i.Z)(t,2),a=r[0],o=r[1];return(0,b.jsxs)(d,{onSubmit:function(e){e.preventDefault(),""!==a.trim()?(n(a),o("")):m.Am.error("Request field is empty",{icon:"\u2623\ufe0f"})},children:[(0,b.jsx)(x,{}),(0,b.jsx)(v,{autocomplete:"off",autoFocus:!0,placeholder:"find",type:"text",value:a,onChange:function(e){o(e.currentTarget.value.toLowerCase())}})]})}var k=t(1087),y=t(7689),w=t(1243),_=function(){var e=(0,u.Z)(c().mark((function e(n){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.Z.get("".concat("https://api.themoviedb.org/3/","search/movie?api_key=").concat("b2b60abcbb35cb3956789fd400b70225","&language=en-US&query=").concat(n,"&page=1&include_adult=false"));case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),j=t(6573),C=t(8966);function S(){var e,n=(0,k.lr)(),t=(0,i.Z)(n,2),r=t[0],a=t[1],o=(0,g.useState)(!1),s=(0,i.Z)(o,2),l=s[0],f=s[1],h=(0,g.useState)(null),d=(0,i.Z)(h,2),v=d[0],x=d[1],w=(0,g.useState)([]),S=(0,i.Z)(w,2),q=S[0],A=S[1],T=null!==(e=r.get("query"))&&void 0!==e?e:"",U=(0,y.TH)();return(0,g.useEffect)((function(){function e(){return(e=(0,u.Z)(c().mark((function e(){var n,t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n=[],e.next=4,_(T);case 4:if(0!==(t=e.sent).length){e.next=10;break}return m.Am.error("No movies for your request",{icon:"\ud83d\udc7b"}),a((function(e){return{}})),A((function(e){return[]})),e.abrupt("return");case 10:t.map((function(e){var t=e.id,r=e.original_title,a=e.poster_path,o=e.vote_average,u={id:t,name:e.name,title:r,poster:a,voteAverage:o};return n.push(u)})),A(n),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),x(e.t0);case 17:return e.prev=17,f(!1),e.finish(17);case 20:case"end":return e.stop()}}),e,null,[[0,14,17,20]])})))).apply(this,arguments)}""!==T&&(f(!0),function(){e.apply(this,arguments)}())}),[T,a]),(0,b.jsxs)(p.W,{children:[(0,b.jsx)(Z,{onUrlChange:function(e){a(""!==e?{query:e}:{})}}),l&&(0,b.jsx)(C.g4,{color:"#3f51b5"}),v&&(0,b.jsx)("h2",{children:"Data processing error. Try reloading the page."}),q.length>0&&(0,b.jsx)(j.Z,{movies:q,state:{from:U}})]})}}}]);
//# sourceMappingURL=631.685b596f.chunk.js.map