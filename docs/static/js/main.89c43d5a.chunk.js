(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,a,t){},16:function(e,a,t){},17:function(e,a,t){},18:function(e,a,t){"use strict";t.r(a);var n=t(0),o=t.n(n),r=t(8),l=t.n(r),i=(t(15),t(2)),c=t(3),s=t(5),m=t(4),u=t(6),p=t(1),h=(t(16),t(17),function(e){function a(){return Object(i.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this,a=this.props,t=a.fetchingState,n=a.pokemonsData;return!0===t?o.a.createElement("p",null,"Loading"):0==n.length?o.a.createElement("h2",null,"No hay resultados"):o.a.createElement("section",{className:"pokemonList__section"},o.a.createElement("ul",{className:"pokemonList__list"},n.map(function(a,t){return o.a.createElement("li",{className:"pokemonList__card",key:t},o.a.createElement("h3",{className:"pokemonList__name"},a.name),o.a.createElement("img",{src:a.sprites.front_default,alt:a.name,className:"pokemonList__img"}),o.a.createElement("div",{className:"pokemonList__data"},o.a.createElement("p",{className:"pokemonList__data--number"},"# ",a.id),o.a.createElement("ul",{className:"pokemonList__data--types"},a.types.map(function(a,t){switch(a.type.name){case"poison":e.icon=o.a.createElement("span",{role:"img","aria-label":"skull",className:"data__types--icon"},"\u2620\ufe0f");break;case"fire":e.icon=o.a.createElement("span",{role:"img","aria-label":"fire"},"\ud83d\udd25");break;case"grass":e.icon=o.a.createElement("span",{role:"img","aria-label":"plant"},"\ud83c\udf3f");break;case"flying":e.icon=o.a.createElement("span",{role:"img","aria-label":"fly"},"\ud83e\udd85");break;case"water":e.icon=o.a.createElement("span",{role:"img","aria-label":"water"},"\ud83c\udf0a");break;case"bug":e.icon=o.a.createElement("span",{role:"img","aria-label":"bug"},"\ud83d\udc1b");break;case"normal":e.icon=o.a.createElement("span",{role:"img","aria-label":"normal"},"\ud83d\udc00");break;case"electric":e.icon=o.a.createElement("span",{role:"img","aria-label":"electric"},"\u26a1");break;default:e.icon=a.type.name}return o.a.createElement("li",{key:t},e.icon)}))))})))}}]),a}(o.a.Component)),k=function(e){function a(e){var t;return Object(i.a)(this,a),(t=Object(s.a)(this,Object(m.a)(a).call(this,e))).state={pokemonsData:localStorage.getItem("Pokemon"),isFetching:!0,userQuery:"",filterPokemons:""},t.handleSearchInput=t.handleSearchInput.bind(Object(p.a)(Object(p.a)(t))),t}return Object(u.a)(a,e),Object(c.a)(a,[{key:"componentDidMount",value:function(){this.pokemonFetch()}},{key:"pokemonFetch",value:function(){var e=this;fetch("https://pokeapi.co/api/v2/pokemon?limit=25").then(function(e){return e.json()}).then(function(a){var t=a.results.map(function(e){return fetch(e.url).then(function(e){return e.json()})});Promise.all(t).then(function(a){console.log("all pokemons",a),e.setState({pokemonsData:a,isFetching:!1}),e.saveinLocalStorage()})})}},{key:"saveinLocalStorage",value:function(){localStorage.setItem("Pokemon",JSON.stringify(this.state.pokemonsData))}},{key:"handleSearchInput",value:function(e){var a=e.currentTarget.value;this.setState({userQuery:a})}},{key:"filteredPokemons",value:function(){if(!1===this.state.isFetching){var e=this.state,a=e.pokemonsData,t=e.userQuery,n=a.filter(function(e){return!!e.name.toLowerCase().includes(t.toLowerCase())});return n}return o.a.createElement("p",null,"Loading...")}},{key:"render",value:function(){var e=this.filteredPokemons();return console.log(e),o.a.createElement("div",{className:"App"},o.a.createElement("header",null,o.a.createElement("h1",null,"POKEDEX")),o.a.createElement("main",null,o.a.createElement("div",null,o.a.createElement("form",null,o.a.createElement("input",{type:"text",onChange:this.handleSearchInput,value:this.state.userQuery}))),o.a.createElement(h,{pokemonsData:e,fetchingState:this.state.isFetching})))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,a,t){e.exports=t(18)}},[[9,1,2]]]);
//# sourceMappingURL=main.89c43d5a.chunk.js.map