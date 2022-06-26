<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ArchivosPlantillas extends Model
{
    use HasFactory;
    protected $table = 'ArchivosPlantilla';
    //
    protected $fillable = ['id_archivo', 'id_plantilla'];
}
