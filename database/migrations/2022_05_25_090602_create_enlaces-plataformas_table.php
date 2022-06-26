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
        Schema::create('enlaces-plataformas', function (Blueprint $table) {
            $table->id('id_enlace_plataforma');
            $table->string('nombre');
            $table->string('url');
            $table->foreignId('id_curso')->constrained('cursos', 'id_curso')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('enlaces-plataformas');
    }
};