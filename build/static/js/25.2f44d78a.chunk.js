(this["webpackJsonphallo-doctor-admin"]=this["webpackJsonphallo-doctor-admin"]||[]).push([[25],{491:function(e,s,a){"use strict";a.r(s);var t=a(6),r=a(0),c=a(121),i=a(41),n=a(470),o=a(495),l=a(483),d=a(489),m=a(364),j=a(110),u=a(52),h=a(43),b=a(402),g=a(4),x={email:[{required:!0,message:"Please input your email address"},{type:"email",message:"Please enter a validate email!"}],password:[{required:!0,message:"Please input your password"}],confirm:[{required:!0,message:"Please confirm your password!"},function(e){var s=e.getFieldValue;return{validator:function(e,a){return a&&s("password")!==a?Promise.reject("Passwords do not match!"):Promise.resolve()}}}]},p={signUp:u.l,showAuthMessage:u.c,hideAuthMessage:u.b,showLoading:u.d},O=Object(i.b)((function(e){var s=e.auth;return{loading:s.loading,message:s.message,showMessage:s.showMessage,token:s.token,redirect:s.redirect}}),p)((function(e){var s=e.signUp,a=e.showLoading,t=e.token,i=e.loading,u=e.redirect,p=e.message,O=e.showMessage,f=e.hideAuthMessage,w=e.allowRedirect,y=l.a.useForm(),v=Object(c.a)(y,1)[0],k=Object(h.g)();return Object(r.useEffect)((function(){null!==t&&w&&k.push(u),O&&setTimeout((function(){f()}),3e3)})),Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(b.a.div,{initial:{opacity:0,marginBottom:0},animate:{opacity:O?1:0,marginBottom:O?20:0},children:Object(g.jsx)(d.a,{type:"error",showIcon:!0,message:p})}),Object(g.jsxs)(l.a,{form:v,layout:"vertical",name:"register-form",onFinish:function(){v.validateFields().then((function(e){a(),s(e)})).catch((function(e){console.log("Validate Failed:",e)}))},children:[Object(g.jsx)(l.a.Item,{name:"email",label:"Email",rules:x.email,hasFeedback:!0,children:Object(g.jsx)(m.a,{prefix:Object(g.jsx)(n.a,{className:"text-primary"})})}),Object(g.jsx)(l.a.Item,{name:"password",label:"Password",rules:x.password,hasFeedback:!0,children:Object(g.jsx)(m.a.Password,{prefix:Object(g.jsx)(o.a,{className:"text-primary"})})}),Object(g.jsx)(l.a.Item,{name:"confirm",label:"ConfirmPassword",rules:x.confirm,hasFeedback:!0,children:Object(g.jsx)(m.a.Password,{prefix:Object(g.jsx)(o.a,{className:"text-primary"})})}),Object(g.jsx)(l.a.Item,{children:Object(g.jsx)(j.a,{type:"primary",htmlType:"submit",block:!0,loading:i,children:"Sign Up"})})]})]})})),f=a(403),w=a(404),y=a(488),v={backgroundImage:"url(/img/others/img-17.jpg)",backgroundRepeat:"no-repeat",backgroundSize:"cover"};s.default=function(e){var s=Object(i.e)((function(e){return e.theme.currentTheme}));return Object(g.jsx)("div",{className:"h-100",style:v,children:Object(g.jsx)("div",{className:"container d-flex flex-column justify-content-center h-100",children:Object(g.jsx)(f.a,{justify:"center",children:Object(g.jsx)(w.a,{xs:20,sm:20,md:20,lg:7,children:Object(g.jsx)(y.a,{children:Object(g.jsxs)("div",{className:"my-2",children:[Object(g.jsxs)("div",{className:"text-center",children:[Object(g.jsx)("img",{className:"img-fluid",src:"/img/".concat("light"===s?"logo.png":"logo-white.png"),alt:""}),Object(g.jsx)("p",{className:"text-muted",children:"Create a new account:"})]}),Object(g.jsx)(f.a,{justify:"center",children:Object(g.jsx)(w.a,{xs:24,sm:24,md:20,lg:20,children:Object(g.jsx)(O,Object(t.a)({},e))})})]})})})})})})}}}]);
//# sourceMappingURL=25.2f44d78a.chunk.js.map