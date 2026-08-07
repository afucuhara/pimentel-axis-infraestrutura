# Pimentel Axis Infraestrutura

Projeto original e editável do site Pimentel Axis, exportado na última versão anterior às adaptações para WordPress/Elementor.

## Tecnologias

- Next.js 16.2.6 e React 19.2.6
- TypeScript 5.9.3
- Vinext 0.0.50 e Vite 8.0.13
- Cloudflare Wrangler 4.92.0
- CSS e JavaScript incorporados à página HTML principal

## Requisitos

- Node.js 22.13.0 ou superior (recomendado: Node.js 22 LTS)
- npm, usando o `package-lock.json` incluído
- Linux, macOS ou WSL. Os scripts de build verificado usam Bash; em Windows, utilize WSL.

## Instalação e execução

```bash
npm ci
npm run dev
```

Abra no navegador o endereço informado pelo terminal.

## Produção

```bash
npm run build
npm run start
```

Para validar o projeto completo:

```bash
npm test
```

## Estrutura principal

- `public/pimentel-axis-widget.html`: página visual completa, incluindo HTML, CSS, textos, animações, interações, JavaScript e imagens em base64.
- `public/pimentel-axis-about.webp`: imagem complementar referenciada pelo HTML.
- `app/page.tsx`: carrega `pimentel-axis-widget.html` em um iframe de tela cheia.
- `app/layout.tsx`: metadados, idioma `pt-BR` e estrutura raiz.
- `app/globals.css`: estilos do iframe e da aplicação Next.js.
- `public/`: imagens, favicon e demais arquivos estáticos.
- `package.json` e `package-lock.json`: dependências e comandos do projeto.
- `vite.config.ts`, `next.config.ts`, `tsconfig.json` e `postcss.config.mjs`: configurações de execução e build.
- `.openai/hosting.json`: identificação da hospedagem original no OpenAI Sites; não é necessário alterá-lo para apenas executar o projeto localmente.

## Conteúdo principal

As alterações visuais devem ser feitas em `public/pimentel-axis-widget.html`. O arquivo foi preservado integralmente, inclusive as imagens em base64. O `app/page.tsx` aponta para:

```tsx
src="/pimentel-axis-widget.html"
```

## GitHub

Após extrair o ZIP, crie um repositório vazio no GitHub e execute dentro desta pasta:

```bash
git init
git add .
git commit -m "Projeto original Pimentel Axis"
git branch -M main
git remote add origin URL_DO_SEU_REPOSITORIO
git push -u origin main
```

Não envie `node_modules`, `dist`, `.next`, `.wrangler` ou arquivos `.env`; eles já estão contemplados no `.gitignore`.
