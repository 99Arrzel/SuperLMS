<?php

namespace App\Http\Controllers\Logeado\Admin;

use App\Http\Controllers\Controller;
use App\Models\Curso_Basicos;
use App\Models\Cursos;
use App\Models\CursosHorarios;
use App\Models\EnlacesPlataformas;
use App\Models\Horarios;
use App\Models\Plantillas;
use App\Models\Urls_Contacto;
use App\Models\Usuarios;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class Adm_Cursos extends Controller
{
    public function index()
    {
        return Inertia::render('Logeado/Admin/Cursos', [
            'usuario' => fn () => Auth::user()->load('persona', 'rol'),
            'cursos' => fn () => Cursos::with('plantilla.archivos', 'usuarios', 'horarios', 'enlacesPlataformas', 'metas', 'foto')->get(),
            'usuarios' => fn () => Usuarios::with('persona', 'rol')->get()
        ]);
    }

    public function create(Request $request)
    {
        //Ok to create we need to make first a basic course
        //and then we can add the rest of the data
        $request->validate([
            'nombre' => 'required|string|min:3',
            'descripcion' => 'required|string|min:3',
            'id_imagen' => 'nullable|exists:archivos,id_archivo',
            'fecha_inicio' => 'required|date',
            'fecha_fin' => 'required|date',
            'fecha_extension' => 'nullable|date',
            'codigo' => 'nullable',
        ]);
        /* Before start we need a unique nombre */
        $cursos = Cursos::leftJoin('plantillas', 'cursos.id_plantilla', '=', 'plantillas.id_plantilla')->where('plantillas.nombre', $request->nombre)->get()->count();

        if ($cursos > 0) {
            return back()->withErrors(['El curso con nombre ' . $request->nombre . ' ya existe']);
        }
        //First we make a transaction
        DB::beginTransaction();
        try {
            //Then we create the basic course
            $nuevo = Plantillas::create([
                'nombre' => $request->nombre,
                'descripcion' => $request->descripcion,
                'fecha_inicio' =>  Carbon::parse($request->fecha_inicio),
                'fecha_fin' => Carbon::parse($request->fecha_fin),
                'fecha_extension' => Carbon::parse($request->fecha_extension),
            ]);

            //Then we get the id of the basic course
            Cursos::create([
                'codigo' => $request->codigo,
                'id_plantilla' => $nuevo->id_plantilla,
                'id_foto' => $request->id_imagen,
            ]);
            //Finally we commit the transaction
            DB::commit();
            return back()->with('success', 'Curso creado con éxito');
        } catch (\Exception $e) {
            //If there is an error we rollback the transaction
            DB::rollback();
            //And we return the error
            return back()->withErrors(['Error' => $e->getMessage()]);
        }
    }
    public function update(Request $request)
    {
        $request->validate([
            'id' => 'required|exists:cursos,id_curso',
            'nombre' => 'required|string|min:3',
            'descripcion' => 'required|string|min:3',
            'imagen' => 'nullable|exists:personas,id',
            'fecha_inicio' => 'required|date',
            'fecha_fin' => 'required|date',
            'fecha_extension' => 'nullable|date',
            'id_foto' => 'nullable|exists:archivos,id_archivo',
            'codigo' => 'nullable',
        ]);
        //First we make a transaction

        DB::beginTransaction();
        try {
            //First we need the course
            $curso = Cursos::findOrFail($request->id);

            //Then we update the basic course
            $curso->plantilla->update([
                'nombre' => $request->nombre,
                'descripcion' => $request->descripcion,
                'imagen' => $request->imagen,
                'fecha_inicio' =>  Carbon::parse($request->fecha_inicio),
                'fecha_fin' => Carbon::parse($request->fecha_fin),
                'fecha_extension' => Carbon::parse($request->fecha_extension),

            ]);
            //Update the code
            $curso->update([
                'id_foto' => $request->id_foto,
                'codigo' => $request->codigo,
            ]);
            //Then commit
            DB::commit();
            return back()->with('success', 'Curso actualizado con éxito');
        } catch (\Exception $e) {
            //If there is an error we rollback the transaction
            DB::rollback();
            //And we return the error
            return back()->withErrors(['Error' => $e->getMessage()]);
        }
    }
    public function delete(Request $request)
    {
        $request->validate([
            'id_curso' => 'required|exists:cursos,id_curso',
        ]);
        //First we make a transaction
        $curso = Cursos::findOrFail($request->id_curso);
        /* Validar si el curso tiene usuarios */
        if ($curso->usuarios->count() > 0) {
            return back()->withErrors(['Error' => 'No se puede eliminar el curso porque tiene usuarios']);
        }
        /* Si tiene logros asignados, tampoco se elimina */
        if ($curso->logros->count() > 0) {
            return back()->withErrors(['Error' => 'No se puede eliminar el curso porque tiene logros asignados']);
        }
        DB::beginTransaction();
        try {
            //First we need the course
            //Then we delete the basic course
            $curso->plantilla->delete();
            //Then we delete the course
            $curso->delete();
            //Finally we commit
            DB::commit();

            return back()->with('success', 'Curso eliminado con éxito');
        } catch (\Exception $e) {
            //If there is an error we rollback the transaction
            DB::rollback();

            //And we return the error
            return back()->withErrors(['Error' => $e->getMessage()]);
        }
    }
    public function crear_horario(Request $request)
    {
        $request->validate([
            'id_curso' => 'required|exists:cursos',
            'hora_inicio' => 'required|string|min:3',
            'hora_fin' => 'required|string|min:3',
            'ciclo' => 'required|numeric',
        ]);
        //Now make the query
        CursosHorarios::create([
            'id_curso' => $request->id_curso,
            'hora_inicio' => $request->hora_inicio,
            'hora_fin' => $request->hora_fin,
            'ciclo' => $request->ciclo,
        ]);
        return back()->with('success', 'Horario creado con éxito');
    }
    public function editar_horario(Request $request)
    {
        $request->validate([
            'id' => 'required|exists:horarios',
            'hora_inicio' => 'required|string|min:3',
            'hora_fin' => 'required|string|min:3',
            'ciclo' => 'required|numeric',
        ]);
        //Now make the query
        CursosHorarios::where('id', $request->id)->update([
            'hora_inicio' => $request->hora_inicio,
            'hora_fin' => $request->hora_fin,
            'ciclo' => $request->ciclo,
        ]);
        return back()->with('success', 'Horario actualizado con éxito');
    }
    public function eliminar_horario(Request $request)
    {
        $request->validate([
            'id' => 'required|exists:horarios',
        ]);
        //Now make the query
        CursosHorarios::where('id', $request->id)->delete();
        return back()->with('success', 'Horario eliminado con éxito');
    }
    public function crear_url(Request $request)
    {
        $request->validate([
            'id_curso' => 'required|exists:cursos',
            'url' => 'required|string|min:3',
            'nombre' => 'required|string|min:3',
        ]);
        //Now make the query
        EnlacesPlataformas::create([
            'id_curso' => $request->id_curso,
            'url' => $request->url,
            'nombre' => $request->nombre,
        ]);
        return back()->with('success', 'URL creada con éxito');
    }
    public function editar_url(Request $request)
    {
        $request->validate([
            'id' => 'required|exists:urls_contactos',
            'url' => 'required|string|min:3',
            'nombre' => 'required|string|min:3',
        ]);
        $url = EnlacesPlataformas::findOrFail($request->id);
        $url->update([
            'url' => $request->url,
            'nombre' => $request->nombre,
        ]);
        return back()->with('success', 'URL actualizada con éxito');
    }
    public function eliminar_url(Request $request)
    {
        $request->validate([
            'id' => 'required|exists:urls',
        ]);
        $url = EnlacesPlataformas::findOrFail($request->id);
        $url->delete();
        return back()->with('success', 'URL eliminada con éxito');
    }
    public function sincronizarUsuariosCurso(Request $request)
    {
        $request->validate([
            'id_curso' => 'required|exists:cursos',
            'usuarios' => 'array',
        ]);
        $curso = Cursos::findOrFail($request->id_curso);
        $curso->usuarios()->sync($request->usuarios);
        return back()->with('success', 'Usuarios sincronizados con éxito');
    }
    public function terminarCurso(Request $request)
    {
        $request->validate([
            'id_curso' => 'required|exists:cursos',
        ]);
        $curso = Cursos::findOrFail($request->id_curso);

        if ($curso->termino_en == null) {
            $curso->update([
                'termino_en' => Carbon::now(),
            ]);
            return back()->with('success', 'Se terminó el curso');
        }
        $curso->update([
            'termino_en' => null,
        ]);
        return back()->with('success', 'Se abrió el curso');
    }
}