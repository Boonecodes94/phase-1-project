// The base URL to the backend server 
// The endpoints to get options and save favorites
const baseUrl = 'http://localhost:3000';
const optionsUrl = baseUrl + '/options'
const favoriteUrl = baseUrl + '/favorites'

// Fetch options 
//when Personal or Recreational button is clicked
document.getElementById('personal-button').addEventListener('click', () => fetchOptions('personal'));
document.getElementById('recreational-button').addEventListener('click', () => fetchOptions('recreational'));




// event listeners, should make changes to the page as required
function makeRecommendation(option) {
    recommendationText.textContent = `Based on your choices, you should do ${option.name}`;
    eventOptionImage.src = option.image;
    saveFavorite(option);
}

function saveFavorite(option) {
    fetch(favoriteUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(option),
    });
}