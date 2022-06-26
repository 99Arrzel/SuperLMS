<?php

namespace App\Http\Controllers\Logeado;

use App\Http\Controllers\Controller;
use App\Models\Archivos;
use App\Models\Cursos;
use App\Models\Entregas;
use App\Models\Foros;
use App\Models\Metas;
use App\Models\Plantillas;
use App\Models\Tareas;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class Contenido extends Controller
{
    public function index($id_meta)
    {
        $meta = Metas::findOrFail($id_meta);
        if (!$meta) {
            return redirect()->route('home');
        }
        return Inertia::render(
            'Logeado/Contenido',
            [
                'usuario' => fn () => Auth::user()->load('rol', 'persona'),
                'meta' => fn () => $meta->load('foros.plantilla', 'tareas.plantilla', 'plantilla'),
            ]
        );
    }
    public function create_f(Request $request)
    {
        $request->validate([
            'id_meta' => 'required|exists:metas,id_meta',
            'nombre' => 'required|string|min:3',
            'descripcion' => 'required|string|min:3',
            'fecha_inicio' => 'required|date',
            'fecha_fin' => 'required|date',
        ]);
        //Creamos una nueva plantilla
        $plantilla = Plantillas::create([
            'nombre' => $request->nombre,
            'descripcion' => $request->descripcion,
            'fecha_inicio' => Carbon::parse($request->fecha_inicio),
            'fecha_fin' => Carbon::parse($request->fecha_fin),
        ]);
        //Creamos una nueva meta con el id del curso y la plantilla
        Metas::findOrFail($request->id_meta)->foros()->create([
            'id_plantilla' => $plantilla->id_plantilla,
        ]);
    }
    public function update_f(Request $request)
    {
        $request->validate([
            'id_foro' => 'required|exists:foros,id_foro',
            'nombre' => 'required|string|min:3',
            'descripcion' => 'required|string|min:3',
            'fecha_inicio' => 'required|date',
            'fecha_fin' => 'required|date',
        ]);
        //Cambiamos el nombre y la descripcion de la plantilla
        Foros::findOrFail($request->id_foro)->plantilla->update([
            'nombre' => $request->nombre,
            'descripcion' => $request->descripcion,
            'fecha_inicio' => Carbon::parse($request->fecha_inicio),
            'fecha_fin' => Carbon::parse($request->fecha_fin),
        ]);
        return back()->with('success', 'Plantilla actualizada correctamente');
    }
    public function delete_f(Request $request)
    {
        $request->validate([
            'id_foro' => 'required|exists:foros,id_foro',
        ]);
        $foro = Foros::findOrFail($request->id_foro);
        //Borramos la plantilla
        $foro->delete();
        $foro->plantilla->delete();
        //Borramos la meta
        return back()->with('success', 'Plantilla eliminada correctamente');
    }

    public function create_t(Request $request)
    {
        $request->validate([
            'id_meta' => 'required|exists:metas,id_meta',
            'nombre' => 'required|string|min:3',
            'descripcion' => 'required|string|min:3',
            'fecha_inicio' => 'required|date',
            'fecha_fin' => 'required|date',
        ]);
        //Creamos una nueva plantilla
        $plantilla = Plantillas::create([
            'nombre' => $request->nombre,
            'descripcion' => $request->descripcion,
            'fecha_inicio' => Carbon::parse($request->fecha_inicio),
            'fecha_fin' => Carbon::parse($request->fecha_fin),
        ]);
        //Creamos una nueva tarea con el id del curso y la plantilla
        Metas::findOrFail($request->id_meta)->tareas()->create([
            'id_plantilla' => $plantilla->id_plantilla,
        ]);
        return back()->with('success', 'Tarea creada correctamente');
    }
    public function update_t(Request $request)
    {
        $request->validate([
            'id_tarea' => 'required|exists:tareas,id_tarea',
            'nombre' => 'required|string|min:3',
            'descripcion' => 'required|string|min:3',
            'fecha_inicio' => 'required|date',
            'fecha_fin' => 'required|date',
        ]);
        //Cambiamos el nombre y la descripcion de la plantilla
        Tareas::findOrFail($request->id_tarea)->plantilla->update([
            'nombre' => $request->nombre,
            'descripcion' => $request->descripcion,
            'fecha_inicio' => Carbon::parse($request->fecha_inicio),
            'fecha_fin' => Carbon::parse($request->fecha_fin),
        ]);
        return back()->with('success', 'Tarea actualizada correctamente');
    }
    public function delete_t(Request $request)
    {
        $request->validate([
            'id_tarea' => 'required|exists:tareas,id_tarea',
        ]);
        $tarea = Tareas::findOrFail($request->id_tarea);
        $tarea->delete();
        //Borramos la tarea
        $tarea->plantilla->delete();
        //Borramos la plantilla
        return back()->with('success', 'Tarea eliminada correctamente');
    }
    public function detalles_t($id_tarea)
    {
        $tarea = Tareas::findOrFail($id_tarea);
        if (!$tarea) {
            return redirect()->route('home');
        }
        return Inertia::render(
            'Logeado/Tareas_Detalles',
            [
                'usuario' => fn () => Auth::user()->load(['rol', 'persona', 'entregas.tarea' => function ($query) use ($id_tarea) {
                    $query->where('tareas.id_tarea', $id_tarea);
                }, 'entregas.archivos']),
                'tarea' => fn () => $tarea->load(['plantilla.archivos']),
            ]
        );
    }
    /* Y este lo carga el docente */
    public function archivos_profe(Request $request)
    {
        $request->validate([
            'id_tarea' => 'required|exists:tareas,id_tarea',
            'archivos' => 'required',
        ]);
        DB::beginTransaction();
        try {
            $array = [];
            if ($request->hasFile('archivos')) {
                $archivos = $request->file('archivos');
                foreach ($archivos as $archivo) {
                    //$nombre = $archivo->getClientOriginalName();

                    $nombre = time() . '_' . $archivo->getClientOriginalName();
                    $archivo->move(public_path() . '/archivos/tareas/', $nombre);
                    $archivo = Archivos::create([
                        'nombre' => $nombre,
                        'descripcion' => $request->descripcion,
                        'url' => '/archivos/tareas/' . $nombre,
                        'id_tarea' => $request->id_tarea,
                    ]);
                    $array[] = $archivo->id_archivo;
                }
            }
            $id_p = Tareas::findOrFail($request->id_tarea)->id_plantilla;
            $plantilla = Plantillas::findOrFail($id_p);
            $plantilla->archivos()->sync($array);
            DB::commit();
            return back()->with('success', 'Tarea entregada correctamente');
        } catch (\Exception $e) {
            return back()->withErrors('error', 'Error al subir la tarea', $e->getMessage());
        }
    }
    /* Desde acá carga el estudiante */
    public function subir_tarea(Request $request)
    {
        $request->validate([
            'id_tarea' => 'required|exists:tareas,id_tarea',

            'archivos' => 'required',
        ]);
        DB::beginTransaction();
        try {
            $array = [];
            if ($request->hasFile('archivos')) {
                $archivos = $request->file('archivos');
                foreach ($archivos as $archivo) {
                    //$nombre = $archivo->getClientOriginalName();

                    $nombre = time() . '_' . $archivo->getClientOriginalName();
                    $archivo->move(public_path() . '/archivos/tareas/', $nombre);
                    $archivo = Archivos::create([
                        'nombre' => $nombre,
                        'descripcion' => $request->descripcion,
                        'url' => '/archivos/tareas/' . $nombre,
                        'id_tarea' => $request->id_tarea,
                    ]);
                    $array[] = $archivo->id_archivo;
                }
            }
            $entrega = Entregas::create([
                'descripcion' => $request->descripcion,
                'id_usuario' => Auth::user()->id_usuario,
            ]);
            $entrega->archivos()->sync($array);
            Tareas::findOrFail($request->id_tarea)->entregas()->attach($entrega->id_entrega); //Asociar la entrega a la tarea
            DB::commit();
            return back()->with('success', 'Tarea entregada correctamente');
        } catch (\Exception $e) {
            return back()->withErrors('error', 'Error al subir la tarea', $e->getMessage());
        }
    }
    public function archivos_profe_eliminar(Request $request)
    {
        $request->validate([
            'id_archivo' => 'required|exists:archivos,id_archivo',
        ]);

        $archivo = Archivos::findOrFail($request->id_archivo);
        /* También eliminamos el archivo fisicamente */
        unlink(public_path() . '/archivos/tareas/', $archivo->nombre);
        $archivo->delete();
        return back()->with('success', 'Archivo eliminado correctamente');
    }
}