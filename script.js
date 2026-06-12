```javascript
// ======================================================
// Jotipriya Das - Personal Website
// A little bit of JavaScript, a little bit of personality
// ======================================================

console.log("🚀 Welcome! The website loaded successfully.");

// ------------------------------------------------------
// Fun console message for curious developers
// ------------------------------------------------------
console.log(`
Hi there, fellow developer! 👋

Since you're inspecting the console, here's a fun fact:
Most machine learning bugs disappear the moment you try
to explain them to someone else.

Have a great day! 😄
`);

// ------------------------------------------------------
// Smooth scrolling for internal anchor links
// ------------------------------------------------------
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
      target.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});

// ------------------------------------------------------
// Dynamic footer quote (optional)
// If you later add:
// <p id="quote"></p>
// this will automatically rotate messages.
// ------------------------------------------------------

const quotes = [
  "Teaching AI to say 'I don't know' is surprisingly difficult.",
  "Every great model starts with clean data.",
  "Debugging: where 5 minutes of coding becomes 2 hours of detective work.",
  "Research is turning coffee into conference papers.",
  "Behind every successful experiment are at least ten unsuccessful ones."
];

const quoteElement = document.getElementById("quote");

if (quoteElement) {
  const randomQuote =
    quotes[Math.floor(Math.random() * quotes.length)];
  quoteElement.textContent = randomQuote;
}
```
