(window["webpackJsonpnon-dev-examples"]=window["webpackJsonpnon-dev-examples"]||[]).push([[0],{42:function(e,t,n){e.exports=n(93)},47:function(e,t,n){},48:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},49:function(e,t,n){},58:function(e,t){},60:function(e,t){},93:function(e,t,n){"use strict";n.r(t);var o=n(2),a=n.n(o),i=n(34),c=n.n(i),u=(n(47),n(35)),r=n(36),s=n(40),p=n(37),l=n(41),m=(n(48),n(49),n(38)),d=n.n(m),h=n(9),f=n(39),v=n.n(f),g={validateMnemonic:h.validateMnemonic,mnemonicToSeedSync:h.mnemonicToSeedSync,generateMnemonic:h.generateMnemonic,mnemonicToEntropy:h.mnemonicToEntropy},w=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(s.a)(this,Object(p.a)(t).call(this,e))).state={input:"Click Here",output:"Your output will appear here."},n}return Object(l.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this;return a.a.createElement("div",{className:"App"},a.a.createElement("span",{className:"inputPrompt"},"Type Something:"),a.a.createElement("input",{onChange:function(t){e.handleChange(t)},ref:function(t){return e.textInput=t},value:this.state.input,autoComplete:"off",className:"inputArea",onClick:function(){e.clearInput()}}),a.a.createElement("span",{className:"output"},this.state.output))}},{key:"clearInput",value:function(){this.setState({input:"",output:"Start typing..."})}},{key:"componentDidMount",value:function(e){this.textInput.focus(),console.log("component mounted!"),function(e){var t=v.a.parse(window.location.search,{ignoreQueryPrefix:!0}).mode;console.log("mode",t),"undefined"===typeof t?e.setState({mode:"sha256"}):"bip39"===t?e.setState({mode:"bip39"}):e.setState({mode:"sha256"})}(this)}},{key:"handleChange",value:function(){var e=this.textInput.value;if("bip39"===this.state.mode)var t=g.generateMnemonic();else t=d()(e);this.setState({input:e,output:t})}}]),t}(a.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[42,1,2]]]);
//# sourceMappingURL=main.c0277b84.chunk.js.map