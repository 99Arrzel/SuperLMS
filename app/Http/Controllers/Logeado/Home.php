<?php

namespace App\Http\Controllers\Logeado;

use App\Http\Controllers\Controller;
use App\Models\Archivos;
use App\Models\Usuarios;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\File;
use Inertia\Inertia;

class Home extends Controller
{
    public function index()
    {
        $usuario = Auth::user()
            ->load('rol', 'persona', 'cursos.plantilla', 'cursos.foto', 'cursos.usuarios.persona', 'cursos.EnlacesPlataformas', 'cursos.usuarios.rol');

        /*
        Método trucho que no carga relaciones de relaciones
        $usuario->rol;
        $usuario->persona;
        $usuario->cursos;
        $usuario->archivos; */

        return Inertia::render('Logeado/Home', [
            'usuario' => $usuario,
        ]);
    }

    public function fileUpload(Request $request)
    {
        $request->validate([
            'file' => 'required|file|max:2048',
        ]);
        $fileName = time() . '.' . $request->file->getClientOriginalExtension();
        $request->file->move(public_path('uploads'), $fileName);
        $nuevo = Archivos::create([
            'nombre' => $request->nombre,
            'url' => 'uploads/' . $fileName,
            'descripcion' => $request->descripcion,
        ]);
        return back()->with('success', ['id' => $nuevo->id_archivo, 'url' => $nuevo->url]);
    }
    public function editFileUpload(Request $request)
    {
        $request->validate([
            'id' => 'required|exists:archivos,id_archivo',
            'nombre' => 'nullable|string|min:3',
            'descripcion' => 'nullable|string|min:3',
            'file' => 'required|file',
        ]);
        $archivo = Archivos::find($request->id);
        $archivo->nombre = $request->nombre;
        $archivo->descripcion = $request->descripcion;
        $fileName = time() . '.' . $request->file->getClientOriginalExtension();
        //Delete old file
        if (File::exists(public_path('uploads') . str_replace("uploads/", "", $archivo->url))) {
            File::delete(public_path('uploads') . str_replace("uploads/", "", $archivo->url));
        }
        $request->file->move(public_path('uploads'), $fileName);
        $archivo->url = 'uploads/' . $fileName;
        $archivo->save();
        return back()->with('success', 'Actualizado con éxito');
    }
}