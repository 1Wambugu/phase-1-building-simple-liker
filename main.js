function handleUserAction() {
  const heartButton = document.getElementById("heart-button");
  const errorModal = document.getElementById("modal");
  const errorMessage = document.getElementById("modal-message");

  // Disable the heart button during the server call
  heartButton.disabled = true;

  // Simulate server call
  mimicServerCall()
    .then(() => {
      // Inside a successful response from the server
      if (!heartButton.classList.contains("activated-heart")) {
        // If heart is empty, change it to full and add the activated class
        heartButton.classList.add("activated-heart");
      } else {
        // If heart is full, change it back to empty and remove the activated class
        heartButton.classList.remove("activated-heart");
      }
    })
    .catch(() => {
      // Display error message in the error modal
      errorMessage.textContent = "Error: Could not update heart. Please try again.";
      errorModal.classList.remove("hidden");

      // Hide the error modal after 3 seconds
      setTimeout(() => {
        errorModal.classList.add("hidden");
      }, 3000);
    })
    .finally(() => {
      // Enable the heart button again after the server call is completed
      heartButton.disabled = false;
    });
}

const hearts = document.querySelectorAll(".heart");
hearts.forEach((heart) => {
  heart.addEventListener("click", () => {
    handleHeartClick(heart);
  });
});

