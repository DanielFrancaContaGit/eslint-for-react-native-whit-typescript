# Settins eslint for react native whit typescript

this repository was created to try to teach how to configure eslint with the airbnb style guide in a project with react native and typescript

## Technologies

 - [React-native](https://reactnative.dev/)
 - [react-native-unimodules](https://docs.expo.io/bare/installing-unimodules/)
 - [TypeScript](https://www.typescriptlang.org/) 
 - [eslint](https://eslint.org/)
 - [expo-cli](https://docs.expo.io/workflow/expo-cli/)
 
## How to create a project like this

This project was created with npx create npx create-react-native-app with the default template and had the type script added  to make a similar project use these commands:

- #### Create the project
```
npx create npx create-react-native-app
```


- #### Choose the default template

<p align="center">
  <img align="center" alt="Product: demo" src="https://media.giphy.com/media/JsnUgag6Lebswl9xyz/giphy.gif" />
</p>

- #### install typescript

```
yarn add --dev typescript @types/react @types/react-native @types/react-dom

or

npm install --dev typescript @types/react @types/react-native @types/react-dom
```

- #### change the name of App.js to App.tsx you can use this comand:

```
mv App.js App.tsx
```
### Install and init eslint 

```
yarn add eslint
```

```
yarn eslint --init
```

- #### initialize eslint normally and add the airbnb style guide [if you have doubts you can access this link](https://henriquetavares.com/pt-br/setting-eslint-on-reactjs-and-react-native/)








