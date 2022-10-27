const api = 'https://digimon-api.vercel.app/api/digimon';

window.onload = function () {
  fetch(api)
    .then(data => data.json())
    .then(data => {
      for (let index = 0; index < data.length; index++) {
        var digimon = `
        <div>
          <h1>${data[index].name}</h1>
          <img src="${data[index].img}" alt=""/>
          <p>${data[index].level}</p>
        </div>
      `;

        document.getElementById('digimon').innerHTML += digimon;
      }
    });
};
