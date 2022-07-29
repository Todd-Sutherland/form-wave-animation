const labels = document.querySelectorAll(".form-control label");

labels.forEach((label) => {
  label.innerHTML = label.innerText // 1. Taking the label.innerHTML for each label in the lables array, and setting it to label.innerText (EMAIL)
    .split("") // 2. .split with an empty string splits the letters (EMAIL) into an array (E, M, A, I, L)
    .map((letter, idx) => `<span>${letter}</span>`) // 3. We can use map to manipluate the array of letters, and turn it into something else/a new array in this case. This array we are creating is an array of letters with a span wrapped around each letter with a transition delay
    .join(""); // 4. We don't want an array at the end, we want it to be a string. join("") with an empty string will turn it back into a string
  // 5. Now each letter in all of our labels is wrapped in a span
});
