(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[10],{kc7l:function(e,t,r){"use strict";var n=r("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.queryCustomers=o,t.createCustomer=i,t.createDraftOrder=l;var a=n(r("d6i3")),s=n(r("1l/V")),u=n(r("t3Un")),c=r("dENc");function o(){return p.apply(this,arguments)}function p(){return p=(0,s.default)(a.default.mark(function e(){return a.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,u.default.get(c.apiBase+"/customers.json");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)})),p.apply(this,arguments)}function i(e){return d.apply(this,arguments)}function d(){return d=(0,s.default)(a.default.mark(function e(t){return a.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,u.default.post(c.apiBase+"/customers.json",t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)})),d.apply(this,arguments)}function l(e){return f.apply(this,arguments)}function f(){return f=(0,s.default)(a.default.mark(function e(t){return a.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,u.default.post(c.apiBase+"/draft_orders.json",t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}},e)})),f.apply(this,arguments)}},y6bw:function(e,t,r){"use strict";var n=r("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(r("p0pE")),s=n(r("d6i3")),u=r("kc7l"),c={first_name:"",last_name:"",company:"",phone:"",address1:"",city:"",country:"",province:"",zip:""},o={first_name:"",last_name:"",company:"",phone:"",address1:"",city:"",country:"",province:"",zip:""},p={namespace:"newdrafts",state:{customers:[],customer:"",shipping_address:c,billing_address:o},effects:{setCustomers_e:s.default.mark(function e(t,r){var n,a,c;return s.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=r.call,a=r.put,r.select,e.next=3,n(u.queryCustomers);case 3:return c=e.sent,e.next=6,a({type:"setCustomers_r",payload:c.data.customers});case 6:case"end":return e.stop()}},e)}),setCustomer_e:s.default.mark(function e(t,r){var n,a,u,c,o,p,i,d,l,f,y,m,_,h,v,w,x,b,k,g;return s.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r.call,n=r.put,a=r.select,e.next=3,a();case 3:u=e.sent,c=u.newdrafts,p=!0,i=!1,d=void 0,e.prev=8,l=c.customers.values()[Symbol.iterator]();case 10:if(p=(f=l.next()).done){e.next=17;break}if(o=f.value,o.id!==t.payload){e.next=14;break}return e.abrupt("break",17);case 14:p=!0,e.next=10;break;case 17:e.next=23;break;case 19:e.prev=19,e.t0=e["catch"](8),i=!0,d=e.t0;case 23:e.prev=23,e.prev=24,p||null==l.return||l.return();case 26:if(e.prev=26,!i){e.next=29;break}throw d;case 29:return e.finish(26);case 30:return e.finish(23);case 31:return e.next=33,n({type:"setCustomer_r",payload:o});case 33:return y=o.default_address,m=y.first_name,_=y.last_name,h=y.company,v=y.phone,w=y.address1,x=y.city,b=y.country,k=y.province,g=y.zip,e.next=36,n({type:"setShippingAddress_r",payload:{first_name:m,last_name:_,company:h,phone:v,address1:w,city:x,country:b,province:k,zip:g}});case 36:return e.next=38,n({type:"setBillingAddress_r",payload:{first_name:m,last_name:_,company:h,phone:v,address1:w,city:x,country:b,province:k,zip:g}});case 38:case"end":return e.stop()}},e,null,[[8,19,23,31],[24,,26,30]])}),createCustomer_e:s.default.mark(function e(t,r){var n,a,c,o,p,i,d,l,f,y,m,_,h;return s.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=r.call,a=r.put,r.select,console.log(t.payload),e.next=4,n(u.createCustomer,t.payload);case 4:if(c=e.sent,null!==c){e.next=9;break}alert("\u521b\u5efa\u5931\u8d25"),e.next=16;break;case 9:return e.next=11,a({type:"setCustomer_r",payload:c.data.customer});case 11:return o=c.data.customer.default_address,p=o.first_name,i=o.last_name,d=o.company,l=o.phone,f=o.address1,y=o.city,m=o.country,_=o.province,h=o.zip,e.next=14,a({type:"setShippingAddress_r",payload:{first_name:p,last_name:i,company:d,phone:l,address1:f,city:y,country:m,province:_,zip:h}});case 14:return e.next=16,a({type:"setBillingAddress_r",payload:{first_name:p,last_name:i,company:d,phone:l,address1:f,city:y,country:m,province:_,zip:h}});case 16:case"end":return e.stop()}},e)})},reducers:{setCustomer_r:function(e,t){return(0,a.default)({},e,{customer:t.payload})},setCustomers_r:function(e,t){return(0,a.default)({},e,{customers:t.payload})},setShippingAddress_r:function(e,t){return(0,a.default)({},e,{shipping_address:t.payload})},setBillingAddress_r:function(e,t){return(0,a.default)({},e,{billing_address:t.payload})}}},i=p;t.default=i}}]);