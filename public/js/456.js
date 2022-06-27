"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[456,266,38],{6266:(e,o,t)=>{t.r(o),t.d(o,{default:()=>g});var r=t(8222),n={class:"flex flex-col"},a={class:"mr-auto"},l={class:"mx-auto mb-2"},s={class:"text-2xl text-variable text-center"},i={class:"w-11/12 mx-auto"},c=(0,r.createTextVNode)(" Para asignar "),u=(0,r.createTextVNode)(" Asignados ");var d=t(3541),f=t(2262);function m(e,o){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);o&&(r=r.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{};o%2?m(Object(t),!0).forEach((function(o){b(e,o,t[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):m(Object(t)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))}))}return e}function b(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}const h={components:{PickList:d.Z},props:{curso:{type:Object,default:{}},usuarios:{type:Array,default:[]},cursos:{type:Array,default:[]}},emits:["go_back","sincronizar"],setup:function(e,o){var t=o.emit,r=(0,f.Fl)({get:function(){return n.usuarios_x?n.usuarios_x:[e.usuarios.map((function(e){return p({label:e.persona.nombre+" "+e.persona.apellido_p,value:e.id_usuario},e)})).filter((function(o){return!e.curso.usuarios.some((function(e){return e.id_usuario==o.id_usuario}))})),e.curso.usuarios.map((function(o){var t=e.usuarios.find((function(e){return e.id_usuario==o.id_usuario}));return p({label:t.persona.nombre+" "+t.persona.apellido_p,value:t.id_usuario},t)}))]},set:function(e){n.usuarios_x=e}}),n=(0,f.qj)({usuario_seleccionado:{},usuarios_x:null}),a=function(e,o){return e.length===o.length&&e.every((function(e,t){return e===o[t]}))};return{sincronizar:function(){if(null!=n.usuarios_x){var o=e.cursos.find((function(o){return o.id_curso==e.curso.id_curso})).usuarios.map((function(e){return e.id_usuario})),r=n.usuarios_x[1].map((function(e){return e.value}));a(o,r)||t("sincronizar",{id_curso:e.curso.id_curso,usuarios:r})}},log:function(e){console.log(e)},valores:n,usuarios_t:r,go_back:function(){t("go_back")}}}};const g=(0,t(3744).Z)(h,[["render",function(e,o,t,d,f,m){var p,b=(0,r.resolveComponent)("PickList");return(0,r.openBlock)(),(0,r.createElementBlock)("div",n,[(0,r.createElementVNode)("div",a,[(0,r.createElementVNode)("button",{class:"m-2 p-2 bg-blue-600 rounded-lg text-variable",onClick:o[0]||(o[0]=function(){return d.go_back&&d.go_back.apply(d,arguments)})}," Regresar ")]),(0,r.createElementVNode)("div",l,[(0,r.createElementVNode)("p",s," Estás asignando usuarios al aula "+(0,r.toDisplayString)(null===(p=t.curso.plantilla)||void 0===p?void 0:p.nombre),1)]),(0,r.createElementVNode)("div",i,[(0,r.createVNode)(b,{modelValue:d.usuarios_t,"onUpdate:modelValue":o[1]||(o[1]=function(e){return d.usuarios_t=e}),dataKey:"value",onSelectionChange:d.sincronizar,stripedRows:!0},{sourceheader:(0,r.withCtx)((function(){return[c]})),targetheader:(0,r.withCtx)((function(){return[u]})),item:(0,r.withCtx)((function(e){return[(0,r.createElementVNode)("span",null,(0,r.toDisplayString)(e.item.label+" - "+e.item.rol.nombre),1)]})),_:1},8,["modelValue","onSelectionChange"])])])}]])},8456:(e,o,t)=>{t.r(o),t.d(o,{default:()=>R});var r=t(8222),n={key:0,class:"flex flex-col"},a=(0,r.createElementVNode)("div",{class:"mx-auto m-2"},[(0,r.createElementVNode)("p",{class:"text-center text-5xl text-variable"},"Tabla de cursos")],-1),l={class:"w-11/12 mx-auto"},s=(0,r.createElementVNode)("p",null,"Esto está vacio... añade cursos!",-1),i={class:"flex md:flex-row flex-col"},c={class:"mr-auto"},u={class:"p-input-icon-right"},d=(0,r.createElementVNode)("i",{class:"pi pi-search"},null,-1),f={class:"flex sm:flex-row sm:ml-auto flex-col"},m=["disabled"],p=["disabled"],b=["disabled"],h={key:0},g=["src","alt"],v={class:"image-text"},_={key:1},x=["onClick"],y={class:"grid xl:grid-cols-2 xl:gap-6 mt-2"},V=(0,r.createElementVNode)("span",{class:"block text-sm font-bold mb-2"}," Nombre del curso ",-1),N=(0,r.createElementVNode)("span",{class:"block text-sm font-bold mb-2"}," Descripción del curso ",-1),w=(0,r.createElementVNode)("span",{class:"block text-sm font-bold mb-2"}," Fecha de inicio del curso ",-1),E=(0,r.createElementVNode)("span",{class:"block text-sm font-bold mb-2"}," Fecha de fin del curso ",-1),k=(0,r.createElementVNode)("span",{class:"block text-sm font-bold mb-2"}," Fecha de extensión del curso ",-1),C=(0,r.createElementVNode)("span",{class:"block text-sm font-bold mb-2"}," Añade una imagen ",-1),S={class:"flex justify-start mt-2"},O=(0,r.createTextVNode)(" Cargar imagen "),D=["disabled"];var B=t(4038),j=t(8094),A=t(5247),T=t(6358),I=t(3609),M=t(8223),z=t(6266),U=t(9680),P=t(1533),F=t(1790);t(9757);const Z={layout:B.default,props:{usuario:{type:Object,required:!0},cursos:{type:Array,required:!0},usuarios:{type:Array,required:!0}},components:{Cropper:F.fl,Calendar:M.Z,Dialog:I.Z,NavBar:B.default,DataTable:j.Z,Column:A.Z,Asignar:z.default},setup:function(e){var o=(0,r.ref)(null),t=(0,r.ref)(null),n=(0,r.reactive)({curso_seleccionado:{},showModal:!1,accion:"",fecha_inicio:"",fecha_fin:"",fecha_extension:"",nombre:"",descripcion:"",id_imagen:"",editando_curso:!1}),a=(0,r.reactive)({global:{value:"",matchMode:T.a6.Contains}}),l=function(){n.nombre="",n.descripcion="",n.fecha_inicio="",n.fecha_fin="",n.fecha_extension="",n.id_imagen="",n.curso_seleccionado={},i.src=""},s=function(e){var o=e.split("/");return new Date(+o[2],o[1]-1,+o[0])},i=(0,r.reactive)({src:"",type:""}),c=function(){var e=o.value.getResult().canvas;console.log("id imagen",n.id_imagen);var t=new FormData;t.append("id",n.id_imagen),e.toBlob((function(e){U.Inertia.post(route("editFileUpload"),(t.append("file",e),t),{only:["flash","errors","cursos"],preserveState:!0,preserveScroll:!0,onSuccess:function(e){console.log(e,"ok");var o=i.src;i.src="",i.src=o},onError:function(e){console.log(e,"error")}})}))};return{terminar_curso:function(e){U.Inertia.post(route("dashboard_adm_cursos_terminar"),{id_curso:e},{only:["cursos","flash","errors"],onSuccess:function(e){P.Notify.success(e.props.flash.success)}})},delete_curso:function(){U.Inertia.post(route("dashboard_adm_cursos_eliminar"),{id_curso:n.curso_seleccionado.id_curso},{only:["cursos","flash","errors"],preserveState:!0,preserveScroll:!0,onSuccess:function(e){P.Notify.success(e.props.flash.success),n.curso_seleccionado={}},onError:function(e){for(var o in e)P.Notify.failure(e[o])}})},recargarCursos:function(e){console.log(e),U.Inertia.post(route("dashboard_adm_cursos_sincronizar"),e,{preserveScroll:!0,preserveState:!0,only:["cursos","flash","errors"],onSuccess:function(e){P.Notify.success(e.props.flash.success)},onError:function(e){console.log(e,"error")}})},defaultSize:function(e){return{width:e.imageSize.width,height:e.imageSize.height}},file:t,crop:o,cropImage:c,uploadImage:function(o){var t=o.target.files;t&&t[0]&&(i.src&&URL.revokeObjectURL(i.src),U.Inertia.post(route("fileUpload"),{file:t[0],nombre:e.usuario.persona.nombre+" - "+e.usuario.persona.ci,descripcion:"Imagen de curso"},{only:["flash","errors"],preserveState:!0,preserveScroll:!0,onSuccess:function(e){i.src="/"+e.props.flash.success.url,i.type=t[0].type,n.id_imagen=e.props.flash.success.id,console.log("el id es",n.id_imagen)},onError:function(e){console.log(e,"error")}}))},imagen:i,setEdit:function(){console.log("Xd",n),n.nombre=n.curso_seleccionado.plantilla.nombre,n.descripcion=n.curso_seleccionado.plantilla.descripcion,n.fecha_inicio=s(n.curso_seleccionado.plantilla.fecha_inicio),n.fecha_fin=s(n.curso_seleccionado.plantilla.fecha_fin),n.fecha_extension=s(n.curso_seleccionado.plantilla.fecha_extension),i.src="/"+n.curso_seleccionado.foto.url,n.id_imagen=n.curso_seleccionado.foto.id_archivo},crear:function(){0!=n.nombre.length||0!=n.descripcion.length||0!=n.fecha_inicio.length||0!=n.fecha_fin.length||0!=n.fecha_extension.length||0!=n.id_imagen.length?(c(),"Agregar"==n.accion?U.Inertia.post(route("dashboard_adm_cursos_crear"),{nombre:n.nombre,descripcion:n.descripcion,fecha_inicio:n.fecha_inicio,fecha_fin:n.fecha_fin,fecha_extension:n.fecha_extension,id_imagen:n.id_imagen},{only:["cursos","flash","errors"],preserveState:!0,preserveScroll:!0,onSuccess:function(){P.Notify.success("Curso agregado correctamente")},onError:function(e){for(var o in e)P.Notify.failure(e[o])}}):U.Inertia.post(route("dashboard_adm_cursos_actualizar"),{id:n.curso_seleccionado.id_curso,nombre:n.nombre,descripcion:n.descripcion,fecha_inicio:n.fecha_inicio,fecha_fin:n.fecha_fin,fecha_extension:n.fecha_extension,id_foto:n.id_imagen},{only:["cursos","flash","errors"],preserveState:!0}),l(),n.showModal=!1):P.Notify.failure("Debe llenar todos los campos")},blank:l,valores:n,filters:a}}};const R=(0,t(3744).Z)(Z,[["render",function(e,o,t,B,j,A){var T,I,M=(0,r.resolveComponent)("Column"),z=(0,r.resolveComponent)("DataTable"),U=(0,r.resolveComponent)("Asignar"),P=(0,r.resolveComponent)("Calendar"),F=(0,r.resolveComponent)("Cropper"),Z=(0,r.resolveComponent)("Dialog");return(0,r.openBlock)(),(0,r.createElementBlock)(r.Fragment,null,[B.valores.editando_curso?((0,r.openBlock)(),(0,r.createBlock)(U,{key:1,usuarios:t.usuarios,curso:B.valores.curso_seleccionado,onGo_back:o[7]||(o[7]=function(e){return B.valores.editando_curso=!1}),cursos:t.cursos,onSincronizar:o[8]||(o[8]=function(e){B.recargarCursos(e)})},null,8,["usuarios","curso","cursos"])):((0,r.openBlock)(),(0,r.createElementBlock)("div",n,[a,(0,r.createElementVNode)("div",l,[(0,r.createVNode)(z,{value:t.cursos,paginator:!0,selectionMode:"single",rows:10,scrollable:!0,filters:B.filters,"onUpdate:filters":o[5]||(o[5]=function(e){return B.filters=e}),selection:B.valores.curso_seleccionado,"onUpdate:selection":o[6]||(o[6]=function(e){return B.valores.curso_seleccionado=e})},{empty:(0,r.withCtx)((function(){return[s]})),header:(0,r.withCtx)((function(){var e,t,n;return[(0,r.createElementVNode)("div",i,[(0,r.createElementVNode)("div",c,[(0,r.createElementVNode)("span",u,[d,(0,r.withDirectives)((0,r.createElementVNode)("input",{id:"search",class:"p-2 text-variable bg-cyan-900 rounded-lg",placeholder:"Buscar...","onUpdate:modelValue":o[0]||(o[0]=function(e){return B.filters.global.value=e})},null,512),[[r.vModelText,B.filters.global.value]])])]),(0,r.createElementVNode)("div",f,[(0,r.createElementVNode)("button",{class:"m-1 text-base bg-green-500 hover:bg-green-700 text-variable font-bold py-2 px-4 rounded",onClick:o[1]||(o[1]=function(e){return B.valores.showModal=!B.valores.showModal,B.valores.accion="Agregar",B.blank()})}," Agregar "),(0,r.createElementVNode)("button",{disabled:!(Object.keys(null!==(e=B.valores.curso_seleccionado)&&void 0!==e?e:{}).length>0),class:"m-1 disabled:bg-gray-500 text-base bg-yellow-500 hover:bg-yellow-700 text-variable font-bold py-2 px-4 rounded",onClick:o[2]||(o[2]=function(e){return B.valores.showModal=!B.valores.showModal,B.valores.accion="Editar",B.setEdit()})}," Editar ",8,m),(0,r.createElementVNode)("button",{onClick:o[3]||(o[3]=function(e){return B.delete_curso()}),class:"m-1 disabled:bg-gray-500 text-base bg-red-500 hover:bg-red-700 text-variable font-bold py-2 px-4 rounded",disabled:!(Object.keys(null!==(t=B.valores.curso_seleccionado)&&void 0!==t?t:{}).length>0)}," Eliminar ",8,p),(0,r.createElementVNode)("button",{onClick:o[4]||(o[4]=function(e){return B.valores.editando_curso=!B.valores.editando_curso}),class:"m-1 disabled:bg-gray-500 text-base bg-blue-500 hover:bg-blue-700 text-variable font-bold py-2 px-4 rounded",disabled:!(Object.keys(null!==(n=B.valores.curso_seleccionado)&&void 0!==n?n:{}).length>0)}," Asignar usuarios ",8,b)])])]})),default:(0,r.withCtx)((function(){return[(0,r.createVNode)(M,{header:"Nombre",sortable:!0},{body:(0,r.withCtx)((function(e){return[(0,r.createTextVNode)((0,r.toDisplayString)(e.data.plantilla.nombre),1)]})),_:1}),(0,r.createVNode)(M,{header:"Descripción",sortable:!0},{body:(0,r.withCtx)((function(e){return[(0,r.createTextVNode)((0,r.toDisplayString)(e.data.plantilla.descripcion),1)]})),_:1}),(0,r.createVNode)(M,{header:"Imagen"},{body:(0,r.withCtx)((function(e){return[e.data.foto?((0,r.openBlock)(),(0,r.createElementBlock)("div",h,[(0,r.createElementVNode)("img",{src:"/"+e.data.foto.url,width:"100",class:"rounded-full",style:{"vertical-align":"middle"},alt:e.data.foto.descripcion},null,8,g),(0,r.createElementVNode)("span",v,(0,r.toDisplayString)(e.data.foto.nombre),1)])):((0,r.openBlock)(),(0,r.createElementBlock)("span",_,"No hay imagen"))]})),_:1}),(0,r.createVNode)(M,{header:"Empieza en",sortable:!0},{body:(0,r.withCtx)((function(e){return[(0,r.createTextVNode)((0,r.toDisplayString)(e.data.plantilla.fecha_inicio),1)]})),_:1}),(0,r.createVNode)(M,{header:"Termina en",sortable:!0},{body:(0,r.withCtx)((function(e){return[(0,r.createTextVNode)((0,r.toDisplayString)(e.data.plantilla.fecha_fin),1)]})),_:1}),(0,r.createVNode)(M,{header:"Extensión hasta",sortable:!0},{body:(0,r.withCtx)((function(e){var o;return[(0,r.createTextVNode)((0,r.toDisplayString)(null!==(o=e.data.plantilla.fecha_extension)&&void 0!==o?o:"No definida"),1)]})),_:1}),(0,r.createVNode)(M,{header:"Estado",sortable:!0},{body:(0,r.withCtx)((function(e){return[(0,r.createElementVNode)("button",{onClick:function(o){return B.terminar_curso(e.data.id_curso)},class:(0,r.normalizeClass)(["rounded-lg w-fit p-2",null==e.data.termino_en?"bg-green-500 hover:bg-green-700":"bg-red-500 hover:bg-red-700"])},(0,r.toDisplayString)(null==e.data.termino_en?"Vigente":"Finalizó en: "+e.data.termino_en),11,x)]})),_:1})]})),_:1},8,["value","filters","selection"])])])),(0,r.createVNode)(Z,{breakpoints:{"960px":"75vw","640px":"100vw"},style:{width:"50vw"},modal:!0,header:"Agregar"==B.valores.accion?"Agregar curso":null!==(T="Editar curso "+(null===(I=B.valores.curso_seleccionado.plantilla)||void 0===I?void 0:I.nombre))&&void 0!==T?T:"",visible:B.valores.showModal,"onUpdate:visible":o[17]||(o[17]=function(e){return B.valores.showModal=e}),closeOnEscape:!1},{default:(0,r.withCtx)((function(){return[(0,r.createElementVNode)("form",{onSubmit:o[16]||(o[16]=(0,r.withModifiers)((function(){return B.crear&&B.crear.apply(B,arguments)}),["prevent"]))},[(0,r.createElementVNode)("div",y,[(0,r.createElementVNode)("label",null,[V,(0,r.withDirectives)((0,r.createElementVNode)("input",{class:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",type:"text",placeholder:"Nombre del curso","onUpdate:modelValue":o[9]||(o[9]=function(e){return B.valores.nombre=e})},null,512),[[r.vModelText,B.valores.nombre]])]),(0,r.createElementVNode)("label",null,[N,(0,r.withDirectives)((0,r.createElementVNode)("input",{class:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",type:"text",placeholder:"Descripcion del curso","onUpdate:modelValue":o[10]||(o[10]=function(e){return B.valores.descripcion=e})},null,512),[[r.vModelText,B.valores.descripcion]])]),(0,r.createElementVNode)("label",null,[w,(0,r.createVNode)(P,{dateFormat:"dd/mm/yy",modelValue:B.valores.fecha_inicio,"onUpdate:modelValue":o[11]||(o[11]=function(e){return B.valores.fecha_inicio=e}),style:{width:"100%"}},null,8,["modelValue"])]),(0,r.createElementVNode)("label",null,[E,(0,r.createVNode)(P,{dateFormat:"dd/mm/yy",modelValue:B.valores.fecha_fin,"onUpdate:modelValue":o[12]||(o[12]=function(e){return B.valores.fecha_fin=e}),style:{width:"100%"}},null,8,["modelValue"])]),(0,r.createElementVNode)("label",null,[k,(0,r.createVNode)(P,{dateFormat:"dd/mm/yy",modelValue:B.valores.fecha_extension,"onUpdate:modelValue":o[13]||(o[13]=function(e){return B.valores.fecha_extension=e}),style:{width:"100%"}},null,8,["modelValue"])])]),C,(0,r.createVNode)(F,{ref:"crop","auto-zoom":!0,class:"min-h-fit w-full",src:B.imagen.src,"default-size":B.defaultSize,"stencil-props":{aspectRatio:1}},null,8,["src","default-size"]),(0,r.createElementVNode)("div",S,[(0,r.createElementVNode)("button",{type:"button",class:"text-variable bg-blue-900 py-2 px-1 text-xl rounded-lg mx-auto",onClick:o[15]||(o[15]=function(e){return B.file.click()})},[(0,r.createElementVNode)("input",{class:"hidden",type:"file",ref:"file",onChange:o[14]||(o[14]=function(e){return B.uploadImage(e)}),accept:"image/*"},null,544),O])]),(0,r.createElementVNode)("button",{type:"submit",class:(0,r.normalizeClass)(["px-2 py-3 text-xl rounded-lg m-2 w-full disabled:bg-gray-400","Agregar"==B.valores.accion?"bg-green-600":"bg-yellow-600"]),disabled:""==B.valores.id_imagen},(0,r.toDisplayString)("Agregar"==B.valores.accion?"Agregar":"Editar"),11,D)],32)]})),_:1},8,["header","visible"])],64)}]])},4038:(e,o,t)=>{t.r(o),t.d(o,{default:()=>N});var r=t(8222),n={class:"flex flex-wrap items-center justify-between w-full py-4 md:py-0 px-4 text-lg text-gray-700 bg-white"},a=(0,r.createElementVNode)("p",{class:"text-5xl"},"TUNOMBREAQUI",-1),l={class:"text-cyan-400"},s=[(0,r.createElementVNode)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"},null,-1)],i={class:"pt-4 text-base text-gray-700 md:flex md:justify-between md:pt-0"},c={key:0},u={class:"md:p-4 block"},d=(0,r.createElementVNode)("a",{class:"text-gray-700 hover:text-red-400"},"Admin",-1),f={class:"self-center"},m={class:"md:p-4 py-2 block"},p=(0,r.createElementVNode)("a",{class:"text-red-700 hover:text-red-400"},"Cerrar sesión",-1),b=["href"];t(1645),t(8957),t(7887);var h=t(2262),g=t(9680),v=t(7712),_=t(4325),x=t(6663),y=t(7915);history.pushState(null,document.title,location.href),window.addEventListener("popstate",(function(){history.pushState(null,document.title,location.href)}));const V={directives:{Tooltip:y.Z},props:{usuario:{type:Object,default:{}}},components:{InputSwitch:x.Z,SplitButton:v.Z,Button:_.Z},setup:function(){var e=(0,r.ref)([{label:"Personas",command:function(){g.Inertia.visit(route("dashboard_adm_personas"))}},{label:"Usuarios",command:function(){g.Inertia.visit(route("dashboard_adm_usuarios"))}},{label:"Roles",command:function(){g.Inertia.visit(route("dashboard_adm_roles"))}},{label:"Crear Aulas",command:function(){g.Inertia.visit(route("dashboard_adm_cursos"))}}]),o=(0,h.qj)({show:!0});return{data:(0,h.qj)({dark:!0}),menuOptions:o,redirectTo:function(e){g.Inertia.visit(route(e))},urlsAdmin:e}}};const N=(0,t(3744).Z)(V,[["render",function(e,o,t,h,g,v){var _=(0,r.resolveComponent)("Button"),x=(0,r.resolveComponent)("SplitButton"),y=(0,r.resolveComponent)("InputSwitch"),V=(0,r.resolveDirective)("tooltip");return(0,r.openBlock)(),(0,r.createElementBlock)(r.Fragment,null,[(0,r.createElementVNode)("header",null,[(0,r.createElementVNode)("nav",n,[(0,r.createElementVNode)("div",null,[(0,r.createElementVNode)("a",{onClick:o[0]||(o[0]=function(e){return h.redirectTo("home")})},[a,(0,r.createElementVNode)("p",l," Bienvenido "+(0,r.toDisplayString)(t.usuario.persona.nombre),1)])]),((0,r.openBlock)(),(0,r.createElementBlock)("svg",{xmlns:"http://www.w3.org/2000/svg",id:"menu-button",onClick:o[1]||(o[1]=function(e){return h.menuOptions.show=!h.menuOptions.show}),class:"h-6 w-6 cursor-pointer md:hidden block",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},s)),(0,r.createElementVNode)("div",{class:(0,r.normalizeClass)("w-full md:flex md:items-center md:w-auto"+(h.menuOptions.show?" hidden":"")),id:"menu"},[(0,r.createElementVNode)("ul",i,[1==t.usuario.id_rol?((0,r.openBlock)(),(0,r.createElementBlock)("li",c,[(0,r.createElementVNode)("a",u,[(0,r.createVNode)(x,{model:h.urlsAdmin,class:"p-button-md p-button-text p-button-secondary"},{default:(0,r.withCtx)((function(){return[(0,r.createVNode)(_,{onClick:o[2]||(o[2]=function(e){return h.redirectTo("dashboard-adm")})},{default:(0,r.withCtx)((function(){return[d]})),_:1})]})),_:1},8,["model"])])])):(0,r.createCommentVNode)("",!0),(0,r.createElementVNode)("li",f,[(0,r.withDirectives)((0,r.createVNode)(y,{modelValue:h.data.dark,"onUpdate:modelValue":o[3]||(o[3]=function(e){return h.data.dark=e})},null,8,["modelValue"]),[[V,h.data.dark?"Modo light":"Modo dark",void 0,{bottom:!0}]])]),(0,r.createElementVNode)("li",null,[(0,r.createElementVNode)("a",m,[(0,r.createVNode)(_,{class:"p-button-md p-button-text p-button-secondary",onClick:o[4]||(o[4]=function(e){return h.redirectTo("logout")})},{default:(0,r.withCtx)((function(){return[p]})),_:1})])])])],2)])]),(0,r.createElementVNode)("link",{href:h.data.dark?"/css/dark.css":"/css/light.css",rel:"stylesheet"},null,8,b),(0,r.createElementVNode)("article",null,[(0,r.renderSlot)(e.$slots,"default")])],64)}]])}}]);