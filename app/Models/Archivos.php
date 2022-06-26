<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use DateTimeInterface;

class Archivos extends Model
{
    use HasFactory;
    protected $table = 'archivos';
    protected $primaryKey = 'id_archivo';
    protected $fillable = ['nombre', 'descripcion', 'url'];
    //cast created_at, updated_at
    protected function serializeDate(DateTimeInterface $date)
    {
        return $date->timezone('America/La_Paz')->format('d/m/Y');
    }
}