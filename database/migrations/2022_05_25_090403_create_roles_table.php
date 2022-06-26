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
        Schema::create('roles', function (Blueprint $table) {
            $table->id('id_rol');
            $table->string('nombre');
            $table->timestamps();
        });
        //Insert admin rol
        DB::table('roles')->insert(
            [

                'id_rol' => 1,
                'nombre' => 'Admin',
                'created_at' => now(),
                'updated_at' => now(),
            ]
        );
        //Insert profesor rol
        DB::table('roles')->insert(
            [

                'id_rol' => 2,
                'nombre' => 'Profesor',
                'created_at' => now(),
                'updated_at' => now(),
            ]
        );
        //Insert estudiante rol
        DB::table('roles')->insert(
            [

                'id_rol' => 3,
                'nombre' => 'Estudiante',
                'created_at' => now(),
                'updated_at' => now(),
            ]
        );
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('roles');
    }
};