(this["webpackJsonpbooba-charts"]=this["webpackJsonpbooba-charts"]||[]).push([[0],{102:function(e,t,n){e.exports={label:"operations-table_label__35qft","label-buy":"operations-table_label-buy__3rD3D operations-table_label__35qft","label-sell":"operations-table_label-sell__14ONW operations-table_label__35qft"}},145:function(e,t,n){},146:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),a=n(39),i=n.n(a),o=n(57),s=n(17),l=n(12),d=n(33),u=n.n(d),h=n(228),p=n(229),b=n(203),j=n(226),x=n(227),m=n(230),g=n(106),f=n(208),O=n(204),w=n.p+"static/media/logo.14aec451.png",v=n.p+"static/media/nsfw-logo.f21ea58f.png",y=n(212),_=n(225),k=n(16),C=n.n(k),N=n(24),S=n(217),F=n(218),L=n(220),T=n(221),M=n(222),R=n(223),P=n(215),W=n(216),D=n(224),z=n(211),q=n(219),B=n(214),E=n(1),H=function(e){var t=e.cellStyle;return Object(E.jsx)(B.a,{children:Object(E.jsxs)(P.a,{children:[Object(E.jsx)(W.a,{width:"10%",className:t,children:"DEXs"}),Object(E.jsx)(W.a,{width:"20%",className:t,children:"Name"}),Object(E.jsx)(W.a,{width:"12.5%",className:t,children:"Volume"}),Object(E.jsx)(W.a,{width:"12.5%",className:t,children:"Liquidity"}),Object(E.jsx)(W.a,{width:"20%",className:t,children:"Price"}),Object(E.jsx)(W.a,{width:"10%",className:t,children:"Change"})]})})},I=function(){return Object(E.jsx)("svg",{style:{verticalAlign:"sub",margin:"0px 4px 0"},stroke:"currentColor",fill:"currentColor",strokeWidth:"0",viewBox:"0 0 24 24",width:"14.6px",height:"14.6px",xmlns:"http://www.w3.org/2000/svg",children:Object(E.jsx)("path",{d:"M5 15L19 15 12 7z"})})},A=function(){return Object(E.jsx)("svg",{style:{verticalAlign:"middle",margin:"0px 8px 2px"},stroke:"currentColor",fill:"currentColor",strokeWidth:"0",viewBox:"0 0 16 16",height:"7px",width:"7px",xmlns:"http://www.w3.org/2000/svg",children:Object(E.jsx)("path",{fillRule:"evenodd",d:"M6.95.435c.58-.58 1.52-.58 2.1 0l6.515 6.516c.58.58.58 1.519 0 2.098L9.05 15.565c-.58.58-1.519.58-2.098 0L.435 9.05a1.482 1.482 0 010-2.098L6.95.435z",clipRule:"evenodd"})})},V=function(){return Object(E.jsx)("svg",{style:{verticalAlign:"sub",margin:"0px 4px 0"},stroke:"currentColor",fill:"currentColor",strokeWidth:"0",viewBox:"0 0 24 24",width:"14.6px",height:"14.6px",xmlns:"http://www.w3.org/2000/svg",children:Object(E.jsx)("path",{d:"M11.998 17L18.998 9 4.998 9z"})})},U=function(e){var t=e.percentage,n=Math.abs(t).toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2})+"%";return t>0?Object(E.jsxs)("span",{style:{color:"rgb(0, 195, 147)"},children:[Object(E.jsx)(I,{}),n]}):t<0?Object(E.jsxs)("span",{style:{color:"rgb(239, 66, 91)"},children:[Object(E.jsx)(V,{}),n]}):Object(E.jsxs)("span",{style:{color:"rgb(107, 124, 118)"},children:[Object(E.jsx)(A,{}),n]})};function $(e){return e<1e3?e.toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2}):e>=1e3&&e<1e6?(e/1e3).toLocaleString("en-US",{maximumFractionDigits:3})+"K":e>=1e6?(e/1e6).toLocaleString("en-US",{maximumFractionDigits:3})+"M":void 0}var Z="https://mock.realgrace.me",J={sushiswap:"https://www.defined.fi/images/icons/exchanges/sushiswap.png",pancakeswap:"https://www.defined.fi/images/icons/exchanges/pancakeswap.png",uniswap:"https://www.defined.fi/images/icons/exchanges/uniswap.png",quickSwap:"https://www.defined.fi/images/icons/exchanges/quickswap.png"};function Q(e){return G.apply(this,arguments)}function G(){return(G=Object(N.a)(C.a.mark((function e(t){var n;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(Z,"/currency/search?query=").concat(t));case 2:return n=e.sent,e.next=5,n.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var K,Y=function(e){var t=Object(r.useState)(!0),n=Object(l.a)(t,2),c=n[0],a=n[1],i=Object(r.useState)([]),o=Object(l.a)(i,2),d=o[0],u=o[1],h=Object(s.f)(),p=X();return Object(r.useEffect)((function(){function t(){return(t=Object(N.a)(C.a.mark((function t(){return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=u,t.next=3,Q(e.searchRequest);case 3:t.t1=t.sent,(0,t.t0)(t.t1),a(!1);case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}a(!0),function(){t.apply(this,arguments)}()}),[e.searchRequest]),c||!d.length?Object(E.jsx)("div",{style:{height:"80px",display:"flex",alignItems:"center",justifyContent:"center"},children:c?Object(E.jsx)(S.a,{}):Object(E.jsx)(F.a,{variant:"h6",sx:{fontFamily:"Poppins",color:"rgb(143, 134, 235)"},children:"Currencies not found."})}):Object(E.jsx)(q.a,{sx:{width:"100%"},className:p.box,children:Object(E.jsx)(L.a,{sx:{width:"100%",mb:2},elevation:0,children:Object(E.jsx)(T.a,{children:Object(E.jsxs)(M.a,{"aria-labelledby":"tableTitle",size:"medium",children:[Object(E.jsx)(H,{cellStyle:p.cell}),Object(E.jsx)(R.a,{children:d.map((function(e,t){return Object(E.jsxs)(P.a,{hover:!0,className:p.dataRow,onClick:function(){h.push("/"+e.address)},children:[Object(E.jsx)(W.a,{component:"th",scope:"row",padding:"none",children:Array.isArray(e.dex)?Object(E.jsx)(D.a,{max:2,children:e.dex.map((function(e){return Object(E.jsx)(z.a,{className:p.image,src:e})}))}):Object(E.jsx)(z.a,{className:p.image,src:e.dex})}),Object(E.jsx)(W.a,{component:"th",scope:"row",padding:"none",children:Object(E.jsxs)("div",{children:[Object(E.jsx)(z.a,{className:p.image,src:e.name.iconUrl}),Object(E.jsx)("span",{children:e.name.title})]})}),Object(E.jsx)(W.a,{component:"th",scope:"row",padding:"none",children:Object(E.jsxs)("span",{children:["$",$(e.volume)]})}),Object(E.jsx)(W.a,{component:"th",scope:"row",padding:"none",children:Object(E.jsxs)("span",{children:["$",$(e.liquidity)]})}),Object(E.jsx)(W.a,{component:"th",scope:"row",padding:"none",children:Object(E.jsxs)("span",{children:["$",e.price]})}),Object(E.jsx)(W.a,{component:"th",scope:"row",padding:"none",children:Object(E.jsx)(U,{percentage:e.change})})]})}))})]})})})})},X=Object(O.a)({box:{"&>.MuiPaper-root":{backgroundColor:"transparent",border:"none",minWidth:"700px"},overflow:"auto"},cell:{fontFamily:"Poppins !important",fontWeight:400,color:"rgb(115, 104, 231) !important",border:"none !important","&:not(:first-child)":{paddingLeft:"0 !important",paddingRight:"0 !important"},"&:first-child":{paddingRight:"0 !important"}},image:{width:"20px !important",height:"20px !important"},dataRow:{"&>.MuiTableCell-root:first-child":{paddingLeft:"16px","&>.MuiAvatarGroup-root":{marginLeft:"-2px",width:"fit-content","&>div":{border:"2px solid rgb(26, 20, 51)"}}},"&>.MuiTableCell-root:nth-child(2)>div":{display:"flex",fontFamily:"Poppins",fontWeight:"500",flexDirection:"row",alignItems:"center","&>span":{marginLeft:"8px"},fontSize:"1.3em"},"&>.MuiTableCell-root":{padding:"8px 0",border:"none",marginLeft:"auto",marginRight:"auto",color:"white",fontFamily:"Fira Mono"},"&:hover":{backgroundColor:"rgba(80, 72, 161, 0.3) !important",cursor:"pointer"}}}),ee=function(e){var t=c.a.useState(e.query),n=Object(l.a)(t,2),r=n[0],a=n[1],i=te();return Object(E.jsx)(y.a,{open:e.visible,onClose:function(){return e.onClose(r)},maxWidth:"md",fullWidth:!0,classes:{container:i.dialog},children:Object(E.jsxs)(_.a,{children:[Object(E.jsx)(b.a,{value:r,onChange:function(e){return a(e.currentTarget.value)},className:i.searchField,placeholder:"Search by token name, ticker, address or pair",InputProps:{startAdornment:Object(E.jsx)(j.a,{position:"start",children:Object(E.jsx)(x.a,{style:{color:"rgb(115, 104, 231)"},children:Object(E.jsxs)("svg",{stroke:"currentColor",fill:"none",strokeWidth:"2",viewBox:"0 0 24 24",strokeLinecap:"round","stroke-linejoin":"round",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:[Object(E.jsx)("circle",{cx:"11",cy:"11",r:"8"}),Object(E.jsx)("line",{x1:"21",y1:"21",x2:"16.65",y2:"16.65"})]})})})}}),Object(E.jsx)(Y,{searchRequest:r})]})})},te=Object(O.a)({dialog:{alignItems:"flex-start !important","&>.MuiPaper-root":{backgroundColor:"rgb(26, 20, 51) !important",borderRadius:"8px",maxWidth:"700px !important",marginTop:"8px",border:"2px solid rgb(115, 104, 231)","&>.MuiDialogContent-root":{padding:0,display:"flex",flexDirection:"column",alignItems:"center","&>.MuiFormControl-root":{marginTop:"0 !important"}}}},searchField:{width:"100%",boxSizing:"border-box",outline:"none","&>.MuiOutlinedInput-root":{padding:"4px 20px",borderRadius:"8px",backgroundColor:"rgb(26, 20, 51)",color:"rgb(143, 134, 235)",fontFamily:"Poppins","&>.MuiOutlinedInput-notchedOutline":{border:"none"}}}}),ne=n.p+"static/media/twitter-app.f3dd40ad.svg",re=n.p+"static/media/telegram.af763f87.svg",ce=n.p+"static/media/discord.ff388ade.svg",ae=function(){var e=c.a.useState(null),t=Object(l.a)(e,2),n=t[0],a=t[1],i=ie(),s=Object(r.useState)(!1),d=Object(l.a)(s,2),O=d[0],y=d[1],_=Object(r.useState)(!1),k=Object(l.a)(_,2),C=k[0],N=k[1],S=Object(r.useState)(""),F=Object(l.a)(S,2),L=F[0],T=F[1];return Object(E.jsxs)("div",{className:u.a["page-container"],children:[Object(E.jsx)(h.a,{elevation:0,position:"fixed",children:Object(E.jsx)(p.a,{children:Object(E.jsx)(o.b,{to:"/",children:Object(E.jsx)("img",{className:u.a.logo,src:w,alt:"logo"})})})}),Object(E.jsxs)("div",{className:u.a.header,children:[Object(E.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"},children:[Object(E.jsx)("img",{src:v,alt:"nsfw-logo",className:u.a["nsfw-logo"]}),Object(E.jsx)(ee,{query:L,visible:O,onClose:function(e){y(!1),T(e)}})]}),Object(E.jsx)(b.a,{onClick:function(){return y(!0)},value:L,className:"".concat(u.a.search," ").concat(i.searchField," ").concat(O?u.a.visible:u.a.hidden),placeholder:"Search by token name, ticker, address or pair",InputProps:{startAdornment:Object(E.jsx)(j.a,{position:"start",children:Object(E.jsx)(x.a,{style:{color:"rgb(115, 104, 231)"},children:Object(E.jsxs)("svg",{stroke:"currentColor",fill:"none",strokeWidth:"2",viewBox:"0 0 24 24",strokeLinecap:"round",strokeLinejoin:"round",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:[Object(E.jsx)("circle",{cx:"11",cy:"11",r:"8"}),Object(E.jsx)("line",{x1:"21",y1:"21",x2:"16.65",y2:"16.65"})]})})})}}),Object(E.jsx)(m.a,{id:"links-btn",className:u.a["links-btn"],"aria-controls":"links-menu","aria-haspopup":"true","aria-expanded":C?"true":void 0,onClick:function(e){a(e.currentTarget),N(!0)},children:"Social medias"}),Object(E.jsxs)(g.a,{id:"links-menu",anchorEl:n,open:C,onClose:function(){a(null),N(!1)},MenuListProps:{"aria-labelledby":"links-btn"},anchorOrigin:{vertical:"top",horizontal:"left"},children:[Object(E.jsx)("a",{className:u.a.link,target:"_blank",rel:"noopener noreferrer",href:"https://discord.gg/H2qdv35k4k",children:Object(E.jsxs)(f.a,{children:[Object(E.jsx)("img",{src:ce,alt:"discord logo"}),"Discord"]})}),Object(E.jsx)("a",{className:u.a.link,target:"_blank",rel:"noopener noreferrer",href:"https://t.me/boobaAnnouncements",children:Object(E.jsxs)(f.a,{children:[Object(E.jsx)("img",{src:re,alt:"tg logo"}),"Telegram Announcements"]})}),Object(E.jsx)("a",{className:u.a.link,target:"_blank",rel:"noopener noreferrer",href:"https://t.me/boobaProtocol",children:Object(E.jsxs)(f.a,{children:[Object(E.jsx)("img",{src:re,alt:"tg logo"}),"Telegram Official Chat"]})}),Object(E.jsx)("a",{className:u.a.link,target:"_blank",rel:"noopener noreferrer",href:"https://twitter.com/Booba_Fi",children:Object(E.jsxs)(f.a,{children:[Object(E.jsx)("img",{src:ne,alt:"twitter logo"}),"Twitter"]})})]})]})]})},ie=Object(O.a)({searchField:{width:"90%",maxWidth:"700px",marginTop:"64px !important",boxSizing:"border-box",outline:"none","&>.MuiOutlinedInput-root":{padding:"4px 20px",borderRadius:"8px",backgroundColor:"rgb(26, 20, 51)",color:"rgb(143, 134, 235)",fontFamily:"Poppins","&:hover":{"&>.MuiOutlinedInput-notchedOutline":{borderColor:"rgba(115, 104, 231, 0.533)",borderWidth:"2px"}}}}}),oe=n(61),se=n.n(oe),le=n(72),de=n.n(le),ue=n(202),he=function(e){var t=e.percentage;return t>0?Object(E.jsx)("svg",{stroke:"currentColor",fill:"currentColor",strokeWidth:"0",viewBox:"0 0 1024 1024",color:"#00c393",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg",style:{color:"rgb(0, 195, 147)",verticalAlign:"middle"},children:Object(E.jsx)("path",{d:"M868 545.5L536.1 163a31.96 31.96 0 0 0-48.3 0L156 545.5a7.97 7.97 0 0 0 6 13.2h81c4.6 0 9-2 12.1-5.5L474 300.9V864c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V300.9l218.9 252.3c3 3.5 7.4 5.5 12.1 5.5h81c6.8 0 10.5-8 6-13.2z"})}):t<0?Object(E.jsx)("svg",{stroke:"currentColor",fill:"currentColor",strokeWidth:"0",viewBox:"0 0 1024 1024",color:"#ef425b",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg",style:{color:"rgb(239, 66, 91)",verticalAlign:"middle"},children:Object(E.jsx)("path",{d:"M862 465.3h-81c-4.6 0-9 2-12.1 5.5L550 723.1V160c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v563.1L255.1 470.8c-3-3.5-7.4-5.5-12.1-5.5h-81c-6.8 0-10.5 8.1-6 13.2L487.9 861a31.96 31.96 0 0 0 48.3 0L868 478.5c4.5-5.2.8-13.2-6-13.2z"})}):Object(E.jsx)(E.Fragment,{})},pe=function(e){var t=e.currencies;return Object(E.jsx)("div",{className:de.a["currencies-line"],children:t.map((function(e,t){return Object(E.jsx)(ue.a,{title:"".concat(e.fullName," ").concat(e.changePercentage.toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2}),"%"),children:Object(E.jsxs)("div",{className:de.a["currency-button"],children:[Object(E.jsx)("span",{className:de.a["currency-position"],children:t+1}),Object(E.jsx)(he,{percentage:e.changePercentage}),Object(E.jsx)("span",{className:de.a["currency-name"],children:e.name})]})},t)}))})},be=n(43),je=n.n(be),xe=n(209),me=n(205),ge=n(210),fe="https://d3kdei7cs9pk0w.cloudfront.net/56_0x4bd17003473389a42daf6a0a729f6fdb328bbbd7_small.png";function Oe(e){return we.apply(this,arguments)}function we(){return(we=Object(N.a)(C.a.mark((function e(t){return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(navigator.clipboard){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,e.next=5,navigator.clipboard.writeText(t);case 5:return e.abrupt("return",!0);case 8:return e.prev=8,e.t0=e.catch(2),e.abrupt("return",!1);case 11:case"end":return e.stop()}}),e,null,[[2,8]])})))).apply(this,arguments)}!function(e){e.sushiswap="https://www.defined.fi/images/icons/exchanges/sushiswap.png",e.pancakeswap="https://www.defined.fi/images/icons/exchanges/pancakeswap.png",e.uniswap="https://www.defined.fi/images/icons/exchanges/uniswap.png",e.quickSwap="https://www.defined.fi/images/icons/exchanges/quickswap.png"}(K||(K={}));var ve=function(e){var t=Object(r.useState)(!1),n=Object(l.a)(t,2),c=n[0],a=n[1],i=Object(r.useState)(!1),o=Object(l.a)(i,2),s=o[0],d=o[1];function u(){return(u=Object(N.a)(C.a.mark((function t(){return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=a,t.next=3,Oe(e.data.address);case 3:t.t1=!t.sent,(0,t.t0)(t.t1),d(!0);case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(E.jsxs)("div",{className:je.a["currency-info-container"],children:[Object(E.jsx)(xe.a,{open:s,autoHideDuration:2e3,onClose:function(){return d(!1)},children:Object(E.jsx)(me.a,{severity:c?"error":"success",sx:{width:"100%"},children:c?"An unexpected error occurred.":"Contract address copied in your clipboard!"})}),Object(E.jsxs)("div",{className:je.a["currency-info"],children:[Object(E.jsx)(ge.a,{badgeContent:Object(E.jsx)("img",{className:je.a["swap-icon"],src:J[e.data.swap],alt:""}),anchorOrigin:{vertical:"bottom",horizontal:"right"},children:Object(E.jsx)("img",{className:je.a.icon,alt:"",src:fe})}),Object(E.jsxs)("div",{className:je.a["currency-data"],children:[Object(E.jsxs)(F.a,{variant:"body1",children:[e.data.name,"/",e.data.secondToken]}),Object(E.jsxs)("div",{children:[Object(E.jsxs)(F.a,{variant:"body1",children:["$",e.data.cost]}),Object(E.jsx)(U,{percentage:e.data.changePercentage})]})]})]}),Object(E.jsxs)("div",{className:je.a["other-info"],children:[Object(E.jsxs)("div",{children:[Object(E.jsx)("span",{children:"Liquidity"}),Object(E.jsxs)("p",{children:["$",$(e.data.liquidity)]})]}),Object(E.jsxs)("div",{children:[Object(E.jsx)("span",{children:"Volume"}),Object(E.jsxs)("p",{children:["$",$(e.data.volume)]})]}),Object(E.jsxs)("div",{children:[Object(E.jsx)("span",{children:"Mkt Cap"}),Object(E.jsx)("p",{children:e.data.mktCap?$(e.data.volume):"\u2014\u2014"})]}),Object(E.jsxs)("div",{children:[Object(E.jsx)("span",{children:"Supply"}),Object(E.jsx)("p",{children:e.data.supply?$(e.data.volume):"\u2014\u2014"})]}),Object(E.jsxs)("div",{children:[Object(E.jsx)("span",{children:"ETH Price"}),Object(E.jsxs)("p",{children:["$",$(e.data.ethPrice)]})]})]}),Object(E.jsxs)("div",{className:je.a["buttons-panel"],children:[Object(E.jsx)("div",{className:je.a["trade-button"],children:"Trade"}),Object(E.jsx)(ue.a,{title:"Copy ".concat(e.data.address),children:Object(E.jsxs)("div",{className:je.a["contract-button"],onClick:function(){!function(){u.apply(this,arguments)}()},children:["Contract",Object(E.jsxs)("svg",{stroke:"currentColor",fill:"currentColor",strokeWidth:"0",viewBox:"0 0 24 24",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:[Object(E.jsx)("path",{d:"M20,2H10C8.897,2,8,2.897,8,4v4H4c-1.103,0-2,0.897-2,2v10c0,1.103,0.897,2,2,2h10c1.103,0,2-0.897,2-2v-4h4 c1.103,0,2-0.897,2-2V4C22,2.897,21.103,2,20,2z M4,20V10h10l0.002,10H4z M20,14h-4v-4c0-1.103-0.897-2-2-2h-4V4h10V14z"}),Object(E.jsx)("path",{d:"M6 12H12V14H6zM6 16H12V18H6z"})]})]})})]})]})},ye=n(102),_e=n.n(ye),ke=n(103),Ce=n.n(ke),Ne=function(e){var t=Se();return Object(E.jsx)(q.a,{sx:{width:"100%",overflow:"auto"},className:t.box,children:Object(E.jsx)(L.a,{sx:{width:"100%",mb:2},elevation:0,children:Object(E.jsx)(T.a,{children:Object(E.jsxs)(M.a,{"aria-labelledby":"tableTitle",size:"medium",style:{minWidth:"842px"},children:[Object(E.jsx)(B.a,{children:Object(E.jsxs)(P.a,{children:[Object(E.jsx)(W.a,{width:"14%",className:t.cell,children:"Type"}),Object(E.jsx)(W.a,{width:"14%",className:t.cell,children:"Price USD"}),Object(E.jsx)(W.a,{width:"14%",className:t.cell,children:"Price ETH"}),Object(E.jsx)(W.a,{width:"14%",className:t.cell,children:"Amount"}),Object(E.jsx)(W.a,{width:"14%",className:t.cell,children:"Total ETH"}),Object(E.jsx)(W.a,{width:"14%",className:t.cell,children:"Time"}),Object(E.jsx)(W.a,{width:"14%",className:t.cell,children:"Maker"})]})}),Object(E.jsx)(R.a,{children:e.operations.map((function(e,n){return Object(E.jsxs)(P.a,{hover:!0,className:t.dataRow,style:{backgroundColor:n%2===0?"#141414":void 0},children:[Object(E.jsx)(W.a,{component:"th",scope:"row",padding:"none",children:Object(E.jsx)("span",{className:_e.a["label-"+e.type],children:"buy"===e.type?"Buy":"Sell"})}),Object(E.jsxs)(W.a,{component:"th",scope:"row",padding:"none",children:["$",e.priceUSD]}),Object(E.jsx)(W.a,{component:"th",scope:"row",padding:"none",children:e.priceETH}),Object(E.jsx)(W.a,{component:"th",scope:"row",padding:"none",children:e.amount}),Object(E.jsx)(W.a,{component:"th",scope:"row",padding:"none",children:e.totalETH}),Object(E.jsx)(W.a,{component:"th",scope:"row",padding:"none",children:Ce.a.unix(e.time).fromNow()}),Object(E.jsx)(W.a,{component:"th",scope:"row",padding:"none",children:Object(E.jsxs)("a",{style:{color:"rgb(129, 242, 200)",textDecoration:"none"},href:"https://arbiscan.io/address/".concat(e.maker),children:["...",e.maker.substring(e.maker.length-11)]})})]},n)}))})]})})})})},Se=Object(O.a)({box:{marginTop:"32px","&>.MuiPaper-root":{border:"none",backgroundColor:"#191919",borderRadius:"8px"}},cell:{fontFamily:"Poppins !important",fontWeight:500,color:"white !important",borderBottom:"1px solid #8a8a8a !important",fontSize:"1rem !important","&:not(:first-child)":{paddingLeft:"0 !important",paddingRight:"0 !important"},"&:first-child":{paddingRight:"0 !important"}},image:{width:"20px !important",height:"20px !important"},dataRow:{"&>.MuiTableCell-root:first-child":{paddingLeft:"16px"},"&>.MuiTableCell-root":{padding:"8px 0",border:"none",marginLeft:"auto",marginRight:"auto",color:"white",fontFamily:"Fira Mono"},"&>.MuiTableCell-root:nth-child(6)":{padding:"8px 0",border:"none",marginLeft:"auto",marginRight:"auto",color:"white",fontFamily:"Poppins"},"&>.MuiTableCell-root:last-child":{padding:"8px 0",border:"none",marginLeft:"auto",marginRight:"auto",color:"white",fontFamily:"Poppins"},"&:hover":{backgroundColor:"#262626 !important",cursor:"pointer"}}});function Fe(e){return Le.apply(this,arguments)}function Le(){return(Le=Object(N.a)(C.a.mark((function e(t){var n,r;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(Z,"/currency/fetch/").concat(t));case 2:return n=e.sent,e.next=5,n.json();case 5:return(r=e.sent)&&"address"in r&&!r.secondToken&&(r.secondToken="ETH"),e.abrupt("return",r);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Te(){return Me.apply(this,arguments)}function Me(){return(Me=Object(N.a)(C.a.mark((function e(){var t;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(Z,"/currency/top"));case 2:return t=e.sent,e.next=5,t.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var Re=n(108),Pe=n(78),We={value:void 0},De=Object(Pe.b)({name:"websocket",initialState:We,reducers:{openWebsocket:function(e,t){e.value=new WebSocket(t.payload)},closeWebsocket:function(e){var t;null===(t=e.value)||void 0===t||t.close(),e.value=void 0}}}),ze=De.actions,qe=ze.openWebsocket,Be=ze.closeWebsocket,Ee=De.reducer,He=Object(Pe.a)({reducer:{websocket:Ee}});var Ie={1:1,5:5,15:15,30:30,60:60,240:240,720:720,"1D":1440},Ae="1D",Ve={onReady:function(e){setTimeout((function(){return e({supported_resolutions:["1","5","15","30","1h","4h","12h","1d"]})}))},searchSymbols:function(){},resolveSymbol:function(e,t){setTimeout((function(){t({name:e,description:e,ticker:e,full_name:"",exchange:"",listed_exchange:"",format:"price",supported_resolutions:["1","5","15","30","1h","4h","12h","1d"],type:"crypto",session:"24x7",minmov:1,pricescale:100,timezone:"Etc/UTC",has_intraday:!0,has_daily:!0,has_weekly_and_monthly:!0,currency_code:e,has_no_volume:!0})}))},getBars:function(e,t,n,r,c){if(!n.firstDataRequest)return r([]);t!==Ae&&(Ae=t,He.dispatch(Be()));var a=function(){var n=Object(N.a)(C.a.mark((function n(){var r;return C.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(Z,"/currency/charts/").concat(e.name,"?resolution=").concat(Ie[t]));case 2:return n.next=4,n.sent.json();case 4:if(!((r=n.sent)&&r.length>0)){n.next=9;break}return n.abrupt("return",r);case 9:return n.abrupt("return",[]);case 10:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();a().then((function(e){return r(e)}))},subscribeBars:function(e,t,n){!function(e,t,n){He.dispatch(qe("".concat("wss://mock.realgrace.me/ws","/").concat(t,"?resolution=").concat(Ie[e])));var r=He.getState().websocket.value;r&&r.addEventListener("message",(function(e){var t=JSON.parse(e.data);"CHARTS"===t.type&&t.data[0]&&n(t.data[0])}))}(t,e.name,(function(e){return n(e)}))},unsubscribeBars:function(){}},Ue=function(e){var t=Object(r.useState)(null),n=Object(l.a)(t,2),c=n[0],a=n[1],i=Object(r.useRef)(null);return Object(r.useEffect)((function(){var t=new Re.a({symbol:e.symbol,datafeed:Ve,interval:"1D",library_path:"/charting_library/",height:e.height,theme:"Dark",locale:"en",disabled_features:["use_localstorage_for_settings","header_symbol_search"],charts_storage_url:"https://saveload.tradingview.com",charts_storage_api_version:"1.1",client_id:"tradingview.com",user_id:"public_user_id",fullscreen:!1,autosize:!0,studies_overrides:{},container:i.current});return a(t),function(){c&&c.remove()}}),[i]),Object(E.jsx)("div",{ref:i,style:{height:e.height}})},$e=n(69),Ze=$e.c,Je=function(e){var t=e.id,n=Ze((function(e){return e.websocket.value})),c=Object(r.useState)(!1),a=Object(l.a)(c,2),i=a[0],s=a[1],d=Object(r.useState)(""),u=Object(l.a)(d,2),g=u[0],f=u[1],O=Qe(),v=Object(r.useState)([]),y=Object(l.a)(v,2),_=y[0],k=y[1],L=Object(r.useState)(),T=Object(l.a)(L,2),M=T[0],R=T[1],P=Object(r.useState)([]),W=Object(l.a)(P,2),D=W[0],z=W[1],q=Object(r.useState)(),B=Object(l.a)(q,2),H=B[0],I=B[1],A=Object(r.useState)(!0),V=Object(l.a)(A,2),U=V[0],$=V[1];return Object(r.useEffect)((function(){function e(){return e=Object(N.a)(C.a.mark((function e(){var n;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Fe(t||"");case 2:if(!(n=e.sent)||!("trade_data"in n)){e.next=11;break}return R(n),e.t0=k,e.next=8,Te();case 8:e.t1=e.sent,(0,e.t0)(e.t1),z(n.trade_data.operations);case 11:$(!1);case 12:case"end":return e.stop()}}),e)}))),e.apply(this,arguments)}return function(){e.apply(this,arguments)}(),function(){n&&n.close()}}),[]),Object(r.useEffect)((function(){n&&n.addEventListener("message",(function(e){I(JSON.parse(e.data))}))}),[n]),Object(r.useEffect)((function(){if(H&&"CHARTS"!==H.type){for(var e=H.data.concat(D);e.length>10;)e.pop();z(e)}}),[H]),Object(E.jsxs)("div",{className:se.a["page-container"],children:[Object(E.jsx)(h.a,{elevation:0,position:"fixed",children:Object(E.jsxs)(p.a,{children:[Object(E.jsx)(o.b,{to:"/",children:Object(E.jsx)("img",{className:se.a.logo,src:w,alt:"logo"})}),Object(E.jsx)(ee,{query:g,visible:i,onClose:function(e){s(!1),f(e)}}),Object(E.jsx)(b.a,{onClick:function(){return s(!0)},value:g,className:"".concat(O.searchField," ").concat(se.a["search-field"]),placeholder:"Search by token name, ticker, address or pair",InputProps:{startAdornment:Object(E.jsx)(j.a,{position:"start",children:Object(E.jsx)(x.a,{style:{color:"rgb(115, 104, 231)"},children:Object(E.jsxs)("svg",{stroke:"currentColor",fill:"none",strokeWidth:"2",viewBox:"0 0 24 24",strokeLinecap:"round",strokeLinejoin:"round",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:[Object(E.jsx)("circle",{cx:"11",cy:"11",r:"8"}),Object(E.jsx)("line",{x1:"21",y1:"21",x2:"16.65",y2:"16.65"})]})})})}}),Object(E.jsx)(m.a,{className:se.a["search-button"],onClick:function(){return s(!0)},sx:{borderRadius:"50%",minWidth:0,height:"40px"},children:Object(E.jsx)(x.a,{style:{color:"rgb(115, 104, 231)",display:"flex"},children:Object(E.jsxs)("svg",{stroke:"currentColor",fill:"none",strokeWidth:"2",viewBox:"0 0 24 24",strokeLinecap:"round",strokeLinejoin:"round",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg",children:[Object(E.jsx)("circle",{cx:"11",cy:"11",r:"8"}),Object(E.jsx)("line",{x1:"21",y1:"21",x2:"16.65",y2:"16.65"})]})})})]})}),U?Object(E.jsx)("div",{className:O.searchOrNotFoundContainer,children:Object(E.jsx)(S.a,{})}):M?Object(E.jsxs)("div",{className:se.a["page-content"],children:[Object(E.jsx)(pe,{currencies:_}),Object(E.jsx)(ve,{data:M}),Object(E.jsx)("div",{style:{width:"100%",marginTop:"32px",height:"400px"},children:Object(E.jsx)(Ue,{symbol:t||"",height:400})}),Object(E.jsx)(Ne,{operations:D})]}):Object(E.jsx)("div",{className:O.searchOrNotFoundContainer,children:Object(E.jsx)(F.a,{variant:"h3",sx:{fontFamily:"Poppins",color:"rgb(137, 255, 211)"},children:"Not Found."})})]})},Qe=Object(O.a)({searchOrNotFoundContainer:{display:"flex",alignItems:"center",justifyContent:"center",height:"100vh",flex:"1 1 0%"},searchField:{width:"50%",minWidth:"512px",margin:"8px !important",boxSizing:"border-box",outline:"none","&>.MuiOutlinedInput-root":{padding:"4px 20px",borderRadius:"8px",backgroundColor:"rgb(26, 20, 51)",color:"rgb(143, 134, 235)",fontFamily:"Poppins","&:hover":{"&>.MuiOutlinedInput-notchedOutline":{borderColor:"rgba(115, 104, 231, 0.533)",borderWidth:"2px"}}}}});var Ge=function(){return Object(E.jsx)(o.a,{children:Object(E.jsxs)(s.c,{children:[Object(E.jsx)(s.a,{path:"/",exact:!0,children:Object(E.jsx)(ae,{})}),Object(E.jsx)(s.a,{path:"/:id",component:function(e){return Object(E.jsx)(Je,{id:e.match.params.id})}})]})})},Ke=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,231)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),r(e),c(e),a(e),i(e)}))};n(145);i.a.render(Object(E.jsx)(c.a.StrictMode,{children:Object(E.jsx)($e.a,{store:He,children:Object(E.jsx)(Ge,{})})}),document.getElementById("root")),Ke()},33:function(e,t,n){e.exports={"page-container":"home_page-container__3U-1b",header:"home_header__3hDZZ",visible:"home_visible__FgSE_","Show-Field":"home_Show-Field__2RNsu",hidden:"home_hidden__8Jcic","Hide-Field":"home_Hide-Field__31rCs",logo:"home_logo__3uozE","nsfw-logo":"home_nsfw-logo__2vkkf",search:"home_search___dO-R","links-btn":"home_links-btn__1hZSc",link:"home_link__2-nyU"}},43:function(e,t,n){e.exports={"currency-info-container":"currency-data_currency-info-container__kcQLI","currency-info":"currency-data_currency-info__kprRv","currency-data":"currency-data_currency-data__1YiRE",icon:"currency-data_icon__1l1Hs","swap-icon":"currency-data_swap-icon__12kAm","other-info":"currency-data_other-info__G2PND","buttons-panel":"currency-data_buttons-panel__2KQ9m",button:"currency-data_button__2CSZp","trade-button":"currency-data_trade-button__kxj4r currency-data_button__2CSZp","contract-button":"currency-data_contract-button__1-T8M currency-data_button__2CSZp"}},61:function(e,t,n){e.exports={"page-container":"styles_page-container__1jBBo","page-content":"styles_page-content__2Y8sZ","search-button":"styles_search-button__ICxAs","search-field":"styles_search-field__1g7QV",logo:"styles_logo__236cw"}},72:function(e,t,n){e.exports={"currencies-line":"currencies-line_currencies-line__3QM7_","currency-button":"currencies-line_currency-button__3IF6p","currency-position":"currencies-line_currency-position__2mqRB","currency-name":"currencies-line_currency-name__2Sl-T"}}},[[146,1,2]]]);
//# sourceMappingURL=main.2c9cb9cc.chunk.js.map