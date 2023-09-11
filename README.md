## Meow Maker
The template generator for Clean Architecture Typescipt Pipelines

This project is a JavaScript project that uses npm and TypeScript. It includes a command-line tool called meow.js that can be used to generate files based on templates.

### Getting Started
To get started with this project, you should first clone the repository to your local machine. You can do this by running the following command:

```
git clone https://github.com/maany/meow-maker.git
```

Once you have cloned the repository, you can install the necessary dependencies by running the following command:

```
npm install
```

### Usage
To use the `meow.js` command-line tool, you can run the following command:

```
./dist/meow.js [command] [options]
```
The available commands are:

- `make usecase_models`: Generates use case models based on templates.
- `make view_model`: Generates view models based on templates.
- `make primary_ports`: Generates primary ports based on templates.
- `make presenter`: Generates presenters based on templates.
- `make controller`: Generates controllers based on templates.
- `make usecase`: Generates use cases based on templates.
- `make feature`: Generates features based on templates.

You can also use the -h option to display help information for the meow.js command-line tool.

### Configuration
You can configure the templates used by the meow.js command-line tool by editing the src/config.ts file. 
You would have to do `npm run build` each time you change this file.

Alternatively, you can edit the dist/config.js file to avoid rebuilding the project on each change.

### Building
To build the project, you can run the following command:

```
npm run build
```

This will compile the TypeScript code and generate a dist directory containing the compiled JavaScript files.

## License
This project is licensed under the MIT License - see the LICENSE file for details.
