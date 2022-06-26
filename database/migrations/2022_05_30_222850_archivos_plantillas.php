<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('ArchivosPlantilla', function (Blueprint $table) {
            $table->foreignId('id_archivo')->constrained('archivos', 'id_archivo')->onDelete('cascade');
            $table->foreignId('id_plantilla')->constrained('plantillas', 'id_plantilla')->onDelete('cascade');
            $table->unique(['id_archivo', 'id_plantilla']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
};