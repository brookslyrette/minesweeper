(this.webpackJsonpminesweeper=this.webpackJsonpminesweeper||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var i=n(0),a=n(2),r=n.n(a),c=n(7),o=n.n(c),s=(n(13),n(6)),u=n(3),d=n(1),l=function(e){for(var t=[],n=0;n<e;n++)for(var i=0;i<e;i++)t.push({id:"".concat(n,":").concat(i),x:n,y:i,isOpen:!1,isBomb:!1,isFlagged:!1,isPressed:!1,adjacentBombCount:0});return t},f=function e(t,n){if(console.log("opening ".concat(t.x,":").concat(t.y," isBomb: ").concat(t.isBomb)),t.isOpen=!0,0===t.adjacentBombCount&&!t.isBomb){var i,a=n.board.filter((function(e){return b(e,t)&&!e.isBomb&&!e.isOpen&&!e.isFlagged})),r=Object(u.a)(a);try{for(r.s();!(i=r.n()).done;){e(i.value,n)}}catch(c){r.e(c)}finally{r.f()}}},b=function(e,t){return e.x===t.x&&(e.y===t.y-1||e.y===t.y+1)||(e.y===t.y&&(e.x===t.x-1||e.x===t.x+1)||(e.x===t.x-1&&(e.y===t.y-1||e.y===t.y+1)||e.x===t.x+1&&(e.y===t.y-1||e.y===t.y+1)))},g=function(e,t,n){var i=n.board.find((function(n){return n.id==="".concat(e,":").concat(t)}));return n.board.filter((function(e){return b(e,i)})).filter((function(e){return e.isBomb})).length},m=function(e){for(var t=0,n=0;n<e.board.length;n++){var i=e.board[n];if(i.isBomb&&i.isOpen)return"lost";i.isOpen||t++}return t===e.mineCount?"won":e.gameState},j="tile-click",p="tile-group-click",O="flag-tile",x="unflag-tile",y="tile-press",v="tile-group-press",h="release-pressed",S=function(e,t,n){var i=n.board.find((function(n){return n.id==="".concat(e,":").concat(t)}));return"initial"===n.gameState?(!function(e,t,n){if("initial"===n.gameState){for(var i=0;i<n.mineCount;){for(var a=function(a){for(var r=function(r){if(a===e&&r===t)return"continue";var c=Math.random(),o=n.board.find((function(e){return e.id==="".concat(a,":").concat(r)}));c>.992&&i<n.mineCount&&!o.isBomb&&(o.isBomb=!0,console.log("planted bomb at ".concat(o.x,":").concat(o.y)),i++)},c=0;c<n.boardSize;c++)r(c)},r=0;r<n.boardSize;r++)a(r);console.debug("finished cycle; planted ".concat(i," mines; total mines left to plant: ").concat(n.mineCount-i))}var c,o=Object(u.a)(n.board);try{for(o.s();!(c=o.n()).done;){var s=c.value,d=g(s.x,s.y,n);s.adjacentBombCount=d}}catch(l){o.e(l)}finally{o.f()}n.gameState="in-progress"}}(e,t,n),f(i,n)):"in-progress"===n.gameState&&f(i,n),Object(d.a)({},n)},C=function(e){var t=e.item,n=e.dispatch,a=e.isGameOver,r=function(){n({type:h})};return Object(i.jsx)("div",{className:"tile ".concat(a?"gameOver":""," mine-count").concat(t.isBomb?"":t.adjacentBombCount," ").concat(t.isPressed?"pressed":""," ").concat(t.isOpen?"":"hiddenTile"," ").concat(t.isFlagged?"flaggedTile":""),onClick:function(e){if(e.shiftKey)n({type:p,x:t.x,y:t.y});else{if(t.isOpen||t.isFlagged)return;n({type:j,x:t.x,y:t.y})}},onContextMenu:function(e){e.preventDefault(),t.isOpen||(t.isFlagged?n({type:x,x:t.x,y:t.y}):n({type:O,x:t.x,y:t.y}))},onMouseDown:function(e){if(e.shiftKey)n({type:v,x:t.x,y:t.y});else{if(t.isOpen||t.isFlagged)return;n({type:y,x:t.x,y:t.y})}},onMouseUp:r,onMouseOut:r,children:function(e){return e.isBomb&&e.isOpen?"\ud83d\udca5":a&&e.isBomb&&!e.isOpen&&!e.isFlagged?"\ud83d\udca3":e.isFlagged?"\u26f3":e.isOpen&&e.adjacentBombCount>0?e.adjacentBombCount:void 0}(t)})},B=function(e){for(var t=e.game,n=e.dispatch,a=[],r="won"===t.gameState||"lost"===t.gameState,c=function(e){var c=t.board.filter((function(t){return t.x===e}));a.push(Object(i.jsx)("div",{className:"row",children:c.map((function(e){return Object(i.jsx)(C,{item:e,isGameOver:r,dispatch:n},e.id)}))},e))},o=0;o<t.boardSize;o++)c(o);return Object(i.jsx)(i.Fragment,{children:a})},F={gameState:"initial",boardSize:10,mineCount:9,board:l(10)},w=function(e,t){switch(t.type){case"reset":return Object(d.a)(Object(d.a)({},e),{},{gameState:"initial",boardSize:t.config.boardSize,mineCount:t.config.mineCount,board:l(t.config.boardSize)});case j:var n=S(t.x,t.y,e);return Object(d.a)(Object(d.a)({},n),{},{gameState:m(n)});case p:var i=function(e,t,n){if("in-progress"===n.gameState){var i=n.board.find((function(n){return n.id==="".concat(e,":").concat(t)})),a=n.board.filter((function(e){return b(e,i)&&!e.isOpen&&!e.isFlagged}));f(i,n),a.forEach((function(e){return f(e,n)}))}return Object(d.a)({},n)}(t.x,t.y,e);return Object(d.a)(Object(d.a)({},i),{},{gameState:m(i)});case O:return function(e,t,n){return"in-progress"===n.gameState&&(n.board.find((function(n){return n.id==="".concat(e,":").concat(t)})).isFlagged=!0),Object(d.a)({},n)}(t.x,t.y,e);case x:return function(e,t,n){return"in-progress"===n.gameState&&(n.board.find((function(n){return n.id==="".concat(e,":").concat(t)})).isFlagged=!1),Object(d.a)({},n)}(t.x,t.y,e);case y:return function(e,t,n){return"in-progress"!==n.gameState&&"initial"!==n.gameState||(n.board.find((function(n){return n.id==="".concat(e,":").concat(t)})).isPressed=!0),Object(d.a)({},n)}(t.x,t.y,e);case v:return function(e,t,n){if("in-progress"===n.gameState){var i=n.board.find((function(n){return n.id==="".concat(e,":").concat(t)})),a=n.board.filter((function(e){return b(e,i)&&!e.isOpen&&!e.isFlagged}));i.isPressed=!0;var r,c=Object(u.a)(a);try{for(c.s();!(r=c.n()).done;)r.value.isPressed=!0}catch(o){c.e(o)}finally{c.f()}}return Object(d.a)({},n)}(t.x,t.y,e);case h:return function(e){var t,n=Object(u.a)(e.board);try{for(n.s();!(t=n.n()).done;)t.value.isPressed=!1}catch(i){n.e(i)}finally{n.f()}return Object(d.a)({},e)}(e);default:throw new Error("Unexpected action")}};n(14);var z=function(){var e=Object(a.useReducer)(w,F),t=Object(s.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)({boardSize:10,mineCount:9}),o=Object(s.a)(c,2),u=o[0],d=o[1],l=n.board.filter((function(e){return e.isFlagged}));return Object(i.jsxs)("div",{className:"minesweeper",children:[Object(i.jsxs)("div",{className:"gameState",children:["State: ",n.gameState,Object(i.jsxs)("div",{children:[Object(i.jsx)("span",{children:"Difficulty"}),Object(i.jsxs)("select",{onChange:function(e){var t=9,i=10;"expert"===e.target.value?(t=99,i=25):"intermediate"===e.target.value&&(t=40,i=16),"initial"===n.gameState&&r({type:"reset",config:{boardSize:i,mineCount:t}}),d({boardSize:i,mineCount:t})},disabled:"in-progress"===n.gameState,children:[Object(i.jsx)("option",{value:"beginner",children:"Beginner"}),Object(i.jsx)("option",{value:"intermediate",children:"Intermediate"}),Object(i.jsx)("option",{value:"expert",children:"Expert"})]}),Object(i.jsx)("button",{onClick:function(){r({type:"reset",config:u})},children:"Reset"})]}),Object(i.jsxs)("span",{children:["Bombs left: ",n.mineCount-l.length]})]}),Object(i.jsx)(B,{game:n,dispatch:r}),Object(i.jsxs)("div",{className:"controls",children:[Object(i.jsx)("b",{children:"Controls"})," ",Object(i.jsx)("br",{}),"Click: Open tile ",Object(i.jsx)("br",{}),"Shift + click: Open tile group ",Object(i.jsx)("br",{}),"Right click: Flag/Unflag tile"]})]})},k=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,i=t.getFID,a=t.getFCP,r=t.getLCP,c=t.getTTFB;n(e),i(e),a(e),r(e),c(e)}))};o.a.render(Object(i.jsx)(r.a.StrictMode,{children:Object(i.jsx)(z,{})}),document.getElementById("root")),k()}},[[15,1,2]]]);
//# sourceMappingURL=main.5a29d0d4.chunk.js.map