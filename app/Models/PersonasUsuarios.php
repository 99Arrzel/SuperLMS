<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PersonasUsuarios extends Model
{
    use HasFactory;
    protected $table = 'personas-usuarios';
    protected $fillable = ['id_persona', 'id_usuario'];
}