document.addEventListener("DOMContentLoaded", function () {
  // Código que será executado quando o navegador carregar

});

async function fetchPhots() {
  const request = await fetch('https://us-central1-squid-apis.cloudfunctions.net/test-front-basic');
  const response = await request.json();
  return response;
};

const appendItemList = (height, width, url, link) => {

  const newImg = document.createElement('img');
  document.querySelector('div').appendChild(newImg);

  // console.log(url);
  newImg.src = url;
  newImg.width = width;
  newImg.height = height;
}

const mapPhotos = (getPhotos) => {
  getPhotos.map(({ link, imagens: { resolucaoMedia: { height, width, url } } }) => {
    appendItemList(height, width, url, link);
  });
};

window.onload = async function () {
  const getPhotos = await fetchPhots();
  await mapPhotos(getPhotos);
};
