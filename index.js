//Challenge 1
//fetch a background image
fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature")
    .then(res => res.json())
    .then(data => {
        document.body.style.backgroundImage = `url(${data.urls.regular})`
    //Challenge 2
    //show the author's name on the page
    document.getElementById("author").textContent = `By: ${data.user.name}`
    })

//Challenge 2
