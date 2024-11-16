# PassMaster Frontend

Este proyecto es el frontend de **PassMaster**, una aplicación para gestionar contraseñas de manera segura. Está construido con **Vite**, **React**, **TypeScript**, y **Tailwind CSS**.

## Tabla de Contenidos
- [Instalación](#instalación)
- [Características](#características)
- [Uso de Variables de Entorno](#uso-de-variables-de-entorno)
- [Scripts Disponibles](#scripts-disponibles)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Contribución](#contribución)

---

## Instalación

### Prerrequisitos
1. Tener instalado **Node.js** (versión 16 o superior) y **npm** o **pnpm**.
2. Un servidor backend funcionando para procesar las peticiones de la aplicación.

### Pasos
1. Clonar este repositorio:
   ```bash
   git clone https://github.com/tuusuario/passmaster-frontend.git
   cd passmaster-frontend
   ```

2. Instalar dependencias:
   ```bash
   npm install
   ```

3. Configurar las variables de entorno:
   - Crea un archivo `.env` en la raíz del proyecto.
   - Agrega las siguientes líneas:
     ```env
     VITE_API_URL=http://passmaster.test/api/
     ```

---

## Características

1. **Pantalla de Login**:
   - Permite iniciar sesión usando el correo y la contraseña registrados.

2. **Gestión de Contraseñas**:
   - Generar contraseñas seguras.
   - Guardar contraseñas con un sistema asociado.
   - Ver contraseñas mediante una palabra secreta.

3. **Cambio de Idioma**:
   - Soporte para inglés y español.

4. **Copia de Contraseñas**:
   - Opción para copiar contraseñas al portapapeles.

5. **Responsive Design**:
   - Diseñado con Tailwind CSS para adaptarse a dispositivos móviles y de escritorio.

---

## Uso de Variables de Entorno

El proyecto utiliza **Vite** para manejar las variables de entorno. Todas las variables deben comenzar con el prefijo `VITE_`. Estas variables se encuentran en un archivo `.env`.

### Ejemplo de Configuración
```env
VITE_API_URL=http://passmaster.test/api/
```

En el código, se accede a estas variables utilizando `import.meta.env`:

```ts
const API_URL = import.meta.env.VITE_API_URL;
```

Si estás utilizando TypeScript, asegúrate de declarar los tipos de las variables en un archivo `vite-env.d.ts`:

```ts
/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
```

---

## Scripts Disponibles

En el proyecto puedes ejecutar los siguientes scripts:

### `npm run dev`
Inicia el servidor de desarrollo de Vite.

### `npm run build`
Genera la versión de producción del proyecto.

### `npm run preview`
Sirve localmente la versión generada por el comando `build`.

---

## Estructura del Proyecto

```plaintext
├── public/                # Archivos públicos
├── src/
│   ├── assets/            # Archivos estáticos como imágenes
│   ├── components/        # Componentes reutilizables
│   ├── hooks/             # Hooks personalizados
│   ├── pages/             # Páginas principales
│   ├── requests/          # Lógica para realizar peticiones al backend
│   ├── lang/              # Archivos JSON de traducciones
│   ├── App.tsx            # Componente principal de la app
│   ├── main.tsx           # Punto de entrada de la aplicación
├── .env                   # Variables de entorno
├── vite.config.ts         # Configuración de Vite
```
---

## Contribución

1. Haz un **fork** del repositorio.
2. Crea una nueva rama:
   ```bash
   git checkout -b feature/nueva-funcionalidad
   ```
3. Realiza los cambios y haz un commit:
   ```bash
   git commit -m "Agrega nueva funcionalidad"
   ```
4. Haz un push a la rama:
   ```bash
   git push origin feature/nueva-funcionalidad
   ```
5. Abre un **Pull Request**.

---

¡Gracias por contribuir al proyecto!