<?php

namespace App\Http\Controllers\Logeado\Admin;

use App\Http\Controllers\Controller;
use App\Models\Personas as ModelsPersonas;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class Adm_Personas extends Controller
{
    public function index()
    {
        $usuario = Auth::user();
        $usuario->roles;
        $usuario->persona;

        return Inertia::render('Logeado/Admin/Personas', [
            'usuario' => fn () => $usuario,
            'personas' => fn () => ModelsPersonas::all()
        ]);
    }
    public function create(Request $request)
    {
        $request->validate([
            'nombre' => 'required|string|min:3',
            'apellido_p' => 'required|string|min:3',
            'apellido_m' => 'required|string|min:3',
            'correo' => 'required|email|unique:personas',
            'ci' => 'required|unique:personas',
            'telefono' => 'required',
            'direccion' => 'required|string',
        ]);
        ModelsPersonas::create([
            'nombre' => $request->nombre,
            'apellido_p' => $request->apellido_p,
            'apellido_m' => $request->apellido_m,
            'correo' => $request->correo,
            'ci' => $request->ci,
            'telefono' => $request->telefono,
            'direccion' => $request->direccion,

        ]);
        return response()->json(['success' => true, 'message' => "Creado con éxito"], 200);
    }
    public function update(Request $request)
    {
        $request->validate([
            'nombre' => 'required|string|min:3',
            'apellido_p' => 'required|string|min:3',
            'apellido_m' => 'required|string|min:3',
            //exception same id
            'correo' => 'required|email|unique:personas,correo,' . $request->id . ',id_persona',
            'ci' => 'required|unique:personas,ci,' . $request->id . ',id_persona',
            'telefono' => 'required',
            'direccion' => 'required|string',
        ]);
        ModelsPersonas::find($request->id)->update([
            'nombre' => $request->nombre,
            'apellido_p' => $request->apellido_p,
            'apellido_m' => $request->apellido_m,
            'correo' => $request->correo,
            'ci' => $request->ci,
            'telefono' => $request->telefono,
            'direccion' => $request->direccion,
        ]);
        return response()->json(['success' => true, 'message' => "Actualizado con éxito"], 200);
    }
    public function delete(Request $request)
    {

        ModelsPersonas::findOrFail($request->id)->delete();
        return response()->json(['success' => true, 'message' => "Eliminado con éxito"], 200);
    }
}