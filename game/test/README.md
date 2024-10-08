[!] Importante.

Para realizar los test se ha instalado Jest, la librería de testing mantenida por Facebook.

```bash
npm i jest -D
```

Debido a que Jest no tiene un soporte completo para EcmaScriptModules, en el package.json se ha indicado el script de test de la siguiente manera:

```json
{
  "scripts": {
    "test": "node --experimental-vm-modules node_modules/jest/bin/jest.js"
  }
}
```

Y para ejecutar los test, debe ejecutar este comando:

```bash
npm test
```
