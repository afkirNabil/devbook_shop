# DevBook Shop

Mini proyecto de comercio electrónico desarrollado para explorar las capacidades de arquitectura de **Astro 5**. Implementa renderizado híbrido mediante Server Islands y gestión de contenido tipado.

## 🛠 Stack Tecnológico

*   **Framework:** Astro 5.14
*   **Estilos:** Tailwind CSS 4 (Vite)
*   **Despliegue:** @astrojs/vercel
*   **Gestión de Datos:** Content Collections
*   **Renderizado:** Server-Side Rendering (SSR) con Server Islands

## ⚡ Características Implementadas

*   **Server Islands:** Aislamiento de componentes dinámicos en entorno estático para optimización de carga.
*   **Content Collections:** Catálogo de libros gestionado mediante colecciones de contenido tipadas y MDX.
*   **Validación de Entorno:** Esquema de tipos estricto para variables de entorno (`astro.config.mjs`).
*   **UI Interactiva:** Integración de efectos visuales con `canvas-confetti`.

## 💻 Configuración Local

1.  **Instalación de dependencias**
    ```bash
    npm install
    ```

2.  **Ejecución en desarrollo**
    ```bash
    npm run dev
    ```

3.  **Construcción para producción**
    ```bash
    npm run build
    ```

## ⚙️ Variables de Entorno

El sistema valida las siguientes variables en tiempo de ejecución:

*   `SHOW_BUY_BUTTON`: *Boolean*. Habilita la interfaz de compra.
*   `SCORE_API_ENDPOINT`: *String*. URL del servicio de puntuaciones.

---
*Desplegado y alojado en Vercel.*
