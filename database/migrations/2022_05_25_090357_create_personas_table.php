<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
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
        Schema::create('personas', function (Blueprint $table) {
            $table->id('id_persona');
            $table->string('nombre');
            $table->string('apellido_p');
            $table->string('apellido_m');
            $table->string('ci');
            $table->string('correo');
            $table->string('telefono');

            $table->text('direccion');
            $table->foreignId('id_foto')->nullable()->constrained('archivos', 'id_archivo');
            $table->softDeletes();
            $table->timestamps();
        });
        //Make query of admin
        DB::table('personas')->insert([
            'nombre' => 'admin',
            'apellido_p' => 'admin',
            'apellido_m' => 'admin',
            'ci' => 'admin',
            'correo' => 'af.carrillo@live.com',
            'telefono' => '63613646',

            'direccion' => 'admin',
            'id_foto' => null,
            'created_at' => now(),
            'updated_at' => now(),
        ]);
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('personas');
    }
};