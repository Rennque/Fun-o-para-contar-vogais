function countVowels(word) {
    if (typeof word !== "string") {
      return "O valor informado esta incorreto, por favor informe uma string.";
    }
    
    let countVowels = 0;
    const listvowels  = ["a", "e", "i", "o", "u"];
    
    word.toLowerCase().split("").forEach((letter) => {
      if (listvowels.includes(letter)) {
        countVowels++;
      }
    });
    
    if (countVowels === 0) {
      return "Esta palavra não possui Vogais.";
    } else {
      return `A palavra "${word}" possui ${countVowels} vogais.`;
    }
  }
  
  console.log(countVowels("Florianopolis")); 
  console.log(countVowels("Tlntl")); 
  console.log(countVowels(9876)); 