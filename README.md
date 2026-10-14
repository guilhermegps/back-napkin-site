# Black Napkin Site

Site estático de vitrine da [Black Napkin](https://blacknapkin.com.br) — desenvolvimento de software e consultoria em TI.

## Stack

- [Astro](https://astro.build) (HTML estático)
- [Tailwind CSS](https://tailwindcss.com) v4
- i18n: Português (padrão), English, Español
- Tema escuro padrão com alternância para claro
- Deploy via GitHub Pages (`blacknapkin.com.br`)

## Desenvolvimento

Requer Node.js 22+.

```bash
nvm use
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Conteúdo editável

- Textos / traduções: `src/i18n/`
- Contatos (e-mail, telefone, WhatsApp): `src/data/contact.ts`
- Mídia usada no site: `src/data/media.ts` → arquivos em `public/img/`
- Banco de opções (originais): `img/` (`working-team`, `office`, `systems`, `logos`)

## Deploy

Push na branch `main` dispara o workflow `.github/workflows/deploy.yml`.

No GitHub: **Settings → Pages → Source → GitHub Actions**.
O arquivo `public/CNAME` mantém o domínio `blacknapkin.com.br`.
