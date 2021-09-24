document.addEventListener("DOMContentLoaded", function () {
  // Código que será executado quando o navegador carregar

});

async function fetchMealsRecomendation() {
  const request = await fetch('https://us-central1-squid-apis.cloudfunctions.net/test-front-basic');
  const response = await request.json();
  console.log(response);
  return response;
}

fetchMealsRecomendation();
