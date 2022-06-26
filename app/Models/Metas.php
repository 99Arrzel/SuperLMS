<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Metas extends Model
{
    use HasFactory;
    protected $table = 'metas';
    //No timestamps
    public $timestamps = false;
    protected $primaryKey = 'id_meta';
    protected $fillable = ['id_plantilla'];
    //Relationships
    public function plantilla()
    {
        return $this->belongsTo(Plantillas::class, 'id_plantilla');
    }
    public function curso()
    {
        return $this->belongsTo(Cursos::class, 'id_curso');
    }
    public function tareas()
    {
        return $this->hasMany(Tareas::class, 'id_meta');
    }
    public function foros()
    {
        return $this->hasMany(Foros::class, 'id_meta');
    }
}
