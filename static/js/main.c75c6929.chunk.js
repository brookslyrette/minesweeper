(this.webpackJsonpminesweeper=this.webpackJsonpminesweeper||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var i=n(0),a=n(2),r=n.n(a),o=n(8),c=n.n(o),s=(n(14),n(4)),u=n(1),d=n(7),b=n(3),l=function(e,t){for(var n=[],i=0;i<t;i++)for(var a=0;a<e;a++)n.push({id:"".concat(i,":").concat(a),x:i,y:a,isOpen:!1,isBomb:!1,isFlagged:!1,isPressed:!1,adjacentBombCount:0});return n},g=function e(t,n){if(console.log("opening ".concat(t.x,":").concat(t.y," isBomb: ").concat(t.isBomb)),t.isOpen=!0,0===t.adjacentBombCount&&!t.isBomb){var i,a=n.board.filter((function(e){return f(e,t)&&!e.isBomb&&!e.isOpen&&!e.isFlagged})),r=Object(b.a)(a);try{for(r.s();!(i=r.n()).done;){e(i.value,n)}}catch(o){r.e(o)}finally{r.f()}}},f=function(e,t){return e.x===t.x&&(e.y===t.y-1||e.y===t.y+1)||(e.y===t.y&&(e.x===t.x-1||e.x===t.x+1)||(e.x===t.x-1&&(e.y===t.y-1||e.y===t.y+1)||e.x===t.x+1&&(e.y===t.y-1||e.y===t.y+1)))},j=function(e,t,n){var i=n.board.find((function(n){return n.id==="".concat(e,":").concat(t)}));return n.board.filter((function(e){return f(e,i)})).filter((function(e){return e.isBomb})).length},m=function(e){for(var t=0,n=0;n<e.board.length;n++){var i=e.board[n];if(i.isBomb&&i.isOpen)return"lost";i.isOpen||t++}return t===e.mineCount?"won":e.gameState},p="tile-click",h="tile-group-click",O="flag-tile",x="unflag-tile",y="tile-press",v="tile-group-press",C="release-pressed",S=function(e,t,n){var i=n.board.find((function(n){return n.id==="".concat(e,":").concat(t)}));return"initial"===n.gameState?(!function(e,t,n){if("initial"===n.gameState){for(var i=0;i<n.mineCount;){for(var a=function(a){for(var r=function(r){if(a===e&&r===t)return"continue";var o=Math.random(),c=n.board.find((function(e){return e.id==="".concat(a,":").concat(r)}));o>.992&&i<n.mineCount&&!c.isBomb&&(c.isBomb=!0,console.log("planted bomb at ".concat(c.x,":").concat(c.y)),i++)},o=0;o<n.boardWidth;o++)r(o)},r=0;r<n.boardHeight;r++)a(r);console.debug("finished cycle; planted ".concat(i," mines; total mines left to plant: ").concat(n.mineCount-i))}var o,c=Object(b.a)(n.board);try{for(c.s();!(o=c.n()).done;){var s=o.value,u=j(s.x,s.y,n);s.adjacentBombCount=u}}catch(d){c.e(d)}finally{c.f()}n.gameState="in-progress"}}(e,t,n),g(i,n)):"in-progress"===n.gameState&&g(i,n),Object(u.a)({},n)},B=function(e){var t=e.item,n=e.dispatch,a=e.isGameOver,r=function(){n({type:C})};return Object(i.jsx)("div",{className:"tile ".concat(a?"gameOver":""," mine-count").concat(t.isBomb?"":t.adjacentBombCount," ").concat(t.isPressed?"pressed":""," ").concat(t.isOpen?"":"hiddenTile"," ").concat(t.isFlagged?"flaggedTile":""),onClick:function(e){if(e.shiftKey)n({type:h,x:t.x,y:t.y});else{if(t.isOpen||t.isFlagged)return;n({type:p,x:t.x,y:t.y})}},onContextMenu:function(e){e.preventDefault(),t.isOpen||(t.isFlagged?n({type:x,x:t.x,y:t.y}):n({type:O,x:t.x,y:t.y}))},onMouseDown:function(e){if(0===e.button)if(e.shiftKey)n({type:v,x:t.x,y:t.y});else{if(t.isOpen||t.isFlagged)return;n({type:y,x:t.x,y:t.y})}},onMouseUp:r,onMouseOut:r,children:function(e){return e.isBomb&&e.isOpen?"\ud83d\udca5":a&&e.isBomb&&!e.isOpen&&!e.isFlagged?"\ud83d\udca3":e.isFlagged?"\u26f3":e.isOpen&&e.adjacentBombCount>0?e.adjacentBombCount:void 0}(t)})},F=function(e){for(var t=e.game,n=e.dispatch,a=[],r="won"===t.gameState||"lost"===t.gameState,o=function(e){var o=t.board.filter((function(t){return t.x===e}));a.push(Object(i.jsx)("div",{className:"row",children:o.map((function(e){return Object(i.jsx)(B,{item:e,isGameOver:r,dispatch:n},e.id)}))},e))},c=0;c<t.boardHeight;c++)o(c);return Object(i.jsx)(i.Fragment,{children:a})},w=10,H={gameState:"initial",boardWidth:w,boardHeight:w,mineCount:9,board:l(w,w)},W=function(e,t){switch(t.type){case"reset":return Object(u.a)(Object(u.a)({},e),{},{gameState:"initial",boardWidth:t.config.boardWidth,boardHeight:t.config.boardHeight,mineCount:t.config.mineCount,board:l(t.config.boardWidth,t.config.boardHeight)});case p:var n=S(t.x,t.y,e);return Object(u.a)(Object(u.a)({},n),{},{gameState:m(n)});case h:var i=function(e,t,n){if("in-progress"===n.gameState){var i=n.board.find((function(n){return n.id==="".concat(e,":").concat(t)})),a=n.board.filter((function(e){return f(e,i)&&!e.isOpen&&!e.isFlagged}));g(i,n),a.forEach((function(e){return g(e,n)}))}return Object(u.a)({},n)}(t.x,t.y,e);return Object(u.a)(Object(u.a)({},i),{},{gameState:m(i)});case O:return function(e,t,n){var i=n.board.filter((function(e){return e.isFlagged}));return"in-progress"===n.gameState&&i.length<n.mineCount&&(n.board.find((function(n){return n.id==="".concat(e,":").concat(t)})).isFlagged=!0),Object(u.a)({},n)}(t.x,t.y,e);case x:return function(e,t,n){return"in-progress"===n.gameState&&(n.board.find((function(n){return n.id==="".concat(e,":").concat(t)})).isFlagged=!1),Object(u.a)({},n)}(t.x,t.y,e);case y:return function(e,t,n){return"in-progress"!==n.gameState&&"initial"!==n.gameState||(n.board.find((function(n){return n.id==="".concat(e,":").concat(t)})).isPressed=!0),Object(u.a)({},n)}(t.x,t.y,e);case v:return function(e,t,n){if("in-progress"===n.gameState){var i=n.board.find((function(n){return n.id==="".concat(e,":").concat(t)})),a=n.board.filter((function(e){return f(e,i)&&!e.isOpen&&!e.isFlagged}));i.isPressed=!0;var r,o=Object(b.a)(a);try{for(o.s();!(r=o.n()).done;)r.value.isPressed=!0}catch(c){o.e(c)}finally{o.f()}}return Object(u.a)({},n)}(t.x,t.y,e);case C:return function(e){var t,n=Object(b.a)(e.board);try{for(n.s();!(t=n.n()).done;)t.value.isPressed=!1}catch(i){n.e(i)}finally{n.f()}return Object(u.a)({},e)}(e);default:throw new Error("Unexpected action")}};n(15);var k=function(){var e,t=Object(a.useReducer)(W,H),n=Object(d.a)(t,2),r=n[0],o=n[1],c=Object(a.useState)({boardHeight:w,boardWidth:w,mineCount:9}),b=Object(d.a)(c,2),l=b[0],g=b[1],f=r.board.filter((function(e){return e.isFlagged})),j=r.board.filter((function(e){return e.isPressed})),m=function(e,t){e<1||"mineCount"===t&&e>l.boardHeight*l.boardWidth-2||(g(Object(u.a)(Object(u.a)({},l),{},Object(s.a)({},t,e))),o({type:"reset",config:Object(u.a)(Object(u.a)({},l),{},Object(s.a)({},t,e))}))};return Object(i.jsxs)("div",{className:"minesweeper",children:[Object(i.jsxs)("div",{className:"gameState",children:[Object(i.jsx)("button",{className:"icon",onClick:function(){o({type:"reset",config:l})},children:(e=r.gameState,"lost"===e?"\ud83d\udc80":"won"===e?"\ud83c\udf89":j.length>0?"\ud83d\ude2f":"\ud83d\ude42")}),Object(i.jsxs)("div",{children:[Object(i.jsx)("span",{children:"Difficulty"}),Object(i.jsxs)("select",{onChange:function(e){var t=l.mineCount,n=l.boardWidth,i=l.boardHeight;"expert"===e.target.value?(t=99,i=16,n=30):"intermediate"===e.target.value?(t=40,i=16,n=16):"beginner"===e.target.value&&(t=9,i=w,n=w),"in-progress"!==r.gameState&&o({type:"reset",config:{boardHeight:i,boardWidth:n,mineCount:t}}),g({boardHeight:i,boardWidth:n,mineCount:t,isCustom:"custom"===e.target.value})},disabled:"in-progress"===r.gameState,children:[Object(i.jsx)("option",{value:"beginner",children:"Beginner"}),Object(i.jsx)("option",{value:"intermediate",children:"Intermediate"}),Object(i.jsx)("option",{value:"expert",children:"Expert"}),Object(i.jsx)("option",{value:"custom",children:"Custom"})]}),l.isCustom&&Object(i.jsxs)("form",{children:[Object(i.jsx)("label",{children:"rows:"}),Object(i.jsx)("input",{onChange:function(e){return m(e.target.value,"boardHeight")},type:"number",value:l.boardHeight,disabled:"in-progress"===r.gameState})," ",Object(i.jsx)("br",{}),Object(i.jsx)("label",{children:"columns:"}),Object(i.jsx)("input",{onChange:function(e){return m(e.target.value,"boardWidth")},type:"number",value:l.boardWidth,disabled:"in-progress"===r.gameState})," ",Object(i.jsx)("br",{}),Object(i.jsx)("label",{children:"bombs:"}),Object(i.jsx)("input",{onChange:function(e){return m(e.target.value,"mineCount")},type:"number",value:l.mineCount,disabled:"in-progress"===r.gameState})," ",Object(i.jsx)("br",{})]})]}),Object(i.jsxs)("span",{children:["Bombs left: ",r.mineCount-f.length]})]}),Object(i.jsx)(F,{game:r,dispatch:o}),Object(i.jsxs)("div",{className:"controls",children:[Object(i.jsx)("b",{children:"Controls"})," ",Object(i.jsx)("br",{}),"Click: Open tile ",Object(i.jsx)("br",{}),"Shift + click: Open tile group ",Object(i.jsx)("br",{}),"Right click: Flag/Unflag tile"]})]})},P=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,i=t.getFID,a=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),i(e),a(e),r(e),o(e)}))};c.a.render(Object(i.jsx)(r.a.StrictMode,{children:Object(i.jsx)(k,{})}),document.getElementById("root")),P()}},[[16,1,2]]]);
//# sourceMappingURL=main.c75c6929.chunk.js.map