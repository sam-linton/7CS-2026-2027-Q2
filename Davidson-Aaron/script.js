let reviews = [];
let isAuthenticated = false;

function setBook(book) {
    localStorage.setItem('book', book)
    displayReviews();
}

function saved(event, book) {
    console.log('saved');
    console.log(book);
    if (checkSecretWord(event)) {
        return;
    }
    let review_input = document.getElementById("review");
    let finished_review = review_input.value;
    if (finished_review === "") {
        return;
    }

    if (window.location.href.includes("Odyssey")) finished_review += " -about The Odyssey";
    if (window.location.href.includes("Klara")) finished_review += "  -about Klara and the Sun";

    reviews.push(finished_review);
    console.log(reviews);
    localStorage.setItem(book, JSON.stringify(reviews));
    displayReviews();
    review_input.value = '';
}

function displayReviews() {
    book = localStorage.getItem("book")
    reviews = JSON.parse(localStorage.getItem(book)) || [];
    console.log(reviews);
    let saved_review = document.getElementById("reviews");
    if (!saved_review) return;
    saved_review.innerHTML = '';
    for (let i = 0; i < reviews.length; i++) {
        let reviewRow = "<div class='review-item'><p>" + reviews[i] + "</p>";
        if (isAuthenticated) {
            reviewRow += "<button onclick='deleteReview(" + i + ")' class='delete-btn'>Delete</button>";
        }
        reviewRow += "</div>";
        saved_review.innerHTML += reviewRow;
    }
}

function deleteReview(index) {
    reviews.splice(index, 1);
    book = localStorage.getItem("book")
    localStorage.setItem(book, JSON.stringify(reviews));
    displayReviews();
}

const targetPhrase = "password";

function checkSecretWord(event) {
    const review_input = document.getElementById("review");
    const secretContent = document.getElementById('secretContent');
    const userInput = review_input.value.trim().toLowerCase();
    if (userInput === targetPhrase.toLowerCase()) {
        event.preventDefault();
        isAuthenticated = true;
        if (secretContent) {
            secretContent.style.display = 'block';
        }
        review_input.value = '';
        displayReviews();
        return true;
    }
    return false;
}

