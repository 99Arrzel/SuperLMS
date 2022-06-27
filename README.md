## ¿Qué es SuperLMS?
¿Qué es esto?
SuperLMS es un sistema LMS básico con las siguientes características:

1.- Hay 3 tipos de roles, Administrador, Profesor, Alumno

2.- En el sistema de tareas, la estructura es la siguiente
    -Crear un aula
    
   ![image](https://user-images.githubusercontent.com/64380067/175926482-54edaa5d-9c38-4055-934c-6a858aa7137f.png) 
    
   -Aula puede tener muchas metas/hitos
    
   ![image](https://user-images.githubusercontent.com/64380067/175926538-85ccfbff-5e1d-4129-992f-2526cbc35dc0.png) 
    
   -Hito puede tener muchas tareas/foros
    
   ![image](https://user-images.githubusercontent.com/64380067/175926576-c92b4129-04f4-4c0c-856f-e3efbc12a8ab.png) 
    
   -Tareas pueden ser calificadas
    
   ![image](https://user-images.githubusercontent.com/64380067/175926658-8dd4b436-4bca-4953-823b-ed5eaa0a7c7d.png) 
   
   -Las tareas aceptan entregas múltiples con archivos
    
   ![image](https://user-images.githubusercontent.com/64380067/175926755-5a9ff125-d1d6-4381-bf32-c6a25a27b5fa.png) 
    
   -El docente puede subir archivos también
    
   ![image](https://user-images.githubusercontent.com/64380067/175926816-d1f9eb50-9fad-45b8-9808-ebbbec655576.png) 
    
   ![image](https://user-images.githubusercontent.com/64380067/175926856-e57fc955-cb62-4a82-8e61-6eef32c312ea.png) 
    
   -Los foros admiten imagenes, negreado, cursiva, tache y alineamiento de texto
    
   ![image](https://user-images.githubusercontent.com/64380067/175926984-b5a05de2-c7ee-4402-ada1-88085ab984fd.png) 
    
   -Tareas como foros expiran en la fecha y no pueden subirse más
    
   ![image](https://user-images.githubusercontent.com/64380067/175927073-ace8d3c8-25c1-48eb-bdfc-5cb6629ec3c7.png) 
    

3.- El sistema cuenta con un registro de personas, estas personas tienen usuarios con los 3 roles mencionados

![image](https://user-images.githubusercontent.com/64380067/175926360-d71fecad-3547-43b2-92e6-5834edb4edff.png)

![image](https://user-images.githubusercontent.com/64380067/175926401-9f9b3c46-6dd8-4a93-93b9-786278fe4aa0.png)

![image](https://user-images.githubusercontent.com/64380067/175926414-f02fc00f-9dce-438e-896d-2a985eafce96.png)


4.- El sistema crea aulas con las siguientes características 
-Nombre
-Descripción
-Una imagen
-Cuando empieza
-Cuando acaba
-Extensión del aula
-Estado

![image](https://user-images.githubusercontent.com/64380067/175926322-8a5c7855-ed1d-4653-ad5c-555ffcf475b8.png)

## Cómo instalar
La instalación es sencilla, solo contempla los siguientes requisitos: 
-PHP 8.1 o superior
-Mysql
-Git
-Redis
# Pasos de instalación
1.- Debes clonar este repositorio con git clone

![image](https://user-images.githubusercontent.com/64380067/175927343-9f296deb-dde1-4d3a-bc22-8b7120103194.png)

2.- Ingresar a la carpeta y crear un nuevo archivo .ENV con los datos de tus bases de datos REDIS y MYSQL, tienes el .ENV_EXAMPLE como ejemplo pero te dejo uno acá
APP_ENV=production
APP_DEBUG=false
APP_NAME=Lmstrucho
APP_KEY=base64:KEYACA
APP_URL=URLACA

LOG_CHANNEL=stack
LOG_DEPRECATIONS_CHANNEL=null
LOG_LEVEL=debug

DB_CONNECTION=mysql
DB_HOST=IP_MYSQL_ACA
DB_PORT=PORT_MYSQL_ACA
DB_DATABASE=NOMBRE_DATABASE_ACA
DB_USERNAME=USUARIO_DATABASE_ACA
DB_PASSWORD=PASSWORD_DATABASE_ACA

BROADCAST_DRIVER=log
CACHE_DRIVER=redis
FILESYSTEM_DISK=local
QUEUE_CONNECTION=sync
SESSION_DRIVER=redis
SESSION_LIFETIME=120

MEMCACHED_HOST=127.0.0.1

REDIS_HOST=REDIS_IP_ACA
REDIS_PASSWORD=PASSREDISACA
REDIS_PORT=PORTREDISACA
REDIS_CLIENT=predis

MAIL_MAILER=smtp
MAIL_HOST=mailhog
MAIL_PORT=1025
MAIL_USERNAME=null
MAIL_PASSWORD=null
MAIL_ENCRYPTION=null
MAIL_FROM_ADDRESS="hello@example.com"
MAIL_FROM_NAME="${APP_NAME}"

AWS_ACCESS_KEY_ID=
AWS_SECRET_ACCESS_KEY=
AWS_DEFAULT_REGION=us-east-1
AWS_BUCKET=
AWS_USE_PATH_STYLE_ENDPOINT=false

PUSHER_APP_ID=
PUSHER_APP_KEY=
PUSHER_APP_SECRET=
PUSHER_APP_CLUSTER=mt1

MIX_PUSHER_APP_KEY="${PUSHER_APP_KEY}"
MIX_PUSHER_APP_CLUSTER="${PUSHER_APP_CLUSTER}"

-Lo siguiente es, dentro del directorio, correr el comando "php artisan migrate" para crear la base de datos con las migraciones establecidas

![image](https://user-images.githubusercontent.com/64380067/175929212-e1a5e96f-1268-4ba6-a2c8-66a95228ef7c.png)

-Finalmente, si no estás implementando un servidor HTTP como Apache, podes simplemente usar el comando "php artisan serve" y este iniciará el sistema.
Listo, ya tienes tu SuperLMS, las credenciales de ingreso son:
usuario:admin
password:admin

![image](https://user-images.githubusercontent.com/64380067/175930455-0f4393aa-6724-4f98-8cf3-b5f3bfbdd3a4.png)
