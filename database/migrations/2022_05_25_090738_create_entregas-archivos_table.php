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
        Schema::create('entregas-archivos', function (Blueprint $table) {
            $table->foreignId('id_entrega')->constrained('entregas', 'id_entrega');
            $table->foreignId('id_archivo')->constrained('archivos', 'id_archivo');
            $table->unique(['id_entrega', 'id_archivo']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('entregas-archivos');
    }
};