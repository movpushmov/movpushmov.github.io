(this["webpackJsonpbooba-charts"]=this["webpackJsonpbooba-charts"]||[]).push([[0],{139:function(e,t,n){},140:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),a=n(49),i=n.n(a),o=n(58),s=n(16),l=n(12),d=n(52),u=n.n(d),h=n(218),p=n(219),b=n(194),j=n(216),x=n(217),m=n(195),g=n.p+"static/media/logo.14aec451.png",O=n.p+"static/media/nsfw-logo.f21ea58f.png",f=n(202),w=n(215),v=n(17),y=n.n(v),_=n(25),k=n(207),C=n(208),S=n(210),N=n(211),F=n(212),L=n(213),M=n(205),T=n(206),R=n(214),P=n(201),D=n(209),I=n(204),W=n(1),z=function(e){var t=e.cellStyle;return Object(W.jsx)(I.a,{children:Object(W.jsxs)(M.a,{children:[Object(W.jsx)(T.a,{width:"10%",className:t,children:"DEXs"}),Object(W.jsx)(T.a,{width:"20%",className:t,children:"Name"}),Object(W.jsx)(T.a,{width:"12.5%",className:t,children:"Volume"}),Object(W.jsx)(T.a,{width:"12.5%",className:t,children:"Liquidity"}),Object(W.jsx)(T.a,{width:"20%",className:t,children:"Price"}),Object(W.jsx)(T.a,{width:"10%",className:t,children:"Change"})]})})},q=function(){return Object(W.jsx)("svg",{style:{verticalAlign:"sub",margin:"0px 4px 0"},stroke:"currentColor",fill:"currentColor",strokeWidth:"0",viewBox:"0 0 24 24",width:"14.6px",height:"14.6px",xmlns:"http://www.w3.org/2000/svg",children:Object(W.jsx)("path",{d:"M5 15L19 15 12 7z"})})},B=function(){return Object(W.jsx)("svg",{style:{verticalAlign:"middle",margin:"0px 8px 2px"},stroke:"currentColor",fill:"currentColor",strokeWidth:"0",viewBox:"0 0 16 16",height:"7px",width:"7px",xmlns:"http://www.w3.org/2000/svg",children:Object(W.jsx)("path",{fillRule:"evenodd",d:"M6.95.435c.58-.58 1.52-.58 2.1 0l6.515 6.516c.58.58.58 1.519 0 2.098L9.05 15.565c-.58.58-1.519.58-2.098 0L.435 9.05a1.482 1.482 0 010-2.098L6.95.435z",clipRule:"evenodd"})})},A=function(){return Object(W.jsx)("svg",{style:{verticalAlign:"sub",margin:"0px 4px 0"},stroke:"currentColor",fill:"currentColor",strokeWidth:"0",viewBox:"0 0 24 24",width:"14.6px",height:"14.6px",xmlns:"http://www.w3.org/2000/svg",children:Object(W.jsx)("path",{d:"M11.998 17L18.998 9 4.998 9z"})})},H=function(e){var t=e.percentage,n=Math.abs(t).toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2})+"%";return t>0?Object(W.jsxs)("span",{style:{color:"rgb(0, 195, 147)"},children:[Object(W.jsx)(q,{}),n]}):t<0?Object(W.jsxs)("span",{style:{color:"rgb(239, 66, 91)"},children:[Object(W.jsx)(A,{}),n]}):Object(W.jsxs)("span",{style:{color:"rgb(107, 124, 118)"},children:[Object(W.jsx)(B,{}),n]})};function E(e){return e<1e3?e.toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2}):e>=1e3&&e<1e6?(e/1e3).toLocaleString("en-US",{maximumFractionDigits:3})+"K":e>=1e6?(e/1e6).toLocaleString("en-US",{maximumFractionDigits:3})+"M":void 0}var V="https://mock.realgrace.me",U={sushiswap:"https://www.defined.fi/images/icons/exchanges/sushiswap.png",pancakeswap:"https://www.defined.fi/images/icons/exchanges/pancakeswap.png",uniswap:"https://www.defined.fi/images/icons/exchanges/uniswap.png",quickSwap:"https://www.defined.fi/images/icons/exchanges/quickswap.png"};function $(e){return Z.apply(this,arguments)}function Z(){return(Z=Object(_.a)(y.a.mark((function e(t){var n;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(V,"/currency/search?query=").concat(t));case 2:return n=e.sent,e.next=5,n.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var J,Q=function(e){var t=Object(r.useState)(!0),n=Object(l.a)(t,2),c=n[0],a=n[1],i=Object(r.useState)([]),o=Object(l.a)(i,2),d=o[0],u=o[1],h=Object(s.f)(),p=G();return Object(r.useEffect)((function(){function t(){return(t=Object(_.a)(y.a.mark((function t(){return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=u,t.next=3,$(e.searchRequest);case 3:t.t1=t.sent,(0,t.t0)(t.t1),a(!1);case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}a(!0),function(){t.apply(this,arguments)}()}),[e.searchRequest]),c||!d.length?Object(W.jsx)("div",{style:{height:"80px",display:"flex",alignItems:"center",justifyContent:"center"},children:c?Object(W.jsx)(k.a,{}):Object(W.jsx)(C.a,{variant:"h6",sx:{fontFamily:"Poppins",color:"rgb(143, 134, 235)"},children:"Currencies not found."})}):Object(W.jsx)(D.a,{sx:{width:"100%"},className:p.box,children:Object(W.jsx)(S.a,{sx:{width:"100%",mb:2},elevation:0,children:Object(W.jsx)(N.a,{children:Object(W.jsxs)(F.a,{"aria-labelledby":"tableTitle",size:"medium",children:[Object(W.jsx)(z,{cellStyle:p.cell}),Object(W.jsx)(L.a,{children:d.map((function(e,t){return Object(W.jsxs)(M.a,{hover:!0,className:p.dataRow,onClick:function(){h.push("/"+e.address)},children:[Object(W.jsx)(T.a,{component:"th",scope:"row",padding:"none",children:Array.isArray(e.dex)?Object(W.jsx)(R.a,{max:2,children:e.dex.map((function(e){return Object(W.jsx)(P.a,{className:p.image,src:e})}))}):Object(W.jsx)(P.a,{className:p.image,src:e.dex})}),Object(W.jsx)(T.a,{component:"th",scope:"row",padding:"none",children:Object(W.jsxs)("div",{children:[Object(W.jsx)(P.a,{className:p.image,src:e.name.iconUrl}),Object(W.jsx)("span",{children:e.name.title})]})}),Object(W.jsx)(T.a,{component:"th",scope:"row",padding:"none",children:Object(W.jsxs)("span",{children:["$",E(e.volume)]})}),Object(W.jsx)(T.a,{component:"th",scope:"row",padding:"none",children:Object(W.jsxs)("span",{children:["$",E(e.liquidity)]})}),Object(W.jsx)(T.a,{component:"th",scope:"row",padding:"none",children:Object(W.jsxs)("span",{children:["$",e.price]})}),Object(W.jsx)(T.a,{component:"th",scope:"row",padding:"none",children:Object(W.jsx)(H,{percentage:e.change})})]})}))})]})})})})},G=Object(m.a)({box:{"&>.MuiPaper-root":{backgroundColor:"transparent",border:"none",minWidth:"700px"},overflow:"auto"},cell:{fontFamily:"Poppins !important",fontWeight:400,color:"rgb(115, 104, 231) !important",border:"none !important","&:not(:first-child)":{paddingLeft:"0 !important",paddingRight:"0 !important"},"&:first-child":{paddingRight:"0 !important"}},image:{width:"20px !important",height:"20px !important"},dataRow:{"&>.MuiTableCell-root:first-child":{paddingLeft:"16px","&>.MuiAvatarGroup-root":{marginLeft:"-2px",width:"fit-content","&>div":{border:"2px solid rgb(26, 20, 51)"}}},"&>.MuiTableCell-root:nth-child(2)>div":{display:"flex",fontFamily:"Poppins",fontWeight:"500",flexDirection:"row",alignItems:"center","&>span":{marginLeft:"8px"},fontSize:"1.3em"},"&>.MuiTableCell-root":{padding:"8px 0",border:"none",marginLeft:"auto",marginRight:"auto",color:"white",fontFamily:"Fira Mono"},"&:hover":{backgroundColor:"rgba(80, 72, 161, 0.3) !important",cursor:"pointer"}}}),K=function(e){var t=c.a.useState(e.query),n=Object(l.a)(t,2),r=n[0],a=n[1],i=Y();return Object(W.jsx)(f.a,{open:e.visible,onClose:function(){return e.onClose(r)},maxWidth:"md",fullWidth:!0,classes:{container:i.dialog},children:Object(W.jsxs)(w.a,{children:[Object(W.jsx)(b.a,{value:r,onChange:function(e){return a(e.currentTarget.value)},className:i.searchField,placeholder:"Search by token name, ticker, address or pair",InputProps:{startAdornment:Object(W.jsx)(j.a,{position:"start",children:Object(W.jsx)(x.a,{style:{color:"rgb(115, 104, 231)"},children:Object(W.jsxs)("svg",{stroke:"currentColor",fill:"none","stroke-width":"2",viewBox:"0 0 24 24","stroke-linecap":"round","stroke-linejoin":"round",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:[Object(W.jsx)("circle",{cx:"11",cy:"11",r:"8"}),Object(W.jsx)("line",{x1:"21",y1:"21",x2:"16.65",y2:"16.65"})]})})})}}),Object(W.jsx)(Q,{searchRequest:r})]})})},Y=Object(m.a)({dialog:{alignItems:"flex-start !important","&>.MuiPaper-root":{backgroundColor:"rgb(26, 20, 51) !important",borderRadius:"8px",maxWidth:"700px !important",marginTop:"8px",border:"2px solid rgb(115, 104, 231)","&>.MuiDialogContent-root":{padding:0,display:"flex",flexDirection:"column",alignItems:"center","&>.MuiFormControl-root":{marginTop:"0 !important"}}}},searchField:{width:"100%",boxSizing:"border-box",outline:"none","&>.MuiOutlinedInput-root":{padding:"4px 20px",borderRadius:"8px",backgroundColor:"rgb(26, 20, 51)",color:"rgb(143, 134, 235)",fontFamily:"Poppins","&>.MuiOutlinedInput-notchedOutline":{border:"none"}}}}),X=function(){var e=ee(),t=Object(r.useState)(!1),n=Object(l.a)(t,2),c=n[0],a=n[1],i=Object(r.useState)(""),s=Object(l.a)(i,2),d=s[0],m=s[1];return Object(W.jsxs)("div",{className:u.a["page-container"],children:[Object(W.jsx)(h.a,{elevation:0,position:"fixed",children:Object(W.jsx)(p.a,{children:Object(W.jsx)(o.b,{to:"/",children:Object(W.jsx)("img",{className:u.a.logo,src:g,alt:"logo"})})})}),Object(W.jsxs)("div",{className:u.a.header,children:[Object(W.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"},children:[Object(W.jsx)("img",{src:O,alt:"nsfw-logo",className:u.a["nsfw-logo"]}),Object(W.jsx)(K,{query:d,visible:c,onClose:function(e){a(!1),m(e)}})]}),Object(W.jsx)(b.a,{onClick:function(){return a(!0)},value:d,className:"".concat(u.a.search," ").concat(e.searchField," ").concat(c?u.a.visible:u.a.hidden),placeholder:"Search by token name, ticker, address or pair",InputProps:{startAdornment:Object(W.jsx)(j.a,{position:"start",children:Object(W.jsx)(x.a,{style:{color:"rgb(115, 104, 231)"},children:Object(W.jsxs)("svg",{stroke:"currentColor",fill:"none",strokeWidth:"2",viewBox:"0 0 24 24",strokeLinecap:"round",strokeLinejoin:"round",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:[Object(W.jsx)("circle",{cx:"11",cy:"11",r:"8"}),Object(W.jsx)("line",{x1:"21",y1:"21",x2:"16.65",y2:"16.65"})]})})})}})]})]})},ee=Object(m.a)({searchField:{width:"90%",maxWidth:"700px",marginTop:"64px !important",boxSizing:"border-box",outline:"none","&>.MuiOutlinedInput-root":{padding:"4px 20px",borderRadius:"8px",backgroundColor:"rgb(26, 20, 51)",color:"rgb(143, 134, 235)",fontFamily:"Poppins","&:hover":{"&>.MuiOutlinedInput-notchedOutline":{borderColor:"rgba(115, 104, 231, 0.533)",borderWidth:"2px"}}}}}),te=n(61),ne=n.n(te),re=n(220),ce=n(71),ae=n.n(ce),ie=n(193),oe=function(e){var t=e.percentage;return t>0?Object(W.jsx)("svg",{stroke:"currentColor",fill:"currentColor",strokeWidth:"0",viewBox:"0 0 1024 1024",color:"#00c393",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg",style:{color:"rgb(0, 195, 147)",verticalAlign:"middle"},children:Object(W.jsx)("path",{d:"M868 545.5L536.1 163a31.96 31.96 0 0 0-48.3 0L156 545.5a7.97 7.97 0 0 0 6 13.2h81c4.6 0 9-2 12.1-5.5L474 300.9V864c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V300.9l218.9 252.3c3 3.5 7.4 5.5 12.1 5.5h81c6.8 0 10.5-8 6-13.2z"})}):t<0?Object(W.jsx)("svg",{stroke:"currentColor",fill:"currentColor",strokeWidth:"0",viewBox:"0 0 1024 1024",color:"#ef425b",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg",style:{color:"rgb(239, 66, 91)",verticalAlign:"middle"},children:Object(W.jsx)("path",{d:"M862 465.3h-81c-4.6 0-9 2-12.1 5.5L550 723.1V160c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v563.1L255.1 470.8c-3-3.5-7.4-5.5-12.1-5.5h-81c-6.8 0-10.5 8.1-6 13.2L487.9 861a31.96 31.96 0 0 0 48.3 0L868 478.5c4.5-5.2.8-13.2-6-13.2z"})}):Object(W.jsx)(W.Fragment,{})},se=function(e){var t=e.currencies;return Object(W.jsx)("div",{className:ae.a["currencies-line"],children:t.map((function(e,t){return Object(W.jsx)(ie.a,{title:"".concat(e.fullName," ").concat(e.changePercentage.toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2}),"%"),children:Object(W.jsxs)("div",{className:ae.a["currency-button"],children:[Object(W.jsx)("span",{className:ae.a["currency-position"],children:t+1}),Object(W.jsx)(oe,{percentage:e.changePercentage}),Object(W.jsx)("span",{className:ae.a["currency-name"],children:e.name})]})})}))})},le=n(39),de=n.n(le),ue=n(199),he=n(196),pe=n(200),be="https://d3kdei7cs9pk0w.cloudfront.net/56_0x4bd17003473389a42daf6a0a729f6fdb328bbbd7_small.png";function je(e){return xe.apply(this,arguments)}function xe(){return(xe=Object(_.a)(y.a.mark((function e(t){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(navigator.clipboard){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,e.next=5,navigator.clipboard.writeText(t);case 5:return e.abrupt("return",!0);case 8:return e.prev=8,e.t0=e.catch(2),e.abrupt("return",!1);case 11:case"end":return e.stop()}}),e,null,[[2,8]])})))).apply(this,arguments)}!function(e){e.sushiswap="https://www.defined.fi/images/icons/exchanges/sushiswap.png",e.pancakeswap="https://www.defined.fi/images/icons/exchanges/pancakeswap.png",e.uniswap="https://www.defined.fi/images/icons/exchanges/uniswap.png",e.quickSwap="https://www.defined.fi/images/icons/exchanges/quickswap.png"}(J||(J={}));var me=function(e){var t=Object(r.useState)(!1),n=Object(l.a)(t,2),c=n[0],a=n[1],i=Object(r.useState)(!1),o=Object(l.a)(i,2),s=o[0],d=o[1];function u(){return(u=Object(_.a)(y.a.mark((function t(){return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=a,t.next=3,je(e.data.address);case 3:t.t1=!t.sent,(0,t.t0)(t.t1),d(!0);case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(W.jsxs)("div",{className:de.a["currency-info-container"],children:[Object(W.jsx)(ue.a,{open:s,autoHideDuration:2e3,onClose:function(){return d(!1)},children:Object(W.jsx)(he.a,{severity:c?"error":"success",sx:{width:"100%"},children:c?"An unexpected error occurred.":"Contract address copied in your clipboard!"})}),Object(W.jsxs)("div",{className:de.a["currency-info"],children:[Object(W.jsx)(pe.a,{badgeContent:Object(W.jsx)("img",{className:de.a["swap-icon"],src:U[e.data.swap],alt:""}),anchorOrigin:{vertical:"bottom",horizontal:"right"},children:Object(W.jsx)("img",{className:de.a.icon,alt:"",src:be})}),Object(W.jsxs)("div",{className:de.a["currency-data"],children:[Object(W.jsx)(C.a,{variant:"body1",children:e.data.name}),Object(W.jsxs)("div",{children:[Object(W.jsxs)(C.a,{variant:"body1",children:["$",e.data.cost]}),Object(W.jsx)(H,{percentage:e.data.changePercentage})]})]})]}),Object(W.jsxs)("div",{className:de.a["other-info"],children:[Object(W.jsxs)("div",{children:[Object(W.jsx)("span",{children:"Liquidity"}),Object(W.jsxs)("p",{children:["$",E(e.data.liquidity)]})]}),Object(W.jsxs)("div",{children:[Object(W.jsx)("span",{children:"Volume"}),Object(W.jsxs)("p",{children:["$",E(e.data.volume)]})]}),Object(W.jsxs)("div",{children:[Object(W.jsx)("span",{children:"Mkt Cap"}),Object(W.jsx)("p",{children:e.data.mktCap?E(e.data.volume):"\u2014\u2014"})]}),Object(W.jsxs)("div",{children:[Object(W.jsx)("span",{children:"Supply"}),Object(W.jsx)("p",{children:e.data.supply?E(e.data.volume):"\u2014\u2014"})]}),Object(W.jsxs)("div",{children:[Object(W.jsx)("span",{children:"ETH Price"}),Object(W.jsxs)("p",{children:["$",E(e.data.ethPrice)]})]})]}),Object(W.jsxs)("div",{className:de.a["buttons-panel"],children:[Object(W.jsx)("div",{className:de.a["trade-button"],children:"Trade"}),Object(W.jsx)(ie.a,{title:"Copy ".concat(e.data.address),children:Object(W.jsxs)("div",{className:de.a["contract-button"],onClick:function(){!function(){u.apply(this,arguments)}()},children:["Contract",Object(W.jsxs)("svg",{stroke:"currentColor",fill:"currentColor",strokeWidth:"0",viewBox:"0 0 24 24",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:[Object(W.jsx)("path",{d:"M20,2H10C8.897,2,8,2.897,8,4v4H4c-1.103,0-2,0.897-2,2v10c0,1.103,0.897,2,2,2h10c1.103,0,2-0.897,2-2v-4h4 c1.103,0,2-0.897,2-2V4C22,2.897,21.103,2,20,2z M4,20V10h10l0.002,10H4z M20,14h-4v-4c0-1.103-0.897-2-2-2h-4V4h10V14z"}),Object(W.jsx)("path",{d:"M6 12H12V14H6zM6 16H12V18H6z"})]})]})})]})]})},ge=n(98),Oe=n.n(ge),fe=n(57),we=n.n(fe),ve=function(e){var t=ye();return Object(W.jsx)(D.a,{sx:{width:"100%",overflow:"auto"},className:t.box,children:Object(W.jsx)(S.a,{sx:{width:"100%",mb:2},elevation:0,children:Object(W.jsx)(N.a,{children:Object(W.jsxs)(F.a,{"aria-labelledby":"tableTitle",size:"medium",style:{minWidth:"842px"},children:[Object(W.jsx)(I.a,{children:Object(W.jsxs)(M.a,{children:[Object(W.jsx)(T.a,{width:"14%",className:t.cell,children:"Type"}),Object(W.jsx)(T.a,{width:"14%",className:t.cell,children:"Price USD"}),Object(W.jsx)(T.a,{width:"14%",className:t.cell,children:"Price ETH"}),Object(W.jsx)(T.a,{width:"14%",className:t.cell,children:"Amount"}),Object(W.jsx)(T.a,{width:"14%",className:t.cell,children:"Total ETH"}),Object(W.jsx)(T.a,{width:"14%",className:t.cell,children:"Time"}),Object(W.jsx)(T.a,{width:"14%",className:t.cell,children:"Maker"})]})}),Object(W.jsx)(L.a,{children:e.operations.map((function(e,n){return Object(W.jsxs)(M.a,{hover:!0,className:t.dataRow,style:{backgroundColor:n%2===0?"#141414":void 0},children:[Object(W.jsx)(T.a,{component:"th",scope:"row",padding:"none",children:Object(W.jsx)("span",{className:Oe.a["label-"+e.type],children:"buy"===e.type?"Buy":"Sell"})}),Object(W.jsxs)(T.a,{component:"th",scope:"row",padding:"none",children:["$",e.priceUSD]}),Object(W.jsx)(T.a,{component:"th",scope:"row",padding:"none",children:e.priceETH}),Object(W.jsx)(T.a,{component:"th",scope:"row",padding:"none",children:e.amount}),Object(W.jsx)(T.a,{component:"th",scope:"row",padding:"none",children:e.totalETH}),Object(W.jsx)(T.a,{component:"th",scope:"row",padding:"none",children:we.a.unix(e.time).fromNow()}),Object(W.jsx)(T.a,{component:"th",scope:"row",padding:"none",children:Object(W.jsxs)("a",{style:{color:"rgb(129, 242, 200)",textDecoration:"none"},href:"https://arbiscan.io/address/".concat(e.maker),children:["...",e.maker.substring(e.maker.length-11)]})})]})}))})]})})})})},ye=Object(m.a)({box:{marginTop:"32px","&>.MuiPaper-root":{border:"none",backgroundColor:"#191919",borderRadius:"8px"}},cell:{fontFamily:"Poppins !important",fontWeight:500,color:"white !important",borderBottom:"1px solid #8a8a8a !important",fontSize:"1rem !important","&:not(:first-child)":{paddingLeft:"0 !important",paddingRight:"0 !important"},"&:first-child":{paddingRight:"0 !important"}},image:{width:"20px !important",height:"20px !important"},dataRow:{"&>.MuiTableCell-root:first-child":{paddingLeft:"16px"},"&>.MuiTableCell-root":{padding:"8px 0",border:"none",marginLeft:"auto",marginRight:"auto",color:"white",fontFamily:"Fira Mono"},"&>.MuiTableCell-root:nth-child(6)":{padding:"8px 0",border:"none",marginLeft:"auto",marginRight:"auto",color:"white",fontFamily:"Poppins"},"&>.MuiTableCell-root:last-child":{padding:"8px 0",border:"none",marginLeft:"auto",marginRight:"auto",color:"white",fontFamily:"Poppins"},"&:hover":{backgroundColor:"#262626 !important",cursor:"pointer"}}});function _e(e){return ke.apply(this,arguments)}function ke(){return(ke=Object(_.a)(y.a.mark((function e(t){var n;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(V,"/currency/fetch/").concat(t));case 2:return n=e.sent,e.next=5,n.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Ce(){return Se.apply(this,arguments)}function Se(){return(Se=Object(_.a)(y.a.mark((function e(){var t;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(V,"/currency/top"));case 2:return t=e.sent,e.next=5,t.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var Ne=n(102),Fe=n(99),Le=n(55),Me=["time"],Te=0;function Re(){window.websocket&&(window.websocket.close(),window.websocket=void 0)}function Pe(e,t){var n=e+Math.random()*(t+1-e);return Math.floor(n)}var De={onReady:function(e){setTimeout((function(){return e({supported_resolutions:["1"]})}))},searchSymbols:function(){},resolveSymbol:function(e,t){setTimeout((function(){t({name:e,description:e,ticker:e,full_name:"",exchange:"",listed_exchange:"",format:"price",supported_resolutions:["1"],type:"crypto",session:"24x7",minmov:1,pricescale:100,timezone:"Etc/UTC",has_intraday:!0,has_daily:!0,has_weekly_and_monthly:!0,currency_code:e,has_no_volume:!0})}))},getBars:function(e,t,n,r,c){if(!n.firstDataRequest)return r([]);r([{time:1e3*we()().unix(),open:Pe(50,180.34),high:Pe(100,180.99),low:Pe(0,178.57),close:Pe(0,179.85)}])},subscribeBars:function(e,t,n,r,c){var a;a=function(e){return n(e)},window.websocket&&window.websocket.addEventListener("message",(function(e){var t=JSON.parse(e.data);if("CHARTS"===t.type&&t.data[0]){var n=t.data[0],r=n.time,c=Object(Le.a)(n,Me),i=we.a.unix(r).add(Te,"minute").add(3,"days");console.log(c),c.close=80,Te++,a(Object(Fe.a)({time:1e3*i.unix()},c))}}))},unsubscribeBars:function(e){Re()}},Ie=function(e){var t=Object(r.useState)(null),n=Object(l.a)(t,2),c=n[0],a=n[1],i=Object(r.useRef)(null),o={symbol:e.symbol,interval:"D",libraryPath:"/charting_library/",chartsStorageUrl:"https://saveload.tradingview.com",chartsStorageApiVersion:"1.1",clientId:"tradingview.com",userId:"public_user_id",fullscreen:!1,autosize:!0,studiesOverrides:{}};return Object(r.useEffect)((function(){var t=new Ne.a({symbol:o.symbol,datafeed:De,interval:o.interval,library_path:o.libraryPath,height:e.height,theme:"Dark",locale:"en",disabled_features:["use_localstorage_for_settings","header_symbol_search"],charts_storage_url:o.chartsStorageUrl,charts_storage_api_version:o.chartsStorageApiVersion,client_id:o.clientId,user_id:o.userId,fullscreen:o.fullscreen,autosize:o.autosize,studies_overrides:o.studiesOverrides,container:i.current});return a(t),function(){c&&c.remove()}}),[i]),Object(W.jsx)("div",{ref:i,style:{height:e.height}})},We=function(e){var t=e.id,n=Object(r.useState)(!1),c=Object(l.a)(n,2),a=c[0],i=c[1],s=Object(r.useState)(""),d=Object(l.a)(s,2),u=d[0],m=d[1],O=ze(),f=Object(r.useState)([]),w=Object(l.a)(f,2),v=w[0],S=w[1],N=Object(r.useState)(),F=Object(l.a)(N,2),L=F[0],M=F[1],T=Object(r.useState)([]),R=Object(l.a)(T,2),P=R[0],D=R[1],I=Object(r.useState)(),z=Object(l.a)(I,2),q=z[0],B=z[1],A=Object(r.useState)(!0),H=Object(l.a)(A,2),E=H[0],V=H[1];return Object(r.useEffect)((function(){function e(){return e=Object(_.a)(y.a.mark((function e(){var n;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_e(t||"");case 2:if(!(n=e.sent)||!("trade_data"in n)){e.next=11;break}return M(n),e.t0=S,e.next=8,Ce();case 8:e.t1=e.sent,(0,e.t0)(e.t1),D(n.trade_data.operations);case 11:V(!1);case 12:case"end":return e.stop()}}),e)}))),e.apply(this,arguments)}return function(){e.apply(this,arguments)}(),function(e){var t=new WebSocket("".concat("wss://mock.realgrace.me/ws","/").concat(e));return window.websocket=t,t}(t||"").addEventListener("message",(function(e){B(JSON.parse(e.data))})),function(){Re()}}),[]),Object(r.useEffect)((function(){if(q&&"CHARTS"!==q.type){for(var e=q.data.concat(P);e.length>10;)e.pop();D(e)}}),[q]),Object(W.jsxs)("div",{className:ne.a["page-container"],children:[Object(W.jsx)(h.a,{elevation:0,position:"fixed",children:Object(W.jsxs)(p.a,{children:[Object(W.jsx)(o.b,{to:"/",children:Object(W.jsx)("img",{className:ne.a.logo,src:g,alt:"logo"})}),Object(W.jsx)(K,{query:u,visible:a,onClose:function(e){i(!1),m(e)}}),Object(W.jsx)(b.a,{onClick:function(){return i(!0)},value:u,className:"".concat(O.searchField," ").concat(ne.a["search-field"]),placeholder:"Search by token name, ticker, address or pair",InputProps:{startAdornment:Object(W.jsx)(j.a,{position:"start",children:Object(W.jsx)(x.a,{style:{color:"rgb(115, 104, 231)"},children:Object(W.jsxs)("svg",{stroke:"currentColor",fill:"none",strokeWidth:"2",viewBox:"0 0 24 24",strokeLinecap:"round",strokeLinejoin:"round",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:[Object(W.jsx)("circle",{cx:"11",cy:"11",r:"8"}),Object(W.jsx)("line",{x1:"21",y1:"21",x2:"16.65",y2:"16.65"})]})})})}}),Object(W.jsx)(re.a,{className:ne.a["search-button"],onClick:function(){return i(!0)},sx:{borderRadius:"50%",minWidth:0,height:"40px"},children:Object(W.jsx)(x.a,{style:{color:"rgb(115, 104, 231)",display:"flex"},children:Object(W.jsxs)("svg",{stroke:"currentColor",fill:"none",strokeWidth:"2",viewBox:"0 0 24 24",strokeLinecap:"round",strokeLinejoin:"round",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:[Object(W.jsx)("circle",{cx:"11",cy:"11",r:"8"}),Object(W.jsx)("line",{x1:"21",y1:"21",x2:"16.65",y2:"16.65"})]})})})]})}),E?Object(W.jsx)("div",{className:O.searchOrNotFoundContainer,children:Object(W.jsx)(k.a,{})}):L?Object(W.jsxs)("div",{className:ne.a["page-content"],children:[Object(W.jsx)(se,{currencies:v}),Object(W.jsx)(me,{data:L}),Object(W.jsx)("div",{style:{width:"100%",marginTop:"32px",height:"400px"},children:Object(W.jsx)(Ie,{symbol:t||"",height:400})}),Object(W.jsx)(ve,{operations:P})]}):Object(W.jsx)("div",{className:O.searchOrNotFoundContainer,children:Object(W.jsx)(C.a,{variant:"h3",sx:{fontFamily:"Poppins",color:"rgb(137, 255, 211)"},children:"Not Found."})})]})},ze=Object(m.a)({searchOrNotFoundContainer:{display:"flex",alignItems:"center",justifyContent:"center",height:"100vh",flex:"1 1 0%"},searchField:{width:"50%",minWidth:"512px",margin:"8px !important",boxSizing:"border-box",outline:"none","&>.MuiOutlinedInput-root":{padding:"4px 20px",borderRadius:"8px",backgroundColor:"rgb(26, 20, 51)",color:"rgb(143, 134, 235)",fontFamily:"Poppins","&:hover":{"&>.MuiOutlinedInput-notchedOutline":{borderColor:"rgba(115, 104, 231, 0.533)",borderWidth:"2px"}}}}});var qe=function(){return Object(W.jsx)(o.a,{children:Object(W.jsxs)(s.c,{children:[Object(W.jsx)(s.a,{path:"/",exact:!0,children:Object(W.jsx)(X,{})}),Object(W.jsx)(s.a,{path:"/:id",component:function(e){return Object(W.jsx)(We,{id:e.match.params.id})}})]})})},Be=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,221)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),r(e),c(e),a(e),i(e)}))};n(139);i.a.render(Object(W.jsx)(c.a.StrictMode,{children:Object(W.jsx)(qe,{})}),document.getElementById("root")),Be()},39:function(e,t,n){e.exports={"currency-info-container":"currency-data_currency-info-container__kcQLI","currency-info":"currency-data_currency-info__kprRv","currency-data":"currency-data_currency-data__1YiRE",icon:"currency-data_icon__1l1Hs","swap-icon":"currency-data_swap-icon__12kAm","other-info":"currency-data_other-info__G2PND","buttons-panel":"currency-data_buttons-panel__2KQ9m",button:"currency-data_button__2CSZp","trade-button":"currency-data_trade-button__kxj4r currency-data_button__2CSZp","contract-button":"currency-data_contract-button__1-T8M currency-data_button__2CSZp"}},52:function(e,t,n){e.exports={"page-container":"home_page-container__3U-1b",header:"home_header__3hDZZ",visible:"home_visible__FgSE_","Show-Field":"home_Show-Field__2RNsu",hidden:"home_hidden__8Jcic","Hide-Field":"home_Hide-Field__31rCs",search:"home_search___dO-R",logo:"home_logo__3uozE","nsfw-logo":"home_nsfw-logo__2vkkf"}},61:function(e,t,n){e.exports={"page-container":"styles_page-container__1jBBo","page-content":"styles_page-content__2Y8sZ","search-button":"styles_search-button__ICxAs","search-field":"styles_search-field__1g7QV",logo:"styles_logo__236cw"}},71:function(e,t,n){e.exports={"currencies-line":"currencies-line_currencies-line__3QM7_","currency-button":"currencies-line_currency-button__3IF6p","currency-position":"currencies-line_currency-position__2mqRB","currency-name":"currencies-line_currency-name__2Sl-T"}},98:function(e,t,n){e.exports={label:"operations-table_label__35qft","label-buy":"operations-table_label-buy__3rD3D operations-table_label__35qft","label-sell":"operations-table_label-sell__14ONW operations-table_label__35qft"}}},[[140,1,2]]]);
//# sourceMappingURL=main.8f27a4d8.chunk.js.map