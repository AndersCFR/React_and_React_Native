# React and React Native repo
Aprendiendo React, soy backend pero no me vendría mal algo de front


### Principios de React

Cuando  renderizamos algo debemos tener en cuenta que React renderiza solo un elemento a la vez,
para poder envolver y renderizar varios elementos podemos usar un React.Fragment

- Los componentes deben tener PascalCase

- Las etiquitas JSX usan camelCase

Caso contrario React no podrá saber si el elemento es una etiqueta HTML o es un componente

### JSX

Es una extensión de JS que permite transpilar código JSX hacia JS, facilitando y haciendo menos
verbosa la escritura de React. El transpilador que deberíamos usar es SWC

### Vite

Un empaquetador de aplicaciones web

Para crear una aplicación de React podemos usar:

> npm create vite@latest

O con yarn podemos usar

> yarn create vite

> yarn dev

React Fragment, me permite regresar varios elementos jsx

### Funcionamiento de React

Cuando se realiza el renderizado de la aplicación primero llegan los default props y posteriormente los 
prop types.

Con los hooks usamos const para evitar que el valor sea alterado

# Configuración de testing en Vite

> instalar jest

>> yarn add --dev jest

> Agregamos script de test en package json

>> "test": "jest --watchAll" 

> Se deb crear otra carpeta de test, fuera del src para evitar que la aplicación pese más de lo  necesario.

> Instalar types para jest

>> yarn add -D @types/jest


