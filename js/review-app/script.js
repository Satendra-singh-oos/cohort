let feedbackForm = document.getElementById("feedback-form");

feedbackForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let feedbackText = document.getElementById("feedback").value;

  if (feedbackText.trim() === "") {
    alert("Empty Feedback is not accepted");
    return;
  }

  const feedback = {
    text: feedbackText,
  };

  appendNewCard(feedback);
  document.getElementById("feedback").value = "";
});

function appendNewCard(feedback) {
  const cardSection = document.querySelector(".cards-section");

  const cardDiv = document.createElement("div");
  cardDiv.className = "card";

  const text = document.createElement("span");
  text.innerText = feedback.text;

  cardDiv.appendChild(text);
  cardSection.appendChild(cardDiv);
}
