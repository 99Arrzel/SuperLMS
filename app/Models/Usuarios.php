<?php

namespace App\Models;


use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Foundation\Auth\User as Authenticatable;
//Define constant datetime format
use DateTimeInterface;

class Usuarios extends Authenticatable
{
    use HasFactory, SoftDeletes;
    protected $table = 'usuarios';
    protected $primaryKey  = 'id_usuario';
    protected $fillable = ['usuario', 'id_rol', 'password', 'id_persona'];
    protected $hidden = ['password'];
    //Casts dates to dd/mm/yyyy hh:mm:ss
    protected function serializeDate(DateTimeInterface $date)
    {
        return $date->timezone('America/La_Paz')->format('d/m/Y');
    }
    //Relationships
    public function rol()
    {
        return $this->belongsTo(Roles::class, 'id_rol');
    }
    public function persona()
    {
        return $this->belongsTo(Personas::class, 'id_persona');
    }
    public function logros()
    {
        return $this->hasMany(Logros::class, 'id_usuario');
    }
    public function cursos()
    {
        return $this->hasManyThrough(Cursos::class, CursosUsuarios::class, 'id_usuario', 'id_curso', 'id_usuario', 'id_curso');
    }
    public function entregas()
    {
        return $this->hasMany(Entregas::class, 'id_usuario');
    }
}