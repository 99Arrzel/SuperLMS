<?php

use App\Http\Controllers\Logeado\Admin\Adm_Cursos;
use App\Http\Controllers\Logeado\Admin\Adm_Personas;
use App\Http\Controllers\Logeado\Admin\Adm_Roles;
use App\Http\Controllers\Logeado\Admin\Adm_Usuarios;
use App\Http\Controllers\Logeado\Contenido;
use App\Http\Controllers\Logeado\Home;
use App\Http\Controllers\Logeado\Metas;
use App\Http\Controllers\Publico\Login;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


Route::get('/', [Login::class, 'index'])->name('login');
Route::post('/', [Login::class, 'login'])->name('loginPost');



Route::middleware('isLoggedIn')->group(function () {
    //File upload
    Route::post('/upload', [Home::class, 'fileUpload'])->name('fileUpload');
    Route::post('/upload-edit', [Home::class, 'editFileUpload'])->name('editFileUpload');
    Route::get('/logout', [Login::class, 'logout'])->name('logout');
    /* Entrar al curso */
    //Metas del curso
    Route::get('/curso/{id}', [Metas::class, 'index'])->name('curso');
    Route::post('/curso/metas/crear', [Metas::class, 'create'])->name('agregar_meta');
    Route::post('/curso/metas/update', [Metas::class, 'update'])->name('editar_meta');
    Route::post('/curso/metas/delete', [Metas::class, 'delete'])->name('eliminar_meta');
    /* Contenido en metas */
    Route::get('/cursos/contenido/{id_meta}', [Contenido::class, 'index'])->name('contenido');
    /* Tareas */
    Route::post('/curso/tarea/subir_archivos', [Contenido::class, 'archivos_profe'])->name('archivos_profe');
    Route::post('/curso/tarea/eliminar_archivo', [Contenido::class, 'archivos_profe_eliminar'])->name('archivos_profe_eliminar');
    Route::post('/curso/tarea/crear', [Contenido::class, 'create_t'])->name('agregar_tarea');
    Route::post('/curso/tarea/editar', [Contenido::class, 'update_t'])->name('editar_tarea');
    Route::post('/curso/tarea/eliminar', [Contenido::class, 'delete_t'])->name('eliminar_tarea');
    Route::get('/curso/tarea/{id_tarea}', [Contenido::class, 'detalles_t'])->name('detalles_tarea');
    /* Foros */
    Route::post('/curso/foro/crear', [Contenido::class, 'create_f'])->name('agregar_foro');
    Route::post('/curso/foro/editar', [Contenido::class, 'update_f'])->name('editar_foro');
    Route::post('/curso/foro/eliminar', [Contenido::class, 'delete_f'])->name('eliminar_foro');
    /* Entregas */

    Route::post('/curso/entrega/entregar_tarea', [Contenido::class, 'subir_tarea'])->name('entregar_tarea');

    /* Admin */
    Route::middleware('isAdmin')->group(function () {
        //Route group for dashboard_adm
        Route::prefix('/dashboard_adm')->group(function () {
            //Personas
            Route::get('/personas', [Adm_Personas::class, 'index'])->name('dashboard_adm_personas');
            Route::post('/personas/create', [Adm_Personas::class, 'create'])->name('dashboard_adm_personas_crear');
            Route::post('/personas/update', [Adm_Personas::class, 'update'])->name('dashboard_adm_personas_actualizar');
            Route::post('/personas/delete', [Adm_Personas::class, 'delete'])->name('dashboard_adm_personas_eliminar');
            //Usuarios
            Route::get('/usuarios', [Adm_Usuarios::class, 'index'])->name('dashboard_adm_usuarios');
            Route::post('/usuarios/create', [Adm_Usuarios::class, 'create'])->name('dashboard_adm_usuarios_crear');
            Route::post('/usuarios/update', [Adm_Usuarios::class, 'update'])->name('dashboard_adm_usuarios_actualizar');
            Route::post('/usuarios/delete', [Adm_Usuarios::class, 'delete'])->name('dashboard_adm_usuarios_eliminar');
            Route::post('/usuarios/restore', [Adm_Usuarios::class, 'restore'])->name('dashboard_adm_usuarios_restaurar');
            //Roles
            Route::get('/roles', [Adm_Roles::class, 'index'])->name('dashboard_adm_roles');
            Route::post('/roles/create', [Adm_Roles::class, 'create'])->name('dashboard_adm_roles_crear');
            Route::post('/roles/update', [Adm_Roles::class, 'update'])->name('dashboard_adm_roles_actualizar');
            Route::post('/roles/delete', [Adm_Roles::class, 'delete'])->name('dashboard_adm_roles_eliminar');
            //Cursos
            Route::get('/cursos', [Adm_Cursos::class, 'index'])->name('dashboard_adm_cursos');
            Route::post('/cursos/create', [Adm_Cursos::class, 'create'])->name('dashboard_adm_cursos_crear');
            Route::post('/cursos/update', [Adm_Cursos::class, 'update'])->name('dashboard_adm_cursos_actualizar');
            Route::post('/cursos/delete', [Adm_Cursos::class, 'delete'])->name('dashboard_adm_cursos_eliminar');
            Route::post('/cursos/sincronizar', [Adm_Cursos::class, 'sincronizarUsuariosCurso'])->name('dashboard_adm_cursos_sincronizar');
            Route::post('/cursos/terminar', [Adm_Cursos::class, 'terminarCurso'])->name('dashboard_adm_cursos_terminar');
        });
    });

    Route::get('/inicio', [Home::class, 'index'])->name('home');
});