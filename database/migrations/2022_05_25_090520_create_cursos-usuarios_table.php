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
        Schema::create('cursos-usuarios', function (Blueprint $table) {
            $table->foreignId('id_curso')->constrained('cursos', 'id_curso');
            $table->foreignId('id_usuario')->constrained('usuarios', 'id_usuario');
            $table->unique(['id_curso', 'id_usuario']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('cursos-usuarios');
    }
};