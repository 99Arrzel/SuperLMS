<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use DateTimeInterface;

class Cursos extends Model
{
    use HasFactory;
    protected $table = 'cursos';
    protected $primaryKey = 'id_curso';
    protected $fillable = ['codigo', 'id_plantilla', 'id_pgf', 'id_foto', 'termino_en'];
    //Casts de created at. updated at
    protected function serializeDate(DateTimeInterface $date)
    {
        return $date->timezone('America/La_Paz')->format('d/m/Y');
    }
    //Relationships
    public function logros()
    {
        return $this->hasMany(Logros::class, 'id_curso', 'id_curso');
    }
    public function foto()
    {
        return $this->belongsTo(Archivos::class, 'id_foto');
    }
    public function plantilla()
    {
        return $this->belongsTo(Plantillas::class, 'id_plantilla');
    }
    public function pgf()
    {
        return $this->belongsTo(Archivos::class, 'id_pgf');
    }
    public function usuarios()
    {
        return $this->belongsToMany(Usuarios::class, 'cursos-usuarios', 'id_curso', 'id_usuario');
    }
    public function enlacesPlataformas()
    {
        return $this->hasMany(EnlacesPlataformas::class, 'id_curso');
    }
    public function horarios()
    {
        return $this->hasMany(CursosHorarios::class, 'id_curso');
    }
    public function metas()
    {
        return $this->hasMany(Metas::class, 'id_curso');
    }
}
