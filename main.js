



// Opening Navigation Bar
function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

// Closing Navigation Bar
function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}

// Closing Navigation Bar and Opening Feedback/Ratings section
function closeNav_openfeed() {
    document.getElementById("myNav").style.width = "0%";
    document.getElementById("rate-feed").style.display = "block";
}

function closefeed() {
    document.getElementById("rate-feed").style.display = "none";
}

//Opening Giving Ratings section and closing rating section
function open_ratings() {
    document.getElementById("rate-feed").style.display = "none";
    document.getElementById("rate").style.display = "block";
}

// Closing Giving Ratings section 
function close_ratings() {
    // document.getElementById("rate").style.display = "none";
    const p = confirm("Are You sure you don't want to give feedback and Rating");
    if (p == true) {
        document.getElementById("rate").style.display = "none";
    }
    else {
        document.getElementById("rate").style.display = "block"
    }
}

//Giving Like
function like() {
    document.getElementById("like").style.color = "blue";
    document.getElementById("dislike").style.display = "none";
}

//Giving Dislike
function dislike() {
    document.getElementById("dislike").style.color = "blue";
    document.getElementById("like").style.display = "none";
}

// Sending Feedback
function sendfeed() {
    alert("Feedback Sent");
    document.getElementById("feedback").style.display = "none";
    document.getElementById("rate").style.display = "none";
}


// disabled form after login 
function login() {
    document.getElementById('form-disable').style.display = "none";
}