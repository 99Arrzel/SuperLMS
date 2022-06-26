<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Logros extends Model
{
    use HasFactory;
    protected $table = 'logros';
    protected $primaryKey = 'id_logro';
    protected $fillable = ['id_usuario', 'id_curso', 'nota'];
    //Casts de created at. updated at
    protected $casts = [
        'created_at' => 'datetime:d/m/Y H:i:s',
        'updated_at' => 'datetime:d/m/Y H:i:s',
    ];
    //Relationships
    public function usuarios()
    {
        return $this->belongsTo(Usuarios::class, 'id_usuario');
    }
    public function cursos()
    {
        return $this->belongsTo(Cursos::class, 'id_curso');
    }
}