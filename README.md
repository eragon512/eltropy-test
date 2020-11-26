# eltropy-test
Assignment Repo for Eltropy Job Interview

## Problem Statement

Implement a client-side application where it will be possible to add item name and value. 

### Requirements

1. It should be possible to carry out CRUD operations. 

2. This list must be saved in the browser's LocalStorage, and if the user leaves the page and returns, the list must be retrieved from LocalStorage.

3. It should also show total items selected. 

4. Users should be able to search for a particular item by name. Users should be able to remove the item as well as change the value of the items.

5. The layout must be responsive.

![ui_screenshot](https://user-images.githubusercontent.com/9765685/100378383-0203ba80-3039-11eb-93a5-6f671224654a.png)


## Libraries/Technologies used

+ React
+ Redux
+ Webpack
+ Babel
+ [Semantic UI React/CSS](https://react.semantic-ui.com/usage)


## Setting up Local Environment

1. Check if you have `node` and `npm` installed in your machine, by running the following:

```
node -v
npm -v
```

If you do not have `node` or `npm` installed, download and run the installer: https://nodejs.org/en/download/

2. Run the following commands to download and setup the repo:

```
git clone https://github.com/eragon512/eltropy-test.git
cd eltropy-test
npm install
```

3. To run the dev server, run the command: `npm run dev`

This should launch the webpage and it should now be available at http://localhost:8080