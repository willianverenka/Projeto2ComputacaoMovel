# 📱 Pomodoro App
Um aplicativo de Pomodoro desenvolvido em React Native para gerenciar seu tempo de trabalho/estudo e descanso. O app inclui funcionalidades como timer personalizável, estatísticas de uso, histórico de sessões e feedback sensorial.


## Relatorio
A ideia do aplicativo era criar um pomodoro com uma interface bem direta e simples de usar. Além de ser funcional, também é configurável de acordo com as suas preferências (é possível escolher tanto o tempo de trabalho quanto o tempo de pausa) para se adaptar a cada uso. Em adição à essa base do projeto, também foram implementadas features para visualizar o histórico e também algumas estatísticas básicas.

## Dificuldades
Em relação ao código, os maiores desafios foram fazer com que os componentes se comunicassem entre si: no esquema do aplicativo, o timer é o componente principal, e ele deve enviar dados para os componentes de estatistica e de historico, enquanto deve receber dados do componente de configurações. Para contornar isso, foi possível criar um componente mãe (App) que engloba todos os outros componentes em um só nível de hierarquia, e então através dos props os estados dos componentes são compartilhados pelo App. Também optei por utilizar hooks em vez de componentes de classe pois, dado o contexto, foi mais fácil de gerenciar os estados dos componentes, e também reutilizei algumas funcionalidades em outras partes do código, o que reduz bastante o boilerplate de ter componentes classes que são rígidos.

A maior dificuldade do projeto se mostrou em relação a hostear o projeto não só para testes, mas também para usabilidade geral. Desenvolvi o projeto de forma livre resolvendendo as dependências do react native com base na plataforma do expo e tive muitos problemas de conexão para rodar o aplicativo. No Windows, por exemplo, conseguia rodar o projeto e utilizar o Expo Go pra transferir o projeto pro meu dispositivo móvel. Já no Linux, as mesmas configurações não funcionavam e tive que rodar com os parâmetros de tunelling do próprio expo, já que a conexão padrão de LAN não se conectava adequadamente ao Expo Go. Já na faculdade, mesmo utilizando a mesma rede em ambos os dispositivos, nenhum dos métodos funcionavam. A solução foi importar o repositório do github no snack da expo e, após remover uma dependência para tunelling (```@expo/ngrok```), o projeto rodou e foi possível se conectar ao outro dispositivo corretamente.

## Conclusão

Ao fim deste projeto, é possível afirmar que foi possível desenvolver e aplicar muitos dos conceitos vistos durante as aulas de computação móvel no semestre. Desde a escolha da temática, da idealização de um aplicativo que utilize bem da conveniência da portabilidade, e até sua implementação. Além disso, também foi possível exercitar muitos conceitos de desenvolvimento de programas legíveis, manteníveis e funcionais no front-end.


## 🚀 Funcionalidades

### Tela Principal (Timer)
- Exibe o temporizador atual
- Mostra se está em período de trabalho ou pausa
- Botões para controlar o timer e navegar para outras telas

![image](https://github.com/user-attachments/assets/4a5bc195-107c-4425-aaa6-f47a6661f3a0)


### Estatísticas
- Visualização de métricas de uso
- Número total de sessões
- Tempo total focado
- Média por sessão
- Opção para limpar dados

![image](https://github.com/user-attachments/assets/e54d93c6-c821-4abb-8f77-6c7b9e7d9828)


### Configurações
- Ajuste do tempo de trabalho
- Ajuste do tempo de pausa
- Salvamento automático das configurações

![image](https://github.com/user-attachments/assets/b909b97f-f8dc-4f47-bd3d-02e1ea7720d9)

### Histórico
- Lista de sessões anteriores
- Data e duração de cada sessão

![image](https://github.com/user-attachments/assets/d11517d8-967c-4a5a-ae9a-d8196a29c804)

## 🛠️ Tecnologias Utilizadas

- React Native
- React Navigation (Stack Navigator)
- AsyncStorage para persistência de dados
- APIs nativas para vibração e áudio
- Componentes funcionais e Hooks (useState, useEffect)

## 📂 Estrutura do Projeto

```
src/
├── components/
│   ├── Timer.js         
│   ├── Estatisticas.js  
│   ├── Configuracoes.js 
│   └── Historico.js     
│
├── assets/ 
│       
├── storage.js
│           
├── controle.js
│            
└── App.js               
```

## 🚀 Como Executar

1. Clone o repositório
```bash
git clone https://github.com/willianverenka/Projeto2ComputacaoMovel
```

2. Instale as dependências
```bash
cd Projeto2ComputacaoMovel
npm install
```

3. Inicie o projeto
```bash
npx react-native run-android
# ou
npx react-native run-ios
```



