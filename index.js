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

    //1. What is a promise (in your own words)?
    //A promise that an operation that normally takes a bit of time
    //will eventually finish running. I.O.U. (I owe you)

    //2. Which part of the code we have so far is a promise?
    //The fetch request returns a promise object.

    //3. What are the three states a promise can be in?
    //(1) Pending, (2) Resolved (fulfilled), (3) Rejected

    //4. What does it mean when a promise is "resolved" (or fulfilled)?
    //The task we wanted to perform finished successfully.

    //5. How do we tell the code to do something only AFTER a
    //   promise is resolved?
    //.then() method

    //Challenge 3
    //create a .catch default background image incase the promise is rejected

    .catch(err => {
        document.body.style.backgroundImage = `url(https://images.unsplash.com/photo-1470104240373-bc1812eddc9f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNDI0NzB8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjcyOTU1OTB8&ixlib=rb-4.0.3&q=80&w=1080)`
    })