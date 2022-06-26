<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;


class Entregas extends Model
{
    use HasFactory;
    protected $table = 'entregas';
    protected $primaryKey = 'id_entrega';
    protected $fillable = ['descripcion', 'id_usuario', 'nota', 'comentario'];
    protected $casts = [

        'created_at' => 'datetime:d/m/Y H:i:s',
        'updated_at' => 'datetime:d/m/Y H:i:s',

    ];
    public function archivos()
    {
        return $this->belongsToMany(Archivos::class, 'entregas-archivos', 'id_entrega', 'id_archivo');
    }
    public function usuario()
    {
        return $this->belongsTo(Usuarios::class, 'id_usuario');
    }
    public function tarea()
    {
        return $this->belongsToMany(Tareas::class, 'tareas-entregas', 'id_entrega', 'id_tarea');
    }
    public function foros()
    {
        return $this->belongsToMany(Foros::class, 'foros-entregas', 'id_entrega', 'id_foro');
    }
}