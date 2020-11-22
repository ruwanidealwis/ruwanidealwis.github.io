(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"3XHS":function(e,t,r){"use strict";r.r(t);var a=r("dI71"),n=r("kKAo"),o=r("KQm4"),i=r("wx14"),l=(r("17x9"),r("bv9d"));var c=function(e){var t=function(t){var r=e(t);return t.css?Object(i.a)(Object(i.a)({},Object(l.a)(r,e(Object(i.a)({theme:t.theme},t.css)))),function(e,t){var r={};return Object.keys(e).forEach((function(a){-1===t.indexOf(a)&&(r[a]=e[a])})),r}(t.css,[e.filterProps])):r};return t.propTypes={},t.filterProps=["css"].concat(Object(o.a)(e.filterProps)),t};var p=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];var a=function(e){return t.reduce((function(t,r){var a=r(e);return a?Object(l.a)(t,a):t}),{})};return a.propTypes={},a.filterProps=t.reduce((function(e,t){return e.concat(t.filterProps)}),[]),a},m=r("rePB"),s=r("LybE");function u(e,t){return t&&"string"==typeof t?t.split(".").reduce((function(e,t){return e&&e[t]?e[t]:null}),e):null}var d=function(e){var t=e.prop,r=e.cssProperty,a=void 0===r?e.prop:r,n=e.themeKey,o=e.transform,i=function(e){if(null==e[t])return null;var r=e[t],i=u(e.theme,n)||{};return Object(s.a)(e,r,(function(e){var t;return"function"==typeof i?t=i(e):Array.isArray(i)?t=i[e]||e:(t=u(i,e)||e,o&&(t=o(t))),!1===a?t:Object(m.a)({},a,t)}))};return i.propTypes={},i.filterProps=[t],i};function f(e){return"number"!=typeof e?e:"".concat(e,"px solid")}var g=p(d({prop:"border",themeKey:"borders",transform:f}),d({prop:"borderTop",themeKey:"borders",transform:f}),d({prop:"borderRight",themeKey:"borders",transform:f}),d({prop:"borderBottom",themeKey:"borders",transform:f}),d({prop:"borderLeft",themeKey:"borders",transform:f}),d({prop:"borderColor",themeKey:"palette"}),d({prop:"borderRadius",themeKey:"shape"})),h=p(d({prop:"displayPrint",cssProperty:!1,transform:function(e){return{"@media print":{display:e}}}}),d({prop:"display"}),d({prop:"overflow"}),d({prop:"textOverflow"}),d({prop:"visibility"}),d({prop:"whiteSpace"})),y=p(d({prop:"flexBasis"}),d({prop:"flexDirection"}),d({prop:"flexWrap"}),d({prop:"justifyContent"}),d({prop:"alignItems"}),d({prop:"alignContent"}),d({prop:"order"}),d({prop:"flex"}),d({prop:"flexGrow"}),d({prop:"flexShrink"}),d({prop:"alignSelf"}),d({prop:"justifyItems"}),d({prop:"justifySelf"})),b=p(d({prop:"gridGap"}),d({prop:"gridColumnGap"}),d({prop:"gridRowGap"}),d({prop:"gridColumn"}),d({prop:"gridRow"}),d({prop:"gridAutoFlow"}),d({prop:"gridAutoColumns"}),d({prop:"gridAutoRows"}),d({prop:"gridTemplateColumns"}),d({prop:"gridTemplateRows"}),d({prop:"gridTemplateAreas"}),d({prop:"gridArea"})),v=p(d({prop:"position"}),d({prop:"zIndex",themeKey:"zIndex"}),d({prop:"top"}),d({prop:"right"}),d({prop:"bottom"}),d({prop:"left"})),E=p(d({prop:"color",themeKey:"palette"}),d({prop:"bgcolor",cssProperty:"backgroundColor",themeKey:"palette"})),w=d({prop:"boxShadow",themeKey:"shadows"});function k(e){return e<=1?"".concat(100*e,"%"):e}var x=d({prop:"width",transform:k}),j=d({prop:"maxWidth",transform:k}),S=d({prop:"minWidth",transform:k}),O=d({prop:"height",transform:k}),C=d({prop:"maxHeight",transform:k}),I=d({prop:"minHeight",transform:k}),z=(d({prop:"size",cssProperty:"width",transform:k}),d({prop:"size",cssProperty:"height",transform:k}),p(x,j,S,O,C,I,d({prop:"boxSizing"}))),R=r("+Hmc"),T=p(d({prop:"fontFamily",themeKey:"typography"}),d({prop:"fontSize",themeKey:"typography"}),d({prop:"fontStyle",themeKey:"typography"}),d({prop:"fontWeight",themeKey:"typography"}),d({prop:"letterSpacing"}),d({prop:"lineHeight"}),d({prop:"textAlign"})),B=r("/P46"),P=r("cNwE"),A=function(e){var t=Object(B.a)(e);return function(e,r){return t(e,Object(i.a)({defaultTheme:P.a},r))}},K=c(p(g,h,y,b,v,E,w,z,R.b,T)),H=A("div")(K,{name:"MuiBox"}),L=r("tRbT"),N=r("q1tI"),D=r.n(N),M=r("30+C"),q=r("oa/T"),W=r("ofer"),F=r("kOA+"),V=r.n(F),G=function(e){function t(t){var r;return(r=e.call(this)||this).state={webDevLink:t.webDevLink,dataSciLink:t.dataSciLink},r}return Object(a.a)(t,e),t.prototype.render=function(){return D.a.createElement(M.a,{id:"aboutCard",style:{backgroundColor:"var(--pbg)"}},D.a.createElement(q.a,null,D.a.createElement(W.a,{style:{color:"var(--main)"},gutterBottom:!0,variant:"h4"},"ABOUT ME."),D.a.createElement(W.a,{gutterBottom:!0,variant:"body1",style:{lineHeight:"2"}},"Hello! I'm Ruwani and I'm an incoming third-year student at the"," ",D.a.createElement("strong",null,"University of Ottawa")," studying"," ",D.a.createElement("strong",null,"Software Engineering."),D.a.createElement("br",null),D.a.createElement("br",null),"I have a strong passion for"," ",D.a.createElement("strong",null,"full-stack development"),", with a focus on the backend and server. I love developing",D.a.createElement("strong",null," REST APIs"),","," ","interacting with ",D.a.createElement("strong",null,"Databases")," and using data whether it be music data from Spotify or NASA's catalogue of Space data to create projects that are both meaningful and enjoyable. I've had the experience of developing these skills through my"," ",D.a.createElement(V.a,{swipe:!0,direction:"right",to:"/projects?filter=webDevelopment"},"web development projects"," "),"and internships.",D.a.createElement("br",null),D.a.createElement("br",null)," My interest in Data has also introduced me to the field of"," ",D.a.createElement("strong",null,"Data Science")," where I am hoping to advance my knowledge of the subject. Some of my Data Science projects are visible"," ",D.a.createElement(V.a,{swipe:!0,direction:"right",duration:1,to:"/projects?filter=dataScience"},"here."," "),D.a.createElement("br",null),D.a.createElement("br",null),"When I'm not coding, I'm probably listening to music on Spotify, over-analyzing TV shows or watching FC Barcelona... I was able to take up many hobbies including embroidering, painting, and I'm even learning to sew!",D.a.createElement("br",null),D.a.createElement("br",null),"Please do not hesitate to reach out to me if you would like to speak about tech, sports, tv, music or anything in general.",D.a.createElement("br",null))))},t}(D.a.Component),J=r("Ie8z"),U=r("eD//"),_=r("tVbE"),Q=r("6TeK"),X=r.n(Q),Y=r("6eQf"),Z=r.n(Y),$=r("F1lX"),ee=r.n($),te=r("702g"),re=r.n(te),ae=(r("Bsmb"),function(e){function t(){return e.apply(this,arguments)||this}return Object(a.a)(t,e),t.prototype.render=function(){return D.a.createElement("div",null,D.a.createElement(M.a,{className:"bioCardImage",style:{marginLeft:"0%",marginTop:"-50%",backgroundColor:"var(--pbg)",marginBottom:"12%"}},D.a.createElement(J.a,{style:{height:"33vh"},image:X.a}),D.a.createElement(q.a,null,D.a.createElement(W.a,{gutterBottom:!0,variant:"body1",align:"center",component:"h2"},"Name: Ruwani"),D.a.createElement(W.a,{gutterBottom:!0,variant:"body1",align:"center",component:"h2"},"Pronouns: She/Her"),D.a.createElement(U.a,{style:{display:"inline-flex",flexDirection:"row",justifyContent:"center",width:"100%",margin:"auto",alignItems:"center",alignContent:"center"}},D.a.createElement(_.a,{button:!0,component:"a",href:"mailto: ruwanide51@gmail.com",style:{justifyContent:"center"}},D.a.createElement(Z.a,{color:"secondary"})),D.a.createElement(_.a,{button:!0,component:"a",href:"https://github.com/ruwanidealwis",style:{justifyContent:"center"}},D.a.createElement(ee.a,null)),D.a.createElement(_.a,{button:!0,component:"a",href:"https://www.linkedin.com/in/ruwani-de-alwis-610476187/",style:{justifyContent:"center"}},D.a.createElement(re.a,null))))))},t}(D.a.Component)),ne=r("6cYQ"),oe=function(e){function t(){return e.apply(this,arguments)||this}return Object(a.a)(t,e),t.prototype.render=function(){return D.a.createElement(M.a,{style:{backgroundColor:"var(--pbg)"}}," ",D.a.createElement(q.a,null," ",D.a.createElement(W.a,{variant:"h4",style:{color:"var(--main)"}},"Check In"),D.a.createElement("br",null),D.a.createElement(W.a,{variant:"h6",style:{color:"var(--secondary)"}},"Working On:"),D.a.createElement(W.a,{variant:"body1"},D.a.createElement(U.a,null,D.a.createElement(_.a,null,"-Analyzing World Happiness"),D.a.createElement(_.a,null,"-Space Barcode"))),D.a.createElement(W.a,{variant:"h6",style:{color:"var(--secondary)"}},"Reading:"),D.a.createElement(W.a,{variant:"body1"},D.a.createElement(U.a,null,D.a.createElement(_.a,null,"-A Man Called Ove")," "))," ",D.a.createElement(W.a,{variant:"h6",style:{color:"var(--secondary)"}},"Watching:"),D.a.createElement(W.a,{variant:"body1"},D.a.createElement(U.a,null,D.a.createElement(_.a,null,"-New Girl & Gotham")))))},t}(D.a.Component),ie=function(e){function t(){return e.apply(this,arguments)||this}return Object(a.a)(t,e),t.prototype.render=function(){return D.a.createElement(n.a,{style:{backgroundColor:"var(--obg)",minHeight:"80vh",minWidth:"100%",paddingTop:"0%",marginBottom:"4%"}},D.a.createElement(ne.a,null),D.a.createElement(H,{style:{paddingLeft:"7%",paddingRight:"7%",paddingBottom:"2%"}},D.a.createElement(L.a,{container:!0,spacing:4},D.a.createElement(L.a,{item:!0,lg:3,md:4,xs:12,style:{marginBottom:"4%",color:"orange"}},D.a.createElement(ae,null),D.a.createElement(oe,null)),D.a.createElement(L.a,{item:!0,lg:9,md:8,xs:12,style:{margin:"auto"}},D.a.createElement(G,{webDevLink:"../projects?filter=webDevelopment",dataSciLink:"../projects?filter=dataScience",style:{}})))))},t}(D.a.Component);t.default=ie},"6TeK":function(e,t,r){e.exports=r.p+"static/minimalistV4-f21512f25a44260c522fd2514a6fca90.png"},"6eQf":function(e,t,r){"use strict";var a=r("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(r("q1tI")),o=(0,a(r("8/g6")).default)(n.default.createElement("path",{d:"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-.4 4.25l-7.07 4.42c-.32.2-.74.2-1.06 0L4.4 8.25c-.25-.16-.4-.43-.4-.72 0-.67.73-1.07 1.3-.72L12 11l6.7-4.19c.57-.35 1.3.05 1.3.72 0 .29-.15.56-.4.72z"}),"EmailRounded");t.default=o},"702g":function(e,t,r){var a=r("q1tI");function n(e){return a.createElement("svg",e,[a.createElement("g",{key:0},a.createElement("path",{d:"M5.366,2.973c0,1.376-1.035,2.479-2.699,2.479H2.636C1.034,5.453,0,4.348,0,2.973c0-1.409,1.067-2.482,2.698-2.482\r\n\t\tC4.331,0.49,5.336,1.564,5.366,2.973z M0.28,21.766h4.772V7.413H0.28V21.766z M16.764,7.077c-2.531,0-3.664,1.39-4.301,2.37v0.046\r\n\t\th-0.031c0.012-0.014,0.023-0.03,0.031-0.046V7.414H7.692c0.062,1.345,0,14.353,0,14.353h4.771v-8.016\r\n\t\tc0-0.432,0.029-0.855,0.157-1.164c0.346-0.854,1.132-1.747,2.446-1.747c1.729,0,2.42,1.319,2.42,3.247v7.68h4.771v-8.229\r\n\t\tC22.258,9.126,19.902,7.077,16.764,7.077z"})),a.createElement("g",{key:1}),a.createElement("g",{key:2}),a.createElement("g",{key:3}),a.createElement("g",{key:4}),a.createElement("g",{key:5}),a.createElement("g",{key:6}),a.createElement("g",{key:7}),a.createElement("g",{key:8}),a.createElement("g",{key:9}),a.createElement("g",{key:10}),a.createElement("g",{key:11}),a.createElement("g",{key:12}),a.createElement("g",{key:13}),a.createElement("g",{key:14}),a.createElement("g",{key:15})])}n.defaultProps={version:"1.1",id:"Capa_1",x:"0px",y:"0px",width:"22.258px",height:"22.258px",viewBox:"0 0 22.258 22.258",style:{enableBackground:"new 0 0 22.258 22.258"},xmlSpace:"preserve",fill:"var(--main)"},e.exports=n,n.default=n},"8/g6":function(e,t,r){"use strict";var a=r("TqRt");Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var r=o.default.memo(o.default.forwardRef((function(t,r){return o.default.createElement(i.default,(0,n.default)({ref:r},t),e)})));0;return r.muiName=i.default.muiName,r};var n=a(r("pVnL")),o=a(r("q1tI")),i=a(r("UJJ5"))},Bsmb:function(e,t,r){},F1lX:function(e,t,r){var a=r("q1tI");function n(e){return a.createElement("svg",e,a.createElement("path",{d:"M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"}))}n.defaultProps={width:"24",height:"24",viewBox:"0 0 24 24",fill:"var(--main)"},e.exports=n,n.default=n},HR5l:function(e,t,r){"use strict";var a=r("wx14"),n=r("Ff2n"),o=r("q1tI"),i=r("iuhU"),l=r("H2TA"),c=r("NqtD"),p=o.forwardRef((function(e,t){var r=e.children,l=e.classes,p=e.className,m=e.color,s=void 0===m?"inherit":m,u=e.component,d=void 0===u?"svg":u,f=e.fontSize,g=void 0===f?"default":f,h=e.htmlColor,y=e.titleAccess,b=e.viewBox,v=void 0===b?"0 0 24 24":b,E=Object(n.a)(e,["children","classes","className","color","component","fontSize","htmlColor","titleAccess","viewBox"]);return o.createElement(d,Object(a.a)({className:Object(i.a)(l.root,p,"inherit"!==s&&l["color".concat(Object(c.a)(s))],"default"!==g&&l["fontSize".concat(Object(c.a)(g))]),focusable:"false",viewBox:v,color:h,"aria-hidden":!y||void 0,role:y?"img":void 0,ref:t},E),r,y?o.createElement("title",null,y):null)}));p.muiName="SvgIcon",t.a=Object(l.a)((function(e){return{root:{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:"currentColor",flexShrink:0,fontSize:e.typography.pxToRem(24),transition:e.transitions.create("fill",{duration:e.transitions.duration.shorter})},colorPrimary:{color:e.palette.primary.main},colorSecondary:{color:e.palette.secondary.main},colorAction:{color:e.palette.action.active},colorError:{color:e.palette.error.main},colorDisabled:{color:e.palette.action.disabled},fontSizeInherit:{fontSize:"inherit"},fontSizeSmall:{fontSize:e.typography.pxToRem(20)},fontSizeLarge:{fontSize:e.typography.pxToRem(35)}}}),{name:"MuiSvgIcon"})(p)},Ie8z:function(e,t,r){"use strict";var a=r("wx14"),n=r("Ff2n"),o=r("q1tI"),i=r("iuhU"),l=r("H2TA"),c=["video","audio","picture","iframe","img"],p=o.forwardRef((function(e,t){var r=e.children,l=e.classes,p=e.className,m=e.component,s=void 0===m?"div":m,u=e.image,d=e.src,f=e.style,g=Object(n.a)(e,["children","classes","className","component","image","src","style"]),h=-1!==c.indexOf(s),y=!h&&u?Object(a.a)({backgroundImage:'url("'.concat(u,'")')},f):f;return o.createElement(s,Object(a.a)({className:Object(i.a)(l.root,p,h&&l.media,-1!=="picture img".indexOf(s)&&l.img),ref:t,style:y,src:h?u||d:void 0},g),r)}));t.a=Object(l.a)({root:{display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},media:{width:"100%"},img:{objectFit:"cover"}},{name:"MuiCardMedia"})(p)},UJJ5:function(e,t,r){"use strict";r.r(t);var a=r("HR5l");r.d(t,"default",(function(){return a.a}))}}]);
//# sourceMappingURL=component---src-pages-about-js-122148267f1b632118e7.js.map