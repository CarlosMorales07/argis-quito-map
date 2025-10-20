# 🗺️ Mapa de Quito - ESRI Ecuador

Aplicación web desarrollada con React que visualiza un mapa interactivo de Quito, centrado en el edificio de ESRI Ecuador (Av. 6 de Diciembre y Av. Portugal), utilizando el ArcGIS Maps SDK for JavaScript.

## ✨ Características

- 📍 Mapa centrado en ESRI Ecuador (Quito)
- 🔄 Widget de alternancia entre mapas base (Calles ↔️ Satélite)
- 📌 Marcador interactivo con popup informativo
- 🎨 Interfaz moderna y responsive
- ⚛️ Desarrollado con React y Vite

## 🛠️ Tecnologías

- React 18.2.0
- ArcGIS Maps SDK for JavaScript (@arcgis/core) 4.28+
- Vite 5.0+
- CSS3

## 📋 Requisitos Previos

- Node.js v16 o superior
- npm o yarn
- Git

## 🚀 Instalación y Ejecución

### 1. Clonar el repositorio
```bash
git clone https://github.com/CarlosMorales07/arcgis-quito-map.git
cd arcgis-quito-map
```

### 2. Instalar dependencias
```bash
npm install
```

### 3. Ejecutar en modo desarrollo
```bash
npm run dev
```

La aplicación estará disponible en `http://localhost:5173`

### 4. Compilar para producción
```bash
npm run build
```

Los archivos optimizados se generarán en la carpeta `dist/`

### 5. Previsualizar build de producción
```bash
npm run preview
```

## 📂 Estructura del Proyecto
```
arcgis-quito-map/
├── public/
├── src/
│   ├── components/
│   │   └── MapComponent.jsx      # Componente principal del mapa
│   ├── App.jsx                   # Componente raíz
│   ├── App.css                   # Estilos principales
│   ├── main.jsx                  # Punto de entrada
│   └── index.css                 # Estilos globales
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 🎯 Funcionalidades

### Widget de Basemap Toggle
- Ubicación: Esquina inferior derecha
- Permite alternar entre vista de calles y satélite
- Click en el ícono para cambiar

### Marcador ESRI Ecuador
- Ubicado en Av. 6 de Diciembre y Av. Portugal
- Click en el marcador para ver información
- Coordenadas: -0.1965, -78.4875

### Pagina desplegada en Render 

https://argis-quito-map.onrender.com 

## 📚 Recursos

- [ArcGIS Maps SDK for JavaScript](https://developers.arcgis.com/javascript/latest/)
- [React Documentation](https://react.dev/)
- [Vite Documentation](https://vitejs.dev/)

## 👨‍💻 Autor

Carlos Morales - [GitHub](https://github.com/CarlosMorales07)

## 📄 Licencia

MIT

---

⭐ Si este proyecto te fue útil, considera darle una estrella
