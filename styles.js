var images = document.querySelectorAll('.image');
var modalKeywords = document.querySelectorAll('.modal-image-keywords');

images.forEach(function(image, index) {
    var keywords = image.querySelector('img').getAttribute('data-keywords');
    var keywordSpan = image.querySelector('.image-keywords');
    var modalKeywordSpan = modalKeywords[index];
    keywordSpan.textContent = keywords;
    modalKeywordSpan.textContent = keywords;
});

var images = document.querySelectorAll('.image');
var filterButtons = document.querySelectorAll('.filter-buttons button');

// Loop through each filter button and add a click event listener
filterButtons.forEach(function(button) {
  button.addEventListener('click', function() {
    // Get the filter keyword from the button's data-filter attribute
    var filterKeyword = button.getAttribute('data-filter');

    // Loop through each image and check if it has the filter keyword
    images.forEach(function(image) {
      var keywords = image.querySelector('img').getAttribute('data-keywords');
      var keywordArray = keywords.split(', '); // Split the keywords into an array
      var keywordSpan = image.querySelector('.image-keywords');

      if (keywordArray.includes(filterKeyword)) {
        // If the image has the filter keyword, show it
        image.style.display = 'block';
        keywordSpan.textContent = keywords;
        filterButtons.forEach(function(button) {
            button.style.backgroundColor = "transparent"
            button.style.color = "#36D399"
        });
        button.style.backgroundColor = "#36D399"
        button.style.color = "#FFF"
      } else {
        // Otherwise, hide it
        image.style.display = 'none';
        keywordSpan.textContent = '';
      }
    });
  });
});

var removeFiltersButton = document.getElementById("remove-filters");
removeFiltersButton.addEventListener("click", function() {
  var images = document.querySelectorAll(".image");
  images.forEach(function(image) {
    image.style.display = "block";
  });
  filterButtons.forEach(function(button) {
              button.style.backgroundColor = "transparent"
              button.style.color = "#36D399"
   });
});