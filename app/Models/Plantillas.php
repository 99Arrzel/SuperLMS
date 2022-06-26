<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

define('DATA_CUSTOM', 'datetime:d/m/Y');
class Plantillas extends Model
{
    use HasFactory;
    protected $table = 'plantillas';
    protected $primaryKey = 'id_plantilla';
    protected $fillable = ['nombre', 'descripcion',  'fecha_inicio', 'fecha_fin', 'fecha_extension'];
    //Casts
    protected $casts = [
        'fecha_inicio' => DATA_CUSTOM,
        'fecha_fin' => DATA_CUSTOM,
        'fecha_extension' => DATA_CUSTOM,
        'created_at' => DATA_CUSTOM,
        'updated_at' => DATA_CUSTOM,

    ];
    //Relationships
    public function cursos()
    {
        return $this->hasMany(Cursos::class, 'id_plantilla');
    }
    public function archivos()
    {
        return $this->belongsToMany(Archivos::class, 'ArchivosPlantilla', 'id_plantilla', 'id_archivo');
    }
}