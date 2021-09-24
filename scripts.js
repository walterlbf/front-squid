document.addEventListener("DOMContentLoaded", function () {
  // Código que será executado quando o navegador carregar

});

async function fetchPhots() {
  const request = await fetch('https://us-central1-squid-apis.cloudfunctions.net/test-front-basic');
  const response = await request.json();
  return response;
};

const newTagPhoto = (_id, link, height, width, url) => {
  const newTagA = document.createElement('a');
  const newImg = document.createElement('img');
  newTagA.href = link;
  newImg.src = url;
  newImg.width = width;
  newImg.height = height;
  document.querySelector('div').appendChild(newTagA);
  newTagA.appendChild(newImg);
};

const mapPhotos = (getPhotos) => {
  console.log(getPhotos)
  getPhotos.map(({ _id, link, imagens: { resolucaoMedia: { height, width, url } } }) => {
    newTagPhoto(_id, link, height, width, url);
  });

};

window.onload = async function () {
  const getPhotos = await fetchPhots();
  await mapPhotos(getPhotos);
};
