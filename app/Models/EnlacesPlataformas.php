<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class EnlacesPlataformas extends Model
{
    use HasFactory;
    protected $table = 'enlaces-plataformas';
    protected $primaryKey = 'id_enlace_plataforma';
    //No timestamps
    public $timestamps = false;
    protected $fillable = ['nombre', 'url', 'id_curso'];
}