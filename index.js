const tutorials = [
  "what does the this keyword mean?",
  "What is the Constructor OO pattern?",
  "implementing Blockchain Web API",
  "The Test Driven Development Workflow",
  "What is NaN and how Can we Check for it",
  "What is the difference between stopPropagation and preventDefault?",
  "Immutable State and Pure Functions",
  "what is the difference between == and ===?",
  "what is the difference between event capturing and bubbling?",
  "what is JSONP?",
];

function titleCased() {
  return tutorials.map(tutorial => {
    // Split the tutorial title into words
    let words = tutorial.split(' ');
    console.log("Words:", words);
    
    // Capitalize the first letter of each word
    let titleCasedWords = words.map(word => {
      let titleCasedWord = word.charAt(0).toUpperCase() + word.substring(1).toLowerCase();
      console.log("Title Cased Word:", titleCasedWord);
      return titleCasedWord;
    });
    
    // Join the words back into a single string
    let titleCasedTitle = titleCasedWords.join(' ');
    console.log("Title Cased Title:", titleCasedTitle);
    
    return titleCasedTitle;
  });
}

console.log(titleCased());
