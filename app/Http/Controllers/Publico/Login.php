<?php

namespace App\Http\Controllers\Publico;

use App\Http\Controllers\Controller;
use Illuminate\Contracts\Session\Session;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class Login extends Controller
{
    public function index()
    {
        if (Auth::check()) {
            return Redirect::to('/inicio');
        }
        return Inertia::render('Login');
    }
    public function login(Request $request)
    {
        if (Auth::check()) return;
        $request->validate([
            'usuario' => 'required|string|min:3',
            'password' => 'required|string|min:3',
            'recuerdame' => 'required',
        ]);

        $credentials = $request->only(['usuario', 'password']);
        if (!Auth::attempt($credentials, $request->recuerdame)) {
            return Inertia::render('Login', [
                'error' => 'Usuario o contraseña incorrectos',
                'status' => false,
            ]);
        }
        return Redirect::route('home');
    }
    public function logout()
    {
        Auth::logout();

        return Redirect::route('login');
    }
}