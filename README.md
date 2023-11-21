<div align="center">

# Service JWT with NodeJS
![Contributions? Welcome](https://img.shields.io/badge/Contributions-Welcome-brightgreen.svg)
![Maintained? Yes](https://img.shields.io/badge/Maintained%3F-Yes-brightgreen.svg)
[![ESLint](https://github.com/RomanFama592/service-jwt-nodejs/actions/workflows/eslint.yml/badge.svg)](https://github.com/RomanFama592/service-jwt-nodejs/actions/workflows/eslint.yml)

Este repositorio es un servicio web de Node.js que crea y valida tokens JWT con seguridad y compatibilidad con CORS. El proyecto hace uso de ESlinter con StandardJS. Es útil para aprender e integrar un servicio de autenticación.

</div>

<details open>
  <summary>📑 <strong>Contents</strong></summary>

- [🚀 **Project Structure**](#-project-structure)
- [👨‍🏫 **Installation**](#-installation)
- [✨ **Usage**](#-usage)
- [👋 **Contributions**](#-contributions)
- [👨‍⚖️ **License**](#-license)
- [📬 **Contact me**](#-contact-me)

</details>

<br>

## 🚀 Project Structure

```
/
├── .devcontainer/
│     ├── Dockerfile
│     └── devcontainer.json
├── .github/
│     └── workflows/
│          ├── eslint.yml
│          └── update_readme.yml
├── controllers/
│     └── v1/
│          ├── create_jwt.js
│          └── validate_jwt.js
├── docs/
│     └── README.md.template
├── server/
│     ├── middlewares/
│     │     ├── is_create_jwt.js
│     │     ├── is_validate_jwt.js
│     │     └── json_handler_error.js
│     ├── routes/
│     │     └── v1/
│     │          └── jwt.js
│     ├── express_init.js
│     └── whitelist.js
├── services/
│     ├── error-codes.js
│     ├── jwt.js
│     └── utils.js
├── .dockerignore
├── .env.example
├── .gitignore
├── Dockerfile
├── LICENSE
├── README.md
├── index.js
└── package.json

```

<p align="right"><a href="#top">Back to top 🔼</a></p>
<br>

## 👨‍🏫 Installation

follow steps to run the project.

1. Clone repository.

2. Install package.json dependencies.

```bash
npm install
```

3. Create `.env` based on `.env.example` 

4. Run project
```bash
npm start
```

or run project in development mode

```bash
npm run dev
```

<p align="right"><a href="#top">Back to top 🔼</a></p>
<br>

## ✨ Usage

### 1. `/isalive`
- **Descripción:** Verifica el estado del servicio para asegurarse de que está en funcionamiento devolviendo un status code 200.
- **Ejemplo de uso:**
  ```javascript
  fetch('http://tu-servidor.com/isalive')
  ```
### 2. `/v1/validate/:jwt`
- **Descripción:** Valida un token JWT proporcionado.
- Parámetros de ruta:
  - **jwt:** El token JWT que se va a validar.
- **Ejemplo de uso:**
```javascript
const jwtToken = 'tu-token-jwt-aqui';

fetch(`http://tu-servidor.com/v1/validate/${jwtToken}`)
```

<!-- `````` -->
### 3. `/v1/create`
- **Descripción:** Crea un nuevo token JWT.
- **Protección CORS:** Puede estar protegido por CORS (Cross-Origin Resource Sharing).
- **Ejemplo de uso:**
```javascript
const payload = {
  usuario: 'ejemplo',
  // Otros datos que desees incluir en el payload
};

fetch('http://tu-servidor.com/v1/create', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ payload }),
})

```
<p align="right"><a href="#top">Back to top 🔼</a></p>
<br>

## 👋 Contributions

If you have a suggestion that would make this better, please fork the repo and create a Pull Request. You can also simply [open an issue](https://github.com/RomanFama592/service-jwt-nodejs/issues)

Don't forget to **give the project a star ⭐!** Thanks again!

1. Fork the project

2. Clone your fork

```bash
git clone https://github.com/@your_username/service-jwt-nodejs
```

3. Create your Feature Branch

```bash
git checkout -b feature/AmazingFeature
```

4. Push to the Branch

```bash
git push origin feature/AmazingFeature
```

5. Open a Pull Request

**Important**: Use [`conventional commits`](https://www.conventionalcommits.org/) and ensure that the code passes the linter test, pull requests are not accepted without this last point.


<p align="right"><a href="#top">Back to top 🔼</a></p>
<br>

## 👨‍⚖️ License

Distributed under the MIT License. See `LICENSE` for more information.

<p align="right"><a href="#top">Back to top 🔼</a></p>
<br>

## 📬 Contact me

**Famá Román** 
- famaroman@gmail.com
- [Linkedin](https://www.linkedin.com/in/romanfama)

<p align="right"><a href="#top">Back to top 🔼</a></p>
<br>