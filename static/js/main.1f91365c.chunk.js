(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,n){e.exports=n.p+"static/media/banner.01fc249a.jpg"},40:function(e,t,n){e.exports=n.p+"static/media/banner-header.4cc093ff.png"},44:function(e,t,n){e.exports=n(81)},68:function(e,t,n){},80:function(e,t,n){},81:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(24),l=n.n(r),u=n(23),c=n(11),o=n(41),s=n(20),h="KIEN_THUC_TOAN",m="KHOI_LOP",_="LOAI_HINH_HOC",d="CHUYEN_DE",v="NHOM_KIEN_THUC",g="NOI_DUNG",f="URI",y="C\xe1ch d\u1ec5 d\xe0ng \u0111\u1ec3 truy v\u1ea5n ki\u1ebfn th\u1ee9c trong th\u1ebf gi\u1edbi to\xe1n h\u1ecdc THPT ",p="\u0110\u01a1n gi\u1ea3n v\xe0 nhanh ch\xf3ng",E="Trang kh\xf4ng t\xecm th\u1ea5y",k="H\xe3y th\u1eed t\xecm ki\u1ebfm v\u1edbi m\u1ed9t c\xe2u h\u1ecfi kh\xe1c!",b="Tr\u01b0\u1eddng \u0110\u1ea1i h\u1ecdc C\xf4ng ngh\u1ec7 Th\xf4ng tin",N="https://www.uit.edu.vn/",w="Trang ch\u1ee7",O="C\xe2u h\u1ecfi t\u1ed5ng h\u1ee3p",q="https://www.linkedin.com/in/hanh-nguyen-9b164015b/",j="https://gmail.com/",I="https://www.facebook.com/alicehanhnguyen/",T="Copyright 2020 by Hanh Nguyen. All rights reserved",C="\u0110\u1ecdc th\xeam",S="T\xecm ki\u1ebfm",R="Nh\u1eadp nh\u1eefng g\xec b\u1ea1n mu\u1ed1n bi\u1ebft v\u1ec1...",U=" chuy\xean \u0111\u1ec1 / l\u1edbp",B="C\xe1c c\xe2u h\u1ecfi th\u01b0\u1eddng g\u1eb7p",D="Nh\u1eefng chuy\xean \u0111\u1ec1 b\u1ea1n c\u1ea7n quan t\xe2m",x="Nh\u1eefng \u01b0u \u0111i\u1ec3m v\u01b0\u1ee3t b\u1eadt c\u1ee7a h\u1ec7 th\u1ed1ng",A="K\u1ebft qu\u1ea3 t\xecm ki\u1ebfm",K=[{title:"dinh_nghia",name:"\u0110\u1ecbnh ngh\u0129a"},{title:"noi_dung",name:"N\u1ed9i dung"},{title:"vi_du",name:"V\xed d\u1ee5"},{title:"chung_minh",name:"Ch\u1ee9ng minh"},{title:"tinh_chat",name:"T\xednh ch\u1ea5t"},{title:"dinh_ly",name:"\u0110\u1ecbnh l\xfd"},{title:"cong_thuc",name:"C\xf4ng th\u1ee9c"},{title:"chu_y",name:"Ch\xfa \xfd"}],H="chuyende_",P="khoi_lop",L="nhomkienthuc_",Q="kienthuc_",F="hinhhoc_",G="noidung_",M=/[`!@#$%^&*()_+\-=[\]{}'"\\|<>/~]/,Y=function(e){return e.toLowerCase().normalize("NFD").replace(/ +(?= )/g,"").replace(/^\s+|\s+$/gm,"").replace(/[\u0300-\u036f]/g,"").replace(/\u0111/g,"d").replace(/\u0110/g,"D")},J=function(e){return e?-1!==e.indexOf(H)?{uri:e,type:d}:-1!==e.indexOf(P)?{uri:e,type:m}:-1!==e.indexOf(L)?{uri:e,type:v}:-1!==e.indexOf(Q)?{uri:e,type:h}:-1!==e.indexOf(F)?{uri:e,type:_}:{uri:e,type:g}:null},$=function(e,t){var n="",a=(t||[]).findIndex(function(t){return t.uri===e});return n=-1!==a?t[a].name:n},W=function(e){if(e.length>0){var t=[];return e.map(function(e){var n=t.findIndex(function(t){return t.uri===e.uri});return-1!==n?t[n].ds_tu_khoa.push(e):t.push({name:e.name,uri:e.uri,ds_tu_khoa:new Array(e)}),e}),t}return e},z=n(7),V=n.n(z),X={get:function(){var e=V.a.get(ne(Z.chuyenDeTheoKhoiLop)),t=V.a.get(ne(Z.tinhNang)),n=V.a.get(ne(Z.cauHoiGoiY));return V.a.all([e,t,n]).then(V.a.spread(function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var a={categories:t[0].data.results.bindings,features:t[1].data.results.bindings,questions:t[2].data.results.bindings};return a})).catch(function(e){console.log(e)})}},Z={chuyenDeTheoKhoiLop:"select * where { ?nkt a my:Chuyen_De. ?kl a my:Khoi_Lop. ?lhh a my:Loai_Hinh_Hoc. ?nkt my:ten ?chuyen_de. ?kl my:ten ?khoi_lop. ?lhh my:ten ?loai_hinh_hoc. ?nkt my:khoi_lop ?kl. ?nkt my:loai_hinh_hoc ?lhh. }",tinhNang:"select * where { ?tn a my:Tinh_Nang. ?tn my:hinh_anh ?hinh_anh. ?tn my:tieu_de ?tieu_de. ?tn my:noi_dung ?noi_dung. }",cauHoiGoiY:"select * where { ?ktt a my:Kien_Thuc_Toan. ?ktt my:dinh_nghia ?dinh_nghia. ?ktt my:cau_hoi_goi_y ?cau_hoi_goi_y. }"};var ee={get:function(){var e=V.a.get(ne(te.tuKhoa)),t=V.a.get(ne(te.cauHoiGoiY));return V.a.all([e,t]).then(V.a.spread(function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var a={keywords:t[0].data.results.bindings,questions:t[1].data.results.bindings};return a})).catch(function(e){console.log(e)})},getAnswerQuestion:function(e){var t=(e||[]).map(function(e){return V.a.get(ne(function(e){if(e){var t=J(e);switch(t.type){case h:return"select distinct * where { ?knowledge a my:Kien_Thuc_Toan. ?knowledge ?property ?obj . FILTER (?knowledge = <"+t.uri+">) }";case d:return"select distinct * where { ?level_uri_0 a my:Chuyen_De. ?level_uri_1 a my:Nhom_Kien_Thuc. ?level_uri_2 a my:Kien_Thuc_Toan. ?level_uri_0 my:ten ?level_0. ?level_uri_1 my:ten ?level_1. ?level_uri_2 my:ten ?level_2. ?level_uri_1 my:chuyen_de ?level_uri_0. ?level_uri_2 my:nhom_kien_thuc ?level_uri_1. FILTER (?level_uri_0 = <"+t.uri+">) }";case m:return"select distinct * where { ?level_uri_0 a my:Khoi_Lop. ?level_uri_1 a my:Chuyen_De. ?level_uri_2 a my:Nhom_Kien_Thuc. ?level_uri_3 a my:Kien_Thuc_Toan. ?level_uri_0 my:ten ?level_0. ?level_uri_1 my:ten ?level_1. ?level_uri_2 my:ten ?level_2. ?level_uri_3 my:ten ?level_3. ?level_uri_1 my:khoi_lop ?level_uri_0. ?level_uri_2 my:chuyen_de ?level_uri_1. ?level_uri_3 my:nhom_kien_thuc ?level_uri_2. FILTER (?level_uri_0 = <"+t.uri+">) }";case _:return"select distinct * where { ?level_uri_0 a my:Loai_Hinh_Hoc. ?level_uri_1 a my:Chuyen_De. ?level_uri_2 a my:Nhom_Kien_Thuc. ?level_uri_3 a my:Kien_Thuc_Toan. ?level_uri_0 my:ten ?level_0. ?level_uri_1 my:ten ?level_1. ?level_uri_2 my:ten ?level_2. ?level_uri_3 my:ten ?level_3. ?level_uri_1 my:loai_hinh_hoc ?level_uri_0. ?level_uri_2 my:chuyen_de ?level_uri_1. ?level_uri_3 my:nhom_kien_thuc ?level_uri_2. FILTER (?level_uri_0 = <"+t.uri+">) }";case v:return"select distinct * where { ?knowledge a my:Kien_Thuc_Toan. ?knowledgeGroup a my:Nhom_Kien_Thuc. ?knowledge ?property ?obj. ?knowledge my:nhom_kien_thuc ?knowledgeGroup. FILTER (?knowledgeGroup = <"+t.uri+">) }";case g:return"select distinct * where { ?level_uri_0 a my:Khoi_Lop. ?level_uri_1 a my:Chuyen_De. ?level_uri_2 a my:Nhom_Kien_Thuc. ?level_uri_3 a my:Kien_Thuc_Toan. ?level_uri_0 my:ten ?level_0. ?level_uri_1 my:ten ?level_1. ?level_uri_2 my:ten ?level_2. ?level_uri_3 my:ten ?level_3. ?level_uri_1 my:khoi_lop ?level_uri_0. ?level_uri_2 my:chuyen_de ?level_uri_1. ?level_uri_3 my:nhom_kien_thuc ?level_uri_2.}";default:return"select distinct * where { ?level_uri_0 a my:Khoi_Lop. ?level_uri_1 a my:Chuyen_De. ?level_uri_2 a my:Nhom_Kien_Thuc. ?level_uri_3 a my:Kien_Thuc_Toan. ?level_uri_0 my:ten ?level_0. ?level_uri_1 my:ten ?level_1. ?level_uri_2 my:ten ?level_2. ?level_uri_3 my:ten ?level_3. ?level_uri_1 my:khoi_lop ?level_uri_0. ?level_uri_2 my:chuyen_de ?level_uri_1. ?level_uri_3 my:nhom_kien_thuc ?level_uri_2. }"}}return e}(e)))});return V.a.all(t).then(V.a.spread(function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t})).catch(function(e){console.log(e)})}},te={tuKhoa:"select * where { ?id my:tu_khoa ?tu_khoa. }",cauHoiGoiY:"select * where { ?id my:cau_hoi_goi_y ?tu_khoa. }"};function ne(e){return"http://localhost:3030/Math/sparql?query="+encodeURIComponent("PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>"+"prefix my: <http://www.owl-ontologies.com/kienthuchinhhoc.owl#>"+e)}var ae="GET_HOME_DATA",ie=n(42),re="GET_CATEGORY_DATA",le="SEARCH_QUESTION_DATA",ue=function(e,t){var n=(t||[]).filter(function(t){return t.name===e});return n&&n.length?n.map(function(e){return e.uri}):null},ce=function(e,t){var n=t.keywords,a=t.questions;(n||[]).map(function(e){return e.name=Y(e.name),e}),(a||[]).map(function(e){return e.name=Y(e.name),e});var i,r=a.filter(function(e){return-1!==e.uri.indexOf(G)});if(!(i=ue(e,r))){var l=a.filter(function(e){return-1!==e.uri.indexOf(F)});if(!(i=ue(e,l))){var u=a.filter(function(e){return-1!==e.uri.indexOf(P)});if(!(i=ue(e,u))){var c=a.filter(function(e){return-1!==e.uri.indexOf(H)});if(!(i=ue(e,c))){var o=a.filter(function(e){return-1!==e.uri.indexOf(L)});if(!(i=ue(e,o))){var s=a.filter(function(e){return-1!==e.uri.indexOf(Q)});if(!(i=ue(e,s))){var h=(n||[]).filter(function(t){return-1!==e.indexOf(t.name)});h&&h.length>0&&(i=function(e,t){return e.map(function(e){var n=t.findIndex(function(t){return t.uri===e.uri});return-1!==n?t[n].names.push(e.name):t.push({uri:e.uri,names:new Array(e.name)}),e}),(t=t.filter(function(e){return e.names&&e.names.length>2?e:null})).sort(function(e,t){return t.names.length-e.names.length}),(t||[]).map(function(e){return e.uri})}(h,[]))}}}}}}return Object(ie.a)(new Set(i))},oe=function(e){return e.length>0?e.map(function(e){return{hinh_anh:e.hinh_anh?e.hinh_anh.value:"",noi_dung:e.noi_dung?e.noi_dung.value:"",tieu_de:e.tieu_de?e.tieu_de.value:"",nguoi_khoi_tao_uri:e.nguoi_khoi_tao?e.nguoi_khoi_tao.value:"",tinh_nang_uri:e.tn?e.tn.value:""}}):e},se=function(e){var t={};if(e){var n=e.ktt,a=e.chu_y,i=e.noi_dung,r=e.nguoi_khoi_tao,l=e.chung_minh,u=e.ten,c=e.ds_cau_hoi_goi_y,o=e.cong_thuc,s=e.tinh_chat,h=e.dinh_ly,m=e.vi_du,_=e.ds_tu_khoa,d=e.dinh_nghia,v=e.chu_de;t={chu_y:a?a.value:"",noi_dung:i?i.value:"",chung_minh:l?l.value:"",ten:u?u.value:"",cong_thuc:o?o.value:"",tinh_chat:s?s.value:"",dinh_ly:h?h.value:"",vi_du:m?m.value:"",dinh_nghia:d?d.value:"",nguoi_khoi_tao_uri:r?r.value:"",chu_de_uri:v?v.value:"",kien_thuc_toan_uri:n?n.value:"",ds_cau_hoi_goi_y:c,ds_tu_khoa:_}}return t},he=function(e){if(e.length>0){var t=[];return e.map(function(e){e.ds_cau_hoi_goi_y=[],e.ds_tu_khoa=[];var n=e.cau_hoi_goi_y?e.cau_hoi_goi_y.value:"",a=e.tu_khoa?e.tu_khoa.value:"",i=e.ktt?e.ktt.value:"",r=t.findIndex(function(e){return e.kien_thuc_toan_uri===i});return-1!==r?(n&&t[r].ds_cau_hoi_goi_y.push(n),a&&t[r].tu_khoa.push(a)):(n&&e.ds_cau_hoi_goi_y.push(n),a&&e.ds_tu_khoa.push(a),t.push(se(e))),e}),t}return e},me=function(e){return e.length>0?e.map(function(e){return{khoi_lop:e.khoi_lop?e.khoi_lop.value:"",loai_hinh_hoc:e.loai_hinh_hoc?e.loai_hinh_hoc.value:"",chuyen_de:e.chuyen_de?e.chuyen_de.value:"",khoi_lop_uri:e.kl?e.kl.value:"",loai_hinh_hoc_uri:e.lhh?e.lhh.value:"",chuyen_de_uri:e.nkt?e.nkt.value:""}}):e},_e=function(e){if(e.length>0){var t=[];return e.map(function(e){var n=t.findIndex(function(t){return t.khoi_lop_uri===e.khoi_lop_uri});return-1!==n?t[n].nhom_chuyen_de.push(e):t.push({khoi_lop:e.khoi_lop,khoi_lop_uri:e.khoi_lop_uri,nhom_chuyen_de:new Array(e)}),e}),t}return e},de=function(e){return e.length>0?e.map(function(e){return{uri:e.id?e.id.value:"",name:e.tu_khoa?e.tu_khoa.value:""}}):e},ve=function(e){var t={},n=["ten","chu_y","noi_dung","nhom_kien_thuc","chung_minh","cau_hoi_goi_y","cong_thuc","tinh_chat","dinh_ly","vi_du","dinh_nghia","nguoi_khoi_tao","tu_khoa"];return(e||[]).map(function(e){return n.map(function(n){return-1!==e.property.value.indexOf(n)&&(t[n]=t[n]?t[n]:e.obj,t.uri=t.uri?t.uri:e.knowledge),n}),e}),t},ge=function(e,t){var n=e.reduce(function(e,n){if(n[t].uri){var a=n[t].uri,i=n[t].name,r=a.split("#")[1];return e[r]||(e[r]={category:[],name:i,uri:a}),e[r].category.push(n),e}return null},{});return n?Object.values(n):null},fe=function(e,t){var n=[];return t[0].map(function(a){if(a.category&&a.category.length){var i=e(a.category,t[1]);n.push(Object(s.a)({},a,{category:i}))}return a}),n},ye=function(e,t){var n=[];return e.map(function(e){if(e.category&&e.category.length){var a=fe(ge,[e.category,t]);n.push(Object(s.a)({},e,{category:a}))}return e}),n},pe=function(e){if(e){if("knowledge"===e.head.vars[0]){var t=null;if("knowledgeGroup"===e.head.vars[1]){if(e.results.bindings&&e.results.bindings.length)(function(e,t){var n=e.reduce(function(e,n){var a=n[t].value;return e[a]||(e[a]=[]),e[a].push(n),e},{});return Object.values(n)}(e.results.bindings,"knowledge")||[]).map(function(e){return t||(t=[]),t.push(se(ve(e))),e})}else t=[se(ve(e.results.bindings))];return{data:t,type:"knowledge"}}var n=null;if(e.results.bindings&&e.results.bindings.length){var a,i,r,l=function(e){var t=[];return(e||[]).map(function(e){var n={level_0:e.level_0?{name:e.level_0.value,uri:e.level_uri_0.value}:{},level_1:e.level_1?{name:e.level_1.value,uri:e.level_uri_1.value}:{},level_2:e.level_2?{name:e.level_2.value,uri:e.level_uri_2.value}:{},level_3:e.level_3?{name:e.level_3.value,uri:e.level_uri_3.value}:{}};return t.push(n),e}),t}(e.results.bindings);if(l&&l.length)l[0].level_0&&(n=a=ge(l,"level_0")),l[0].level_1&&a&&a.length&&(n=i=fe(ge,[a,"level_1"])),l[0].level_2&&i&&i.length&&(n=r=ye(i,"level_2")),l[0].level_3&&r&&r.length&&(n=fe(ye,[r,"level_3"]))}return{data:n,type:"level"}}return e};var Ee=Object(u.b)({homeData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ae:var n=t.payload,a=me(n.categories),i=oe(n.features),r=he(n.questions),l=_e(a);return Object(s.a)({},e,{categories:l,features:i,questions:r});default:return e}},categoryData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case re:var n=t.payload,a=de(n.keywords),i=de(n.questions);return Object(s.a)({},e,{keywords:a,questions:i});case le:var r=(t.payload||[]).map(function(e){return pe(e.data)});return r=r.filter(function(e){return void 0!==e}),Object(s.a)({},e,{answers:r});default:return e}}}),ke=(n(68),n(6)),be=n(4),Ne=n(13),we=n(14),Oe=n(18),qe=n(15),je=n(19),Ie=n(2),Te=function(e){var t=e.questions,n=e.findTopicFollowAskQuestionSession;return i.a.createElement("div",{className:"fullwidth-block","data-bg-color":"#e6e6e6"},i.a.createElement("div",{className:"container"},i.a.createElement("h2",{className:"section-title"},B),i.a.createElement("br",null),i.a.createElement("div",{className:"row"},(t||[]).map(function(e,t){return i.a.createElement("div",{className:"col-md-4",key:t},i.a.createElement("dl",null,i.a.createElement("dt",null,i.a.createElement(ke.b,{to:"#",onClick:function(t){return n(t,e.kien_thuc_toan_uri)}},e.ds_cau_hoi_goi_y[0]+"?")),i.a.createElement("dd",{className:"ask-question-content"},i.a.createElement(Re,{content:e.dinh_nghia}))))})),i.a.createElement("div",{className:"row"},i.a.createElement(ke.b,{to:"recomment-questions",className:"col",style:{textAlign:"right",display:"block",fontStyle:"italic"}},C))))},Ce=n(21),Se=n.n(Ce),Re=function(e){var t=e.content;return i.a.createElement("div",{className:"display-content"},i.a.createElement(Se.a.Context,{input:"ascii"},i.a.createElement("div",null,(t?t.toString().replaceAll("margin-top: 0","margin-top: 0;display: inline-block;").split("-v-"):[]).map(function(e,t){switch(e.length>3&&e.substring(0,3)){case"Fml":return i.a.createElement(Se.a.Node,{inline:!0,key:t},e.substring(4,e.length));case"Img":return"";default:return i.a.createElement("span",{key:t,dangerouslySetInnerHTML:{__html:e}})}}))))},Ue=function(e){var t=e.questions,n=e.findTopicFollowAskQuestionSession;return i.a.createElement("div",{className:"fullwidth-block","data-bg-color":"#e6e6e6"},i.a.createElement("div",{className:"container"},i.a.createElement("h2",{className:"section-title"},B),i.a.createElement("br",null),i.a.createElement("div",{className:"row"},(t||[]).map(function(e,t){return i.a.createElement("div",{className:"col-md-6 col-12",key:t},i.a.createElement("dl",null,i.a.createElement("dt",{className:"ask-question-title"},i.a.createElement(ke.b,{to:"#",onClick:function(t){return n(t,e.uri)}},e.name+"?"))))}))))},Be=function(e){var t=e.data,n=[];return(t||[]).map(function(e){var t=[];return K.map(function(n){if(e[n.title]){var a=e[n.title].replaceAll("margin-top: 0","margin-top: 0;display: inline-block;");t.push({content:a.split("-v-"),name:n.name})}return n}),n.push({data:t,ten:e.ten}),e}),i.a.createElement("div",null,n.map(function(e,t){return i.a.createElement("div",{className:"answer-session",key:t},e.ten&&i.a.createElement("h3",{className:"text-orange"},e.ten),(e.data||[]).map(function(e,t){return i.a.createElement("div",{key:t},i.a.createElement("div",{className:"title font-weight-bold pb-2"},e.name),i.a.createElement(Se.a.Context,{input:"ascii"},i.a.createElement("div",{className:"content"},e.content.map(function(e,t){switch(e.length>3&&e.substring(0,3)){case"Fml":return i.a.createElement(Se.a.Node,{inline:!0,key:t},e.substring(4,e.length));case"Img":return i.a.createElement("img",{key:t,src:"/knowledge"+"/images/assets/".concat(e.substring(4,e.length)),alt:e.substring(4,e.length)});default:return i.a.createElement("span",{key:t,dangerouslySetInnerHTML:{__html:e}})}}))))}))}))},De=function(e){var t=e.value,n=e.handleSubmit,a=e.handleChange;return i.a.createElement("div",{className:"container"},i.a.createElement("form",{className:"subscribe-form",onSubmit:n},i.a.createElement("input",{type:"text",placeholder:R,onChange:a,value:t}),i.a.createElement("input",{type:"submit",value:S,disabled:!t||!1})))},xe=function(e){var t=e.categories,n=e.findTopicFollowTopicSession;return(t||[]).sort(function(e,t){return e.khoi_lop>t.khoi_lop?1:t.khoi_lop>e.khoi_lop?-1:0}),i.a.createElement("div",{className:"fullwidth-block"},i.a.createElement("div",{className:"container"},i.a.createElement("h2",{className:"section-title"},D),i.a.createElement("br",null),i.a.createElement("div",{className:"row"},(t||[]).map(function(e,t){return i.a.createElement("div",{className:"col-sm-4",key:t},i.a.createElement("div",{className:"pricing ".concat(t%2!==0?"featured":"")},i.a.createElement("div",{className:"pricing-header"},i.a.createElement(ke.b,{to:"#",onClick:function(t){return n(t,e.khoi_lop_uri)}},i.a.createElement("h3",{className:"pricing-title"},e.khoi_lop),i.a.createElement("div",{className:"price"},i.a.createElement("span",{className:"num"},e.nhom_chuyen_de.length,i.a.createElement("small",null,U))))),i.a.createElement("div",{className:"pricing-checklist"},i.a.createElement("ul",null,e.nhom_chuyen_de.map(function(e,t){return i.a.createElement("li",{className:"check",key:t},i.a.createElement(ke.b,{to:"#",onClick:function(t){return n(t,e.chuyen_de_uri)}},e.chuyen_de))})))))}))))};function Ae(e){var t=e.data,n=e.handleClickURI,a=function(e){e.currentTarget.parentElement.parentElement.classList.toggle("show")};return i.a.createElement("div",{className:"tree-container"},i.a.createElement("div",{className:"tree"},i.a.createElement("ul",null,(t||[]).map(function(e,t){var r=e.category,l=r&&r[0]&&r[0].uri;return i.a.createElement("li",{key:t},i.a.createElement("div",{className:"line-item ".concat(l&&"show")},i.a.createElement("span",{className:"content"},l&&i.a.createElement("i",{onClick:function(e){return a(e)}}),i.a.createElement("span",{className:"tree-text",onClick:function(t){return n(t,e.uri)}}," ",e.name))),l&&i.a.createElement("ul",null,(r||[]).map(function(e,t){var r=e.category,l=r&&r[0]&&r[0].uri;return i.a.createElement("li",{key:t},i.a.createElement("div",{className:"line-item ".concat(l&&"show")},i.a.createElement("span",{className:"content"},l&&i.a.createElement("i",{onClick:function(e){return a(e)}}),i.a.createElement("span",{className:"tree-text",onClick:function(t){return n(t,e.uri)}}," ",e.name))),l&&i.a.createElement("ul",null,(r||[]).map(function(e,t){var r=e.category,l=r&&r[0]&&r[0].uri;return i.a.createElement("li",{key:t},i.a.createElement("div",{className:"line-item ".concat(l&&"show")},i.a.createElement("span",{className:"content"},l&&i.a.createElement("i",{onClick:function(e){return a(e)}}),i.a.createElement("span",{className:"tree-text",onClick:function(t){return n(t,e.uri)}}," ",e.name))),l&&i.a.createElement("ul",null,(r||[]).map(function(e,t){var r=e.category,l=r&&r[0]&&r[0].uri;return i.a.createElement("li",{key:t},i.a.createElement("div",{className:"line-item ".concat(l&&"show")},i.a.createElement("span",{className:"content"},l&&i.a.createElement("i",{onClick:function(e){return a(e)}}),i.a.createElement("span",{className:"tree-text",onClick:function(t){return n(t,e.uri)}}," ",e.name))))})))})))})))}))))}var Ke=function(){return i.a.createElement("footer",{className:"site-footer"},i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"social-links"},i.a.createElement("a",{href:q,target:"_blank",rel:"noopener noreferrer",className:"linkedin"},i.a.createElement("i",{className:"fa fa-linkedin"})),i.a.createElement("a",{href:j,target:"_blank",rel:"noopener noreferrer",className:"google-plus"},i.a.createElement("i",{className:"fa fa-google-plus"})),i.a.createElement("a",{href:I,target:"_blank",rel:"noopener noreferrer",className:"facebook"},i.a.createElement("i",{className:"fa fa-facebook"}))),i.a.createElement("p",null,T)))},He=n(83),Pe=n(40),Le=n.n(Pe),Qe=function(e){var t=e.categories,n=e.findByNavigation;return(t||[]).sort(function(e,t){return e.khoi_lop>t.khoi_lop?1:t.khoi_lop>e.khoi_lop?-1:0}),i.a.createElement("div",{className:"header-top container"},i.a.createElement("div",{className:"header-banner"},i.a.createElement("a",{href:N,title:b,rel:"noopener noreferrer",target:"_blank"},i.a.createElement("img",{src:Le.a,alt:b,role:"presentation"}))),i.a.createElement(He.a,{defaultActiveKey:"/",onSelect:function(e){return n(e)}},i.a.createElement(He.a.Item,null,i.a.createElement(He.a.Link,{href:"/"},w)),(t||[]).map(function(e,t){return i.a.createElement(He.a.Item,{key:t},i.a.createElement(He.a.Link,{eventKey:e.khoi_lop_uri},e.khoi_lop))}),i.a.createElement(He.a.Item,null,i.a.createElement(He.a.Link,{eventKey:O},O))))},Fe=n(17),Ge=n.n(Fe),Me=function(e){function t(e){var n;return Object(Ne.a)(this,t),(n=Object(Oe.a)(this,Object(qe.a)(t).call(this,e))).state={questionPhrase:"",questionURI:"",type:null,redirect:null,generalQuestionRdc:!1},n.handleChange=n.handleChange.bind(Object(Ie.a)(Object(Ie.a)(n))),n.handleSubmit=n.handleSubmit.bind(Object(Ie.a)(Object(Ie.a)(n))),n.findByURI=n.findByURI.bind(Object(Ie.a)(Object(Ie.a)(n))),n.findByNavigation=n.findByNavigation.bind(Object(Ie.a)(Object(Ie.a)(n))),n}return Object(je.a)(t,e),Object(we.a)(t,[{key:"handleChange",value:function(e){this.setState({questionPhrase:M.test(e.target.value)?"":e.target.value,questionURI:M.test(e.target.value)?"":e.target.value})}},{key:"handleSubmit",value:function(e){this.state.questionPhrase&&this.setState({redirect:"/category",type:"CUM_TU"}),e.preventDefault()}},{key:"findByNavigation",value:function(e){if(e&&"/"!==e)if(e===O)this.setState({generalQuestionRdc:!0});else{var t=this.props.category;this.setState({questionPhrase:$(e,t?t.questions:[]),questionURI:e,redirect:"/category",type:f})}}},{key:"findByURI",value:function(e,t){e.preventDefault(),this.findByNavigation(t)}},{key:"render",value:function(){var e=this.props.data,t=this.state,n=t.questionPhrase,a=t.redirect,r=t.type,l=t.questionURI,u=t.generalQuestionRdc;if(e.length<=0)return null;if(a)return i.a.createElement(be.a,{to:{pathname:a,state:{question:l,type:r}}});if(u)return i.a.createElement(be.a,{to:{pathname:"recomment-questions"}});var c=e.features,o=e.questions,s=e.categories;return i.a.createElement("div",{className:"site-content"},i.a.createElement("div",{className:"top-header-content"},i.a.createElement(Qe,{categories:s,findByNavigation:this.findByNavigation})),i.a.createElement("div",{className:"hero-content"},i.a.createElement("h1",null,y,i.a.createElement("br",null),i.a.createElement("strong",null,p))),i.a.createElement("header",{className:"hero mb-30",style:{backgroundImage:"url("+Ge.a+")"}},i.a.createElement(De,{value:n,handleSubmit:this.handleSubmit,handleChange:this.handleChange})),i.a.createElement("main",{className:"main-content"},i.a.createElement("div",{className:"fullwidth-block"},i.a.createElement("div",{className:"container"},i.a.createElement("h2",{className:"section-title"},x),i.a.createElement("br",null),i.a.createElement("div",{className:"row"},c.map(function(e,t){return i.a.createElement("div",{className:"col-md col-sm-12",key:t},i.a.createElement("div",{className:"feature"},i.a.createElement("div",{className:"feature-icon"},i.a.createElement("img",{src:"/knowledge"+"/images/".concat(e.hinh_anh),alt:"",className:"icon"})),i.a.createElement("h3",{className:"feature-title"},e.tieu_de),i.a.createElement("p",null,e.noi_dung)))})))),i.a.createElement(xe,{categories:s,findTopicFollowTopicSession:this.findByURI}),i.a.createElement(Te,{questions:o.slice(0,6),findTopicFollowAskQuestionSession:this.findByURI})),i.a.createElement(Ke,null))}}]),t}(a.Component),Ye=Object(c.b)(function(e){return{data:e.homeData,category:e.categoryData}},null)(Me),Je=function(e){function t(e){var n;Object(Ne.a)(this,t),n=Object(Oe.a)(this,Object(qe.a)(t).call(this,e));var a=e.location.state,i="",r="";return a&&(i=a.question,r=$(a.question,e.data.questions)),n.state={questionURI:i,questionPhrase:r,generalQuestionRdc:!1},window.history.replaceState(null,""),n.handleChange=n.handleChange.bind(Object(Ie.a)(Object(Ie.a)(n))),n.handleSubmit=n.handleSubmit.bind(Object(Ie.a)(Object(Ie.a)(n))),n.findByURI=n.findByURI.bind(Object(Ie.a)(Object(Ie.a)(n))),n.findByNavigation=n.findByNavigation.bind(Object(Ie.a)(Object(Ie.a)(n))),n}return Object(je.a)(t,e),Object(we.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.location,n=e.data,a=e.searchQuestion;if(t.state&&t.state.question&&t.state.type&&n){var i=t.state;a(i.question,n,i.type)}}},{key:"handleChange",value:function(e){this.setState({questionURI:M.test(e.target.value)?"":e.target.value,questionPhrase:M.test(e.target.value)?"":e.target.value})}},{key:"handleSubmit",value:function(e){e.preventDefault();var t=this.state,n=t.questionPhrase;if(t.questionURI){this.setState({type:"CUM_TU"});var a=this.props;(0,a.searchQuestion)(n,a.data,"CUM_TU"),window.scrollTo(0,0)}}},{key:"findByNavigation",value:function(e){if(e&&"/"!==e)if(e===O)this.setState({generalQuestionRdc:!0});else{var t=this.props,n=t.searchQuestion,a=t.data;this.setState({questionURI:e,type:f,questionPhrase:$(e,a.questions)}),n(e,a,f),window.scrollTo(0,0)}}},{key:"findByURI",value:function(e,t){e.preventDefault(),this.findByNavigation(t)}},{key:"render",value:function(){var e=this,t=this.props,n=t.data,a=t.globalData,r=this.state,l=r.questionPhrase;if(r.generalQuestionRdc)return i.a.createElement(be.a,{to:{pathname:"recomment-questions"}});if(n.length<=0||a.length<=0)return null;var u=a.questions,c=a.categories,o=n.answers;return i.a.createElement("div",{className:"site-content site-content-category"},i.a.createElement("div",{className:"top-header-content"},i.a.createElement(Qe,{categories:c,findByNavigation:this.findByNavigation})),i.a.createElement("header",{className:"hero"},i.a.createElement("div",{className:"fullwidth-block footer-cta",style:{backgroundImage:"url("+Ge.a+")"}},i.a.createElement(De,{value:l,handleSubmit:this.handleSubmit,handleChange:this.handleChange}))),i.a.createElement("main",{className:"main-content"},o&&o.length&&i.a.createElement("div",{className:"fullwidth-block container"},i.a.createElement("h2",{className:"section-title"},A),o.map(function(t,n){return"level"===t.type?i.a.createElement("div",{key:n,className:"dashboard-sidebar"},i.a.createElement(Ae,{data:t.data,handleClickURI:e.findByURI})):"knowledge"===t.type?i.a.createElement("div",{key:n,className:"fullwidth-block"},i.a.createElement(Be,{data:t.data})):t})),i.a.createElement(Te,{questions:u.slice(0,6),findTopicFollowAskQuestionSession:this.findByURI}),i.a.createElement(xe,{categories:c,findTopicFollowTopicSession:this.findByURI})),i.a.createElement(Ke,null))}}]),t}(a.Component),$e=Object(c.b)(function(e){return{data:e.categoryData,globalData:e.homeData}},function(e){return{searchQuestion:function(t,n,a){return e(function(e,t,n){var a=[];return n===f?a.push(e):a=ce(Y(e),t),function(e){ee.getAnswerQuestion(a).then(function(t){e({type:le,payload:t})})}}(t,n,a))}}})(Je),We=function(e){function t(e){var n;return Object(Ne.a)(this,t),(n=Object(Oe.a)(this,Object(qe.a)(t).call(this,e))).state={questionPhrase:"",questionURI:"",type:null,redirect:null},n.handleChange=n.handleChange.bind(Object(Ie.a)(Object(Ie.a)(n))),n.handleSubmit=n.handleSubmit.bind(Object(Ie.a)(Object(Ie.a)(n))),n.findByURI=n.findByURI.bind(Object(Ie.a)(Object(Ie.a)(n))),n.findByNavigation=n.findByNavigation.bind(Object(Ie.a)(Object(Ie.a)(n))),n}return Object(je.a)(t,e),Object(we.a)(t,[{key:"handleChange",value:function(e){this.setState({questionPhrase:M.test(e.target.value)?"":e.target.value,questionURI:M.test(e.target.value)?"":e.target.value})}},{key:"handleSubmit",value:function(e){this.state.questionPhrase&&this.setState({redirect:"/category",type:"CUM_TU"}),e.preventDefault()}},{key:"findByNavigation",value:function(e){if(e&&"/"!==e&&e!==O){var t=this.props.category;this.setState({questionPhrase:$(e,t?t.questions:[]),questionURI:e,redirect:"/category",type:f})}}},{key:"findByURI",value:function(e,t){e.preventDefault(),this.findByNavigation(t)}},{key:"render",value:function(){var e=this.props,t=e.data,n=e.category,a=this.state,r=a.questionPhrase,l=a.redirect,u=a.type,c=a.questionURI;if(t.length<=0)return null;if(l)return i.a.createElement(be.a,{to:{pathname:l,state:{question:c,type:u}}});var o=t.categories,s=n.questions;return i.a.createElement("div",{className:"site-content"},i.a.createElement("div",{className:"top-header-content"},i.a.createElement(Qe,{categories:o,findByNavigation:this.findByNavigation})),i.a.createElement("div",{className:"hero-content"},i.a.createElement("h1",null,y,i.a.createElement("br",null),i.a.createElement("strong",null,p))),i.a.createElement("header",{className:"hero mb-30",style:{backgroundImage:"url("+Ge.a+")"}},i.a.createElement(De,{value:r,handleSubmit:this.handleSubmit,handleChange:this.handleChange})),i.a.createElement("main",{className:"main-content"},i.a.createElement(Ue,{questions:W(s),findTopicFollowAskQuestionSession:this.findByURI}),i.a.createElement(xe,{categories:o,findTopicFollowTopicSession:this.findByURI})),i.a.createElement(Ke,null))}}]),t}(a.Component),ze=Object(c.b)(function(e){return{data:e.homeData,category:e.categoryData}},null)(We),Ve=function(e){function t(e){var n;return Object(Ne.a)(this,t),(n=Object(Oe.a)(this,Object(qe.a)(t).call(this,e))).state={questionPhrase:"",questionURI:"",type:null,redirect:null,generalQuestionRdc:!1},n.handleChange=n.handleChange.bind(Object(Ie.a)(Object(Ie.a)(n))),n.handleSubmit=n.handleSubmit.bind(Object(Ie.a)(Object(Ie.a)(n))),n.findByURI=n.findByURI.bind(Object(Ie.a)(Object(Ie.a)(n))),n.findByNavigation=n.findByNavigation.bind(Object(Ie.a)(Object(Ie.a)(n))),n}return Object(je.a)(t,e),Object(we.a)(t,[{key:"handleChange",value:function(e){this.setState({questionPhrase:M.test(e.target.value)?"":e.target.value,questionURI:M.test(e.target.value)?"":e.target.value})}},{key:"handleSubmit",value:function(e){this.state.questionPhrase&&this.setState({redirect:"/category",type:"CUM_TU"}),e.preventDefault()}},{key:"findByNavigation",value:function(e){if(e&&"/"!==e)if(e===O)this.setState({generalQuestionRdc:!0});else{var t=this.props.category;this.setState({questionPhrase:$(e,t?t.questions:[]),questionURI:e,redirect:"/category",type:f})}}},{key:"findByURI",value:function(e,t){e.preventDefault(),this.findByNavigation(t)}},{key:"render",value:function(){var e=this.props.globalData;if(e.length<=0)return null;var t=this.state,n=t.questionPhrase,a=t.redirect,r=t.type,l=t.questionURI,u=t.generalQuestionRdc;if(a)return i.a.createElement(be.a,{to:{pathname:a,state:{question:l,type:r}}});if(u)return i.a.createElement(be.a,{to:{pathname:"recomment-questions"}});var c=e.categories;return i.a.createElement("div",{className:"site-content"},i.a.createElement("div",{className:"top-header-content"},i.a.createElement(Qe,{categories:c,findByNavigation:this.findByNavigation})),i.a.createElement("div",{className:"hero-content"},i.a.createElement("h1",null,y,i.a.createElement("br",null),i.a.createElement("strong",null,p))),i.a.createElement("header",{className:"hero mb-30",style:{backgroundImage:"url("+Ge.a+")"}},i.a.createElement(De,{value:n,handleSubmit:this.handleSubmit,handleChange:this.handleChange})),i.a.createElement("main",{className:"main-content"},i.a.createElement("div",{className:"fullwidth-block"},i.a.createElement("div",{className:"container"},i.a.createElement("h2",{className:"section-title"},E),i.a.createElement("small",{className:"section-subtitle"},k)))),i.a.createElement(Ke,null))}}]),t}(a.Component),Xe=Object(c.b)(function(e){return{globalData:e.homeData}},null)(Ve);n(80);var Ze=function(){return i.a.createElement("div",{className:"App"},i.a.createElement(ke.a,null,i.a.createElement(be.d,null,i.a.createElement(be.b,{exact:!0,path:"/",component:Ye}),i.a.createElement(be.b,{exact:!0,path:"/category",component:$e}),i.a.createElement(be.b,{exact:!0,path:"/recomment-questions",component:ze}),i.a.createElement(be.b,{component:Xe}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var et=function(){try{var e=localStorage.getItem("state");if(null===e)return;return JSON.parse(e)}catch(t){return}}(),tt=Object(u.c)(Ee,et,Object(u.a)(o.a));tt.dispatch(function(e){ee.get().then(function(t){e({type:re,payload:t})})}),tt.dispatch(function(e){X.get().then(function(t){e({type:ae,payload:t})})}),tt.subscribe(function(){var e;0!==(e={categoryData:tt.getState().categoryData}).categoryData.length&&localStorage.setItem("state",JSON.stringify(e))}),l.a.render(i.a.createElement(c.a,{store:tt},i.a.createElement(Ze,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()}).catch(function(e){console.error(e.message)})}},[[44,1,2]]]);
//# sourceMappingURL=main.1f91365c.chunk.js.map