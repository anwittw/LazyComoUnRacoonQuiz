(this["webpackJsonplazy-como-un-racoon-quiz"]=this["webpackJsonplazy-como-un-racoon-quiz"]||[]).push([[0],{31:function(n,e,r){"use strict";r.r(e);var t=r(0),a=r(1),o=r.n(a),i=r(16),c=r.n(i),s=r(20),u=r(3),d=r(4);function p(){var n=Object(u.a)(["\n  cursor: pointer;\n  margin: 10px 10px;\n  word-wrap: break-word;\n  height: 40px;\n  width: 90%;\n  background: linear-gradient(180deg, #f2edef, #21ae53);\n  border: 2px solid #666c59;\n  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);\n  border-radius: 10px;\n\n  :focus {\n    outline: none;\n  }\n  :hover {\n    background: linear-gradient(180deg, #f2edef, #0b6864);\n  }\n"]);return p=function(){return n},n}function b(){var n=Object(u.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  border-radius: 10px;\n  max-width: 600px;\n  background-color: #f2edef;\n  padding: 20px;\n"]);return b=function(){return n},n}var l,x,f=d.b.div(b()),g=d.b.button(p()),j=function(n){var e=n.scores,r=n.resetGame;return Object(t.jsxs)(f,{children:[Object(t.jsxs)("div",{children:["YOUR FINAL SCORE IS: ",e]}),Object(t.jsx)(g,{onClick:r,children:"TRY AGAIN"})]})},h=r(7),O=r.n(h),m=r(6),w=r(2),v=r(11);!function(n){n.EASY="easy",n.MEDIUM="medium",n.HARD="hard"}(l||(l={})),function(n){n.ALL="",n.GENERAL_KNOWLEDGE="9",n.BOOKS="10",n.FILM="11",n.MUSIC="12",n.VIDEO_GAMES="15",n.SPORTS="21",n.HISTORY="23",n.POLITICS="24",n.ART="25",n.CELEBRITIES="26",n.ANIMALS="27",n.ANIME_MANGA="31 "}(x||(x={}));var y=function(){var n=Object(v.a)(O.a.mark((function n(e,r,t){var a,o;return O.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a="http://opentdb.com/api.php?amount=".concat(e,"&difficulty=").concat(r,"&type=multiple").concat(t?"&category="+t:""),n.prev=1,n.next=4,fetch(a);case 4:return n.next=6,n.sent.json();case 6:return o=n.sent,n.abrupt("return",o.results.map((function(n){return Object(w.a)(Object(w.a)({},n),{},{answers:(e=[].concat(Object(m.a)(n.incorrect_answers),[n.correct_answer]),Object(m.a)(e).sort((function(){return Math.random()-.5})))});var e})));case 10:throw n.prev=10,n.t0=n.catch(1),new Error("An error occured");case 13:case"end":return n.stop()}}),n,null,[[1,10]])})));return function(e,r,t){return n.apply(this,arguments)}}(),k=r(5);function A(){var n=Object(u.a)(['\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  .questions {\n    text-align: center;\n    width: 80%;\n  }\n  input[type="range"] {\n    -webkit-appearance: none;\n    margin: 18px 0;\n    width: 80%;\n  }\n  input[type="range"]:focus {\n    outline: none;\n  }\n  input[type="range"]::-webkit-slider-runnable-track {\n    width: 100%;\n    height: 8.4px;\n    cursor: pointer;\n    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;\n    background: #3071a9;\n    border-radius: 1.3px;\n    border: 0.2px solid #010101;\n  }\n  input[type="range"]::-webkit-slider-thumb {\n    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;\n    border: 1px solid #000000;\n    height: 36px;\n    width: 16px;\n    border-radius: 3px;\n    background: #ffffff;\n    cursor: pointer;\n    -webkit-appearance: none;\n    margin-top: -14px;\n  }\n  input[type="range"]:focus::-webkit-slider-runnable-track {\n    background: #367ebd;\n  }\n  input[type="range"]::-moz-range-track {\n    width: 100%;\n    height: 8.4px;\n    cursor: pointer;\n    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;\n    background: #3071a9;\n    border-radius: 1.3px;\n    border: 0.2px solid #010101;\n  }\n  input[type="range"]::-moz-range-thumb {\n    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;\n    border: 1px solid #000000;\n    height: 36px;\n    width: 16px;\n    border-radius: 3px;\n    background: #ffffff;\n    cursor: pointer;\n  }\n  input[type="range"]::-ms-track {\n    width: 100%;\n    height: 8.4px;\n    cursor: pointer;\n    background: transparent;\n    border-color: transparent;\n    border-width: 16px 0;\n    color: transparent;\n  }\n  input[type="range"]::-ms-fill-lower {\n    background: #2a6495;\n    border: 0.2px solid #010101;\n    border-radius: 2.6px;\n    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;\n  }\n  input[type="range"]::-ms-fill-upper {\n    background: #3071a9;\n    border: 0.2px solid #010101;\n    border-radius: 2.6px;\n    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;\n  }\n  input[type="range"]::-ms-thumb {\n    box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;\n    border: 1px solid #000000;\n    height: 36px;\n    width: 16px;\n    border-radius: 3px;\n    background: #ffffff;\n    cursor: pointer;\n  }\n  input[type="range"]:focus::-ms-fill-lower {\n    background: #3071a9;\n  }\n  input[type="range"]:focus::-ms-fill-upper {\n    background: #367ebd;\n  }\n']);return A=function(){return n},n}var q=d.b.div(A()),S=function(n){var e=n.callback,r=Object(a.useState)("10"),o=Object(k.a)(r,2),i=o[0],c=o[1];return Object(a.useEffect)((function(){e(i)}),[i]),Object(t.jsx)(q,{children:Object(t.jsxs)("div",{className:"questions",children:[Object(t.jsxs)("p",{children:["Number of Questions: ",i]}),Object(t.jsx)("input",{type:"range",min:"0",max:"50",value:i,onChange:function(n){return c(n.target.value)}})]})})};function C(){var n=Object(u.a)(["\n  cursor: pointer;\n  margin: 10px 10px;\n  word-wrap: break-word;\n  height: 40px;\n  width: 40%;\n  background: ",";\n\n  border: 2px solid #666c59;\n  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);\n  border-radius: 10px;\n\n  :focus {\n    outline: none;\n  }\n"]);return C=function(){return n},n}var N=d.b.button(C(),(function(n){return n.isSelected?"linear-gradient(180deg, #f2edef, #0b6864)":"linear-gradient(180deg, #f2edef, #21ae53)"})),E=function(n){var e=n.isSelected,r=n.keyword,a=n.value,o=n.onClick;return Object(t.jsx)(N,{value:a,onClick:o,isSelected:e,children:Object(t.jsx)("div",{children:r})})};function G(){var n=Object(u.a)(["\n  margin: 40px;\n  display: flex;\n  justify-content: space-around;\n"]);return G=function(){return n},n}function L(){var n=Object(u.a)(["\n  margin: 40px;\n  display: flex;\n  width: inherit;\n  flex-wrap: wrap;\n  justify-content: space-around;\n  align-items: center;\n"]);return L=function(){return n},n}function I(){var n=Object(u.a)(["\n  border-radius: 10px;\n  max-width: 600px;\n  background-color: #f2edef;\n"]);return I=function(){return n},n}var T=d.b.div(I()),Q=d.b.div(L()),M=d.b.div(G()),R=function(n){var e=n.callbacks,r=n.gameOptions,a=Object.entries(l),o=Object.entries(x),i=e.setDifficulty,c=e.setQuestionAmount,s=e.setCategory,u=r.category,d=r.difficulty;return Object(t.jsxs)(T,{children:[Object(t.jsx)("div",{className:"question-amount",children:Object(t.jsx)(S,{callback:c})}),Object(t.jsx)(Q,{children:o.map((function(n,e){return Object(t.jsx)(E,{isSelected:u===n[1],value:n[1],keyword:n[0].toLowerCase(),onClick:function(n){s(n)}},e)}))}),Object(t.jsx)(M,{children:a.map((function(n,e){return Object(t.jsx)(E,{isSelected:d===n[1],value:n[1],keyword:n[0].toLowerCase(),onClick:function(n){i(n)}},e)}))})]})},z=r(14),_=r.n(z);function D(){var n=Object(u.a)(["\n  cursor: pointer;\n  margin: 10px 10px;\n  word-wrap: break-word;\n  height: 40px;\n  width: 90%;\n  background: ",";\n  border: 2px solid #666c59;\n  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);\n  border-radius: 10px;\n\n  :focus {\n    outline: none;\n  }\n"]);return D=function(){return n},n}function U(){var n=Object(u.a)(["\n  border-radius: 10px;\n  max-width: 600px;\n  background-color: #f2edef;\n  padding: 20px;\n"]);return U=function(){return n},n}var P=d.b.div(U()),Y=d.b.button(D(),(function(n){var e=n.isCorrect,r=n.isAnswered;return r?r&&e?"linear-gradient(180deg, #f2edef, #0b6864)":"linear-gradient(180deg, #f2edef, red)":"linear-gradient(180deg, #f2edef, #21ae53)"})),B=function(n){var e=n.game,r=n.handleUserAnswer,a=e.number,o=e.totalQuestions,i=e.questions,c=e.scores,s=e.userAnswers,u=i[a-1];return Object(t.jsxs)(P,{children:[Object(t.jsx)("div",{className:"qcard-header"}),Object(t.jsxs)("p",{children:["Number ",a," / ",o]}),Object(t.jsxs)("p",{children:["Scores ",c]}),Object(t.jsx)("p",{className:"qcard-question",children:_.a.decode(u.question)}),Object(t.jsx)("div",{className:"qcard-ans-wrapper",children:u.answers.map((function(n,o){return Object(t.jsx)("div",{children:Object(t.jsx)(Y,{isAnswered:e.userAnswers.length===a,isCorrect:e.userAnswers.length===a&&n===s[a-1].correctAnswer,disabled:e.userAnswers.length===a,value:n,onClick:function(n){return r(a-1,n.currentTarget.value)},children:_.a.decode(n)},o)},o)}))})]})},F=function(){var n=Object(a.useState)({number:1,totalQuestions:0,isLoading:!1,isGameOver:!0,questions:[],scores:0,userAnswers:[]}),e=Object(k.a)(n,2),r=e[0],t=e[1];Object(a.useEffect)((function(){r.userAnswers.length===r.totalQuestions&&t((function(n){return Object(w.a)(Object(w.a)({},n),{},{isGameOver:!0})}))}),[r.userAnswers]);var o=function(){var n=Object(v.a)(O.a.mark((function n(e,r,a){var o;return O.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t((function(n){return Object(w.a)(Object(w.a)({},n),{},{isLoading:!0})})),n.prev=1,n.next=4,y(e,r,a);case 4:(o=n.sent).length>0?t((function(n){return Object(w.a)(Object(w.a)({},n),{},{isLoading:!1,isGameOver:!1,questions:o,totalQuestions:o.length})})):(alert("Not enough Questions available, try less or another category!"),i()),n.next=12;break;case 8:n.prev=8,n.t0=n.catch(1),alert("an error occured, try again"),i();case 12:case"end":return n.stop()}}),n,null,[[1,8]])})));return function(e,r,t){return n.apply(this,arguments)}}(),i=function(){t({number:1,totalQuestions:0,isLoading:!1,isGameOver:!0,questions:[],scores:0,userAnswers:[]})};return{game:r,startGame:o,resetGame:i,handleUserAnswer:function(n,e,a){r.questions[n].correct_answer===e&&t((function(n){return Object(w.a)(Object(w.a)({},n),{},{scores:n.scores+1})})),t((function(t){return Object(w.a)(Object(w.a)({},t),{},{userAnswers:[].concat(Object(m.a)(r.userAnswers),[{question:r.questions[n].question,answers:r.questions[n].answers,userAnswer:e,isCorrect:r.questions[n].correct_answer===e,correctAnswer:r.questions[n].correct_answer}])})}))},moveToNextQuestion:function(){t((function(n){return Object(w.a)(Object(w.a)({},n),{},{number:r.number++})}))}}},H=function(){var n=Object(a.useState)({questionAmount:void 0,category:void 0,difficulty:void 0}),e=Object(k.a)(n,2),r=e[0],t=e[1],o=Object(a.useState)(!1),i=Object(k.a)(o,2),c=i[0],s=i[1];Object(a.useEffect)((function(){void 0!==r.category&&void 0!==r.difficulty&&void 0!==r.questionAmount&&s((function(n){return!0}))}),[r]);return{gameOptions:r,setDifficulty:function(n){var e=n.currentTarget.value;t((function(n){return Object(w.a)(Object(w.a)({},n),{},{difficulty:e})}))},setCategory:function(n){var e=n.currentTarget.value;t((function(n){return Object(w.a)(Object(w.a)({},n),{},{category:e})}))},setQuestionAmount:function(n){t((function(e){return Object(w.a)(Object(w.a)({},e),{},{questionAmount:n})}))},readyToPlay:c}},J=r.p+"static/media/background.7fb5126b.jpg";function K(){var n=Object(u.a)(["\n  display: flex;\n  justify-content: center;\n  width: 100%;\n"]);return K=function(){return n},n}function V(){var n=Object(u.a)(["\n  cursor: pointer;\n  margin: 10px 10px;\n  word-wrap: break-word;\n  height: 40px;\n  width: 80%;\n\n  background: linear-gradient(180deg, #f2edef, #21ae53);\n  border: 2px solid #666c59;\n  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);\n  border-radius: 10px;\n\n  :focus {\n    outline: none;\n  }\n\n  ","\n"]);return V=function(){return n},n}function W(){var n=Object(u.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n"]);return W=function(){return n},n}function X(){var n=Object(u.a)(["\nhtml {\n  height: 100%;\n}\n\nbody {\n    \n    background-image: url(",");\n    background-size: cover;\n    margin: 0;\n    padding: 20px 20px;\n    display: flex;\n    justify-content: center; \n    height: 100%;\n    \n}\n\n* {\n    box-sizing: border-box;\n    font-family: 'Catamaran', sans-serif;\n}"]);return X=function(){return n},n}var Z=Object(d.a)(X(),J),$=d.b.div(W()),nn=d.b.button(V(),(function(n){return n.disabled?"":":hover {background: linear-gradient(180deg, #f2edef, #0b6864)}"})),en=d.b.div(K());var rn=function(){var n=F(),e=n.game,r=n.startGame,a=n.handleUserAnswer,o=n.moveToNextQuestion,i=n.resetGame,c=H(),u=c.gameOptions,d=c.readyToPlay,p=Object(s.a)(c,["gameOptions","readyToPlay"]),b=e.isLoading,l=e.isGameOver,x=e.userAnswers,f=e.number;return Object(t.jsxs)(t.Fragment,{children:[Object(t.jsx)(Z,{}),Object(t.jsxs)($,{children:[l&&0===x.length&&Object(t.jsx)(R,{callbacks:p,gameOptions:u}),!b&&!l&&Object(t.jsx)(B,{game:e,handleUserAnswer:a}),b&&Object(t.jsx)("p",{children:"LOADING"}),!b&&l&&0===x.length&&Object(t.jsx)(en,{children:Object(t.jsx)(nn,{disabled:!d,onClick:function(){return r(u.questionAmount,u.difficulty,u.category)},children:"Start Game"})}),!l&&e.userAnswers.length<e.totalQuestions&&Object(t.jsx)(en,{children:Object(t.jsx)(nn,{disabled:x.length!==f,onClick:o,children:"Next Question"})}),l&&x.length>0&&Object(t.jsx)(j,{scores:e.scores,resetGame:i})]})]})};c.a.render(Object(t.jsx)(o.a.StrictMode,{children:Object(t.jsx)(rn,{})}),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.d4ea9a94.chunk.js.map