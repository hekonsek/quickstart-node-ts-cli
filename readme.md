# Quickstart: Node command line tool (TypeScript)

This is a template project for a command line (CLI) tool in Node and TypeScript. Includes commonly used CLI libraries:
- **yargs** for command line parsing
- **boxen** for drawing UI boxes
- **chalk** for styling and coloring text

To create your new cli tool, just copy this project using the following command:

```bash
git clone https://github.com/hekonsek/quickstart-node-ts-cli myclitool
```

## Building

To init, build and test your tool execute:

```
npm run all
```

To only init your tool execute:

```
npm run init
```

To only build your tool execute:

```
npm run build
```

To only test it execute:

```
npm run test
```

## Installation

To install this CLI tool into your system execute the following command:

```
npm install -g https://github.com/hekonsek/quickstart-node-ts-cli/tarball/0.0.0
```

Alternatively you can indicate a git commit instead of a release version: 

```
npm install -g git+https://github.com/hekonsek/quickstart-node-ts-cli#gitCommitHash
```
