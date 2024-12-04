# 📦 **Lector de Códigos de Barra - Consultor de Precios**  

Aplicación web que simula los clásicos lectores de códigos de barras utilizados en supermercados, permitiendo consultar información detallada sobre productos mediante el escaneo de códigos. Además, incluye una interfaz administrativa para la gestión de productos.  

---

## 📋 **Tabla de Contenidos**

- [✨ Características](#-características)
- [💻 Instalación](#-instalación)
- [🔧 Uso](#-uso)
- [⚙️ Tecnologías](#%EF%B8%8F-tecnologías)
- [🔑 Variables de Entorno](#-variables-de-entorno)
- [👥 Autores](#-autores)

---

## ✨ **Características**  

- 🛒 **Consulta de Precios**:  
  Escanea un código de barras en la vista principal (`/`) para obtener información del producto, incluyendo:  
  - Foto del producto  
  - Marca  
  - Precio  

  Si el código no coincide con ningún producto, la aplicación muestra un mensaje de "Producto no encontrado".  

- 👨‍💼 **Gestión de Productos**:  
  Accede a la vista de administrador (`/admin`) para:  
  - Agregar nuevos productos  
  - Actualizar la información existente  
  - Eliminar productos  

- 🔄 **Actualización Automática**:  
  Al escanear un código, la consulta a la base de datos se realiza automáticamente.  

- 📱 **Interfaz Intuitiva**:  
  La aplicación está diseñada para facilitar su uso en entornos de trabajo con flujos rápidos y eficientes.  

---  



## 💻 **Instalación**

Para poner en marcha este proyecto en tu máquina local, sigue estos pasos:

1. **Clona este repositorio**:
   ```bash
   git clone https://github.com/aberistaina/producto-precios
   
2. **Abre 2 terminales, una para el Cliente y otra para el backend**
   
2. **Navega al directorio del cliente**:
    ```bash
    cd producto-precios/client
    
3. **Instala las dependencias del frontend**:
   ```bash
   npm install
   
4. **Navega al directorio del backend**:
   ```bash
   cd producto-precios/backend
   
5. **Instala las dependencias del backend**:
   ```bash
   npm install

6. **Crea un archivo .env en el directorio raíz del backend y agrega las siguientes variables de entorno**:
   ```bash
   DB_DATABASE=tu_database
   DB_USER=tu_usuario
   DB_PASSWORD=tu_password
   DB_HOST=tu_host
   PORT=tu_port
   SECRET=tu_clave_secreta_jwt

7. **Levanta el servidor del Frontend:**:
   ```bash
   npm run dev

8. **Levanta el servidor del Backend:**:
   ```bash
   npm run dev

## 🔧 **Uso**

### **Interacción con la Aplicación**

#### **Usuarios**:
1. Accede a la vista principal (`/`) para escanear un código de barras.  
2. Obtén la información del producto en tiempo real, o un mensaje de "Producto no encontrado" si no existe en la base de datos.  

#### **Administradores**:
1. Accede a la vista de administración (`/admin`).  
2. Agrega nuevos productos o actualiza la información existente.  


## ⚙️ **Tecnologías**

Este proyecto utiliza las siguientes tecnologías:

### **Backend**:
- 💻 **Node.js**: Entorno de ejecución de JavaScript para el backend.  
- 🚀 **Express**: Framework minimalista para aplicaciones web.  
- 🛠️ **Sequelize (ORM)**: Mapeo de bases de datos relacionales.  
- 💾 **MySQL**: Base de datos para almacenar productos e información relacionada.  

### **Frontend**:
- ⚛️ **React**: Biblioteca para construir interfaces de usuario interactivas.  
- ⚡ **Vite**: Herramienta de desarrollo rápida para aplicaciones modernas.  
- 🎨 **TailwindCSS**: Framework de CSS para diseño estilizado y responsivo.  



## 🔑 **Variables de Entorno**

Este proyecto requiere una clave API de OpenAI para funcionar. Crea un archivo `.env` en el directorio raíz y agrega la siguiente variable:


    DB_DATABASE=tu_database
    DB_USER=tu_usuario
    DB_PASSWORD=tu_password
    DB_HOST=tu_host
    PORT=tu_port
    SECRET=tu_clave_secreta_jwt


## 👥 **Autores**

- Alejandro Beristain - [@aberistaina](https://github.com/aberistaina)



    

      
   
