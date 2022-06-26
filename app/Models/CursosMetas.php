<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CursosMetas extends Model
{
    use HasFactory;
    protected $table = 'cursos-metas';
    //No timestamps
    public $timestamps = false;
    protected $fillable = ['id_curso', 'id_meta'];
}