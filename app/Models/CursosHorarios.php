<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CursosHorarios extends Model
{
    use HasFactory;
    protected $table = 'cursos-horarios';
    protected $primaryKey = 'id_curso_horario';
    //No timestamp
    public $timestamps = false;
    protected $fillable = ['id_curso', 'hora_inicio', 'hora_fin', 'intervalo'];
}