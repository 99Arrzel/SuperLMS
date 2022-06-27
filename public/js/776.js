"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[776],{7776:(e,t,o)=>{o.r(t),o.d(t,{default:()=>E});var n=o(8222),r={class:"flex flex-wrap items-center justify-between w-full py-4 md:py-0 px-4 text-lg text-gray-700 bg-white"},a=(0,n.createElementVNode)("p",{class:"text-5xl"},"TUNOMBREAQUI",-1),l={class:"text-cyan-400"},s=[(0,n.createElementVNode)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"},null,-1)],d={class:"pt-4 text-base text-gray-700 md:flex md:justify-between md:pt-0"},i={key:0},c={class:"md:p-4 block"},u=(0,n.createElementVNode)("a",{class:"text-gray-700 hover:text-red-400"},"Admin",-1),m={class:"self-center"},p={class:"md:p-4 py-2 block"},h=(0,n.createElementVNode)("a",{class:"text-red-700 hover:text-red-400"},"Cerrar sesión",-1),f=["href"];o(1645),o(8957),o(7887);var b=o(2262),k=o(9680),v=o(7712),w=o(4325),V=o(6663),N=o(7915);history.pushState(null,document.title,location.href),window.addEventListener("popstate",(function(){history.pushState(null,document.title,location.href)}));const x={directives:{Tooltip:N.Z},props:{usuario:{type:Object,default:{}}},components:{InputSwitch:V.Z,SplitButton:v.Z,Button:w.Z},setup:function(){var e=(0,n.ref)([{label:"Personas",command:function(){k.Inertia.visit(route("dashboard_adm_personas"))}},{label:"Usuarios",command:function(){k.Inertia.visit(route("dashboard_adm_usuarios"))}},{label:"Roles",command:function(){k.Inertia.visit(route("dashboard_adm_roles"))}},{label:"Crear Aulas",command:function(){k.Inertia.visit(route("dashboard_adm_cursos"))}},{label:"Notas Estudiantes",command:function(){k.Inertia.visit(route("dashboard_adm_notas_usuarios"))}}]),t=(0,b.qj)({show:!0});return{data:(0,b.qj)({dark:!0}),menuOptions:t,redirectTo:function(e){k.Inertia.visit(route(e))},urlsAdmin:e}}};const E=(0,o(3744).Z)(x,[["render",function(e,t,o,b,k,v){var w=(0,n.resolveComponent)("Button"),V=(0,n.resolveComponent)("SplitButton"),N=(0,n.resolveComponent)("InputSwitch"),x=(0,n.resolveDirective)("tooltip");return(0,n.openBlock)(),(0,n.createElementBlock)(n.Fragment,null,[(0,n.createElementVNode)("header",null,[(0,n.createElementVNode)("nav",r,[(0,n.createElementVNode)("div",null,[(0,n.createElementVNode)("a",{onClick:t[0]||(t[0]=function(e){return b.redirectTo("home")})},[a,(0,n.createElementVNode)("p",l," Bienvenido "+(0,n.toDisplayString)(o.usuario.persona.nombre),1)])]),((0,n.openBlock)(),(0,n.createElementBlock)("svg",{xmlns:"http://www.w3.org/2000/svg",id:"menu-button",onClick:t[1]||(t[1]=function(e){return b.menuOptions.show=!b.menuOptions.show}),class:"h-6 w-6 cursor-pointer md:hidden block",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},s)),(0,n.createElementVNode)("div",{class:(0,n.normalizeClass)("w-full md:flex md:items-center md:w-auto"+(b.menuOptions.show?" hidden":"")),id:"menu"},[(0,n.createElementVNode)("ul",d,[1==o.usuario.id_rol?((0,n.openBlock)(),(0,n.createElementBlock)("li",i,[(0,n.createElementVNode)("a",c,[(0,n.createVNode)(V,{model:b.urlsAdmin,class:"p-button-md p-button-text p-button-secondary"},{default:(0,n.withCtx)((function(){return[(0,n.createVNode)(w,{onClick:t[2]||(t[2]=function(e){return b.redirectTo("dashboard-adm")})},{default:(0,n.withCtx)((function(){return[u]})),_:1})]})),_:1},8,["model"])])])):(0,n.createCommentVNode)("",!0),(0,n.createElementVNode)("li",m,[(0,n.withDirectives)((0,n.createVNode)(N,{modelValue:b.data.dark,"onUpdate:modelValue":t[3]||(t[3]=function(e){return b.data.dark=e})},null,8,["modelValue"]),[[x,b.data.dark?"Modo light":"Modo dark",void 0,{bottom:!0}]])]),(0,n.createElementVNode)("li",null,[(0,n.createElementVNode)("a",p,[(0,n.createVNode)(w,{class:"p-button-md p-button-text p-button-secondary",onClick:t[4]||(t[4]=function(e){return b.redirectTo("logout")})},{default:(0,n.withCtx)((function(){return[h]})),_:1})])])])],2)])]),(0,n.createElementVNode)("link",{href:b.data.dark?"/css/dark.css":"/css/light.css",rel:"stylesheet"},null,8,f),(0,n.createElementVNode)("article",null,[(0,n.renderSlot)(e.$slots,"default")])],64)}]])}}]);