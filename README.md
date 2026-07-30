# 📍 Busca de CEP

![Screenshot do projeto](./screenshot.png)

> Substitua a imagem acima por um print da sua aplicação rodando.

## 📖 Descrição

Um buscador de endereços por CEP feito em **React**, consumindo a **API pública ViaCEP** (gratuita e sem chave). Digite um CEP e veja rua, bairro, cidade e estado. Ótimo para praticar **consumo de API**, `fetch`, estados de carregamento e tratamento de erros.

## ✨ Funcionalidades

- Buscar endereço a partir de um CEP
- Validação de CEP (8 dígitos)
- Estado de "carregando" durante a busca
- Tratamento de erros (CEP inválido ou não encontrado)
- Exibição dos dados do endereço

## 🛠️ Tecnologias utilizadas

- React
- Vite
- JavaScript (Fetch API)
- CSS puro
- API pública [ViaCEP](https://viacep.com.br)

## ▶️ Como executar localmente

```bash
npm install
npm run dev
```

Depois abra o endereço mostrado no terminal (geralmente `http://localhost:5173`).

## 🌐 Como acessar o projeto publicado

> Adicione aqui o link após publicar na Vercel ou Netlify.

## 📁 Estrutura básica do projeto

```
react-busca-cep/
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── App.jsx
    ├── App.css
    ├── main.jsx
    ├── index.css
    └── components/
        ├── FormularioCep.jsx      (+ .css)
        └── ResultadoEndereco.jsx  (+ .css)
```

## 🚀 Melhorias futuras

- Guardar as últimas buscas no LocalStorage
- Copiar o endereço completo com um clique
- Mostrar o endereço em um mapa

## 👤 Autor

**Desenvolvido por KWDev**
