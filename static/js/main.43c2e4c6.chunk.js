(this.webpackJsonpgenerator=this.webpackJsonpgenerator||[]).push([[0],{27:function(t,e,n){},28:function(t,e,n){},32:function(t,e,n){"use strict";n.r(e);var a,s=n(1),o=n.n(s),i=n(11),r=n.n(i),l=(n(27),n(28),n(12)),d=n(5),c=n(13),h=n(14),b=n(3),u=n(20),m=n(19),j=n(15),g=n(8),x=(n(29),n.p+"static/media/logoCanet.e1f22584.png"),p=n.p+"static/media/logoCanetBlanco.d84bbd24.png",O=n(0),v=function(t){Object(u.a)(n,t);var e=Object(m.a)(n);function n(t){var a;return Object(c.a)(this,n),(a=e.call(this,t)).state={cliente:"",item:"",unidades:"",valor:"",subtotal:"",totalUnidades:0,totalMateriales:0,totalManoDeObra:1e4,items:[]},a.pdfGenerateor=a.pdfGenerateor.bind(Object(b.a)(a)),a.agregarItem=a.agregarItem.bind(Object(b.a)(a)),a.controlarPosicionFooter=a.controlarPosicionFooter.bind(Object(b.a)(a)),a.deleteItem=a.deleteItem.bind(Object(b.a)(a)),a}return Object(h.a)(n,[{key:"componentDidMount",value:function(){for(var t=[],e=0;e<16;e++)t.push({nombre:"Item de madera laqueada n3"+e,unidades:100,valor:10,subtotal:1e3});this.setState({items:[].concat(t),totalMateriales:5e3,totalUnidades:500})}},{key:"deleteItem",value:function(t){for(var e,n=t,a=Object(d.a)(this.state.items),s=0,o=0;o<a.length;o++)a[o].nombre===n&&(console.log("Item found!"),console.log(a[o]),e=o,s=a[o].unidades);console.log("Deleting index : "+e),a.splice(e,1);var i=parseInt(this.state.totalUnidades)-parseInt(s);console.log("Nueva unidades : "+i),this.setState({items:Object(d.a)(a),totalUnidades:i})}},{key:"pdfGenerateor",value:function(){console.log(this.state);var t=new g.jsPDF("landscape"),e=70,n=new Date,a=[],s=0,o=new Image;o.src=p;var i=n.getDate()+"/"+(n.getMonth()+1)+"/"+n.getFullYear();t.text(20,20,"Mauro Canet realizaciones : 2234-261271"),t.text(20,30,"E-mail : mcrealizaciones@gmail.com"),t.text(20,40,"Dirigido a : "+this.state.cliente),t.text(160,20,i),t.text(160,30,"Mar del plata"),t.autoTable({html:"#my-table"}),t.addImage(o,"png",220,10,60,35),this.state.items.map((function(t){var n=[t.nombre,t.unidades,"$"+t.valor,"$"+t.subtotal];return a.push(n),s+=t.unidades*t.valor,e+=8,null})),t.autoTable({headerStyles:{fontStyle:"bold",textColor:20,fillColor:[255,248,83]},startY:50,head:[["Item","Cantidad","P.Unitario","Subtotal"]],body:[].concat(a)}),this.controlarPosicionFooter(t,s,e),t.save("Presupuesto "+this.state.cliente+".pdf")}},{key:"controlarPosicionFooter",value:function(t,e,n){this.state.items.length;var a="Presupuesto v\xe1lido por 7 d\xedas, para la realizaci\xf3n del trabajo es necesaria una se\xf1a del 50% del presupuesto.";this.state.items.length<=13&&(console.log("In condition 2"),t.text(15,n-8,"Total  en materiales : $"+e),t.text(15,n+2,"Mano de obra : $"+this.state.totalManoDeObra),t.text(15,n+12,"Total : $"+(parseInt(e)+parseInt(this.state.totalManoDeObra))),t.text(15,n+22,a)),this.state.items.length<=18&&this.state.items.length>13&&(console.log("In condition 2"),t.addPage(),t.setPage(2),t.text(15,10,"Total  en materiales : $"+e),t.text(15,20,"Mano de obra : $"+this.state.totalManoDeObra),t.text(15,30,"Total : $"+(parseInt(e)+parseInt(this.state.totalManoDeObra))),t.text(15,40,a)),this.state.items.length>18&&(t.setPage(2),t.text(15,170,"Total  en materiales : $"+e),t.text(15,180,"Mano de obra : $"+this.state.totalManoDeObra),t.text(15,190,"Total : $"+(parseInt(e)+parseInt(this.state.totalManoDeObra))),t.text(15,200,a))}},{key:"agregarItem",value:function(){try{if(this.state.item){var t={nombre:this.state.item,unidades:this.state.unidades,valor:this.state.valor,subtotal:this.state.unidades*this.state.valor},e=parseInt(this.state.totalUnidades)+parseInt(t.unidades),n=parseFloat(this.state.totalMateriales)+parseFloat(t.valor)*parseInt(t.unidades),a=Object(d.a)(this.state.items);a.push(t),this.setState({items:Object(d.a)(a),totalMateriales:n,totalUnidades:e,totalManoDeObra:this.state.totalManoDeObra,item:"",valor:"",unidades:"",subtotal:""})}}catch(s){console.log("Errror catched"),console.log(s)}}},{key:"gettotalMateriales",value:function(){var t=0;return this.state.items.map((function(e){return t+=e.unidades*e.valor,null})),t}},{key:"render",value:function(){var t=this,e=this.gettotalMateriales();return Object(O.jsxs)(f,{children:[Object(O.jsx)("img",{className:"img",src:x,alt:"logo"}),Object(O.jsxs)("div",{className:"container",children:[Object(O.jsx)("h1",{className:"label",children:"Cotizador"}),Object(O.jsx)("table",{className:"dataTable",children:Object(O.jsxs)("tbody",{children:[Object(O.jsxs)("tr",{children:[Object(O.jsx)("th",{children:"Cliente : "}),Object(O.jsx)("th",{children:Object(O.jsx)("input",{type:"text",value:this.state.cliente,onChange:function(e){t.setState({cliente:e.target.value})}})})]}),Object(O.jsxs)("tr",{children:[Object(O.jsx)("th",{children:"Item : "}),Object(O.jsx)("th",{children:Object(O.jsx)("input",{type:"text",value:this.state.item,onChange:function(e){t.setState({item:e.target.value})}})})]}),Object(O.jsxs)("tr",{children:[Object(O.jsx)("th",{children:"Unidades : "}),Object(O.jsx)("th",{children:Object(O.jsx)("input",{type:"number",value:this.state.unidades,onChange:function(e){t.setState({unidades:e.target.value})}})})]}),Object(O.jsxs)("tr",{children:[Object(O.jsx)("th",{children:"P.unitario : "}),Object(O.jsx)("th",{children:Object(O.jsx)("input",{type:"number",value:this.state.valor,onChange:function(e){t.setState({valor:e.target.value})}})})]}),Object(O.jsxs)("tr",{children:[Object(O.jsx)("th",{children:"Mano de obra : "}),Object(O.jsx)("th",{children:Object(O.jsx)("input",{type:"number",value:this.state.totalManoDeObra,onChange:function(e){t.setState({totalManoDeObra:e.target.value})}})})]})]})}),Object(O.jsx)("button",{className:"addButton",onClick:this.agregarItem,children:"Agregar"})]}),Object(O.jsxs)("table",{id:"customers",children:[Object(O.jsx)("thead",{children:Object(O.jsxs)("tr",{children:[Object(O.jsx)("th",{className:"itemName",children:"Item"}),Object(O.jsx)("th",{children:"Cantidad"}),Object(O.jsx)("th",{children:"P.unidad"}),Object(O.jsx)("th",{children:"Subtotal"})]})}),Object(O.jsxs)("tbody",{children:[this.state.items.map((function(e){return Object(O.jsxs)("tr",{className:"row",children:[Object(O.jsx)("td",{className:"itemName",children:Object(O.jsx)("button",{className:"deleteButton",type:"submit",onClick:function(){return t.deleteItem(e.nombre)},children:e.nombre})}),Object(O.jsx)("td",{children:e.unidades}),Object(O.jsxs)("td",{children:["$",e.valor]}),Object(O.jsxs)("td",{children:["$",e.subtotal]})]},e.nombre)})),Object(O.jsxs)("tr",{children:[Object(O.jsx)("td",{className:"totales",children:"Totales : "}),Object(O.jsx)("td",{className:"totales",children:this.state.totalUnidades}),Object(O.jsx)("td",{className:"totales"}),Object(O.jsxs)("td",{className:"precioTotal",children:["$",e]})]})]})]}),Object(O.jsx)("button",{className:"printPdf",onClick:this.pdfGenerateor,children:"Descargar PDF"})]})}}]),n}(o.a.Component),f=j.a.div(a||(a=Object(l.a)(["\n    text-align: center;\n    \n   \n    min-height: 40rem;\n    min-width: 100%;\n    max-width: 10rem;\n    border-radius: 3rem;\n.row{\n    font-weight:bold;\n}\n    .inputName{\n        text-align: center;\n        font-size: calc(8px + 2vmin);\n        background-color: #7398b6;\n        border: 0px solid #7398b6;\n    }\n   button{\n    background-color: rgb(255,249,80);\n    \n   }\n   .deleteButton{\n       width: 100%;\n       height:100%;\n       background-color: #7398b6;\n       border-color: #7398b6;\n       padding: 0;\n       border: none;\n       background: none;\n       font-weight:bold;\n   }\n    .img{\n        width: 100%;\n        height: 18rem;\n        position:relative;\n        \n    }\n    .totales{\n        font-weight: bold;\n    }\n    .precioTotal{\n        color: green;\n        font-weight: bold;\n    }\n   \n    .label{\n        color:white;        \n    }\n    .input{\n        border-radius:2rem;\n        \n    }\n    table{\n        width: 100%;\n    }\n   \n      tbody{\n          width:100%;\n       \n      }\n      \n     \n      .itemName{\n          overflow: hidden;\n          color: red;\n          border: 1px solid #dddddd;\n          text-align: center;\n          padding: 8px;\n          max-width: 10rem;\n          font-weight:bold;\n          \n         \n      }\n      .addButton{\n          margin-top: 2rem;\n          margin-bottom: 2rem;\n          border: 2px solid black;\n          border-radius: 2rem;\n          height:3rem;\n          width: 50%;\n      }\n\n      .printPdf{\n        margin-top: 2rem;\n        margin-bottom: 2rem;\n        border: 2px solid black;\n        border-radius: 2rem;\n        height:3rem;\n        width: 50%;\n      }\n\n      #customers {\n        font-family: Arial, Helvetica, sans-serif;\n        border-collapse: collapse;\n        width: 100%;\n      }\n      \n      #customers td, #customers th {\n        border: 1px solid #ddd;\n        padding: 8px;\n        \n      }\n      \n    \n      \n      #customers tr:hover {background-color: #ddd;}\n      \n      #customers th {\n        padding-top: 12px;\n        padding-bottom: 12px;\n        text-align: center;\n        background-color: black;\n        color: white;\n      }\n\n      @media (min-width: 48em) {\n      \n        .img{\n            width: 40%;          \n            position:relative;\n            \n        }\n        .dataTable{\n            max-width:25rem;\n         \n            margin: 0 auto;\n        }\n     \n    "])));var I=function(){return Object(O.jsx)("div",{className:"App",children:Object(O.jsx)("header",{className:"App-header",children:Object(O.jsx)(v,{})})})},w=function(t){t&&t instanceof Function&&n.e(6).then(n.bind(null,405)).then((function(e){var n=e.getCLS,a=e.getFID,s=e.getFCP,o=e.getLCP,i=e.getTTFB;n(t),a(t),s(t),o(t),i(t)}))};r.a.render(Object(O.jsx)(o.a.StrictMode,{children:Object(O.jsx)(I,{})}),document.getElementById("root")),w()}},[[32,1,3]]]);
//# sourceMappingURL=main.43c2e4c6.chunk.js.map