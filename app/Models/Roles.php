<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use DateTimeInterface;

class Roles extends Model
{
    use HasFactory;
    protected $table = 'roles';
    protected $primaryKey = 'id_rol';
    protected $fillable = ['nombre'];
    //Cast
    protected function serializeDate(DateTimeInterface $date)
    {
        return $date->timezone('America/La_Paz')->format('d/m/Y');
    }
    //Relacion usuarios
    public function usuarios()
    {
        return $this->hasMany(Usuarios::class, 'id_rol');
    }
}