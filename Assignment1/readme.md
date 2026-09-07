# Smart Utility Toolkit

A Node.js Unit-1 lab project demonstrating the use of Node.js **core modules** through a collection of simple utilities.

## 📌 Project Information

* **Course:** Web Dev III (Node.js & Express Backend)
* **Unit:** Unit-1
* **Project:** Smart Utility Toolkit
* **Version:** 1.0.0
* **Runtime:** Node.js
* **Dependencies:** None

## 🎯 Objective

This project demonstrates the following Node.js concepts:

* Command-line arguments using `process.argv`
* Creating and reusing custom modules
* Creating an HTTP server using the `http` module
* File operations using the `fs` module
* Path handling using the `path` module
* Random number generation using the `crypto` module

All utilities use built-in Node.js modules and do not require external packages.

## 📂 Project Structure

```text
smart-utility-toolkit/
│
├── calculator.js       # CLI calculator
├── dice.js             # Random dice generator
├── file-manager.js     # File create/read/update/copy/delete operations
├── logger.js            # Custom logging module
├── module-demo.js       # Demonstrates custom module reuse
├── server.js            # Basic HTTP server
├── sample.txt           # Sample file used by the file manager
├── package.json         # Project configuration
└── README.md            # Project documentation
```

## 🧮 1. CLI Calculator

The calculator accepts two numbers and an arithmetic operator through command-line arguments.

### Run

```bash
node calculator.js 10 + 5
```

### Examples

```bash
node calculator.js 20 - 7
node calculator.js 6 "*" 4
node calculator.js 20 / 5
```

### Supported Operators

| Operator | Operation      |
| -------- | -------------- |
| `+`      | Addition       |
| `-`      | Subtraction    |
| `*`      | Multiplication |
| `/`      | Division       |

The calculator also validates numeric input and prevents division by zero.

## 🎲 2. Random Dice Generator

The dice utility uses Node.js's `crypto` module to generate random values from **1 to 6**.

### Run

```bash
node dice.js 5
```

This generates five independent dice rolls.

You can also specify a different number of rolls:

```bash
node dice.js 10
```

## 📁 3. File Manager

The file manager demonstrates file operations using Node.js `fs` and `path` modules.

It performs the following operations:

1. **Create** a file
2. **Read** the file
3. **Update** the file
4. **Read the updated content**
5. **Copy** the file
6. **Delete** the copied file

### Run

```bash
node file-manager.js
```

The program works with `sample.txt` and creates a temporary `sample-updated.txt` copy during execution.

## 📝 4. Custom Logger Module

`logger.js` is a reusable custom module containing two functions:

* `log()` — prints normal messages with a timestamp
* `error()` — prints error messages with a timestamp

The functions are exported using:

```javascript
module.exports = { log, error };
```

### Demonstration

Run:

```bash
node module-demo.js
```

The `module-demo.js` file imports and reuses the custom logger module.

## 🌐 5. HTTP Server

The project includes a basic HTTP server created using Node.js's built-in `http` module.

### Start the Server

```bash
node server.js
```

The server runs on:

```text
http://localhost:3000
```

### Available Routes

| Route     | Description                   |
| --------- | ----------------------------- |
| `/`       | Home page                     |
| `/about`  | Information about the project |
| `/status` | Server status                 |
| `/dice`   | Generates a random dice roll  |

Example:

```text
http://localhost:3000/
http://localhost:3000/about
http://localhost:3000/status
http://localhost:3000/dice
```

Unknown routes return a **404 - Page Not Found** response.

## 📦 Installation

Make sure **Node.js** is installed on your system.

Clone or download the project, then navigate to the project directory:

```bash
cd smart-utility-toolkit
```

No `npm install` is required because the project only uses Node.js built-in modules.

## ▶️ Running the Project

### Calculator

```bash
node calculator.js 10 + 5
```

### Custom Module Demo

```bash
node module-demo.js
```

### File Manager

```bash
node file-manager.js
```

### Dice Generator

```bash
node dice.js 5
```

### HTTP Server

```bash
node server.js
```

## 🛠️ Technologies Used

* **Node.js**
* `process`
* `http`
* `fs`
* `path`
* `crypto`
* Custom CommonJS modules

## 📋 Expected Result

All utilities should execute successfully using only Node.js core functionality.

No external frameworks or packages are required.

## 👨‍💻 Author

**Smart Utility Toolkit – Web Dev III Unit-1 Lab Assignment**
