<?php

namespace App\Models;

use DateTimeInterface;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
//Define constant for datetime format

class Personas extends Model
{
    use HasFactory;
    protected $table = 'personas';
    protected $primaryKey = 'id_persona';
    protected $fillable = ['nombre', 'apellido_p', 'apellido_m', 'ci',  'correo', 'telefono', 'id_foto', 'direccion'];
    //Casts de deleted, created y updated
    protected function serializeDate(DateTimeInterface $date)
    {
        return $date->timezone('America/La_Paz')->format('d/m/Y H:i:s');
    }
    //Relationships
    public function foto()
    {
        return $this->belongsTo(Fotos::class, 'id_foto');
    }
    public function usuarios()
    {
        return $this->hasMany(Usuarios::class, 'id_persona');
    }
}
