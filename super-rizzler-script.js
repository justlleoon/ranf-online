// Assuming 'data.json' is accessible via a web server
fetch('accounts.json.json')
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json(); // Parses the JSON response into a JavaScript object
  })
  .then(data => {
    console.log(data); // Work with the parsed JSON data
  })
  .catch(error => {
    console.error('Error fetching or parsing JSON:', error);
  });
function onstart(){
    $("div.chc").hide();
};
function checkMate(){
    let bubba = document.forms["fui"]["cnid"].value;
    let ccv = document.forms["fui"]["ccv"].value;
    return false
}