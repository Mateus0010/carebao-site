# Restaurante Carebão — Landing Page

Landing page profissional, responsiva e focada em conversão para o Restaurante Carebão, localizado em Regência, Linhares/ES.

## Tecnologias

- [Vite](https://vitejs.dev/) — build tool rápida
- [React](https://react.dev/) — biblioteca UI
- [Tailwind CSS v4](https://tailwindcss.com/) — estilos utilitários
- [Lucide React](https://lucide.dev/) — ícones

## Estrutura

```
.
├── public/images/          # Fotos reais do restaurante
├── src/
│   ├── App.tsx             # Landing page completa
│   ├── main.tsx            # Ponto de entrada
│   ├── styles.css          # Design tokens e tema
│   ├── components/
│   │   ├── Header.tsx      # Header sticky com navegação
│   │   └── Reveal.tsx      # Animação ao rolar a página
│   └── lib/
│       ├── carebao.ts      # Links, telefone, fotos
│       └── utils.ts        # cn() para classes
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## Como rodar localmente

```bash
# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev

# Abra http://localhost:5173
```

## Como fazer o build

```bash
npm run build
```

O resultado fica na pasta `dist/`.

## Como publicar no Vercel

1. Crie uma conta em [vercel.com](https://vercel.com/).
2. Clique em **Add New Project**.
3. Importe este repositório (GitHub, GitLab ou Bitbucket).
4. Mantenha o framework preset como **Vite** e o comando de build como `npm run build`.
5. A pasta de saída deve ser `dist`.
6. Clique em **Deploy**.

### Publicar via CLI da Vercel

```bash
# Instale a CLI (se ainda não tiver)
npm i -g vercel

# Faça login
vercel login

# Execute na pasta do projeto
vercel

# Para deploy em produção
vercel --prod
```

## Como editar

- **Cores e tipografia**: `src/styles.css`
- **Textos, seções, avaliações**: `src/App.tsx`
- **Telefone, WhatsApp, Google Maps**: `src/lib/carebao.ts`
- **Header e menu**: `src/components/Header.tsx`

## Fotos

As 7 fotos reais do restaurante estão em `public/images/`. Para trocar uma imagem, substitua o arquivo correspondente mantendo o nome.

- `carebao_1.png` — prato com caldo, farinha e cerveja
- `carebao_2.png` — panelas de barro com moqueca
- `carebao_3.png` — salão com mesas de madeira
- `carebao_4.png` — almoço com arroz, feijão e carne
- `carebao_5.png` — fachada completa
- `carebao_6.png` — fachada e varanda
- `carebao_7.png` — placa do restaurante

## Licença

Este código é de uso livre para o Restaurante Carebão.
