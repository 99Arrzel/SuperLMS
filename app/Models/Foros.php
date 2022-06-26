<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Foros extends Model
{
    use HasFactory;
    protected $table = 'foros';
    protected $primaryKey = 'id_foro';
    protected $fillable = ['id_plantilla', 'id_meta'];
    /* no timestamps */
    public $timestamps = false;
    //Relationships
    public function plantilla()
    {
        return $this->belongsTo(Plantillas::class, 'id_plantilla');
    }
    public function metas()
    {
        return $this->belongsTo(Metas::class, 'id_foro');
    }
    public function entregas()
    {
        return $this->belongsToMany(Entregas::class, 'foros-entregas', 'id_foro', 'id_entrega');
    }
}