<h3 align="center"><b>Mountains Forecast</b></h3>

<p align="center">Mountains Forecast lists down the mountains located in Uzbekistan. Users can see current weather conditions and forecast data for each peak. Webapp retrieves data from open-meteo.com API. Built with React.</p>

<a name="readme-top"></a> 

# 📗 Table of Contents

- [📖 About the Project](#about-project)
  - [🛠 Built With](#built-with)
    - [Tech Stack](#tech-stack)
    - [Key Features](#key-features)
  - [🚀 Live Demo](#live-demo)
- [💻 Getting Started](#getting-started)
  - [Setup](#setup)
  - [Prerequisites](#prerequisites)
  - [Install](#install)
  - [Usage](#usage)
  - [Run tests](#run-tests)
  - [Deployment](#triangular_flag_on_post-deployment)
- [👥 Authors](#authors)
- [🔭 Future Features](#future-features)
- [🤝 Contributing](#contributing)
- [⭐️ Show your support](#support)
- [🙏 Acknowledgements](#acknowledgements)
- [❓ FAQ (OPTIONAL)](#faq)
- [📝 License](#license)


# 📖 "Mountains Forecast" <a name="about-project"></a>

**Mountains Forecast** is a single-page application (SPA, further 'webapp') that displays current weather and forecast data retrieved from open-meteo.com API.

Using this webapp users can:

- search for a particular mountain from the local database
- see the current weather on each mountain selected
- see hourly forecasts for each mountain selected
- switch the displayed forecast to show information according to ICON or GFS forecast models
- read articles about the following forecast models: ICON and GFS

Webapp consists of Home, Details, Models (ICON and GFS) and About pages:

- Homepage lists down the mountains located in Uzbekistan with the following data for each mountain:
  - elevation (in m)
  - weather code (index)

- Details page is displayed when a particular mountain is selected on the Homepage. It contains current weather and hourly forecasts for a selected mountain. Users can switch between ICON and GFS forecast models to display the corresponding forecast information.

- ICON and GFS pages provide useful information about the corresponding forecast model and can be visited by clicking on the Models button

- About page contains essential information about this webapp and credits


## 🛠 Built With <a name="built-with"></a>

### Tech Stack <a name="tech-stack"></a>

<details>
  <summary>Client</summary>
  <ul>
    <li><a href="https://developer.mozilla.org/ru/docs/Web/HTML">HTML</a></li>
    <li><a href="https://developer.mozilla.org/ru/docs/Web/CSS">CSS</a></li>
    <li><a href="https://developer.mozilla.org/ru/docs/Web/JavaScript">JavaScript</a></li>
    <li><a href="https://react.dev/">React</a></li>
    <li><a href="https://redux-toolkit.js.org/">Redux Toolkit</a></li>
  </ul>
  <summary>Server</summary>
  <ul>
    <li><a href="https://render.com/">Render.com</a></li>
  </ul>
</details>


### Key Features <a name="key-features"></a>

- **search for a particular mountain**
- **see current weather on selected mountain**
- **see hourly forecasts for selected mountain**
- **switch forecast models**

<p align="right">(<a href="#readme-top">back to top</a>)</p>


## 🚀 Live Demo <a name="live-demo"></a>

- Visit this link to see this project: https://mountainsforecast-uz.onrender.com/

<p align="right">(<a href="#readme-top">back to top</a>)</p>


## 💻 Getting Started <a name="getting-started"></a>

To get a local copy up and running, follow these steps.

### Prerequisites

To run and modify this project you need:

- GitHub account;
- git installed on your OS;
- VSCode (or another code editor);
- modern browser (supporting HTML5 and CSS3) is highly recommended;
- [Node.js and npm](https://nodejs.org/) installed;

### Setup

Login to your GitHub account. Clone this repository to your desired folder:

> cd my-folder
> git clone git@github.com:Zilola-Nazarova/mountains-forecast-uz.git

### Install

This project was bootstrapped with Vite and React.

To install all dependencies run the following command:
> npm install

### Usage

You can use this project to get weather and forecast data for mountain peaks located in Uzbekistan

You can also edit the code in your code editor and see the output. To run the app in the development mode:
> npm run dev

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
The page will reload when you make changes.
You may also see any linter errors in the console.

### Run tests

There are tests using libraries(React Testing Library and Jest).
To launch the test runner in the interactive watch mode:
> npm test

You can also check linter errors by running these commands:
> npx stylelint "**/*.{css,scss}"<br />
> npx eslint "**/*.{js,jsx}"

### Deployment

To build the app for production to the `build` folder.
> npm run build

It correctly bundles React in production mode and optimizes the build for the best performance.
The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

<p align="right">(<a href="#readme-top">back to top</a>)</p>


## 👥 Authors <a name="authors"></a>

👤 Zilola Nazarova

- GitHub: [@Zilola-Nazarova](https://github.com/Zilola-Nazarova)
- Twitter: [@NazarovaZi](https://twitter.com/NazarovaZi)
- LinkedIn: [in/NazarovaZi](https://www.linkedin.com/in/NazarovaZi)

<p align="right">(<a href="#readme-top">back to top</a>)</p>


## 🔭 Future Features <a name="future-features"></a>

- [ ] mountains list replenishment;
- [ ] desktop version design;
- [ ] forecast table improvement (add more data like wind direction, types of cloudcover);
- [ ] weather icons attachment to the corresponding weather codes.

<p align="right">(<a href="#readme-top">back to top</a>)</p>


## 🤝 Contributing <a name="contributing"></a>

Contributions, issues, and feature requests are welcomed!

Currently, I have to hardcode a database of mountain peaks with the following information:
- name
- elevation
- coordinates

Due to lack of time, I was only able to add a few mountains, so I would appreciate it if anyone shared a complete database of mountain peaks located in Uzbekistan.

<p align="right">(<a href="#readme-top">back to top</a>)</p>


## ⭐️ Show your support <a name="support"></a>

If you like this project just star it!

<p align="right">(<a href="#readme-top">back to top</a>)</p>


## 🙏 Acknowledgments <a name="acknowledgements"></a>

- Weather information by <a target="_blank" href="https://open-meteo.com/">open-meteo.com</a> API
- Map of Uzbekistan by <a target="_blank" href="https://vemaps.com/">Vemaps.com</a>
- Original design idea by <a target="_blank" href="https://www.behance.net/sakwadesignstudio">Nelson Sakwa</a>

I would like to thank the Microverse program for the knowledge and skills I have acquired in Modules 1, 2 and 3.

I am grateful to all previous project reviewers for their advice. Thanks to them I could build this app.

<p align="right">(<a href="#readme-top">back to top</a>)</p>


## ❓ FAQ <a name="faq"></a>

- **Why my mountain is not listed in the app?**

  - The mountains list of this app is not complete. I added only a few mountains located in Uzbekistan due to lack of time.

<p align="right">(<a href="#readme-top">back to top</a>)</p>


## 📝 License <a name="license"></a>

This project is [MIT](./MIT.md) licensed.

<p align="right">(<a href="#readme-top">back to top</a>)</p>
