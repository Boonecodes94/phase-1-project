// The base URL to the backend server 
// The endpoints to get options and save favorites
const baseUrl = 'http://localhost:3000';
const optionsUrl = baseUrl + '/options'
const favoriteUrl = baseUrl + '/favorites'


const categoryButtons = document.getElementById('category').children;
const list1 = document.getElementById('list-1');
const list2 = document.getElementById('list-2');
const recommendationText = document.getElementById('recommendation-text');
const eventOptionImage = document.getElementById('event-option-image');

// Fetch options 
//when Personal or Recreational button is clicked
function fetchOptions(category) {
    fetch(optionsUrl + '?category=' + category)
        .then(response => response.json())
        .then(data => renderOptions(data));
}

//  Render data to the page
function renderOptions(options) {
    // Clear previous options
    while (list1.firstChild) list1.firstChild.remove();
    while (list2.firstChild) list2.firstChild.remove();

    for (let i = 0; i < options.length; i++) {
        const optionButton = document.createElement('button');
        optionButton.textContent = options[i].name;
        optionButton.addEventListener('click', () => makeRecommendation(options[i]));
        if (i < 2) {
            list1.appendChild(optionButton);
        } else {
            list2.appendChild(optionButton);
        }
    }
}

for (let i = 0; i < categoryButtons.length; i++) {
    categoryButtons[i].addEventListener('click', () => fetchOptions(categoryButtons[i].textContent.toLowerCase()));
}
// event listeners, should make changes to the page as required
function makeRecommendation(option) {
    recommendationText.textContent = `Based on your c1hoices, you should do ${option.name}`;
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