<?php

namespace App\Http\Controllers\Logeado\Admin;

use App\Http\Controllers\Controller;
use App\Models\Personas;
use App\Models\Roles;
use App\Models\Usuarios;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class Adm_Usuarios extends Controller
{
    public function index()
    {
        $usuario = Auth::user();
        $usuario->roles;
        $usuario->persona;
        return Inertia::render('Logeado/Admin/Usuarios', [
            'usuario' => fn () => $usuario,
            'usuarios' => fn () => Usuarios::with('persona', 'rol')->withTrashed()->get(),
            'personas' => fn () => Personas::with('usuarios')->get(),
            'roles' => fn ()  => Roles::all()
        ]);
    }
    public function create(Request $request)
    {
        $request->validate([
            'usuario' => 'required|string|min:3|unique:usuarios,usuario',
            'password' => 'required|string|min:3',
            'id_rol' => 'required|exists:roles,id_rol',
            'id_persona' => 'required|exists:personas,id_persona'
        ]);
        Usuarios::create([
            'usuario' => $request->usuario,
            'password' => Hash::make($request->password),
            'id_rol' => $request->id_rol,
            'id_persona' => $request->id_persona,
        ]);
        return back()->with('success', "Creado con éxito");
    }
    public function update(Request $request)
    {
        $request->validate([
            'id' => 'required|exists:usuarios,id_usuario',
            'usuario' => 'required|string|min:3|unique:usuarios,usuario,' . $request->id . ',id_usuario',
            'id_rol' => 'required|exists:roles,id_rol',
            'id_persona' => 'required|exists:personas,id_persona'

        ]);
        if ($request->password == "" || !isset($request->password)) {
            $data = $request->only(['usuario', 'id_rol', 'id_persona']);
        } else {

            $data = $request->only(['usuario', 'id_rol', 'id_persona', 'password']);
            $data['password'] = Hash::make($request->password);
        }


        Usuarios::findOrFail($request->id)->update($data);
        return back()->with('success', "Actualizado con éxito");
    }
    public function delete(Request $request)
    {
        Usuarios::findOrFail($request->id)->delete();

        return back()->with('success', 'Eliminado con éxito');
    }
    public function restore(Request $request)
    {
        $request->validate(
            [
                'id' => 'required|exists:usuarios,id_usuario'
            ]
        );
        Usuarios::withTrashed()->findOrFail($request->id)->restore();
        return back()->with('success', 'Restaurado con éxito');
    }
    public function test()
    {
        return Usuarios::with('persona')->get();
    }
}