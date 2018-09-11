(function () {
    const form = document.querySelector('#search-form');
    const searchField = document.querySelector('#search-keyword');
    let searchedForText;
    const responseContainer = document.querySelector('#response-container');

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        responseContainer.innerHTML = '';
        searchedForText = searchField.value;

        // const imgRequest = new XMLHttpRequest();
        // imgRequest.onload = addImage;
        // imgRequest.open('GET', `https://api.unsplash.com/search/photos?page=1&query=${searchedForText}`);
        // imgRequest.setRequestHeader('Authorization', 'Client-ID 89511a20975117a2d7d1c3fd1904517bb7326531502dc28a78dd73bb67269e4a');
        // imgRequest.send();

        $.ajax({
            url: `https://api.unsplash.com/search/photos?page=1&query=${searchedForText}`,
            headers: {
                Authorization: 'Client-ID 89511a20975117a2d7d1c3fd1904517bb7326531502dc28a78dd73bb67269e4a'
            }
        }).done(addImage);


        function addImage(images) {
            const firstImage = images.results[0];

            responseContainer.insertAdjacentHTML('afterbegin', `<figure>
                    <img src="${firstImage.urls.small}" alt="${searchedForText}">
                    <figcaption>${searchedForText} by ${firstImage.user.name}</figcaption>
                </figure>`);
        }
    });
})();