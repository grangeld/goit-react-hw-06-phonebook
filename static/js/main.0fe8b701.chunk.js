(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{11:function(e,t,n){e.exports={button:"contactList_button__2H7uf",list:"contactList_list__sVvVH"}},12:function(e,t,n){e.exports={heading:"app_heading__3m_lg",contact:"app_contact__3ZR-I"}},30:function(e,t,n){},32:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(6),o=n.n(r),i=n(2),s=n(3),u=n(16),l="contact/Add",b="contact/Delete",d="change/filter",j={items:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}]},m=Object(s.combineReducers)({items:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:JSON.parse(localStorage.getItem("numberObj"))||j.items,t=arguments.length>1?arguments[1]:void 0,n=t.type,c=t.payload;switch(n){case l:return c;case b:return e.filter((function(e){return e.id!==c}));default:return e}},filter:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0,n=t.type,c=t.payload;switch(n){case d:return c;default:return e}}}),h=Object(s.combineReducers)({contacts:m}),f=Object(s.createStore)(h,Object(u.composeWithDevTools)()),O=(n(30),n(17)),p=n(13),x=n(5),v=n.n(x),g=n(1),_=function(e){var t=e.onAddContact,n=Object(c.useState)(""),a=Object(p.a)(n,2),r=a[0],o=a[1],i=Object(c.useState)(""),s=Object(p.a)(i,2),u=s[0],l=s[1];return Object(g.jsxs)("form",{onSubmit:function(e){e.preventDefault();var n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz\xd7\u2102\u2103\u2104\u2105\u2106\u2107\u2108\u2109\u210a\u210b\u210c\u210d\u210e\u210f\u2110\u2111\u2112\u2113\u2114\u2115\u2116\u2117\u2118\u2119\u211a\u211b\u211c\u211d\u211e\u211f\u2120\u2121\u2122\u2123\u2124\u2125\u03a9\u2127\u2128\u2129K\xc5\u212c\u212d\u212e\u212f \u2134\u2153\u2154\u2155\u2156\u2157\u2158\u2159\u215a\u215b\u215c\u215d\u215e\u215f\u2135\u2136\u213b\u213d\u213e\u213f\u2140\u2141\u2142\u2143\u2144\u2145\u2146\u2147\u2148\u2149\u214a\u214b\u214d\u214e\u216d\u216e\u216f\u2200\u2201\u2202\u2203\u2204\u2205\u2206\u2207",c=+new Date+n.charAt(Math.floor(Math.random()*n.length));""!==r&&""!==u&&t({id:c,name:r,number:u})&&(o(""),l(""))},className:v.a.decor,children:[Object(g.jsxs)("label",{className:v.a.label,children:["Name",Object(g.jsx)("input",{type:"text",name:"name",onChange:function(e){return o(e.target.value)},value:r,required:!0})]}),Object(g.jsxs)("label",{className:v.a.label,children:["Number",Object(g.jsx)("input",{type:"text",name:"number",value:u,onChange:function(e){return l(e.target.value)},required:!0})]}),Object(g.jsx)("input",{type:"submit",value:"Add contact",className:v.a.buttonSubmit})]})},y=n(11),S=n.n(y),N=function(e){var t=e.phoneList,n=e.onDelete;return Object(g.jsx)("ul",{children:t.map((function(e){return Object(g.jsxs)("li",{className:S.a.list,children:[Object(g.jsxs)("div",{children:[e.name,":"]})," ",e.number,Object(g.jsx)("button",{className:S.a.button,onClick:function(){return n(e.id)},children:"Delete"})]},e.id)}))})},C=function(e){return e.contacts.filter},w=function(e){return e.contacts.items},D=function(){var e=Object(i.c)(C),t=Object(i.b)();return Object(g.jsxs)("label",{children:["Find contacts by name",Object(g.jsx)("br",{}),Object(g.jsx)("input",{type:"text",name:"name",value:e,onChange:function(e){var n;t((n=e.target.value,{type:d,payload:n}))}})]})},k=n(12),A=n.n(k);var L=function(){var e=Object(i.c)(C),t=Object(i.c)(w),n=Object(i.b)(),a=function(e){return n(function(e){return{type:l,payload:e}}(e))};Object(c.useEffect)((function(){localStorage.setItem("numberObj",JSON.stringify(t))}),[t]);var r=e.toLowerCase(),o=t.filter((function(e){return e.name.toLowerCase().includes(r)}));return Object(g.jsxs)("div",{children:[Object(g.jsx)("h1",{className:A.a.heading,children:"Phonebook"}),Object(g.jsx)(_,{onAddContact:function(e){return!t.filter((function(t){return t.name===e.name})).length>0?(a([].concat(Object(O.a)(t),[e])),!0):(alert("".concat(e.name," is already in contacts")),!1)}}),Object(g.jsxs)("div",{className:A.a.contact,children:[Object(g.jsx)("h2",{children:"Contacts"}),Object(g.jsx)(D,{}),Object(g.jsx)(N,{phoneList:o,onDelete:function(e){n({type:b,payload:e})}})]})]})};o.a.render(Object(g.jsx)(a.a.StrictMode,{children:Object(g.jsx)(i.a,{store:f,children:Object(g.jsx)(L,{})})}),document.getElementById("root"))},5:function(e,t,n){e.exports={decor:"contactForm_decor__1MXPS",label:"contactForm_label__2U_qQ",buttonSubmit:"contactForm_buttonSubmit__qKVZX"}}},[[32,1,2]]]);
//# sourceMappingURL=main.0fe8b701.chunk.js.map