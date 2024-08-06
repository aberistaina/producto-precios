Aplicación Web de Escáner de Código de Barras
Descripción

Este proyecto es una aplicación web que simula los sistemas de escaneo de códigos de barras comúnmente encontrados en supermercados. Usando un escáner láser de códigos de barras, los usuarios pueden escanear productos para ver su imagen, nombre, marca y precio. Además, hay un panel de control de administración que permite una gestión completa del CRUD (Crear, Leer, Actualizar, Eliminar) de los productos.
Características

  Escaneo de Códigos de Barras: Escanea productos utilizando un escáner láser de códigos de barras para recuperar y mostrar los detalles del producto.
    Visualización de Productos: Muestra la imagen del producto, nombre, marca y precio al escanear.
    Panel de Control de Administración: Gestiona todos los detalles de los productos con operaciones CRUD.
      Crear nuevos productos
      Leer y ver productos existentes
      Actualizar detalles del producto
      Eliminar productos

Tecnologías Utilizadas

  Frontend: HTML5, CSS3, JavaScript, Vite, React, Tailwind CSS
  Backend: Node.js, JavaScript, Node Js, Bcrypt, Express-Fileupload, JsonWebToken, 
  Base de Datos: MySql
  Otros: Sequelize

Instalación

1- Clonar Repositorio

    git clone https://github.com/aberistaina/producto-precios
    cd producto-precios

2- Instalar Dependencias

    npm install

3- Configurar Bases De Datos

  Asegúrate de tener PostgreSQL/MySQL instalado.
  Crea una nueva base de datos y configura los ajustes de conexión en el archivo .env.

4 Configurar Archivo .env con los siguientes datos

    DB_DATABASE=
    DB_USER=
    DB_PASSWORD=
    DB_HOST=
    PORT=
    SECRET=

5- Ejecutar npm run dev tanto en el cliente como en el backend, luego ingresar a http://localhost:5173/

Contacto

Si tienes alguna pregunta o comentario, no dudes en contactarme en:

    Email: alejandro.beristain@hotmail.com
    GitHub: aberistaina
    

      
   
