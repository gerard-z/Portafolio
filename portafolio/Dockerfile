# Dockerfile para un portafolio creado con Vite+React+TypeScript

# Imagen base
FROM node:18 as build

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia los archivos de configuración y dependencias
COPY package.json package-lock.json ./

# Instala las dependencias
RUN npm install

# Copia el resto del código fuente al contenedor
COPY . .

# Construye la aplicación para producción
RUN npm run build

# Etapa para servir la aplicación con nginx
FROM nginx:alpine

# Copia los archivos de construcción al directorio de nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Copia el archivo de configuración de nginx si es necesario (opcional)
# COPY nginx.conf /etc/nginx/nginx.conf

# Expone el puerto 80 para servir la aplicación
EXPOSE 80

# Inicia nginx
CMD ["nginx", "-g", "daemon off;"]
