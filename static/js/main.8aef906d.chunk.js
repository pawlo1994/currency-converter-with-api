(this["webpackJsonpcurrency-converter-with-api"]=this["webpackJsonpcurrency-converter-with-api"]||[]).push([[0],{17:function(n,e,t){},21:function(n,e,t){"use strict";t.r(e);var a,c,r,i,o,s,d,u,x,b,l,p,j,h,f,O,g=t(1),m=t.n(g),v=t(9),w=t.n(v),k=(t(17),t(3)),y=t(2),z=y.c.header(a||(a=Object(k.a)(["\n    margin: 20px auto;\n    background-color: rgb(140, 178, 197);\n    border-radius: 10px;\n    box-shadow: 1px 1px 3px 3px #333;\n"]))),S=y.c.h1(c||(c=Object(k.a)(["\n    font-size: 36px;\n    text-align: center;\n    text-transform: uppercase;\n    padding: 10px;\n"]))),D=t(0),F=function(n){var e=n.headerContent;return Object(D.jsx)(z,{children:Object(D.jsx)(S,{children:e})})},C=y.c.main(r||(r=Object(k.a)(["\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-between;\n    align-items: center;\n    margin: 10px auto;\n    padding: 20px 0;\n"]))),P=function(n){var e=n.children;return Object(D.jsx)(C,{children:e})},T=y.c.footer(i||(i=Object(k.a)(["\n    text-align: center;\n    background-color: rgb(96, 153, 182);\n    font-size: 14px;\n    padding: 10px;\n    border-radius: 10px;\n    box-shadow: 1px 1px 3px 3px #333;\n    margin: 0 auto;\n"]))),L=function(n){var e=n.footerContent;return Object(D.jsx)(T,{children:e})},N=t(4),E=y.c.form(o||(o=Object(k.a)(["\n    padding: 20px;\n    border-radius: 10px;\n    flex-basis: 50%;\n    background-color: #eee;\n    box-shadow: 0 0 2px 2px #666;\n\n    @media(max-width:767px){\n        flex-basis: 100%;\n    }\n"]))),I=y.c.label(s||(s=Object(k.a)(["\n    display: inline-block;\n    width: 30%;\n    margin: 10px 5px;\n    text-align: right;\n"]))),B=y.c.input(d||(d=Object(k.a)(["\n    display: inline-block;\n    width: 60%;\n    padding: 5px;\n    border-radius: 5px;\n\n    &:invalid{\n        box-shadow: 0px 0px 2px 2px #c00;\n    }\n"]))),J=y.c.p(u||(u=Object(k.a)(["\n    margin: 5px auto;\n    max-width: 360px;\n    width: 100%;\n"]))),V=y.c.button(x||(x=Object(k.a)(["\n    display: block;\n    font-size: 20px;\n    width: 100px;\n    padding: 10px;\n    margin: 10px auto;\n    background-color: ",";\n    color: #fff;\n    border: none;\n    border-radius: 10px;\n    box-shadow: 1px 1px 1px 1px #666;\n    cursor: pointer;\n    transition: 0.3s background-color;\n\n    &:hover{\n        background-color: #666;\n    }\n\n    &:active{\n        background-color: #fff;\n        color: ",";\n    }\n"])),(function(n){return n.theme.color.mineShaft}),(function(n){return n.theme.mainColor})),q=y.c.h2(b||(b=Object(k.a)(["\n    font-size: 28px;\n    text-align: center;\n    text-shadow: 0px 2px 2px #aaa;\n"]))),M=y.c.section(l||(l=Object(k.a)(["\n    padding: 20px;\n    background-color: rgb(240, 240, 240);\n    border-radius: 10px;\n    box-shadow: 0 0 2px 2px #999;\n    list-style-type: none;\n    flex-basis: 45%;\n\n    @media(max-width: 767px){\n        margin-top: 10px;\n        flex-basis: 100%;\n    }\n"]))),W=y.c.h2(p||(p=Object(k.a)(["\n    text-align: center;\n    margin: 10px 0 0;\n    font-size: 24px;\n    font-weight: normal;\n    background-color: #ddd;\n    padding: 5px;\n"]))),A=y.c.p(j||(j=Object(k.a)(["\n    margin-top: 5px;\n    padding: 5px;\n    text-align: center;\n    font-size: 20px;\n    background-color: #ccc;\n\n    ","\n    "])),(function(n){return n.updateDateText&&Object(y.b)(h||(h=Object(k.a)(["\n        font-size: 18px;\n        margin-top: 0;\n        background-color: #333;\n        color: #fff;\n    "])))})),G=function(n){var e=n.plnValue,t=n.result,a=n.updateDate;return t?Object(D.jsxs)(M,{children:[Object(D.jsx)(W,{children:"Data aktualizacji:"}),Object(D.jsx)(A,{updateDateText:!0,children:a}),Object(D.jsxs)(A,{children:[(+e).toFixed(2)," PLN = ",(+t.value).toFixed(2)," ",t.currencyName]})]}):Object(D.jsxs)(M,{children:[Object(D.jsx)(W,{children:"Data aktualizacji:"}),Object(D.jsx)(A,{updateDateText:!0,children:a})]})},H=function(){var n=function(){var n=Object(g.useState)(""),e=Object(N.a)(n,2),t=e[0],a=e[1],c=Object(g.useState)([]),r=Object(N.a)(c,2),i=r[0],o=r[1],s=Object(g.useState)([]),d=Object(N.a)(s,2),u=d[0],x=d[1],b=Object(g.useState)("loading"),l=Object(N.a)(b,2),p=l[0],j=l[1];return Object(g.useEffect)((function(){fetch("https://api.exchangerate.host/latest?base=PLN").then((function(n){if(!n.ok)throw new Error(n.statusText);return n})).then((function(n){return n.json()})).then((function(n){setTimeout((function(){o(Object.keys(n.rates)),x(Object.values(n.rates)),a(n.date),j("done")}),2e3)})).catch((function(n){console.error("B\u0141\u0104D!!!",n),j("failed")}))}),[]),{names:i,values:u,updateDate:t,status:p}}(),e=Object(g.useState)(""),t=Object(N.a)(e,2),a=t[0],c=t[1],r=Object(g.useState)(""),i=Object(N.a)(r,2),o=i[0],s=i[1],d=Object(g.useState)(""),u=Object(N.a)(d,2),x=u[0],b=u[1],l=n.names.findIndex((function(n){return n===x})),p=n.values[l];Object(g.useEffect)((function(){-1===l&&b(n.names[l+1])}),[n]);var j=Object(g.useState)(""),h=Object(N.a)(j,2),f=h[0],O=h[1];return"loading"===n.status?Object(D.jsx)(D.Fragment,{children:Object(D.jsx)(q,{children:"Prosz\u0119 czeka\u0107, trwa pobieranie danych z serwera..."})}):"failed"===n.status?Object(D.jsx)(D.Fragment,{children:Object(D.jsx)(q,{children:"Nie uda\u0142o si\u0119 pobra\u0107 danych, spr\xf3buj ponownie p\xf3\u017aniej"})}):Object(D.jsxs)(D.Fragment,{children:[Object(D.jsxs)(E,{onSubmit:function(n){n.preventDefault(),c((+o).toFixed(2)),function(n,e){O({value:o*e,currencyName:n})}(x,p),s("")},children:[Object(D.jsx)(q,{children:"Przelicznik walut"}),'Pola oznaczone "*" s\u0105 wymagane',Object(D.jsxs)(J,{children:[Object(D.jsx)(I,{htmlFor:"pln",children:"PLN*:"}),Object(D.jsx)(B,{type:"number",value:o,onChange:function(n){var e=n.target;return s(e.value)},name:"pln",id:"pln",step:"0.01",min:"0.05",max:"9999999999",required:!0}),Object(D.jsx)(I,{htmlFor:"currency",children:"Waluta:"}),Object(D.jsx)(B,{as:"select",onChange:function(n){var e=n.target;b(e.value)},children:n.names.map((function(n,e){return 0===e?Object(D.jsx)("option",{value:n,selected:!0,children:n},e):Object(D.jsx)("option",{value:n,children:n},e)}))})]}),Object(D.jsx)(V,{children:"Przelicz"})]}),Object(D.jsx)(G,{plnValue:a,result:f,updateDate:n.updateDate})]})},K=y.c.p(f||(f=Object(k.a)(["\n    font-size: 14px;\n    font-family: 'PT mono', monospace;\n    margin: 0 auto;\n    padding: 5px 10px;\n    text-align: right;\n\n    @media(max-width: 280px)\n    {\n        font-size: 12px;\n    }\n"]))),Q=function(){var n=function(){var n=Object(g.useState)(new Date),e=Object(N.a)(n,2),t=e[0],a=e[1];return Object(g.useEffect)((function(){var n=setInterval((function(){a(new Date)}),1e3);return function(){clearInterval(n)}})),t}().toLocaleString(void 0,{weekday:"long",day:"numeric",month:"long",hour:"2-digit",minute:"2-digit",second:"2-digit"});return Object(D.jsxs)(K,{children:["Dzisiaj jest ",n]})},R=y.c.div(O||(O=Object(k.a)(["\n    max-width: 1024px;\n    margin: 0 auto; \n"]))),U=function(n){var e=n.children;return Object(D.jsx)(R,{children:e})},X={color:{mineShaft:"rgba(50, 50, 50, 0.9)"}};var Y=function(){return Object(D.jsx)(y.a,{theme:X,children:Object(D.jsxs)(U,{children:[Object(D.jsx)(F,{headerContent:"suchy kantor"}),Object(D.jsx)(Q,{}),Object(D.jsx)(P,{children:Object(D.jsx)(H,{})}),Object(D.jsx)(L,{footerContent:"Copyright \xa9 Pawe\u0142 Suchy 2021"})]})})},Z=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,22)).then((function(e){var t=e.getCLS,a=e.getFID,c=e.getFCP,r=e.getLCP,i=e.getTTFB;t(n),a(n),c(n),r(n),i(n)}))};w.a.render(Object(D.jsx)(m.a.StrictMode,{children:Object(D.jsx)(Y,{})}),document.getElementById("root")),Z()}},[[21,1,2]]]);
//# sourceMappingURL=main.8aef906d.chunk.js.map