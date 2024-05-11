document.addEventListener("DOMContentLoaded", async function () {
  const apiURL = "https://api.quotable.io/random";
  let quote = document.querySelector("#quote");
  let author = document.querySelector("#author");
  const btn1 = document.querySelector(".btn1");
  const btn2 = document.querySelector(".btn2");

  async function fetchQuote() {
    try {
      // Fetching data from API and reading it
      const response = await fetch(apiURL);
      const data = await response.json();
      // Setting content of author and quote
      quote.textContent = data.content;
      author.textContent = "- " + data.author;
    } catch (error) {
      console.log(error);
    }
  }

  //await fetchQuote();

  //add eventlistner to create quote button
  if (btn1) {
    //if button exist then add event listner
    btn1.addEventListener("click", async function () {
      await fetchQuote();
    });
  } else {
    console.error("quote button doesn't exist");
  }
  //add eventlistner to tweet button
  if (btn2) {
    btn2.addEventListener("click", function () {
      const quoteText = quote.textContent;
      const authorText = author.textContent;
      const tweetText = encodeURIComponent(`"${quoteText}" ${authorText}`);
      window.open(
        `https://twitter.com/intent/tweet?text=${tweetText}`,
        "_blank"
      );
    });
  } else {
    console.error("Could not find tweet button");
  }
});
