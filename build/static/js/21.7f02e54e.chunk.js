(this["webpackJsonphallo-doctor-admin"]=this["webpackJsonphallo-doctor-admin"]||[]).push([[21],{477:function(e,a,r){"use strict";r.r(a);var n=r(7),o=r.n(n),s=r(40),t=r(121),i=r(483),l=r(485),c=r(242),u=r(488),m=r(482),g=r(110),p=r(41),b=r(494),f=r(43),d=r(86),j=r(4);a.default=function(){var e,a=Object(f.g)(),r=Object(p.d)(),n=i.a.useForm(),h=Object(t.a)(n,1)[0],v=l.a.confirm,C=Object(p.e)((function(e){return{saveImageCarouselLoading:e.settings.saveImageCarouselLoading,saveImageCarouselSuccess:e.settings.saveImageCarouselSuccess,saveImageCarouselError:e.settings.saveImageCarouselError}}),p.c),I=C.saveImageCarouselLoading,O=C.saveImageCarouselSuccess,y=C.saveImageCarouselError;!0===O&&(c.b.success("success add new image carousel"),a.goBack()),!0===y&&c.b.error("Error : "+y);var w=function(){var a=Object(s.a)(o.a.mark((function a(n){var s;return o.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:e?(s={fileName:n.image_carousel.file.name,file:n.image_carousel.fileList[0].originFileObj},r(Object(d.j)(s))):c.b.error("Image can't be empty");case 1:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}(),x=function(){var a=Object(s.a)(o.a.mark((function a(r){return o.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:console.log("\ud83d\ude80 ~ file: index.js ~ line 56 ~ onImageRemove ~ values",e),e=null;case 2:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}();return Object(j.jsx)(u.a,{title:"New Image Corausel",loading:I,children:Object(j.jsxs)(i.a,{labelCol:{span:3},wrapperCol:{span:10},form:h,name:"doctor_category_input",onFinish:function(e){v({title:"Are you sure you want to upload this image into a carousel",content:"This image will be seen by all your clients on the main page",onOk:function(){w(e)},onCancel:function(){}})},scrollToFirstError:!0,labelAlign:"left",initialValues:null,children:[Object(j.jsx)(i.a.Item,{name:"image_carousel",label:"Image Carousel",rules:[{required:!1,message:"Please chose Category Icon"}],children:Object(j.jsx)(m.a,{name:"logo",listType:"picture",multiple:!0,maxCount:1,beforeUpload:function(a){"image/jpeg"===a.type||"image/png"===a.type?a.size/1024/1024<2?e=a:c.b.error("Image must smaller than 2MB!"):c.b.error("You can only upload JPG/PNG file!")},onRemove:x,children:Object(j.jsx)(g.a,{icon:Object(j.jsx)(b.a,{}),children:"Click to upload"})})}),Object(j.jsx)(i.a.Item,{wrapperCol:{offset:3,span:16},children:Object(j.jsx)(g.a,{type:"primary",htmlType:"submit",children:"Submit"})})]})})}}}]);
//# sourceMappingURL=21.7f02e54e.chunk.js.map