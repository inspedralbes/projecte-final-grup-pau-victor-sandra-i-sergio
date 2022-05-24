# Manual de instalacion

## Backend

- Clona el repositorio y abre la carpeta "back > express" con un editor de codigo como Visual Studio Code.
- Abre el terminal del editor y ejecuta el siguiente comando: "npm install". Luego ejecuta "npm run start:dev" y después apaga servidor clicando a ^C y S.
- Ahora, importa los ficheros de la carpeta "back > datosInsertarMongoDB" a tu BD de MongoDB (a la coleccion ProjecteFinal que se habrá creado automaticamente).
- Luego, ejecuta de nuevo "npm run start:dev" y ya estará en marcha el backend en modo desarollo. Para produccion, ejecuta "npm start" y listo

## Frontend

- Clona el repositorio y abre la carpeta "web > vue" con un editor de codigo como Visual Studio Code.
- Abre el terminal del editor y ejectuta el siguiente comando: "npm install".
- Ahora modifica el codigo de los componentes vue que tienen fetch, con la direccion IP + ":7101" de la máquina que contenga el backend.
- Luego ejecuta el comando "npm run dev" y ya estará en marcha el backend en modo desarollo. Para produccion, ejecuta "npm run build" y sube la carpeta "dist" que se crea a tu servidor.
