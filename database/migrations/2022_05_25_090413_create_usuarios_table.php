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
        Schema::create('usuarios', function (Blueprint $table) {
            $table->id('id_usuario');
            $table->string('usuario');
            $table->string('password');
            $table->foreignId('id_rol')->constrained('roles', 'id_rol');
            $table->foreignId('id_persona')->constrained('personas', 'id_persona');
            $table->softDeletes();
            $table->rememberToken();
            $table->timestamps();
        });
        //Insert admin user
        DB::table('usuarios')->insert(
            [
                'id_usuario' => 1,
                'usuario' => 'admin',
                'password' => '$2y$10$Lh9rof0P4plG8/78BC/jPO4HRECeNDYpeJe3eZfRAjHiIsooMppje', // admin
                'id_rol' => 1,
                'id_persona' => 1,
                'created_at' => '2020-05-25 09:09:58',
                'updated_at' => '2020-05-25 09:09:58',
                'deleted_at' => null,
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
        Schema::dropIfExists('usuarios');
    }
};