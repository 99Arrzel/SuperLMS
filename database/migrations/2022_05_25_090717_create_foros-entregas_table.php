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
        Schema::create('foros-entregas', function (Blueprint $table) {
            $table->foreignId('id_foro')->constrained('foros', 'id_foro');
            $table->foreignId('id_entrega')->constrained('entregas', 'id_entrega');
            $table->unique(['id_foro', 'id_entrega']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('foros-entregas');
    }
};