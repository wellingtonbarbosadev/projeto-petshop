# 🐾 Mundo Pet - Sistema de Agendamento para Petshop

Aplicação Web para agendamento de serviços de petshop, desenvolvida como parte do curso da RocketSeat.

## 📋 Sobre o Projeto

O Mundo Pet é um sistema completo de agendamento que permite gerenciar serviços de petshop de forma eficiente. A aplicação oferece uma interface intuitiva para visualizar, criar e remover agendamentos.

## ✨ Funcionalidades

- ✅ Visualização de agendamentos por dia
- ✅ Criação de novos agendamentos
- ✅ Remoção de agendamentos existentes
- ✅ Verificação de horários disponíveis
- ✅ Máscara de formatação para telefone
- ✅ Validação de formulários
- ✅ Interface modal para interações
- ✅ Atualização dinâmica da agenda

## 🚀 Tecnologias Utilizadas

- **JavaScript** - Linguagem de programação
- **Webpack** - Empacotador de módulos
- **Day.js** - Biblioteca para manipulação de datas
- **JSON Server** - API REST fake para desenvolvimento
- **HTML5** - Estruturação
- **CSS3** - Estilização

## 📁 Estrutura do Projeto

```
projeto-petshop/
├── src/
│   ├── index.html              # Página principal
│   ├── main.js                 # Arquivo principal JavaScript
│   ├── assets/                 # Recursos estáticos
│   │   └── icons/              # Ícones da aplicação
│   ├── modules/                # Módulos da aplicação
│   │   ├── page-load.js        # Carregamento da página
│   │   ├── form/               # Módulos do formulário
│   │   │   ├── check-available-hours.js
│   │   │   ├── date-change.js
│   │   │   ├── phone-mask.js
│   │   │   └── submit.js
│   │   ├── modal/              # Módulos do modal
│   │   │   └── open-modal.js
│   │   └── schedules/          # Módulos de agendamento
│   │       ├── load.js
│   │       ├── remove.js
│   │       └── show.js
│   ├── services/               # Serviços de API
│   │   ├── api-config.js
│   │   ├── schedule-fetch-by-day.js
│   │   ├── schedule-new.js
│   │   └── schedule-remove.js
│   └── styles/                 # Estilos CSS
│       ├── global.css
│       ├── header.css
│       ├── footer.css
│       ├── modal.css
│       ├── utility.css
│       ├── index.css
│       └── sections/
│           ├── agenda.css
│           └── schedule-period.css
├── package.json                # Dependências e scripts
├── server.json                 # Dados do JSON Server
└── webpack.config.js           # Configuração do Webpack
```

## 🔧 Instalação

1. Clone o repositório:
```bash
git clone <url-do-repositorio>
cd projeto-petshop
```

2. Instale as dependências:
```bash
npm install
```

## 💻 Como Usar

### Modo Desenvolvimento

Para iniciar o servidor de desenvolvimento:

```bash
npm run dev
```

A aplicação estará disponível em `http://localhost:8080`

### Servidor API

Em outro terminal, inicie o JSON Server:

```bash
npm run server
```

O servidor API estará rodando em `http://localhost:3333`

### Build de Produção

Para gerar a versão de produção:

```bash
npm run build
```

Os arquivos otimizados serão gerados na pasta `dist/`

## 📝 Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento com Webpack
- `npm run server` - Inicia o JSON Server na porta 3333
- `npm run build` - Gera build de produção

## 🎨 Funcionalidades em Detalhes

### Agendamento
- Seleção de data
- Escolha de horário disponível
- Preenchimento de informações do cliente e pet
- Validação automática de campos

### Gerenciamento
- Visualização de agendamentos do dia
- Organização por período (manhã, tarde, noite)
- Exclusão de agendamentos
- Atualização em tempo real

## 🤝 Contribuindo

Contribuições são sempre bem-vindas! Sinta-se à vontade para abrir issues e pull requests.

## 📄 Licença

Este projeto foi desenvolvido como parte do curso da RocketSeat.

---

Desenvolvido com 💜 por Wellington Wesley
