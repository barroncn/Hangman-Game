// wordChoices is the word bank that the computer can pick a word from
var wordChoices = ["GORILLA", "KANGAROO", "KOALA", "OCELOT", "BEAR", "OTTER", "PYTHON", "ELEPHANT", "LION", "TIGER", "JAGUAR", "GIRAFFE", "CHEETAH", "HYENA", "BUTTERFLY",
                    "CHIMPANZEE", "MONKEY", "SNAKE", "LIZARD", "IGUANA", "RHINO", "MOOSE", "DEER", "WOLF", "APE", "RABBIT", "FLAMINGO", "EAGLE", "LEEMUR", "MEERKAT",
                    "HEDGEHOG", "GOPHUR", "ORANGUTAN"];
 
// theWord variable is the word the computer chooses at random from our word bank.   
var theWord = wordChoices[Math.floor(Math.random() * wordChoices.length)];

// This function will add one "_" to the mysteryWord p tag in our HTML for each letter in theWord.
// We've also created an empty array blanksWord so we'll have a way of adding the correct letter
// to the correct spot in our Mystery Word.
// the computer chose. We account for the initial "_" by starting at i=1
var blanksWord = "";
for (var i=0; i < theWord.length; i++){
    add();
    function add(x){
        return blanksWord += "_ ";
    }
        document.getElementById("mysteryWord").innerHTML = blanksWord;
    }

document.onkeyup = function(event){
    
    var yourGuess = event.key;
    
    for(var j=0; j < theWord.length; j++){
       if(yourGuess === theWord[j]){
            blanksWord[(2 * j)] = yourGuess;
            document.getElementById("mysteryWord").innerHTML = blanksWord;
            document.getElementById("swamp").innerHTML += yourGuess;
        }
    }
}

// blanksWord = []
// for (i=0; i < theWord.length; i++){
//     add();
//     var aBlank;
//     function add(x){
//         aBlank = " _  ";
//     }
//     blanksWord.push(aBlank);
//     document.getElementById("mysteryWord").innerHTML += blanksWord[i];
// }