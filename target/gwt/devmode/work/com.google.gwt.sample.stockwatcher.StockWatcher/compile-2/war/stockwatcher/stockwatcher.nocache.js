function stockwatcher(){var H='bootstrap',I='begin',J='gwt.codesvr.stockwatcher=',K='gwt.codesvr=',L='stockwatcher',M='startup',N='DUMMY',O=0,P=1,Q='iframe',R='position:absolute; width:0; height:0; border:none; left: -1000px;',S=' top: -1000px;',T='CSS1Compat',U='<!doctype html>',V='',W='<html><head><\/head><body><\/body><\/html>',X='undefined',Y='readystatechange',Z=10,$='script',_='javascript',ab='Failed to load ',bb='moduleStartup',cb='scriptTagAdded',db='moduleRequested',eb='meta',fb='name',gb='stockwatcher::',hb='::',ib='gwt:property',jb='content',kb='=',lb='gwt:onPropertyErrorFn',mb='Bad handler "',nb='" for "gwt:onPropertyErrorFn"',ob='gwt:onLoadErrorFn',pb='" for "gwt:onLoadErrorFn"',qb='/stockwatcher.nocache.js',rb='Unable to load Super Dev Mode version of stockwatcher.',sb='selectingPermutation',tb='stockwatcher.devmode.js',ub='2153A1F015C243EDEE8B7A1C4609FB12',vb=':',wb='.cache.js',xb='link',yb='rel',zb='stylesheet',Ab='href',Bb='head',Cb='loadExternalRefs',Db='gwt/clean/clean.css',Eb='end';var n=window;var o=document;q(H,I);function p(){var a=n.location.search;return a.indexOf(J)!=-1||a.indexOf(K)!=-1}
function q(a,b){if(n.__gwtStatsEvent){n.__gwtStatsEvent({moduleName:L,sessionId:n.__gwtStatsSessionId,subSystem:M,evtGroup:a,millis:(new Date).getTime(),type:b})}}
stockwatcher.__sendStats=q;stockwatcher.__moduleName=L;stockwatcher.__errFn=null;stockwatcher.__moduleBase=N;stockwatcher.__softPermutationId=O;stockwatcher.__computePropValue=null;stockwatcher.__getPropMap=null;stockwatcher.__installRunAsyncCode=function(){};stockwatcher.__gwtStartLoadingFragment=function(){return null};stockwatcher.__gwt_isKnownPropertyValue=function(){return false};stockwatcher.__gwt_getMetaProperty=function(){return null};var r=null;var s=n.__gwt_activeModules=n.__gwt_activeModules||{};s[L]={moduleName:L};stockwatcher.__moduleStartupDone=function(e){var f=s[L].bindings;s[L].bindings=function(){var a=f?f():{};var b=e[stockwatcher.__softPermutationId];for(var c=O;c<b.length;c++){var d=b[c];a[d[O]]=d[P]}return a}};var t;function u(){v();return t}
function v(){if(t){return}var a=o.createElement(Q);a.id=L;a.style.cssText=R+S;a.tabIndex=-1;o.body.appendChild(a);t=a.contentWindow.document;t.open();var b=document.compatMode==T?U:V;t.write(b+W);t.close()}
function w(f){function g(a){function b(){if(typeof o.readyState==X){return typeof o.body!=X&&o.body!=null}return /loaded|complete/.test(o.readyState)}
var c=b();if(c){a();return}function d(){if(!c){if(!b()){return}c=true;a();if(o.removeEventListener){o.removeEventListener(Y,d,false)}if(e){clearInterval(e)}}}
if(o.addEventListener){o.addEventListener(Y,d,false)}var e=setInterval(function(){d()},Z)}
function h(a){var b=u();var c=b.body;var d=b.createElement($);d.language=_;d.src=a;if(stockwatcher.__errFn){d.onerror=function(){stockwatcher.__errFn(L,new Error(ab+a))}}c.appendChild(d);q(bb,cb)}
q(bb,db);g(function(){h(f)})}
stockwatcher.__startLoadingFragment=function(a){return C(a)};stockwatcher.__installRunAsyncCode=function(a){var b=u();var c=b.body;var d=b.createElement($);d.language=_;d.text=a;c.appendChild(d);c.removeChild(d)};function A(){var c={};var d;var e;var f=o.getElementsByTagName(eb);for(var g=O,h=f.length;g<h;++g){var i=f[g],j=i.getAttribute(fb),k;if(j){j=j.replace(gb,V);if(j.indexOf(hb)>=O){continue}if(j==ib){k=i.getAttribute(jb);if(k){var l,m=k.indexOf(kb);if(m>=O){j=k.substring(O,m);l=k.substring(m+P)}else{j=k;l=V}c[j]=l}}else if(j==lb){k=i.getAttribute(jb);if(k){try{d=eval(k)}catch(a){alert(mb+k+nb)}}}else if(j==ob){k=i.getAttribute(jb);if(k){try{e=eval(k)}catch(a){alert(mb+k+pb)}}}}}__gwt_getMetaProperty=function(a){var b=c[a];return b==null?null:b};r=d;stockwatcher.__errFn=e}
function B(){n.__gwt_activeModules[L].superdevmode=true;var a=qb;var b=o.getElementsByTagName($);for(var c=O;;c++){var d=b[c];if(!d){break}var e=d.src;var f=e.lastIndexOf(a);if(f==e.length-a.length){return e.substring(O,f+P)}}n.alert(rb);return null}
function C(a){if(a.match(/^\//)){return a}if(a.match(/^[a-zA-Z]+:\/\//)){return a}return stockwatcher.__moduleBase+a}
function D(){var f=[];var g=O;var h=[];var i=[];function j(a){var b=i[a](),c=h[a];if(b in c){return b}var d=[];for(var e in c){d[c[e]]=e}if(r){r(a,d,b)}throw null}
__gwt_isKnownPropertyValue=function(a,b){return b in h[a]};stockwatcher.__getPropMap=function(){var a={};for(var b in h){if(h.hasOwnProperty(b)){a[b]=j(b)}}return a};stockwatcher.__computePropValue=j;n.__gwt_activeModules[L].bindings=stockwatcher.__getPropMap;q(H,sb);if(p()){return C(tb)}var k;try{k=ub;var l=k.indexOf(vb);if(l!=-1){g=parseInt(k.substring(l+P),Z);k=k.substring(O,l)}}catch(a){}stockwatcher.__softPermutationId=g;return C(k+wb)}
function F(){if(!n.__gwt_stylesLoaded){n.__gwt_stylesLoaded={}}function c(a){if(!__gwt_stylesLoaded[a]){var b=o.createElement(xb);b.setAttribute(yb,zb);b.setAttribute(Ab,C(a));o.getElementsByTagName(Bb)[O].appendChild(b);__gwt_stylesLoaded[a]=true}}
q(Cb,I);c(Db);q(Cb,Eb)}
A();stockwatcher.__moduleBase=B();s[L].moduleBase=stockwatcher.__moduleBase;var G=D();F();q(H,Eb);w(G);return true}
stockwatcher.succeeded=stockwatcher();