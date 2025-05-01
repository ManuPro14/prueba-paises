# Project Title

A brief description of what this project does and who it's for

# 🌍 Prueba Técnica - Lista de Países

Este proyecto muestra una lista interactiva de países con detalles por país, utilizando Angular, TailwindCSS y la REST Countries API. Fue desarrollado como parte de una prueba técnica para evaluar habilidades frontend con foco en arquitectura limpia, buenas prácticas y experiencia de usuario.

---

## 🚀 Instalación y ejecución

### Requisitos previos

- Node.js (v18+ recomendado)
- Angular CLI
- npm

### Pasos para correr el proyecto

```bash
# Clona el repositorio
git clone https://github.com/ManuPro14/prueba-paises.git
cd prueba-paises

# Instala las dependencias
npm install

# Corre el servidor de desarrollo
npm start
# o con Angular CLI directamente:
ng serve

Ejecutar pruebas

# Unit tests
ng test

# Ver cobertura
ng test --code-coverage

🧠 Descripción del proyecto

Una SPA (Single Page Application) que permite:
	•	Visualizar una lista de países del mundo.
	•	Buscar países por nombre.
	•	Filtrar por letra inicial.
	•	Paginar resultados de 10 en 10.
	•	Ver detalles de un país en un modal animado.
	•	Utilizar animaciones y transiciones suaves con Tailwind y lógica de estado.

🧱 Arquitectura

El proyecto usa una estructura por funcionalidades (feature-based):

src/
├── app/
│   ├── core/                # Servicios compartidos
│   │   └── service/
│   ├── features/
│   │   ├── list/            # Listado de países
│   │   └── details/         # Modal de detalles de un país
│   └── app.component.ts     # Entry point

	•	standalone components: facilita reutilización y testing.
	•	TailwindCSS: para diseño moderno y responsivo sin dependencia de componentes pesados.
	•	RxJS: para consumir APIs.
	•	Karma + Jasmine: para testing unitario.


🛠️ Justificaciones técnicas

	•	Angular + Standalone Components: Aprovecha lo último de Angular para mantener componentes desacoplados y fáciles de testear.
	•	TailwindCSS: Ideal para estilos rápidos, responsivos y coherentes, sin necesidad de archivos CSS externos.
	•	Modal reutilizable: Se usa el DetailsComponent como modal, con @Input() y @Output(), evitando duplicación de lógica.
	•	Testing real: Se cubren servicios, lógica del listado y modal con pruebas unitarias completas (country.service.spec.ts, list.component.spec.ts, details.component.spec.ts).


🔄 Diagrama de flujo de componentes

📚 API usada

Se utilizó REST Countries v3.1, una API pública que entrega información por país.

👨‍💻 Autor
	•	Manu Barrios

```
