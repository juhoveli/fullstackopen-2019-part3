(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,n,t){e.exports=t(39)},38:function(e,n,t){},39:function(e,n,t){"use strict";t.r(n);var a=t(0),u=t.n(a),l=t(11),c=t.n(l),r=t(12),i=t(2),o=function(e){return u.a.createElement("div",null,"rajaa n\xe4ytett\xe4vi\xe4 ",u.a.createElement("input",{value:e.newFilter,onChange:e.handleFilterChange}))},s=function(e){return u.a.createElement("form",{onSubmit:e.addPerson},u.a.createElement("div",null,"nimi: ",u.a.createElement("input",{value:e.newName,onChange:e.handleNameChange})),u.a.createElement("div",null,"numero: ",u.a.createElement("input",{value:e.newNumber,onChange:e.handleNumberChange})),u.a.createElement("div",null,u.a.createElement("button",{type:"submit"},"lis\xe4\xe4")))},m=function(e){var n=e.personsToShow,t=e.removePerson;return u.a.createElement("table",null,u.a.createElement("tbody",null,n.map(function(e){return u.a.createElement("tr",{key:e.name},u.a.createElement("td",null,e.name),u.a.createElement("td",null,e.number),u.a.createElement("td",null,u.a.createElement("button",{onClick:function(){return t(e.id)}},"poista")))})))},f=t(3),d=t.n(f),p="https://glacial-fjord-89537.herokuapp.com/api/persons",h=function(){return d.a.get(p)},b=function(e){return d.a.post(p,e)},g=function(e){return d.a.delete("".concat(p,"/").concat(e))},E=function(e,n){return d.a.put("".concat(p,"/").concat(e),n)},v=(t(38),function(e){var n=e.message,t=e.type;return null===n?null:u.a.createElement("div",{className:t},n)}),y=function(){var e=Object(a.useState)([]),n=Object(i.a)(e,2),t=n[0],l=n[1],c=Object(a.useState)(""),f=Object(i.a)(c,2),d=f[0],p=f[1],y=Object(a.useState)(""),j=Object(i.a)(y,2),w=j[0],O=j[1],k=Object(a.useState)(""),C=Object(i.a)(k,2),N=C[0],S=C[1],T=Object(a.useState)([]),P=Object(i.a)(T,2),H=P[0],F=P[1],J=Object(a.useState)({message:null,type:null}),U=Object(i.a)(J,2),x=U[0],B=U[1];Object(a.useEffect)(function(){h().then(function(e){l(e.data),F(e.data)})},[]);return u.a.createElement("div",null,u.a.createElement(v,{message:x.message,type:x.type}),u.a.createElement("h2",null,"Puhelinluettelo"),u.a.createElement(o,{newFilter:N,handleFilterChange:function(e){S(e.target.value),F(t.filter(function(e){return e.name.toUpperCase().includes(N.toUpperCase())}))}}),u.a.createElement("h2",null,"lis\xe4\xe4 uusi"),u.a.createElement(s,{addPerson:function(e){e.preventDefault();var n={name:d,number:w};if(t.find(function(e){return e.name===d})){if(window.confirm("".concat(n.name," on jo luettelossa, korvataanko vanha numero uudella?"))){var a=t.find(function(e){return e.name===d}),u=Object(r.a)({},a,{number:w});E(a.id,u).then(function(e){l(t.map(function(n){return n.id!==a.id?n:e.data})),F(t.map(function(n){return n.id!==a.id?n:e.data})),p(""),O(""),B({message:"Henkil\xf6n '".concat(n.name,"' numero vaihdettu onnistuneesti"),type:"success"}),setTimeout(function(){B({message:null,type:null})},5e3)}).catch(function(e){B({message:"Henkil\xf6 '".concat(n.name,"' on jo poistettu"),type:"failure"}),setTimeout(function(){B({message:null,type:null})},5e3),l(t.filter(function(e){return e.id!==n.id}))})}}else b(n).then(function(e){l(t.concat(e.data)),F(t.concat(e.data)),p(""),O(""),B({message:"Henkil\xf6 '".concat(n.name,"' lis\xe4tty onnistuneesti"),type:"success"}),setTimeout(function(){B({message:null,type:null})},5e3)})},newName:d,newNumber:w,handleNameChange:function(e){p(e.target.value)},handleNumberChange:function(e){O(e.target.value)}}),u.a.createElement("h2",null,"Numerot"),u.a.createElement(m,{personsToShow:H,removePerson:function(e){var n=t.find(function(n){return n.id===e});window.confirm("Poistetaanko ".concat(n.name))&&g(n.id).then(function(a){l(t.filter(function(n){return n.id!==e})),F(t.filter(function(n){return n.id!==e})),B({message:"Henkil\xf6 '".concat(n.name,"' poistettu onnistuneesti"),type:"success"}),setTimeout(function(){B({message:null,type:null})},5e3)}).catch(function(a){B({message:"Henkil\xf6 '".concat(n.name,"' on jo poistettu"),type:"failure"}),setTimeout(function(){B({message:null,type:null})},5e3),l(t.filter(function(n){return n.id!==e}))})}}))};c.a.render(u.a.createElement(y,null),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.81a94e27.chunk.js.map