"use strict";(self.webpackChunktiti_ido=self.webpackChunktiti_ido||[]).push([[5946],{85946:(re,p,r)=>{r.r(p),r.d(p,{HeaderComponent:()=>ne,HeaderModule:()=>ie});var y=r(14581),w=r(83151),c=r(88692),e=r(64537),s=r(1379),C=r(36321);const E=["*",[["mat-toolbar-row"]]],A=["*","mat-toolbar-row"],D=(0,s.pj)(class{constructor(o){this._elementRef=o}});let k=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275dir=e.lG2({type:o,selectors:[["mat-toolbar-row"]],hostAttrs:[1,"mat-toolbar-row"],exportAs:["matToolbarRow"]}),o})(),B=(()=>{class o extends D{constructor(t,n,a){super(t),this._platform=n,this._document=a}ngAfterViewInit(){this._platform.isBrowser&&(this._checkToolbarMixedModes(),this._toolbarRows.changes.subscribe(()=>this._checkToolbarMixedModes()))}_checkToolbarMixedModes(){}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(e.SBq),e.Y36(C.t4),e.Y36(c.K0))},o.\u0275cmp=e.Xpm({type:o,selectors:[["mat-toolbar"]],contentQueries:function(t,n,a){if(1&t&&e.Suo(a,k,5),2&t){let l;e.iGM(l=e.CRH())&&(n._toolbarRows=l)}},hostAttrs:[1,"mat-toolbar"],hostVars:4,hostBindings:function(t,n){2&t&&e.ekj("mat-toolbar-multiple-rows",n._toolbarRows.length>0)("mat-toolbar-single-row",0===n._toolbarRows.length)},inputs:{color:"color"},exportAs:["matToolbar"],features:[e.qOj],ngContentSelectors:A,decls:2,vars:0,template:function(t,n){1&t&&(e.F$t(E),e.Hsn(0),e.Hsn(1,1))},styles:[".cdk-high-contrast-active .mat-toolbar{outline:solid 1px}.mat-toolbar-row,.mat-toolbar-single-row{display:flex;box-sizing:border-box;padding:0 16px;width:100%;flex-direction:row;align-items:center;white-space:nowrap}.mat-toolbar-multiple-rows{display:flex;box-sizing:border-box;flex-direction:column;width:100%}"],encapsulation:2,changeDetection:0}),o})(),R=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[s.BQ,s.BQ]}),o})();var h=r(83331),u=r(9638),b=r(37723),f=r(38954);r(74929),r(20092);let v=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({}),o})(),F=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[v,s.si,s.BQ,b.Q8,v,s.BQ]}),o})();var M=r(7666),T=r(2940),x=r(54536);let j=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[f.rt,s.BQ,s.BQ]}),o})();var J=r(30424),Y=r(11730),G=r(94602);function V(o,i){if(1&o&&(e.TgZ(0,"button",14,15)(2,"div",16)(3,"mat-icon",17),e._uU(4,"account_circle "),e.qZA(),e.TgZ(5,"span"),e._uU(6),e.qZA()()()),2&o){const t=e.oxw().ngIf;e.Q6J("matTooltip","Current Account: "+t.currentAccount)("matTooltipHideDelay",200),e.xp6(6),e.Oqu("Connected")}}function $(o,i){if(1&o){const t=e.EpF();e.TgZ(0,"button",18),e.NdJ("click",function(){e.CHM(t);const a=e.oxw(3);return e.KtG(a.connectWallet())}),e.TgZ(1,"div",16)(2,"mat-icon",17),e._uU(3,"account_balance_wallet "),e.qZA(),e.TgZ(4,"span"),e._uU(5,"CONNECT WALLET"),e.qZA()()()}}function W(o,i){if(1&o&&(e.ynx(0),e.YNc(1,V,7,3,"button",12),e.YNc(2,$,6,0,"button",13),e.BQk()),2&o){const t=i.ngIf,n=e.oxw(2);e.xp6(1),e.Q6J("ngIf",t.currentAccount&&n.web3ModalService.isConnected),e.xp6(1),e.Q6J("ngIf",!(t.currentAccount&&n.web3ModalService.isConnected))}}const K=function(o){return{currentAccount:o}};function X(o,i){if(1&o&&(e.TgZ(0,"mat-toolbar",2)(1,"div",3)(2,"a",4),e._UZ(3,"img",5),e.qZA()(),e._UZ(4,"span",6),e.TgZ(5,"a",7),e._uU(6,"Twitter"),e.qZA(),e.TgZ(7,"a",8),e._uU(8,"Discord"),e.qZA(),e.TgZ(9,"a",9),e._uU(10,"IDO Guide"),e.qZA(),e.TgZ(11,"a",10),e._uU(12,"Tokenomics"),e.qZA(),e.YNc(13,W,3,2,"ng-container",11),e.ALo(14,"async"),e.qZA()),2&o){const t=e.oxw();e.Udp("width","100%"),e.xp6(13),e.Q6J("ngIf",e.VKq(5,K,e.lcZ(14,3,t.accountService.account$)))}}function ee(o,i){if(1&o&&(e.TgZ(0,"button",23,15)(2,"mat-icon",17),e._uU(3,"account_circle "),e.qZA()()),2&o){const t=e.oxw(2);e.Q6J("matTooltip","Current Account: "+t.accountService.currentAccount)("matTooltipHideDelay",200)}}function te(o,i){if(1&o){const t=e.EpF();e.TgZ(0,"button",24),e.NdJ("click",function(){e.CHM(t);const a=e.oxw(2);return e.KtG(a.connectWallet())}),e.TgZ(1,"mat-icon",17),e._uU(2,"account_balance_wallet "),e.qZA()()}}function oe(o,i){if(1&o&&(e.TgZ(0,"mat-toolbar",19)(1,"div",20),e._UZ(2,"img",5),e.qZA(),e._UZ(3,"span",6),e.YNc(4,ee,4,2,"button",21),e.YNc(5,te,3,0,"button",22),e.qZA()),2&o){const t=e.oxw();e.Udp("width","100%"),e.xp6(4),e.Q6J("ngIf",t.accountService.currentAccount),e.xp6(1),e.Q6J("ngIf",!t.accountService.currentAccount)}}let ne=(()=>{class o{constructor(t,n,a,l,d){this.web3ModalService=t,this.web3Service=n,this.accountService=a,this._snackBar=l,this.dialog=d,this.isMobile=document.body.clientWidth<=1024}ngOnInit(){(0,y.R)(window,"resize").pipe((0,w.b)(300)).subscribe(t=>{this.isMobile=document.body.clientWidth<=1024}),this.connectWallet()}prepareRoute(t){return t.activatedRouteData.animation}connectWallet(){this.web3ModalService.connect().then(t=>{t&&this._snackBar.open("Welcome to TiTi Protocol!","close",{horizontalPosition:"center",verticalPosition:"top",duration:2e3})}).catch(t=>{this.web3ModalService.disconnect(),this._snackBar.open("Error! Connect to wallet failed","close",{horizontalPosition:"center",verticalPosition:"top",duration:4e3})})}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(J.y),e.Y36(Y.Uc),e.Y36(G.B),e.Y36(M.ux),e.Y36(x.uw))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-header"]],decls:2,vars:2,consts:[["class","header",3,"width",4,"ngIf"],["class","mobile-header",3,"width",4,"ngIf"],[1,"header"],[1,"logo"],["href","https://www.titi.finance/",2,"height","100%"],["src","assets/imgs/logo.png","alt","logo"],[1,"spacer"],["href","https://twitter.com/TiTiProtocol","target","_blank",1,"link"],["href","https://discord.com/invite/r2JbXcRYdy","target","_blank",1,"link"],["href","https://blog.titi.finance/","target","_blank",1,"link"],["href","https://docsend.com/view/v9s26v6r4bb2vf8s","target","_blank",1,"link"],[4,"ngIf"],["class","header-action-wrapper-btn","mat-stroked-button","","color","primary","style","margin-right:12px;","matTooltipPosition","below",3,"matTooltip","matTooltipHideDelay",4,"ngIf"],["class","header-action-wrapper-btn","mat-stroked-button","","color","primary","style","margin-right:12px;",3,"click",4,"ngIf"],["mat-stroked-button","","color","primary","matTooltipPosition","below",1,"header-action-wrapper-btn",2,"margin-right","12px",3,"matTooltip","matTooltipHideDelay"],["tooltip","matTooltip"],[1,"header-action-btn"],[1,"header-action-icon"],["mat-stroked-button","","color","primary",1,"header-action-wrapper-btn",2,"margin-right","12px",3,"click"],[1,"mobile-header"],[1,"mobile-logo"],["class","mobile-header-action-wrapper-btn","mat-icon-button","","color","primary","matTooltipPosition","below",3,"matTooltip","matTooltipHideDelay",4,"ngIf"],["class","mobile-header-action-wrapper-btn","mat-icon-button","","color","primary",3,"click",4,"ngIf"],["mat-icon-button","","color","primary","matTooltipPosition","below",1,"mobile-header-action-wrapper-btn",3,"matTooltip","matTooltipHideDelay"],["mat-icon-button","","color","primary",1,"mobile-header-action-wrapper-btn",3,"click"]],template:function(t,n){1&t&&(e.YNc(0,X,15,7,"mat-toolbar",0),e.YNc(1,oe,6,4,"mat-toolbar",1)),2&t&&(e.Q6J("ngIf",!n.isMobile),e.xp6(1),e.Q6J("ngIf",n.isMobile))},dependencies:[c.O5,B,h.Hw,u.lW,T.gM,c.Ov],styles:[".header[_ngcontent-%COMP%]{z-index:99;position:fixed;background:none;height:8vh;background-color:#b6ecde1a;-webkit-backdrop-filter:blur(12px);backdrop-filter:blur(12px)}.logo[_ngcontent-%COMP%]{height:100%;display:flex;justify-content:center;align-items:center;margin:24px 0;padding:12px}img[_ngcontent-%COMP%]{height:100%;width:100%}.link[_ngcontent-%COMP%]{color:#fff;transition:all .2s;margin-right:2rem;font-weight:700;text-shadow:0px 0px 8px rgba(255,255,255,.8);text-decoration:none}.link[_ngcontent-%COMP%]:hover{color:#71ffc4}.mobile-logo[_ngcontent-%COMP%]{height:5vh;display:flex;justify-content:center;align-items:center;margin-left:8px}img[_ngcontent-%COMP%]{height:80%}.header-action-wrapper-btn[_ngcontent-%COMP%]{border:1px solid #1BD0A3!important;border-radius:8px;font-size:12px}.header-action-wrapper-btn[_ngcontent-%COMP%]:hover{border:1px solid #1ce6b3!important}.mobile-header[_ngcontent-%COMP%]{z-index:99;position:fixed;background:none;height:6vh;background-color:#f5f5f5}.header-action-btn[_ngcontent-%COMP%]{display:grid;grid-template-columns:20px auto;column-gap:8px}.header-action-icon[_ngcontent-%COMP%], span[_ngcontent-%COMP%]{justify-self:center;align-self:center}.mobile-header[_ngcontent-%COMP%]{background-color:#06231e99;border-bottom:1px solid rgba(2,172,135,.308);box-shadow:none}.spacer[_ngcontent-%COMP%]{flex:1 1 auto}"]}),o})(),ie=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[c.ez,R,h.Ps,u.ot,F,M.ZX,T.AV,x.Is,j]}),o})()}}]);