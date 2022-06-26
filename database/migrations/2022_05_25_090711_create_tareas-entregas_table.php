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
        Schema::create('tareas-entregas', function (Blueprint $table) {
            $table->foreignId('id_tarea')->constrained('tareas', 'id_tarea');
            $table->foreignId('id_entrega')->constrained('entregas', 'id_entrega');
            $table->unique(['id_tarea', 'id_entrega']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('tareas-entregas');
    }
};