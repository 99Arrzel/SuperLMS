<?php

namespace App\Http\Controllers\Logeado\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class Adm_Notas extends Controller
{
    public function index()
    {
        return Inertia::render('Logeado/Admin/Notas');
    }
}
