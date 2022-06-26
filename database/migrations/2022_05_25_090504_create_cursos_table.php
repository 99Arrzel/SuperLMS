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
        Schema::create('cursos', function (Blueprint $table) {
            $table->id('id_curso');
            $table->string('codigo')->nullable();
            $table->foreignId('id_plantilla')->constrained('plantillas', 'id_plantilla')->onDelete('cascade');
            $table->foreignId('id_pgf')->nullable()->constrained('archivos', 'id_archivo')->onDelete('cascade');
            $table->foreignId('id_foto')->nullable()->constrained('archivos', 'id_archivo')->onDelete('cascade');
            $table->timestamp('termino_en')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('cursos');
    }
};