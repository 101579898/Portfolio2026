const tv = document.getElementById("tv");
const welcome = document.getElementById("welcome");
const boot = document.getElementById("boot");
const log = document.getElementById("log");
const big = document.getElementById("big");
const portfolio = document.getElementById("portfolio");

// The lines that print during the boot. Change these to whatever you like.
const lines = [
  "SYSTEM CHECK... OK",
  "LOADING MEMORY... OK",
  "LOADING PORTFOLIO.EXE",
  "FINDING EXAMPLE WORK... 6 FOUND",
  "AUTO RUN COMPLETE",
];

document.getElementById("start").addEventListener("click", function () {
  // swap the welcome screen for the boot screen
  welcome.hidden = true;
  boot.hidden = false;

  // print one line at a time
  let i = 0;
  const timer = setInterval(function () {
    log.textContent += lines[i] + "\n";
    i++;

    if (i === lines.length) {
      clearInterval(timer);
      big.hidden = false;               // show the big "BOOTING..."
      setTimeout(showPortfolio, 1800);  // then open the portfolio
    }
  }, 350);
});

function showPortfolio() {
  tv.hidden = true;
  portfolio.hidden = false;
}
