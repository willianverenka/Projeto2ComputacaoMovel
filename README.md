# 📱 Pomodoro App

Um aplicativo de Pomodoro desenvolvido em React Native que ajuda você a gerenciar seu tempo de trabalho e descanso. O app inclui funcionalidades como timer personalizável, estatísticas de uso, histórico de sessões e feedback sensorial.

## 🚀 Funcionalidades

- ⏲️ **Timer Pomodoro**
  - Tempo de trabalho e pausa personalizáveis
  - Alternância automática entre períodos de trabalho e pausa
  - Interface intuitiva com botões de iniciar/pausar

- 📊 **Estatísticas**
  - Acompanhamento do número total de sessões completadas
  - Tempo total focado
  - Média de tempo por sessão

- 📝 **Histórico**
  - Registro detalhado de todas as sessões realizadas
  - Data e tempo focado de cada sessão

- ⚙️ **Configurações**
  - Personalização do tempo de trabalho
  - Personalização do tempo de pausa
  - Salvamento automático das preferências

- 📱 **Recursos do Dispositivo**
  - Feedback vibratório ao finalizar sessões
  - Feedback sonoro ao completar ciclos
  - Persistência de dados usando AsyncStorage

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
├── styles/
│   └── index.js         
├── storage/
│   └── index.js         
├── controle/
│   └── index.js         
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

## 📱 Telas do Aplicativo

### Tela Principal (Timer)
- Exibe o temporizador atual
- Mostra se está em período de trabalho ou pausa
- Botões para controlar o timer e navegar para outras telas

### Estatísticas
- Visualização de métricas de uso
- Número total de sessões
- Tempo total focado
- Média por sessão
- Opção para limpar dados

### Configurações
- Ajuste do tempo de trabalho
- Ajuste do tempo de pausa
- Salvamento automático das configurações

### Histórico
- Lista de sessões anteriores
- Data e duração de cada sessão
