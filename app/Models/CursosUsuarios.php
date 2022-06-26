<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CursosUsuarios extends Model
{
    use HasFactory;
    protected $table = 'cursos-usuarios';
    //No timestamps
    public $timestamps = false;
    protected $fillable = ['id_curso', 'id_usuario'];
}