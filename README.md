# CRUD Contatos

Aplicativo de agenda de contatos desenvolvido em **React Native (Expo)** com uma API em **Node.js, Express e MongoDB Atlas**. Atividade avaliativa do CEFET.

## Funcionalidades

- **Cadastro** de contato com foto, nome, sobrenome, telefone e email
- **Listagem** de todos os contatos na tela inicial
- **Edição** de contato (o botão "Editar" preenche o formulário)
- **Exclusão** de contato com modal de confirmação

A tela inicial é dividida ao meio: formulário na parte de cima e lista de contatos na parte de baixo.

## Tecnologias

**Frontend:** React Native, Expo, Axios, Expo Image Picker

**Backend:** Node.js, Express, Mongoose, CORS, Dotenv

**Banco de dados:** MongoDB Atlas

## Estrutura

\```text
crud-contatos/
├── index.js
├── package.json
├── backend/
│   ├── server.js
│   ├── .env.example
│   ├── scripts/
│   │   └── seedContatos.js
│   └── src/
│       ├── config/
│       ├── controllers/
│       ├── models/
│       └── routes/
└── frontend/
    ├── App.js
    └── src/
        ├── api/
        ├── components/
        ├── pages/
        └── styles/
\```

## Como rodar

### Pré-requisitos

- Node.js 18+
- Conta no [MongoDB Atlas](https://www.mongodb.com/atlas) com um cluster criado e seu IP liberado em *Network Access*
- App **Expo Go** no celular (opcional, também roda no navegador)

### 1. Clonar e instalar

\```bash
git clone <url-do-repositorio>
cd crud-contatos
npm install
npm install --prefix backend
\```

### 2. Configurar variáveis de ambiente

**Backend:** copie `backend/.env.example` para `backend/.env`:

\```env
PORT=3000
MONGO_URI=mongodb+srv://USUARIO:SENHA@cluster0.xxxxx.mongodb.net/agenda?retryWrites=true&w=majority
\```

**Frontend:** crie um `.env` na raiz do projeto (opcional no navegador, obrigatório no celular):

\```env
EXPO_PUBLIC_API_URL=http://SEU_IP_LOCAL:3000
\```

> No celular, `localhost` não funciona. Use o IPv4 do seu computador (`ipconfig` no Windows). No emulador Android, use `http://10.0.2.2:3000`.

### 3. (Opcional) Popular o banco com contatos de exemplo

\```bash
npm run seed --prefix backend
\```

### 4. Iniciar frontend e backend juntos

\```bash
npm run dev
\```

Depois, pressione `w` para abrir no navegador ou escaneie o QR code com o Expo Go.

## Endpoints da API

| Método | Rota | Descrição |
|---|---|---|
| GET | `/contatos` | Lista todos os contatos |
| POST | `/contatos` | Cria um novo contato |
| PUT | `/contatos/:id` | Atualiza um contato |
| DELETE | `/contatos/:id` | Remove um contato |

### Exemplo de contato

\```json
{
  "foto": "data:image/jpeg;base64,...",
  "nome": "Ana",
  "sobrenome": "Silva",
  "telefone": "(21) 99999-0001",
  "email": "ana.silva@email.com"
}
\```

> A foto é armazenada em base64 no próprio documento.
