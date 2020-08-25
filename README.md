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

#### Create the project
```
npx create npx create-react-native-app
```


#### Choose the default template

<p align="center">
  <img align="center" alt="Product: demo" src="https://media.giphy.com/media/JsnUgag6Lebswl9xyz/giphy.gif" />
</p>

- #### Install typescript

```
yarn add --dev typescript @types/react @types/react-native @types/react-dom

or

npm install --dev typescript @types/react @types/react-native @types/react-dom
```

#### Change the name of App.js to App.tsx you can use this comand:

```
mv App.js App.tsx

```
#### Add the ``tsconfig.json`` to the root of the projec and configure the compiler

```
{
  "compilerOptions": {
    "allowSyntheticDefaultImports": true,
    "jsx": "react-native",
    "lib": ["dom", "esnext"],
    "moduleResolution": "node",
    "noEmit": true,
    "skipLibCheck": true
  }
}
```

### Install and init eslint 

```
yarn add eslint
```

```
yarn eslint --init
```

#### initialize eslint normally and add the airbnb style guide [if you have doubts you can access this link](https://henriquetavares.com/pt-br/setting-eslint-on-reactjs-and-react-native/)

If you already now how to configure the basic of eslint i recomend to use options

- To check syntax, find problems, and enforce code style
- JavaScript import/export
- React
- Node
- Use a popular style guide
- Airbnb
- JavaScript
- install the dependences whit npm and after delete the ``package-lock.json`` and run ``yarn``


#### Now eslint must have created the ``.eslintrc.js`` but i like to use this rules to typescripts projects

```
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', 'tsx'] }],
    'react/style-prop-object': [0],
    'import/extensions': [0],
    'import/no-unresolved': [0],
    'max-len': [0],
    'react/prop-types': [0],
  },
```

#### Now we cam test if eslint is working by use this comand

```
yarn eslint App.tsx

or

npx eslint App.tsx
```

#### Configure the vc code to format on save 

If you use vscode you cam install the eslint plugin amd add this configuration to the settings.jon and the style errors will appear underlined and fixed on save 

```
 "cSpell.language": "en,pt,pt_PT",
 "editor.formatOnSave": true,
 "[javascript]": {
     "editor.formatOnSave": true,
 },
 "[typejavascript]":  
     "editor.formatOnSave": true,
 },
 "eslint.alwaysShowStatus": true,
 "eslint.format.enable": true,
 "editor.codeActionsOnSave": {
     "source.fixAll.eslint": false
 },
```

#### Ps

If you use one edtor different from vscode you cam use some pluging like Prettier or edtorconfig


                    








