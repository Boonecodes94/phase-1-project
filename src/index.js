// The base URL to the backend server 
// The endpoints to get options and save favorites
const baseUrl = 'http://localhost:3000';
const optionsUrl = baseUrl + '/options'
const favoriteUrl = baseUrl + '/favorites'

// Fetch options 
//when Personal or Recreational button is clicked
document.getElementById('personal-button').addEventListener('click', () => fetchOptions('personal'));
document.getElementById('recreational-button').addEventListener('click', () => fetchOptions('recreational'));

