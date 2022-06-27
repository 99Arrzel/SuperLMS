"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[249,776],{7776:(e,t,a)=>{a.r(t),a.d(t,{default:()=>C});var r=a(8222),o={class:"flex flex-wrap items-center justify-between w-full py-4 md:py-0 px-4 text-lg text-gray-700 bg-white"},n=(0,r.createElementVNode)("p",{class:"text-5xl"},"TUNOMBREAQUI",-1),l={class:"text-cyan-400"},i=[(0,r.createElementVNode)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"},null,-1)],c={class:"pt-4 text-base text-gray-700 md:flex md:justify-between md:pt-0"},d={key:0},s={class:"md:p-4 block"},u=(0,r.createElementVNode)("a",{class:"text-gray-700 hover:text-red-400"},"Admin",-1),m={class:"self-center"},p={class:"md:p-4 py-2 block"},f=(0,r.createElementVNode)("a",{class:"text-red-700 hover:text-red-400"},"Cerrar sesión",-1),h=["href"];a(1645),a(8957),a(7887);var v=a(2262),V=a(9680),N=a(7712),b=a(4325),x=a(6663),k=a(7915);history.pushState(null,document.title,location.href),window.addEventListener("popstate",(function(){history.pushState(null,document.title,location.href)}));const g={directives:{Tooltip:k.Z},props:{usuario:{type:Object,default:{}}},components:{InputSwitch:x.Z,SplitButton:N.Z,Button:b.Z},setup:function(){var e=(0,r.ref)([{label:"Personas",command:function(){V.Inertia.visit(route("dashboard_adm_personas"))}},{label:"Usuarios",command:function(){V.Inertia.visit(route("dashboard_adm_usuarios"))}},{label:"Roles",command:function(){V.Inertia.visit(route("dashboard_adm_roles"))}},{label:"Crear Aulas",command:function(){V.Inertia.visit(route("dashboard_adm_cursos"))}},{label:"Notas Estudiantes",command:function(){V.Inertia.visit(route("dashboard_adm_notas_usuarios"))}}]),t=(0,v.qj)({show:!0});return{data:(0,v.qj)({dark:!0}),menuOptions:t,redirectTo:function(e){V.Inertia.visit(route(e))},urlsAdmin:e}}};const C=(0,a(3744).Z)(g,[["render",function(e,t,a,v,V,N){var b=(0,r.resolveComponent)("Button"),x=(0,r.resolveComponent)("SplitButton"),k=(0,r.resolveComponent)("InputSwitch"),g=(0,r.resolveDirective)("tooltip");return(0,r.openBlock)(),(0,r.createElementBlock)(r.Fragment,null,[(0,r.createElementVNode)("header",null,[(0,r.createElementVNode)("nav",o,[(0,r.createElementVNode)("div",null,[(0,r.createElementVNode)("a",{onClick:t[0]||(t[0]=function(e){return v.redirectTo("home")})},[n,(0,r.createElementVNode)("p",l," Bienvenido "+(0,r.toDisplayString)(a.usuario.persona.nombre),1)])]),((0,r.openBlock)(),(0,r.createElementBlock)("svg",{xmlns:"http://www.w3.org/2000/svg",id:"menu-button",onClick:t[1]||(t[1]=function(e){return v.menuOptions.show=!v.menuOptions.show}),class:"h-6 w-6 cursor-pointer md:hidden block",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},i)),(0,r.createElementVNode)("div",{class:(0,r.normalizeClass)("w-full md:flex md:items-center md:w-auto"+(v.menuOptions.show?" hidden":"")),id:"menu"},[(0,r.createElementVNode)("ul",c,[1==a.usuario.id_rol?((0,r.openBlock)(),(0,r.createElementBlock)("li",d,[(0,r.createElementVNode)("a",s,[(0,r.createVNode)(x,{model:v.urlsAdmin,class:"p-button-md p-button-text p-button-secondary"},{default:(0,r.withCtx)((function(){return[(0,r.createVNode)(b,{onClick:t[2]||(t[2]=function(e){return v.redirectTo("dashboard-adm")})},{default:(0,r.withCtx)((function(){return[u]})),_:1})]})),_:1},8,["model"])])])):(0,r.createCommentVNode)("",!0),(0,r.createElementVNode)("li",m,[(0,r.withDirectives)((0,r.createVNode)(k,{modelValue:v.data.dark,"onUpdate:modelValue":t[3]||(t[3]=function(e){return v.data.dark=e})},null,8,["modelValue"]),[[g,v.data.dark?"Modo light":"Modo dark",void 0,{bottom:!0}]])]),(0,r.createElementVNode)("li",null,[(0,r.createElementVNode)("a",p,[(0,r.createVNode)(b,{class:"p-button-md p-button-text p-button-secondary",onClick:t[4]||(t[4]=function(e){return v.redirectTo("logout")})},{default:(0,r.withCtx)((function(){return[f]})),_:1})])])])],2)])]),(0,r.createElementVNode)("link",{href:v.data.dark?"/css/dark.css":"/css/light.css",rel:"stylesheet"},null,8,h),(0,r.createElementVNode)("article",null,[(0,r.renderSlot)(e.$slots,"default")])],64)}]])},5249:(e,t,a)=>{a.r(t),a.d(t,{default:()=>G});var r=a(8222),o=(0,r.createElementVNode)("h2",{class:"text-center text-variable text-2xl"}," Archivos de la tarea ",-1),n={class:"flex"},l=["disabled"],i=["href"],c=(0,r.createElementVNode)("p",null,"Arrastra o carga archivos manualmente.",-1),d={class:"m-2"},s=(0,r.createTextVNode)(" Otras tareas "),u={class:"text-variable text-3xl text-center"},m={class:"mt-4 mx-2"},p=(0,r.createElementVNode)("p",{class:"text-2xl text-variable mb-2"}," Descripción de la entrega: ",-1),f=(0,r.createElementVNode)("p",null,"Arrastra o carga archivos manualmente.",-1),h=(0,r.createTextVNode)("Nota: "),v=(0,r.createElementVNode)("p",null,"Archivos:",-1),V=["href"],N={key:0},b=(0,r.createElementVNode)("p",null,"Archivos:",-1),x=["href"],k={key:1},g=[(0,r.createElementVNode)("p",{class:"text-variable text-center"}," No hay archivos para esta tarea ",-1)],C={key:0},E=(0,r.createElementVNode)("p",null,"Entregas:",-1),w={class:"overflow-y-auto max-h-32 ..."},y=["href"],_={key:1},B=[(0,r.createElementVNode)("p",{class:"text-variable text-center"}," Nadie entregó la tarea aún ",-1)];var S=a(7776),D=a(9908),T=a(445),U=a(3236),A=a(1465),F=a(6076),Z=a(3609),I=a(1533),L=a(8094),M=a(5247),O=a(9680),j=a(4005),q=a(2983),z=a(9038),P=a(7484),Y=a.n(P),R=a(285),Q=a.n(R);Y().extend(Q());const $={layout:S.default,components:{Link:z.rU,ScrollPanel:q.Z,Slider:j.Z,DataTable:L.Z,Column:M.Z,Dialog:Z.Z,InputText:F.Z,FileUpload:A.Z,TabView:T.Z,TabPanel:U.Z,sbar:S.default,Fieldset:D.Z},props:{usuario:{type:Object,required:!1},tarea:{type:Object,required:!1}},setup:function(e){var t=(0,r.reactive)({descripcion:"",modalArchivos:!1,archivo:{},descripcion_p:""});return{evaluarFecha:function(e){console.log(e);var t=Y()(e,["DD/MM/YYYY"]);return Y()().diff(t)<0},editarNota:function(e){console.log(e),O.Inertia.post(route("nota"==e.field?"editar_nota":"enviar_comentario"),{id_entrega:e.data.id_entrega,nota:e.newValue,comentario:e.newValue},{preserveState:!0,preserveScroll:!0,onSuccess:function(e){I.Notify.success(e.props.flash.success)},onError:function(e){for(var t in e)I.Notify.failure(e[t])}})},uploadMaster:function(a){O.Inertia.post(route("archivos_profe"),{id_tarea:e.tarea.id_tarea,descripcion:t.descripcion_p,archivos:a.files},{preserveState:!0,preserveScroll:!0,onSuccess:function(){I.Notify.success("Tarea entregada correctamente"),t.descripcion_p=""},onError:function(e){for(var t in e)I.Notify.failure(e[t])}})},myUploader:function(a){O.Inertia.post(route("entregar_tarea"),{id_tarea:e.tarea.id_tarea,descripcion:t.descripcion,archivos:a.files},{preserveState:!0,preserveScroll:!0,onSuccess:function(){I.Notify.success("Tarea entregada correctamente"),t.descripcion=""},onError:function(e){for(var t in e)I.Notify.failure(e[t])}})},values:t}}};const G=(0,a(3744).Z)($,[["render",function(e,t,a,S,D,T){var U=(0,r.resolveComponent)("Column"),A=(0,r.resolveComponent)("DataTable"),F=(0,r.resolveComponent)("TabPanel"),Z=(0,r.resolveComponent)("InputText"),I=(0,r.resolveComponent)("FileUpload"),L=(0,r.resolveComponent)("TabView"),M=(0,r.resolveComponent)("Dialog"),O=(0,r.resolveComponent)("Link"),j=(0,r.resolveComponent)("Fieldset"),q=(0,r.resolveComponent)("Slider");return(0,r.openBlock)(),(0,r.createElementBlock)(r.Fragment,null,[(0,r.createVNode)(M,{breakpoints:{"960px":"75vw","640px":"100vw"},style:{width:"50vw"},modal:!0,visible:S.values.modalArchivos,"onUpdate:visible":t[3]||(t[3]=function(e){return S.values.modalArchivos=e})},{header:(0,r.withCtx)((function(){return[o]})),default:(0,r.withCtx)((function(){return[(0,r.createVNode)(L,null,{default:(0,r.withCtx)((function(){return[(0,r.createVNode)(F,{header:"Lista de archivos"},{default:(0,r.withCtx)((function(){return[(0,r.createVNode)(A,{value:a.tarea.plantilla.archivos,selection:S.values.archivo,"onUpdate:selection":t[1]||(t[1]=function(e){return S.values.archivo=e}),selectionMode:"single",paginator:!0,rows:10},{header:(0,r.withCtx)((function(){var a;return[(0,r.createElementVNode)("div",n,[(0,r.createElementVNode)("button",{class:"mx-auto disabled:bg-gray-500 bg-red-500 p-2 rounded-lg text-variable",disabled:0==Object.keys(null!==(a=S.values.archivo)&&void 0!==a?a:{}).length,onClick:t[0]||(t[0]=function(){return e.eliminarArchivo&&e.eliminarArchivo.apply(e,arguments)})}," Eliminar ",8,l)])]})),default:(0,r.withCtx)((function(){return[(0,r.createVNode)(U,{header:"Descripcion",field:"descripcion"},{body:(0,r.withCtx)((function(e){return[(0,r.createTextVNode)((0,r.toDisplayString)(null==e.data.descripcion?"Sin descripción":e.data.descripcion),1)]})),_:1}),(0,r.createVNode)(U,{header:"Archivo"},{body:(0,r.withCtx)((function(e){return[(0,r.createElementVNode)("a",{href:e.data.url,target:"_blank"},(0,r.toDisplayString)(e.data.nombre),9,i)]})),_:1})]})),_:1},8,["value","selection"])]})),_:1}),(0,r.createVNode)(F,{header:"Subir archivo"},{default:(0,r.withCtx)((function(){return[(0,r.createVNode)(Z,{modelValue:S.values.descripcion_p,"onUpdate:modelValue":t[2]||(t[2]=function(e){return S.values.descripcion_p=e}),placeholder:"Descripción (Opcional)",class:"w-1/2"},null,8,["modelValue"]),(0,r.createVNode)(I,{chooseLabel:"Cargar",uploadLabel:"Subir la tarea",showUploadButton:!0,showCancelButton:!1,name:"tarea[]",onUploader:S.uploadMaster,multiple:!0,maxFileSize:1e7,customUpload:!0},{empty:(0,r.withCtx)((function(){return[c]})),_:1},8,["onUploader"])]})),_:1})]})),_:1})]})),_:1},8,["visible"]),(0,r.createElementVNode)("div",d,[(0,r.createVNode)(O,{class:"bg-sky-400 p-2 mr-auto rounded-lg text-variable",href:"/cursos/contenido/"+a.tarea.id_meta},{default:(0,r.withCtx)((function(){return[s]})),_:1},8,["href"])]),(0,r.createElementVNode)("p",u,[(0,r.createTextVNode)(" Detalles de tarea "+(0,r.toDisplayString)(a.tarea.plantilla.nombre)+" ",1),a.usuario.id_rol<=2?((0,r.openBlock)(),(0,r.createElementBlock)("button",{key:0,class:"p-2 bg-green-500 rounded-lg text-base",onClick:t[4]||(t[4]=function(e){return S.values.modalArchivos=!0})}," Agregar archivos ")):(0,r.createCommentVNode)("",!0)]),(0,r.createElementVNode)("div",m,[(0,r.createVNode)(j,{legend:"Tarea: "+a.tarea.plantilla.nombre,class:"mb-4"},{default:(0,r.withCtx)((function(){return[(0,r.createTextVNode)(" Descripción: "+(0,r.toDisplayString)(a.tarea.plantilla.descripcion),1)]})),_:1},8,["legend"]),(0,r.createVNode)(L,null,{default:(0,r.withCtx)((function(){return[3==a.usuario.id_rol&&S.evaluarFecha(a.tarea.plantilla.fecha_fin)?((0,r.openBlock)(),(0,r.createBlock)(F,{key:0,header:"Entregar"},{default:(0,r.withCtx)((function(){return[p,(0,r.createVNode)(Z,{modelValue:S.values.descripcion,"onUpdate:modelValue":t[5]||(t[5]=function(e){return S.values.descripcion=e}),placeholder:"Descripción de la entrega (Opcional)",class:"w-full"},null,8,["modelValue"]),(0,r.createVNode)(I,{chooseLabel:"Cargar",uploadLabel:"Subir la tarea",showUploadButton:!0,showCancelButton:!1,name:"tarea[]",onUploader:S.myUploader,multiple:!0,maxFileSize:1e7,customUpload:!0},{empty:(0,r.withCtx)((function(){return[f]})),_:1},8,["onUploader"])]})),_:1})):(0,r.createCommentVNode)("",!0),3==a.usuario.id_rol?((0,r.openBlock)(),(0,r.createBlock)(F,{key:1,header:"Entregas previas"},{default:(0,r.withCtx)((function(){return[((0,r.openBlock)(!0),(0,r.createElementBlock)(r.Fragment,null,(0,r.renderList)(a.usuario.entregas,(function(e){return(0,r.openBlock)(),(0,r.createElementBlock)("div",{key:e.id_entrega},[e.tarea.length>0?((0,r.openBlock)(),(0,r.createBlock)(j,{key:0,legend:"Fecha: "+e.created_at,class:"mb-4"},{default:(0,r.withCtx)((function(){return[(0,r.createElementVNode)("p",null," Descripción: "+(0,r.toDisplayString)(null==e.descripcion?"Sin descripción":e.descripcion),1),(0,r.createElementVNode)("p",null,[h,(0,r.createElementVNode)("a",{class:(0,r.normalizeClass)([e.nota>50?"bg-green-500":"bg-red-500","px-1.5 rounded-lg"])},(0,r.toDisplayString)(null==e.nota?"Sin calificar aún":e.nota),3)]),(0,r.createElementVNode)("p",null,"Comentario: "+(0,r.toDisplayString)(null==e.comentario?"Sin comentario":e.comentario),1),v,(0,r.createElementVNode)("ul",null,[((0,r.openBlock)(!0),(0,r.createElementBlock)(r.Fragment,null,(0,r.renderList)(e.archivos,(function(e){return(0,r.openBlock)(),(0,r.createElementBlock)("li",{key:e.id_archivo},[(0,r.createElementVNode)("a",{href:e.url,target:"_blank",class:"text-blue-500"},(0,r.toDisplayString)(e.nombre),9,V)])})),128))])]})),_:2},1032,["legend"])):(0,r.createCommentVNode)("",!0)])})),128))]})),_:1})):(0,r.createCommentVNode)("",!0),(0,r.createVNode)(F,{header:"Archivos de la tarea"},{default:(0,r.withCtx)((function(){return[a.tarea.plantilla.archivos.length>0?((0,r.openBlock)(),(0,r.createElementBlock)("div",N,[b,(0,r.createElementVNode)("ul",null,[((0,r.openBlock)(!0),(0,r.createElementBlock)(r.Fragment,null,(0,r.renderList)(a.tarea.plantilla.archivos,(function(e){return(0,r.openBlock)(),(0,r.createElementBlock)("li",{key:e.id_archivo},[(0,r.createElementVNode)("a",{href:e.url,target:"_blank",class:"text-blue-500"},(0,r.toDisplayString)(e.nombre),9,x)])})),128))])])):((0,r.openBlock)(),(0,r.createElementBlock)("div",k,g))]})),_:1}),a.usuario.id_rol<3?((0,r.openBlock)(),(0,r.createBlock)(F,{key:2,header:"Tareas de estudiantes"},{default:(0,r.withCtx)((function(){return[a.tarea.entregas.length>0?((0,r.openBlock)(),(0,r.createElementBlock)("div",C,[E,(0,r.createVNode)(A,{value:a.tarea.entregas,editMode:"cell",onCellEditComplete:S.editarNota},{default:(0,r.withCtx)((function(){return[(0,r.createVNode)(U,{header:"Alumno",field:"usuario.persona"},{body:(0,r.withCtx)((function(e){return[(0,r.createTextVNode)((0,r.toDisplayString)(e.data.usuario.persona.nombre+" "+e.data.usuario.persona.apellido_p),1)]})),_:1}),(0,r.createVNode)(U,{header:"Descripción",field:"descripcion"}),(0,r.createVNode)(U,{header:"Fecha",field:"created_at"}),(0,r.createVNode)(U,{header:"Archivos",field:"archivos"},{body:(0,r.withCtx)((function(e){return[(0,r.createElementVNode)("div",w,[((0,r.openBlock)(!0),(0,r.createElementBlock)(r.Fragment,null,(0,r.renderList)(e.data.archivos,(function(e){return(0,r.openBlock)(),(0,r.createElementBlock)("p",null,[(0,r.createElementVNode)("a",{href:e.url,target:"_blank",class:"text-blue-500"},(0,r.toDisplayString)(e.nombre.slice(11)),9,y)])})),256))])]})),_:1}),(0,r.createVNode)(U,{header:"Calificación",field:"nota"},{body:(0,r.withCtx)((function(e){return[(0,r.createTextVNode)((0,r.toDisplayString)(null==e.data.nota?"Sin calificación":e.data.nota),1)]})),editor:(0,r.withCtx)((function(e){return[(0,r.createTextVNode)((0,r.toDisplayString)(e.data[e.field])+" ",1),(0,r.createVNode)(q,{modelValue:e.data[e.field],"onUpdate:modelValue":function(t){return e.data[e.field]=t},min:0,max:100},null,8,["modelValue","onUpdate:modelValue"])]})),_:1}),(0,r.createVNode)(U,{header:"Comentario",field:"comentario"},{body:(0,r.withCtx)((function(e){return[(0,r.createTextVNode)((0,r.toDisplayString)(null==e.data.comentario?"Sin comentario":e.data.comentario),1)]})),editor:(0,r.withCtx)((function(e){return[(0,r.createVNode)(Z,{modelValue:e.data[e.field],"onUpdate:modelValue":function(t){return e.data[e.field]=t}},null,8,["modelValue","onUpdate:modelValue"])]})),_:1})]})),_:1},8,["value","onCellEditComplete"])])):((0,r.openBlock)(),(0,r.createElementBlock)("div",_,B))]})),_:1})):(0,r.createCommentVNode)("",!0)]})),_:1})])],64)}]])}}]);