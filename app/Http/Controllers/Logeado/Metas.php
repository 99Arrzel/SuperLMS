<?php

namespace App\Http\Controllers\Logeado;

use App\Http\Controllers\Controller;
use App\Models\Cursos;
use App\Models\Metas as ModelsMetas;
use App\Models\Plantillas;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class Metas extends Controller
{
    public function index($id)
    {
        $curso = Cursos::findOrFail($id);
        if (!$curso) {
            return redirect()->route('home');
        }
        $curso->load('plantilla', 'foto', 'usuarios.persona', 'metas.plantilla', 'pgf')->first();
        return Inertia::render('Logeado/Metas', [
            'usuario' => fn () => Auth::user()->load('rol', 'persona'),
            'curso' => fn () => $curso,
        ]);
    }
    public function create(Request $request)
    {
        $request->validate([
            'id_curso' => 'required|exists:cursos,id_curso',
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
        Cursos::findOrFail($request->id_curso)->metas()->create([
            'id_plantilla' => $plantilla->id_plantilla,
        ]);
        return back()->with('success', 'Meta creada correctamente');
    }
    public function update(Request $request)
    {
        $request->validate([
            'id_meta' => 'required|exists:metas,id_meta',
            'nombre' => 'required|string|min:3',
            'descripcion' => 'required|string|min:3',
            'fecha_inicio' => 'required|date',
            'fecha_fin' => 'required|date',
        ]);
        //Cambiamos el nombre y la descripcion de la plantilla
        ModelsMetas::findOrFail($request->id_meta)->plantilla->update([
            'nombre' => $request->nombre,
            'descripcion' => $request->descripcion,
            'fecha_inicio' => Carbon::parse($request->fecha_inicio),
            'fecha_fin' => Carbon::parse($request->fecha_fin),
        ]);
        return back()->with('success', 'Meta actualizada correctamente');
    }
    public function delete(Request $request)
    {
        $request->validate([
            'id_meta' => 'required|exists:metas,id_meta',
        ]);
        $meta = ModelsMetas::findOrFail($request->id_meta);
        //Borramos la plantilla
        $meta->delete();
        $meta->plantilla->delete();
        //Borramos la meta
        return back()->with('success', 'Meta eliminada correctamente');
    }
}