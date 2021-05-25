function addReview(event) {
    event.preventDefault();
    const review = whatYouThink.whatYouThinkInputText.value;
    const newReviewLi = document.createElement('li');
    const newReviewAvatar = document.createElement('div');
    newReviewAvatar.className = "avatar";
    const newReviewText = document.createElement('span');
    newReviewText.innerText = review;
    const reviews = document.getElementById('reviews').getElementsByTagName('ul')[0];
    const newerReviewLi = reviews.appendChild(newReviewLi);
    newerReviewLi.appendChild(newReviewAvatar);
    newerReviewLi.appendChild(newReviewText);
    whatYouThink.whatYouThinkInputText.value = "";
}

whatYouThink.onsubmit = addReview;