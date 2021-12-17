# Grupo tenedorcín :fork_and_knife:


## Proyecto: Just Fork


## Integrantes

* Sebastián Lizárraga @SebaU12 [github](https://github.com/SebaU12)
* Ian Cortez @IanCortez [github](https://github.com/IanCortez)



## Tema del proyecto

`Aplicación móvil para comprar productos gastronómicos y administración de restaurantes online` 



## Motivación

Al haber más aplicaciones con este formato como Rappi, Llamafood, entre otros, se desarrolla esta aplicación para darle mayor accesibilidad a los usuarios 
para acceder al servicio proporcionado por Just Fork, centrado principalmente a personas que quieren iniciar su negocio y centrarse en la gestión fácil de los
principales elementos de su negocio.



## Funcionalidades


### Rutas

| Ionic Route | Backend URLs | Funcionalidad |
| ---- | ---- | ---- |
| `/home` |  `GET /restaurants ` | Muestra todos los restaurantes |
| `/login/1` | `POST /user_admin/login, data` | Realizar login de un admin | 
| `/login/2` | `POST /user_admin/sign-up, data` | Realizar registro de un admin |
| `/perfil` | `DELETE /user_admin/destroy` | Elimina la información de admin |
| `/restaurante/ver` | `GET /user_admin/resId` | Recopila el ID del restaurante que le pertenece a un admin |
| `/restaurante/ver` | `GET /restaurants/+id` | Ver el restaurante para un ID dado que le pertenece a un admin |
| `/restaurante/crear` | `POST /restaurants, data` | Realiza la creación de un restaurante | 
| `/restaurante/delete` | `DELETE /restaurants` | Elimina la información del restaurante | 
| `/restaurante/editar` | `PATCH /restaurants, data` | Realiza una actualización de la información del restaurante |  
| `/restaurante/crear` | `POST /imagenes, data` | Permite guardar una imagen | 
| `/restaurante/editar` | `POST /imagenes, data` | Permite guardar una imagen | 


### Plugins

| Ionic Plugin | Función |
| ---- | ---- |
| camara | Tomar imágenes |
| text-zoom | Alterar el tamaño del texto |




## Instalación

### Base de datos

1. Abrir MySQL
2. (Opcional) si se desea no ingresar su usario y contraseña, entonces crear una cuenta en mysql con los siguientes datos:
  * Usuario: `utec`
  * Clave: `1234567890`
3. En MySQL usar el comando: `CREATE DATABASE just_fork`
4. Entrar al archivo `config.json`, ubicado en la carpeta `backend/config/`
5. En "username": Su_usuario, "password": "Su_contraseña", "database": "just_fork"
6. Ingresar el comando `npx sequelize-cli db:migrate`

### Backend

1. Ingresar a la carpeta `backend`
2. Instalar dependencias con 
```
  npm install
  npm install -g nodemon
```
  
3. Inicar el proyecto con `npm start`


### Ionic

1. Ingresar a la carpeta `justfork`
2. Instalar dependencias
  
  `npm install`
  
3. Ingresar a `src/environments/environment.ts` y modificar la `baseUrl` con el siguiente formato:

``
http://tuIP:7899/
``

Para encontrar tu IP, usa el commando `ipconfig` en `cmd` en Windows o `ifconfig` en tu `terminal` en sistemas operativos basados en Linux.


4. Iniciar el proyecto con `ionic serve`

