"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5,38],{5:(e,o,t)=>{t.r(o),t.d(o,{default:()=>q});var r=t(8222),a={class:"flex flex-col"},l=(0,r.createElementVNode)("div",{class:"mx-auto m-2"},[(0,r.createElementVNode)("p",{class:"text-center text-5xl text-variable"},"Tabla de personas")],-1),n={class:"w-11/12 mx-auto"},s=(0,r.createElementVNode)("p",null,"Esto está vacio... añade personas!",-1),c={class:"flex md:flex-row flex-col"},i={class:"mr-auto"},d={class:"p-input-icon-right"},u=(0,r.createElementVNode)("i",{class:"pi pi-search"},null,-1),p={class:"flex sm:flex-row sm:ml-auto flex-col"},f=["disabled"],m=["disabled"],b={class:"grid xl:grid-cols-2 xl:gap-6 mt-2"},v={class:"relative z-0 mb-6 w-full group"},h=(0,r.createElementVNode)("label",{for:"nombre",class:"absolute text-base text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"},"Nombre(s) *",-1),g={class:"relative z-0 mb-6 w-full group"},x=(0,r.createElementVNode)("label",{for:"apellido_p",class:"absolute text-base text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"},"Apellido paterno *",-1),y={class:"relative z-0 mb-6 w-full group"},N=(0,r.createElementVNode)("label",{class:"absolute text-base text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"},"Apellido Materno *",-1),w={class:"relative z-0 mb-6 w-full group"},V=(0,r.createElementVNode)("label",{class:"absolute text-base text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"},"Correo *",-1),_={class:"relative z-0 mb-6 w-full group"},E=(0,r.createElementVNode)("label",{class:"absolute text-base text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"},"Cédula de identidad *",-1),k={class:"relative z-0 mb-6 w-full group"},C=(0,r.createElementVNode)("label",{class:"absolute text-base text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"},"Teléfono *",-1),M={class:"relative z-0 w-full group mb-2"},T=(0,r.createElementVNode)("label",{for:"address",class:"block mt-3 mb-2 text-base font-medium text-gray-900 dark:text-gray-400"},"Dirección",-1),z=["disabled"];t(1645),t(8957),t(7887);var B=t(8094),A=t(5247),D=t(4038),S=t(6076),U=t(6358),I=t(3609),O=t(8642),Z=t(1533),j=t(9680),F=t(9669),L=t.n(F);const P={layout:D.default,props:{usuario:{type:Object,default:{}},personas:{type:Array,default:[]}},components:{InputText:S.Z,NavBar:D.default,DataTable:B.Z,Column:A.Z,Dialog:I.Z},setup:function(e){var o=(0,r.reactive)({nombre:"",apellido_p:"",apellido_m:"",correo:"",ci:"",telefono:"",direccion:"",processing:!1}),t=(0,r.reactive)({global:{value:"",matchMode:U.a6.Contains}}),a=(0,r.reactive)({personas_seleccionada:{},showModal:!1,accion:""}),l=function(){o.nombre="",o.apellido_p="",o.apellido_m="",o.correo="",o.ci="",o.telefono="",o.direccion=""};return{delete_p:function(){console.log(e),a.personas_seleccionada.id!=e.usuario.id_persona?(O.Confirm.init({titleColor:"#FF0000",messageColor:"#FF0000",okButtonBackground:"#FF0000"}),O.Confirm.show("¿Estas seguro de eliminar a ".concat(a.personas_seleccionada.nombre,"?"),"Estás a punto de eliminar a una persona","Eliminar","Cancelar",(function(){Z.Loading.standard({clickToClose:!1,svgSize:"200"}),L().post(route("dashboard_adm_personas_eliminar"),{id:a.personas_seleccionada.id_persona}).then((function(e){e.data.success&&(Z.Notify.success(e.data.message),j.Inertia.reload({only:["personas"],preserveState:!0,preserveScroll:!0,onSuccess:function(){Z.Loading.remove()}}))}))}))):Z.Notify.failure("No podes borrarte a vos mismo.")},blank:l,setEdit:function(){o.nombre=a.personas_seleccionada.nombre,o.apellido_p=a.personas_seleccionada.apellido_p,o.apellido_m=a.personas_seleccionada.apellido_m,o.correo=a.personas_seleccionada.correo,o.ci=a.personas_seleccionada.ci,o.telefono=a.personas_seleccionada.telefono,o.direccion=a.personas_seleccionada.direccion},submit:function(){(""==o.nombre?(Z.Notify.failure("El campo nombre no puede estar vacío"),1):""==o.apellido_p?(Z.Notify.failure("El campo apellido paterno no puede estar vacío"),1):""==o.apellido_m?(Z.Notify.failure("El campo apellido materno no puede estar vacío"),1):""==o.correo?(Z.Notify.failure("El campo correo no puede estar vacío"),1):""==o.ci||isNaN(o.ci)?(Z.Notify.failure("El campo cédula de identidad no puede estar vacío"),1):""==o.telefono||isNaN(o.telefono)?(Z.Notify.failure("El campo teléfono no puede estar vacío"),1):""==o.direccion&&(Z.Notify.failure("El campo dirección no puede estar vacío"),1))||(o.processing=!0,Z.Loading.standard({clickToClose:!1,svgSize:"200"}),L().post(route("Agregar"==a.accion?"dashboard_adm_personas_crear":"dashboard_adm_personas_actualizar"),{nombre:o.nombre,apellido_p:o.apellido_p,apellido_m:o.apellido_m,correo:o.correo,ci:o.ci,telefono:o.telefono,direccion:o.direccion,id:a.personas_seleccionada.id_persona}).then((function(e){e.data.success&&(a.showModal=!1,l(),j.Inertia.reload({only:["personas"],preserveState:!0,preserveScroll:!0}),Z.Notify.success(e.data.message))})).catch((function(e){Z.Notify.failure(e.response.data.message)})).finally((function(){o.processing=!1,Z.Loading.remove()})))},form_p:o,links:function(e){return route(e)},filters:t,valores:a}}};const q=(0,t(3744).Z)(P,[["render",function(e,o,t,B,A,D){var S=(0,r.resolveComponent)("InputText"),U=(0,r.resolveComponent)("Column"),I=(0,r.resolveComponent)("DataTable"),O=(0,r.resolveComponent)("Dialog");return(0,r.openBlock)(),(0,r.createElementBlock)(r.Fragment,null,[(0,r.createElementVNode)("div",a,[l,(0,r.createElementVNode)("div",n,[(0,r.createVNode)(I,{value:t.personas,paginator:!0,selectionMode:"single",rows:10,scrollable:!0,filters:B.filters,"onUpdate:filters":o[4]||(o[4]=function(e){return B.filters=e}),selection:B.valores.personas_seleccionada,"onUpdate:selection":o[5]||(o[5]=function(e){return B.valores.personas_seleccionada=e})},{empty:(0,r.withCtx)((function(){return[s]})),header:(0,r.withCtx)((function(){var e,t;return[(0,r.createElementVNode)("div",c,[(0,r.createElementVNode)("div",i,[(0,r.createElementVNode)("span",d,[u,(0,r.createVNode)(S,{id:"search",modelValue:B.filters.global.value,"onUpdate:modelValue":o[0]||(o[0]=function(e){return B.filters.global.value=e})},null,8,["modelValue"])])]),(0,r.createElementVNode)("div",p,[(0,r.createElementVNode)("button",{class:"m-1 text-base bg-green-500 hover:bg-green-700 text-variable font-bold py-2 px-4 rounded",onClick:o[1]||(o[1]=function(e){return B.valores.showModal=!B.valores.showModal,B.valores.accion="Agregar",B.blank()})}," Agregar "),(0,r.createElementVNode)("button",{disabled:!(Object.keys(null!==(e=B.valores.personas_seleccionada)&&void 0!==e?e:{}).length>0),class:"m-1 disabled:bg-gray-500 text-base bg-yellow-500 hover:bg-yellow-700 text-variable font-bold py-2 px-4 rounded",onClick:o[2]||(o[2]=function(e){return B.valores.showModal=!B.valores.showModal,B.valores.accion="Editar",B.setEdit()})}," Editar ",8,f),(0,r.createElementVNode)("button",{onClick:o[3]||(o[3]=function(e){return B.delete_p()}),class:"m-1 disabled:bg-gray-500 text-base bg-red-500 hover:bg-red-700 text-variable font-bold py-2 px-4 rounded",disabled:!(Object.keys(null!==(t=B.valores.personas_seleccionada)&&void 0!==t?t:{}).length>0)}," Eliminar ",8,m)])])]})),default:(0,r.withCtx)((function(){return[(0,r.createVNode)(U,{filterMatchMode:"contains",sortable:!0,field:"nombre",header:"Nombre"}),(0,r.createVNode)(U,{filterMatchMode:"contains",sortable:!0,field:"apellido_p",header:"Apellido Paterno"}),(0,r.createVNode)(U,{filterMatchMode:"contains",sortable:!0,field:"apellido_m",header:"Apellido Materno"}),(0,r.createVNode)(U,{filterMatchMode:"contains",sortable:!0,field:"correo",header:"Correo"}),(0,r.createVNode)(U,{filterMatchMode:"contains",sortable:!0,field:"ci",header:"CI"}),(0,r.createVNode)(U,{filterMatchMode:"contains",sortable:!0,field:"telefono",header:"Telefono"}),(0,r.createVNode)(U,{filterMatchMode:"contains",sortable:!0,field:"direccion",header:"Direccion"}),(0,r.createVNode)(U,{field:"created_at",header:"Creado en"})]})),_:1},8,["value","filters","selection"])])]),(0,r.createVNode)(O,{breakpoints:{"960px":"75vw","640px":"100vw"},style:{width:"50vw"},modal:!0,header:"Agregar"==B.valores.accion?"Agregar Persona":"Editar Persona",visible:B.valores.showModal,"onUpdate:visible":o[14]||(o[14]=function(e){return B.valores.showModal=e})},{default:(0,r.withCtx)((function(){return[(0,r.createElementVNode)("form",{onSubmit:o[13]||(o[13]=(0,r.withModifiers)((function(){return B.submit&&B.submit.apply(B,arguments)}),["prevent"]))},[(0,r.createElementVNode)("div",b,[(0,r.createElementVNode)("div",v,[(0,r.withDirectives)((0,r.createElementVNode)("input",{name:"nombre",autocomplete:"off",type:"text",placeholder:" ",class:"block py-2.5 px-0 w-full text-lg text-variable bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer","onUpdate:modelValue":o[6]||(o[6]=function(e){return B.form_p.nombre=e})},null,512),[[r.vModelText,B.form_p.nombre]]),h]),(0,r.createElementVNode)("div",g,[(0,r.withDirectives)((0,r.createElementVNode)("input",{autocomplete:"off",class:"block py-2.5 px-0 w-full text-lg text-variable bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer",type:"text",name:"apellido_p",placeholder:" ","onUpdate:modelValue":o[7]||(o[7]=function(e){return B.form_p.apellido_p=e})},null,512),[[r.vModelText,B.form_p.apellido_p]]),x]),(0,r.createElementVNode)("div",y,[(0,r.withDirectives)((0,r.createElementVNode)("input",{placeholder:" ",autocomplete:"off",class:"block py-2.5 px-0 w-full text-lg text-variable bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer",type:"text","onUpdate:modelValue":o[8]||(o[8]=function(e){return B.form_p.apellido_m=e})},null,512),[[r.vModelText,B.form_p.apellido_m]]),N]),(0,r.createElementVNode)("div",w,[(0,r.withDirectives)((0,r.createElementVNode)("input",{placeholder:" ",autocomplete:"off",class:"block py-2.5 px-0 w-full text-lg text-variable bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer",type:"email","onUpdate:modelValue":o[9]||(o[9]=function(e){return B.form_p.correo=e})},null,512),[[r.vModelText,B.form_p.correo]]),V]),(0,r.createElementVNode)("div",_,[(0,r.withDirectives)((0,r.createElementVNode)("input",{placeholder:" ",autocomplete:"off",class:"block py-2.5 px-0 w-full text-lg text-variable bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer",type:"number","onUpdate:modelValue":o[10]||(o[10]=function(e){return B.form_p.ci=e})},null,512),[[r.vModelText,B.form_p.ci]]),E]),(0,r.createElementVNode)("div",k,[(0,r.withDirectives)((0,r.createElementVNode)("input",{placeholder:" ",autocomplete:"off",class:"block py-2.5 px-0 w-full text-lg text-variable bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer",type:"number","onUpdate:modelValue":o[11]||(o[11]=function(e){return B.form_p.telefono=e})},null,512),[[r.vModelText,B.form_p.telefono]]),C])]),(0,r.createElementVNode)("div",M,[T,(0,r.withDirectives)((0,r.createElementVNode)("textarea",{"onUpdate:modelValue":o[12]||(o[12]=function(e){return B.form_p.direccion=e}),maxlength:"250",rows:"3",class:"form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none resize-none",placeholder:"Ingresa una dirección (Opcional)"},null,512),[[r.vModelText,B.form_p.direccion]])]),(0,r.createElementVNode)("button",{type:"submit",disabled:B.form_p.processing,class:(0,r.normalizeClass)("Agregar"==B.valores.accion?"px-4 py-2 bg-green-500 text-variable rounded-md":"px-4 py-2 bg-yellow-500 text-variable rounded-md")},(0,r.toDisplayString)("Agregar"==B.valores.accion?"Crear":"Editar"),11,z)],32)]})),_:1},8,["header","visible"])],64)}]])},4038:(e,o,t)=>{t.r(o),t.d(o,{default:()=>V});var r=t(8222),a={class:"flex flex-wrap items-center justify-between w-full py-4 md:py-0 px-4 text-lg text-gray-700 bg-white"},l=(0,r.createElementVNode)("p",{class:"text-5xl"},"TUNOMBREAQUI",-1),n={class:"text-cyan-400"},s=[(0,r.createElementVNode)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"},null,-1)],c={class:"pt-4 text-base text-gray-700 md:flex md:justify-between md:pt-0"},i={key:0},d={class:"md:p-4 block"},u=(0,r.createElementVNode)("a",{class:"text-gray-700 hover:text-red-400"},"Admin",-1),p={class:"self-center"},f={class:"md:p-4 py-2 block"},m=(0,r.createElementVNode)("a",{class:"text-red-700 hover:text-red-400"},"Cerrar sesión",-1),b=["href"];t(1645),t(8957),t(7887);var v=t(2262),h=t(9680),g=t(7712),x=t(4325),y=t(6663),N=t(7915);history.pushState(null,document.title,location.href),window.addEventListener("popstate",(function(){history.pushState(null,document.title,location.href)}));const w={directives:{Tooltip:N.Z},props:{usuario:{type:Object,default:{}}},components:{InputSwitch:y.Z,SplitButton:g.Z,Button:x.Z},setup:function(){var e=(0,r.ref)([{label:"Personas",command:function(){h.Inertia.visit(route("dashboard_adm_personas"))}},{label:"Usuarios",command:function(){h.Inertia.visit(route("dashboard_adm_usuarios"))}},{label:"Roles",command:function(){h.Inertia.visit(route("dashboard_adm_roles"))}},{label:"Crear Aulas",command:function(){h.Inertia.visit(route("dashboard_adm_cursos"))}}]),o=(0,v.qj)({show:!0});return{data:(0,v.qj)({dark:!0}),menuOptions:o,redirectTo:function(e){h.Inertia.visit(route(e))},urlsAdmin:e}}};const V=(0,t(3744).Z)(w,[["render",function(e,o,t,v,h,g){var x=(0,r.resolveComponent)("Button"),y=(0,r.resolveComponent)("SplitButton"),N=(0,r.resolveComponent)("InputSwitch"),w=(0,r.resolveDirective)("tooltip");return(0,r.openBlock)(),(0,r.createElementBlock)(r.Fragment,null,[(0,r.createElementVNode)("header",null,[(0,r.createElementVNode)("nav",a,[(0,r.createElementVNode)("div",null,[(0,r.createElementVNode)("a",{onClick:o[0]||(o[0]=function(e){return v.redirectTo("home")})},[l,(0,r.createElementVNode)("p",n," Bienvenido "+(0,r.toDisplayString)(t.usuario.persona.nombre),1)])]),((0,r.openBlock)(),(0,r.createElementBlock)("svg",{xmlns:"http://www.w3.org/2000/svg",id:"menu-button",onClick:o[1]||(o[1]=function(e){return v.menuOptions.show=!v.menuOptions.show}),class:"h-6 w-6 cursor-pointer md:hidden block",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},s)),(0,r.createElementVNode)("div",{class:(0,r.normalizeClass)("w-full md:flex md:items-center md:w-auto"+(v.menuOptions.show?" hidden":"")),id:"menu"},[(0,r.createElementVNode)("ul",c,[1==t.usuario.id_rol?((0,r.openBlock)(),(0,r.createElementBlock)("li",i,[(0,r.createElementVNode)("a",d,[(0,r.createVNode)(y,{model:v.urlsAdmin,class:"p-button-md p-button-text p-button-secondary"},{default:(0,r.withCtx)((function(){return[(0,r.createVNode)(x,{onClick:o[2]||(o[2]=function(e){return v.redirectTo("dashboard-adm")})},{default:(0,r.withCtx)((function(){return[u]})),_:1})]})),_:1},8,["model"])])])):(0,r.createCommentVNode)("",!0),(0,r.createElementVNode)("li",p,[(0,r.withDirectives)((0,r.createVNode)(N,{modelValue:v.data.dark,"onUpdate:modelValue":o[3]||(o[3]=function(e){return v.data.dark=e})},null,8,["modelValue"]),[[w,v.data.dark?"Modo light":"Modo dark",void 0,{bottom:!0}]])]),(0,r.createElementVNode)("li",null,[(0,r.createElementVNode)("a",f,[(0,r.createVNode)(x,{class:"p-button-md p-button-text p-button-secondary",onClick:o[4]||(o[4]=function(e){return v.redirectTo("logout")})},{default:(0,r.withCtx)((function(){return[m]})),_:1})])])])],2)])]),(0,r.createElementVNode)("link",{href:v.data.dark?"/css/dark.css":"/css/light.css",rel:"stylesheet"},null,8,b),(0,r.createElementVNode)("article",null,[(0,r.renderSlot)(e.$slots,"default")])],64)}]])}}]);