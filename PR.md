### This branch follows the requirements of [React capstone project - Metrics webapp](https://github.com/microverseinc/curriculum-react-redux/blob/main/capstone/react_capstone.md) lesson.

**In this task, I work with the real live data from [open-meteo.com](https://open-meteo.com/) API. I built a web application that provides current weather and forecast information for mountains peaks located in Uzbekistan.**

### General requirements:
- There are [no linter errors](https://github.com/microverseinc/linters-config)
- All tasks are based on the cards from our [Kanban board](https://github.com/Zilola-Nazarova/space-travelers-hub/projects/1)
- Correct [Gitflow](https://github.com/microverseinc/curriculum-transversal-skills/blob/main/git-github/articles/gitflow.md) is used
- The work is documented [in a professional way](https://github.com/microverseinc/curriculum-transversal-skills/blob/main/documentation/articles/professional_repo_rules.md)

## Project requirements:

### API

I chose [open-meteo.com](https://open-meteo.com/) API to get weather and forecast data based on location's coordinates and elevation.

### Design

I follow [design guidelines](https://www.behance.net/gallery/31579789/Ballhead-App-(Free-PSDs)) of Nelson Sakwa's project. I gave appropriate credit to the author in the README of my project.

### Interactions

**Home page**

When the page loads, the webapp shows the list of mountains that can be filtered out by mountain name (searchbar).
Along with the peak name, elevation and weather code is displayed per peak (elevation data comes from local database and weather code comes from the open-meteo.com API).
When the user clicks (or taps) on a mountain card, the application navigates to the details page.
The homepage also displays the number of peaks currently available in the database and iformation about the last update.

**Details page**

In the details page, the webapp retrieves data from the open-meteo.com API to show detailed current weather and forecast data for the selected mountain.
Users can swith between ICON and GFS forecast models to display the corresponding forecast information.
When the user clicks on the "Back" button (<), the user navigates to the home page.


### Tests

I created following tests:
- unit tests for pure functions in Redux code are
- integration tests for the application using the React Testing Library

Access to the API and connection to the Redux Store are mocked.