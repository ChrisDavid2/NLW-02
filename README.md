<h1 align="center">
    <img alt="NextLevelWeek" title="#NextLevelWeek" src=".github/logo.svg" width="250px" />
</h1>

<h4 align="center"> 
	Next Level Week 2.0 🚀
</h4>
<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/YuiMatsunaga/NLW-02?color=%237159c1">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/yuimatsunaga/nlw-02?color=%237159c1">
	
  <a href="https://www.linkedin.com/in/christyandavid/">
    <img alt="Made by Christyan David" src="https://img.shields.io/badge/made%20by-Christyan%20David-%237159c1">
  </a>

  <a href="https://github.com/YuiMatsunaga/NLW-02/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/yuimatsunaga/nlw-02?color=%237159c1">
  </a>

  <img alt="License" src="https://img.shields.io/github/license/yuimatsunaga/nlw-02?color=%237159c1" >

   <a href="https://github.com/YuiMatsunaga/NLW-02/stargazers">
    <img alt="Stargazers" src="https://img.shields.io/github/stars/yuimatsunaga/nlw-02?style=social">
  </a>
</p>

<p align="center">
  <a href="#-project">Project</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#rocket-Technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#information_source-how-to-use">How to use</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-how-to-contribute">How to contribute</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-license">License</a>
</p>

## 💻 Project

<h1 align="center">
    <img alt="Preview" title="Preview" src=".github/design.png" width="500px" />
</h1>

Proffy is an app created to support connections between teachers and students.

This application offers to teachers the opportunity to register classes, adding information such as like subject, cost per hour and time available to teach.
Students can easily search for classes.

Based on <strong>national day of education professionals</strong>.

## :rocket: Technologies

This project was developed with the following technologies:

- [Node.js][nodejs]
- [TypeScript][typescript]
- [React][reactjs]
- [React Native][rn]
- [Expo][expo]

## :information_source: How To Use

To clone and run this application, you'll need [Git](https://git-scm.com), [Node.js][nodejs] + [yarn][yarn] installed on your computer.

From your command line:

### Install API

```bash
# Clone this repository
$ git clone https://github.com/YuiMatsunaga/NLW-02.git

# Go into the repository
$ cd NLW-02/server

# Install dependencies
$ yarn install

# Run Migrates
$ yarn knex:migrate

# Start server
$ yarn start

# running on port 3333
```

### Install Front-end

```bash
# Go into the repository
$ cd NLW-02/web

# Install dependencies
$ yarn install

# Run
$ yarn start

# running on port 3000
```

### Install Mobile

```bash
# Go into the repository
$ cd NLW-02/mobile

# Install dependencies
$ yarn install

# Run
$ yarn start

# Expo will open, just scan the qrcode on terminal or expo page

# If some problem with fonts, execute:
$ expo install expo-font @expo-google-fonts/archivo @expo-google-fonts/poppins
```

## 🤔 How to contribute

- Make a fork;
- Create a branck with your feature: `git checkout -b my-feature`;
- Commit changes: `git commit -m 'feat: My new feature'`;
- Make a push to your branch: `git push origin my-feature`.

After merging your receipt request to done, you can delete a branch from yours.

## :memo: License

This project is under the MIT license. See the [LICENSE](https://github.com/YuiMatsunaga/NLW-02/blob/master/LICENSE) for details.

---

<p align="center">
Made with 💜 by Christyan David
</p>

[nodejs]: https://nodejs.org/
[typescript]: https://www.typescriptlang.org/
[expo]: https://expo.io/
[reactjs]: https://reactjs.org
[rn]: https://facebook.github.io/react-native/
[yarn]: https://classic.yarnpkg.com/en/
[vs]: https://code.visualstudio.com/
[vceslint]: https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
[prettier]: https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode
