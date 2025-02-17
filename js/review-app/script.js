let feedbackForm = document.getElementById("feedback-form");

let selectedRating = 0;

feedbackForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let feedbackText = document.getElementById("feedback-text").value;

  if (feedbackText.trim() === "") {
    alert("Empty Feedback is not accepted");
    return;
  }

  if (selectedRating === 0) {
    alert("Please select a rating");
    return;
  }

  const feedback = {
    text: feedbackText,
    rating: selectedRating,
  };

  appendNewCard(feedback);
  document.getElementById("feedback-text").value = "";
  clearStars();
  selectedRating = 0;
});

function appendNewCard(feedback) {
  const cardSection = document.querySelector(".cards-section");

  const cardDiv = document.createElement("div");
  cardDiv.className = "card";

  const text = document.createElement("span");
  text.innerText = feedback.text;

  const stars = document.createElement("span");
  stars.innerText = "⭐".repeat(feedback.rating);

  cardDiv.appendChild(text);
  cardDiv.appendChild(stars);
  cardSection.appendChild(cardDiv);
}

// Stars

let stars = document.getElementsByClassName("star");

function star(n) {
  selectedRating = n;
  remove();
  for (let i = 0; i < n; i++) {
    let cls = "";
    if (n == 1) cls = "one";
    else if (n == 2) cls = "two";
    else if (n == 3) cls = "three";
    else if (n == 4) cls = "four";
    else if (n == 5) cls = "five";
    stars[i].className = "star " + cls;
  }
}

function remove() {
  let i = 0;
  while (i < 5) {
    stars[i].className = "star";
    i++;
  }
}

function clearStars() {
  let i = 0;
  while (i < 5) {
    stars[i].className = "star";
    i++;
  }
}
