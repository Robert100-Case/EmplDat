(this.webpackJsonpcontainerapp=this.webpackJsonpcontainerapp||[]).push([[0],{55:function(t,e,s){},57:function(t,e,s){},58:function(t,e,s){},59:function(t,e,s){},60:function(t,e,s){},66:function(t,e,s){},67:function(t,e,s){},68:function(t,e,s){},70:function(t,e,s){"use strict";s.r(e);var a=s(1),r=s(29),n=s.n(r),o=s(8),i=s(2),c=s(19),l=s(11),u=s(12),d=s(14),h=s(13),m=s(30),p=s.n(m),j={getRandomUser:function(){return p.a.get("https://randomuser.me/api/?nt=gr&results=5")}},f=(s(55),s(0));s(57);var b=s(32);var g=function(t){return Object(f.jsx)("div",{role:"alert",className:"alert alert-".concat(t.type," fade in"),style:Object(b.a)({width:"80%",margin:"0 auto",marginTop:18},t.style),children:t.children})},O=function(t){Object(d.a)(s,t);var e=Object(h.a)(s);function s(t){var a;return Object(l.a)(this,s),(a=e.call(this,t)).loadNextUser=function(){j.getRandomUser().then((function(t){var e=[{images:t.data.results[0].picture.medium,first:t.data.results[0].name.first,last:t.data.results[0].name.last,genders:t.data.results[0].gender},{images:t.data.results[1].picture.medium,first:t.data.results[1].name.first,last:t.data.results[1].name.last,genders:t.data.results[1].gender},{images:t.data.results[2].picture.medium,first:t.data.results[2].name.first,last:t.data.results[2].name.last,genders:t.data.results[2].gender},{images:t.data.results[3].picture.medium,first:t.data.results[3].name.first,last:t.data.results[3].name.last,genders:t.data.results[3].gender},{images:t.data.results[4].picture.medium,first:t.data.results[4].name.first,last:t.data.results[4].name.last,genders:t.data.results[4].gender}];a.setState({photos:[].concat(Object(c.a)(a.state.photos),e)})}))},a.sayHello=function(){alert("You clicked me!"),a.state.photos.images.sort((function(t,e){return t.this.state.photos.last>e.this.state.photos.last?1:-1}))},a.filterFemalePhotos=function(){alert("filter function entered");for(var t=[],e=0;e<5;e++)t[e]=a.state.photos[e].genders;console.log(t);var s=[];for(e=0;e<5;e++)s[e]=a.state.photos[e].images;var r=[];for(e=0;e<5;e++)"female"==t[e]&&(r.push(s[e]),console.log(r));a.setState({photos:[].concat(Object(c.a)(a.state.photos),r)}),a.state.photos.sort((function(t,e){this.state.photos[t].last=t.this.state.photos.last.toUpperCase(),this.state.photos[e].last=e.this.state.photos.last.toUpperCase();var s=0;return this.state.photos[t].last>this.state.photos[e].last?s=1:this.state.photos[t].last<this.state.photos[e].last&&(s=-1),s}))},a.state={photos:[]},a}return Object(u.a)(s,[{key:"componentDidMount",value:function(){this.loadNextUser()}},{key:"render",value:function(){return Object(f.jsxs)("div",{children:[Object(f.jsx)("button",{onClick:this.sayHello,children:"Sort"}),";",Object(f.jsx)("button",{onClick:this.filterFemalePhotos,children:"Filter by Female"}),";",this.state.photos.map((function(t,e){return Object(f.jsxs)("div",{className:"card",children:[Object(f.jsx)("img",{src:t.images,alt:"pics"}),Object(f.jsxs)("h3",{children:[" ",t.first," ",t.last,"  "]})]},e)}))]})}}]),s}(a.Component);var x=function(t){return Object(f.jsx)("div",{className:"container",style:t.style,children:t.children})};s(58);var v=function(t){return Object(f.jsx)("form",{className:"search",children:Object(f.jsxs)("div",{className:"form-group",children:[Object(f.jsx)("label",{htmlFor:"breed",children:"Breed Name:"}),Object(f.jsx)("input",{value:t.search,onChange:t.handleInputChange,name:"breed",list:"breeds",type:"text",className:"form-control",placeholder:"Type in a dog breed to begin",id:"breed"}),Object(f.jsx)("datalist",{id:"breeds",children:t.breeds.map((function(t){return Object(f.jsx)("option",{value:t},t)}))}),Object(f.jsx)("button",{type:"submit",onClick:t.handleFormSubmit,className:"btn btn-success",children:"Search"})]})})};s(59);var N=function(t){return Object(f.jsx)("ul",{className:"list-group search-results",children:t.results.map((function(t){return Object(f.jsx)("li",{className:"list-group-item",children:Object(f.jsx)("img",{alt:"Dog",src:t,className:"img-fluid"})},t)}))})};a.Component,s(60);s(66);var y=function(){return Object(f.jsx)("footer",{className:"footer",children:Object(f.jsx)("span",{children:"Pupster 2017"})})};s(67);var C=function(t){return Object(f.jsx)("main",{className:"wrapper",children:t.children})};var k=function(){return Object(f.jsx)(o.a,{children:Object(f.jsxs)("div",{children:[Object(f.jsx)(C,{children:Object(f.jsx)(i.a,{exact:!0,path:"/",component:O})}),Object(f.jsx)(y,{})]})})};s(68),s(69);n.a.render(Object(f.jsx)(k,{}),document.getElementById("root"))}},[[70,1,2]]]);
//# sourceMappingURL=main.5a3fbea7.chunk.js.map