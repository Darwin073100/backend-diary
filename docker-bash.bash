# Levantar los servicios del contenedor
# Accedemos a la carpeta raíz donde está el archico docker-compose.yml
docker-compose up -d
docker-compose up -d (service-name)

# Ver los servicios levantados
docker-compose ps

# Ver todos los servicios
docker-compose ps -a

# Elimina un servicio
docker-compose down
docker-compose down (service-name)

# Conectarse a la terminal del contendor
docker-compose exec postgres bash
