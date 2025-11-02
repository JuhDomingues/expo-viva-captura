# Viva Academy - Landing Page

Landing page para captação de leads com oferta exclusiva de 60% de desconto na Viva Academy em parceria com o Podcast Balaio.

## Sobre o Projeto

Este projeto é uma landing page desenvolvida para promover a Viva Academy, uma plataforma de cursos focada em imigração para os Estados Unidos.

## Tecnologias Utilizadas

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS
- Mautic (integração de formulário)

## Como executar localmente

Requisito: Node.js & npm instalados - [instalar com nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

```sh
# Clone o repositório
git clone <YOUR_GIT_URL>

# Navegue até o diretório do projeto
cd expo-viva-captura-main

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

O servidor estará disponível em `http://localhost:8080`

## Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Cria a versão de produção
- `npm run preview` - Visualiza a versão de produção localmente
- `npm run lint` - Executa o linter

## Integração Mautic

O formulário da landing page está integrado com o Mautic da Viva Academy. Após o envio bem-sucedido, o usuário é redirecionado para a página de agradecimento.
