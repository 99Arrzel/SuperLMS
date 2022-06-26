<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tareas extends Model
{
    use HasFactory;
    protected $table = 'tareas';
    protected $primaryKey = 'id_tarea';
    protected $fillable = ['id_meta', 'id_plantilla'];
    //No timestamps
    public $timestamps = false;
    //Relationships
    public function meta()
    {
        return $this->belongsTo(Metas::class, 'id_meta');
    }
    public function plantilla()
    {
        return $this->belongsTo(Plantillas::class, 'id_plantilla');
    }
    public function entregas()
    {
        return $this->belongsToMany(Entregas::class, 'tareas-entregas', 'id_tarea', 'id_entrega');
    }
}