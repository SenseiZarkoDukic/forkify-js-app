const recipeContainer = document.querySelector('.recipe');

const newFeature = function () {
  console.log('Welcome to the application!');
};

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

newFeature();
// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////
