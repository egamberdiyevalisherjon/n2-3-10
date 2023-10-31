let dictionary = {
  apple: {
    uz: "Olma",
    ru: "Yabloka",
  },
  banana: {
    uz: "Banan",
    ru: "Banan ru",
  },
};

function t(soz, til) {
  let word = dictionary[soz.toLowerCase().trim()];
  if (!word) {
    return soz;
  }

  let translatedWord = word[til.toLowerCase().trim()];

  if (!translatedWord) {
    return soz;
  }

  return translatedWord;
}

let inputWord = prompt("Soz kiriting: ");
let inputLanguage = prompt("Til kiriting: ");

let result = t(inputWord, inputLanguage);

alert(result);
