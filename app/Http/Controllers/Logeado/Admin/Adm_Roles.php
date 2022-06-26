<?php

namespace App\Http\Controllers\Logeado\Admin;

use App\Http\Controllers\Controller;
use App\Models\Roles;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class Adm_Roles extends Controller
{
    public function index()
    {
        $usuario = Auth::user();
        $usuario->roles;
        $usuario->persona;
        return Inertia::render('Logeado/Admin/Roles', [
            'usuario' => fn () => $usuario,
            'roles' => fn () => Roles::all()
        ]);
    }
    public function create(Request $request)
    {
        $request->validate([
            'nombre' => 'required|string|min:3',
        ]);
        Roles::create([
            'nombre' => $request->nombre,
        ]);
        return response()->json(['success' => true, 'message' => "Creado con éxito"], 200);
    }
    public function update(Request $request)
    {
        $request->validate([
            'nombre' => 'required|string|min:3',
        ]);
        if ($request->id == 1 || $request->id == 2 || $request->id == 3) {
            return response()->json(['success' => false, 'message' => "No puedes editar este rol"], 200);
        }
        Roles::findOrFail($request->id)->update([
            'nombre' => $request->nombre,
        ]);
        return response()->json(['success' => true, 'message' => "Actualizado con éxito"], 200);
    }
    public function delete(Request $request)
    {
        if ($request->id == 1 || $request->id == 2 || $request->id == 3) {
            return response()->json(['success' => false, 'message' => "No puedes eliminar este rol"], 200);
        }
        Roles::findOrFail($request->id)->delete();
        return response()->json(['success' => true, 'message' => "Eliminado con éxito"], 200);
    }
}