(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{strr:function(n,l,a){"use strict";a.r(l);var u=a("CcnG"),t=function(){},e=a("7lHa"),c=a("BgYQ"),o=a("K+tO"),r=a("cZ1G"),i=a("xZ8S"),s=a("WpxC"),p=a("KM9H"),b=a("vuB0"),d=a("4vXS"),g=a("7uv5"),h=a("ZYCi"),f=a("MGne"),V=a("NfCQ"),v=a("4Ssn"),m=a("S+eJ"),X=a("Ip0R"),w=(a("NGJs"),a("jvbL")),y=function(){function n(n){var l=this;this.authService=n,this.alive=!0,this.authService.onTokenChange().pipe(Object(w.a)(function(){return l.alive})).subscribe(function(n){l.token=null,n&&n.isValid()&&(l.token=n)})}return n.prototype.login=function(){var n=this;this.authService.authenticate("google").pipe(Object(w.a)(function(){return n.alive})).subscribe(function(n){})},n.prototype.logout=function(){var n=this;this.authService.logout("google").pipe(Object(w.a)(function(){return n.alive})).subscribe(function(n){})},n.prototype.ngOnDestroy=function(){this.alive=!1},n}(),k=a("BDhN"),N=u.La({encapsulation:2,styles:[],data:{}});function S(n){return u.gb(0,[(n()(),u.Na(0,0,null,null,1,"button",[["class","btn btn-success"]],null,[[null,"click"]],function(n,l,a){var u=!0;return"click"===l&&(u=!1!==n.component.login()&&u),u},null,null)),(n()(),u.eb(-1,null,["Sign In with Google"]))],null,null)}function x(n){return u.gb(0,[(n()(),u.Na(0,0,null,null,1,"button",[["class","btn btn-warning"]],null,[[null,"click"]],function(n,l,a){var u=!0;return"click"===l&&(u=!1!==n.component.logout()&&u),u},null,null)),(n()(),u.eb(-1,null,["Sign Out"]))],null,null)}function A(n){return u.gb(0,[(n()(),u.Na(0,0,null,null,16,"nb-layout",[],[[2,"window-mode",null],[2,"with-scroll",null]],[["window","resize"]],function(n,l,a){var t=!0;return"window:resize"===l&&(t=!1!==u.Xa(n,1).onResize(a)&&t),t},p.f,p.b)),u.Ma(1,4440064,null,0,b.b,[d.a,g.a,u.j,u.k,u.B,h.l,f.f,f.b,u.z,V.c],null,null),(n()(),u.Na(2,0,null,2,14,"nb-layout-column",[],[[2,"left",null],[2,"start",null]],null,null,p.e,p.a)),u.Ma(3,49152,null,0,b.a,[],null,null),(n()(),u.Na(4,0,null,0,12,"nb-card",[],[[2,"xxsmall-card",null],[2,"xsmall-card",null],[2,"small-card",null],[2,"medium-card",null],[2,"large-card",null],[2,"xlarge-card",null],[2,"xxlarge-card",null],[2,"active-card",null],[2,"disabled-card",null],[2,"primary-card",null],[2,"info-card",null],[2,"success-card",null],[2,"warning-card",null],[2,"danger-card",null],[2,"accent",null],[2,"accent-primary",null],[2,"accent-info",null],[2,"accent-success",null],[2,"accent-warning",null],[2,"accent-danger",null],[2,"accent-active",null],[2,"accent-disabled",null]],null,null,v.f,v.b)),u.Ma(5,49152,null,0,m.b,[],null,null),(n()(),u.Na(6,0,null,2,10,"nb-card-body",[],null,null,null,v.e,v.a)),u.Ma(7,49152,null,0,m.a,[],null,null),(n()(),u.Na(8,0,null,0,1,"p",[],null,null,null,null,null)),(n()(),u.eb(9,null,["Current User Authenticated: ",""])),(n()(),u.Na(10,0,null,0,2,"p",[],null,null,null,null,null)),(n()(),u.eb(11,null,["Current User Token: ",""])),u.Za(0,X.f,[]),(n()(),u.Ea(16777216,null,0,1,null,S)),u.Ma(14,16384,null,0,X.l,[u.N,u.J],{ngIf:[0,"ngIf"]},null),(n()(),u.Ea(16777216,null,0,1,null,x)),u.Ma(16,16384,null,0,X.l,[u.N,u.J],{ngIf:[0,"ngIf"]},null)],function(n,l){var a=l.component;n(l,1,0),n(l,14,0,!a.token),n(l,16,0,a.token)},function(n,l){var a=l.component;n(l,0,0,u.Xa(l,1).windowModeValue,u.Xa(l,1).withScrollValue),n(l,2,0,u.Xa(l,3).leftValue,u.Xa(l,3).startValue),n(l,4,1,[u.Xa(l,5).xxsmall,u.Xa(l,5).xsmall,u.Xa(l,5).small,u.Xa(l,5).medium,u.Xa(l,5).large,u.Xa(l,5).xlarge,u.Xa(l,5).xxlarge,u.Xa(l,5).active,u.Xa(l,5).disabled,u.Xa(l,5).primary,u.Xa(l,5).info,u.Xa(l,5).success,u.Xa(l,5).warning,u.Xa(l,5).danger,u.Xa(l,5).hasAccent,u.Xa(l,5).primaryAccent,u.Xa(l,5).infoAccent,u.Xa(l,5).successAccent,u.Xa(l,5).warningAccent,u.Xa(l,5).dangerAccent,u.Xa(l,5).activeAccent,u.Xa(l,5).disabledAccent]),n(l,9,0,!!a.token),n(l,11,0,u.fb(l,11,0,u.Xa(l,12).transform(a.token)))})}var M=u.Ja("nb-playground-auth",y,function(n){return u.gb(0,[(n()(),u.Na(0,0,null,null,1,"nb-playground-auth",[],null,null,null,A,N)),u.Ma(1,180224,null,0,y,[k.a],null,null)],null,null)},{},{},[]),z=function(){function n(n,l){var a=this;this.authService=n,this.router=l,this.alive=!0,this.authService.authenticate("google").pipe(Object(w.a)(function(){return a.alive})).subscribe(function(n){n.isSuccess()&&n.getRedirect()&&a.router.navigateByUrl(n.getRedirect())})}return n.prototype.ngOnDestroy=function(){this.alive=!1},n}(),j=u.La({encapsulation:2,styles:[],data:{}});function O(n){return u.gb(0,[(n()(),u.Na(0,0,null,null,4,"nb-layout",[],[[2,"window-mode",null],[2,"with-scroll",null]],[["window","resize"]],function(n,l,a){var t=!0;return"window:resize"===l&&(t=!1!==u.Xa(n,1).onResize(a)&&t),t},p.f,p.b)),u.Ma(1,4440064,null,0,b.b,[d.a,g.a,u.j,u.k,u.B,h.l,f.f,f.b,u.z,V.c],null,null),(n()(),u.Na(2,0,null,2,2,"nb-layout-column",[],[[2,"left",null],[2,"start",null]],null,null,p.e,p.a)),u.Ma(3,49152,null,0,b.a,[],null,null),(n()(),u.eb(-1,0,["Authenticating..."]))],function(n,l){n(l,1,0)},function(n,l){n(l,0,0,u.Xa(l,1).windowModeValue,u.Xa(l,1).withScrollValue),n(l,2,0,u.Xa(l,3).leftValue,u.Xa(l,3).startValue)})}var I=u.Ja("nb-playground-oauth2-callback",z,function(n){return u.gb(0,[(n()(),u.Na(0,0,null,null,1,"nb-playground-oauth2-callback",[],null,null,null,O,j)),u.Ma(1,180224,null,0,z,[k.a,h.l],null,null)],null,null)},{},{},[]),J=a("gIcY"),B=a("t/Na"),C=a("0ICW"),E=a("Abgx"),R=a("znn7"),Y=a("Y4k2"),q=a("Bc6B"),K=a("6y2k"),D=a("++eV"),G=a("X/Iy"),T=a("i6JN"),U=a("F4EV"),Z=a("0AKQ"),F=a("DJEY"),L=a("2Az5"),Q=a("DYSn"),H=a("9S34"),W=a("9XlZ"),P=a("Lu/0"),$=a("8qs0"),_=a("QEfX");a.d(l,"NbOAuth2PlaygroundModuleNgFactory",function(){return nn});var nn=u.Ka(t,[],function(n){return u.Ua([u.Va(512,u.j,u.Y,[[8,[e.a,c.a,o.a,r.a,i.a,s.a,M,I]],[3,u.j],u.v]),u.Va(4608,X.n,X.m,[u.s,[2,X.v]]),u.Va(4608,J.x,J.x,[]),u.Va(4608,B.j,B.p,[X.d,u.z,B.n]),u.Va(4608,B.q,B.q,[B.j,B.o]),u.Va(5120,B.a,function(n){return[n]},[B.q]),u.Va(4608,B.m,B.m,[]),u.Va(6144,B.k,null,[B.m]),u.Va(4608,B.i,B.i,[B.k]),u.Va(6144,B.b,null,[B.i]),u.Va(4608,B.g,B.l,[B.b,u.p]),u.Va(4608,B.c,B.c,[B.g]),u.Va(5120,C.b,E.b,[C.e]),u.Va(5120,C.c,E.c,[C.b,u.p]),u.Va(5120,C.d,E.d,[C.c]),u.Va(4608,R.b,R.b,[R.a,C.d]),u.Va(4608,Y.b,Y.a,[R.b]),u.Va(4608,q.a,q.a,[Y.b]),u.Va(4608,k.a,k.a,[q.a,C.c]),u.Va(4608,K.a,K.a,[]),u.Va(4608,D.a,D.a,[B.c,h.a]),u.Va(4608,G.a,G.a,[B.c,h.a,f.f]),u.Va(1073742336,X.c,X.c,[]),u.Va(1073742336,J.v,J.v,[]),u.Va(1073742336,J.g,J.g,[]),u.Va(1073742336,B.e,B.e,[]),u.Va(1073742336,B.d,B.d,[]),u.Va(1073742336,h.p,h.p,[[2,h.u],[2,h.l]]),u.Va(1073742336,T.a,T.a,[]),u.Va(1073742336,U.a,U.a,[]),u.Va(1073742336,Z.a,Z.a,[]),u.Va(1073742336,F.a,F.a,[]),u.Va(1073742336,E.a,E.a,[]),u.Va(1073742336,t,t,[]),u.Va(256,B.n,"XSRF-TOKEN",[]),u.Va(256,B.o,"X-XSRF-TOKEN",[]),u.Va(1024,h.j,function(){return[[{path:"auth",component:L.a,children:[{path:"",component:Q.a},{path:"login",component:Q.a},{path:"register",component:H.a},{path:"logout",component:W.a},{path:"request-password",component:P.a},{path:"reset-password",component:$.a}]}],[{path:"",component:y},{path:"callback",component:z}]]},[]),u.Va(256,C.e,{strategies:[[G.a,{name:"google",clientId:"806751403568-03376bvlin9n3rhid0cahus6ei3lc69q.apps.googleusercontent.com",clientSecret:"",authorize:{endpoint:"https://accounts.google.com/o/oauth2/v2/auth",responseType:"token",scope:"https://www.googleapis.com/auth/userinfo.profile",redirectUri:"https://akveo.github.io/nebular/example/oauth2/callback"},redirect:{success:"/example/oauth2"}}]]},[]),u.Va(256,R.a,_.f,[]),u.Va(256,C.a,"Authorization",[])])})}}]);