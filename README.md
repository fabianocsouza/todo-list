# 📋 ToDo List

Aplicativo de lista de tarefas desenvolvido com React Native e TypeScript, que permite ao usuário gerenciar suas tarefas de forma simples e eficiente.

## 🚀 Tecnologias Utilizadas

- **React Native**: Framework para desenvolvimento de apps nativos com JavaScript.
- **TypeScript**: Tipagem estática para maior segurança e legibilidade no código.
- **React Hooks**: `useState` e `useEffect` para gerenciamento de estado, mutabilidade e ciclo de vida.
- **AsyncStorage**: Persistência de dados local no dispositivo do usuário.
- **Estilização nativa**: Estilos aplicados diretamente via `StyleSheet`.

## 📱 Funcionalidades

- ✅ Adicionar uma nova tarefa.
- 📋 Exibir a lista de tarefas.
- ☑️ Marcar tarefas como concluídas.
- 🗑️ Remover uma tarefa da lista.
- 💾 Persistir as tarefas entre sessões utilizando `AsyncStorage`.

## 📂 Estrutura do Projeto

```
todo-list/
├── assets/             # Imagens e ícones utilizados
├── src/
│   ├── components/     # Componentes reutilizáveis (Input, Task, etc.)
│   └── App.tsx         # Componente principal com a lógica da aplicação
├── .eslintrc.json      # Regras de linting
├── package.json        # Configurações e dependências
└── tsconfig.json       # Configuração do TypeScript
```

## 💡 Principais Conceitos e Lógica

- **Gerenciamento de tarefas**: Tarefas são armazenadas em um array de objetos com identificador único (`id`) e `title`.
- **Adição e exclusão**: Validação evita que tarefas com o mesmo nome sejam adicionadas. A exclusão é feita por filtragem do array.
- **Persistência**: As tarefas são salvas e carregadas do `AsyncStorage` utilizando `useEffect`.

## 🛠️ Como Rodar o Projeto

1. Clone o repositório:

```bash
git clone https://github.com/fabianocsouza/todo-list.git
cd todo-list
```

2. Instale as dependências:

```bash
npm install
```

3. Rode no simulador/emulador:

```bash
npx expo start
```

(ou, se estiver utilizando React Native CLI diretamente: `npx react-native run-android` ou `run-ios`)

## 📷 Screenshots

![Tela principal](./src/assets/Cover.png)

## 📄 Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para detalhes.

## 🤝 Contribuições

Contribuições, issues e pull requests são bem-vindos! Sinta-se à vontade para propor melhorias.
