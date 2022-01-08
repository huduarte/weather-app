
# ⚡ Teste técnico Builders - Weather App ⚡

<h1 align="center">
  <img alt="Platform Builders" title="Platform Builders" src=".github/builders.jpeg" />
</h1>

# Definição:
- Desenvolver um aplicativo que consuma a localização do usuário e exiba na interface o endereço atual os dados climáticos da região e um botão para atualizar os dados.

# Resultado:

### Dia
![Resultado final](.github/weather-app-day.gif)

### Noite

![Resultado final](.github/weather-app-night.gif)


# Tecnologias utilizadas:
- Expo BareWorkflow
- Expo Location
- Typescript
- Axios
- Styled-Components
- Testing Library e Jest
- Lottie

# Como executar:
 - Clone o projeto na sua máquina

- Projeto construído com BareWorkflow permite que o projeto seja executa com o Expo e com o React Native CLI
### Para executar com o Expo:
- Instale a CLI do Expo no seu computador
- Rode o comando yarn ou npm install
- Rode o comando expo start
- No navegador, escolha qual o simulador/emulador vai utilizar e clique em Run
### Para executar com a CLI
- Caso esteja em um mac, digite cd ios/ && pod install
- Na raiz do projeto rode o comando yarn start
- Após o carregamento do Metro, abra outra aba do terminal e rode yarn ios ou yarn android

### Executar os testes:
- Os testes estão no diretório tests dentro da pasta src
- Rode yarn test no terminal para executar os testes da aplicação

# Melhorias: 
- Melhorar responsividade em dispositivos menores
- Biblioteca de localização apresenta problema em alguns dispostivos antigos