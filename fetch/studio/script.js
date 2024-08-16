//TODO: Add Your Code Below
//h3 should be h2
//img should have alt tag

window.addEventListener("load", function () {
  fetch(
    "https://handlers.education.launchcode.org/static/astronauts.json"
  ).then(function (response) {
    response.json().then(function (json) {
      json.sort(function (a, b) {
        return b.hoursInSpace - a.hoursInSpace;
      });
      const container = document.getElementById("container");

      for (let i = 0; i < json.length; i++) {
        const astronaut = json[i];

        //Where we ended on bonus mission
        // if (astronaut.active) {
        //   astronaut.active.style.color = "green";
        // }

        container.innerHTML += `<div class="astronaut">
            <div class="bio">
            <h2>${astronaut.firstName} ${astronaut.lastName}</h2>
            <ul>
            <li>Hours in space: ${astronaut.hoursInSpace}</li>
            <li>Active: ${astronaut.active}</li>
            <li>Skills: ${astronaut.skills}</li>
            </ul>
            </div>
            <img class="avatar" src="${astronaut.picture}" alt=Photo of "${astronaut.firstName} ${astronaut.lastName}">
            </div>
        `;
      }
    });
  });
});
