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
        Schema::create('cursos-horarios', function (Blueprint $table) {
            $table->id('id_curso_horario');
            $table->foreignId('id_curso')->constrained('cursos', 'id_curso');
            $table->dateTime('hora_inicio');
            $table->dateTime('hora_fin');
            $table->tinyInteger('intervalo');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('cursos-horarios');
    }
};