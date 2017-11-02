// wordChoices is the word bank that the computer can pick a word from
var wordChoices = ["GORILLA", "KANGAROO", "KOALA", "OCELOT", "BEAR", "OTTER", "PYTHON", "ELEPHANT", "LION", "TIGER", "JAGUAR", "GIRAFFE", "CHEETAH", "HYENA", "BUTTERFLY",
    "CHIMPANZEE", "MONKEY", "SNAKE", "LIZARD", "IGUANA", "RHINO", "MOOSE", "DEER", "WOLF", "APE", "RABBIT", "FLAMINGO", "EAGLE", "LEEMUR", "MEERKAT",
    "HEDGEHOG", "GOPHUR", "ORANGUTAN"];

var alphabet = [ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", 
    "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y",
    "Z" ];
    
var Jwins = 0;
var Jlosses = 0;
var JguessesLeft = 15;

// theWord variable is the word the computer chooses at random from our word bank.   
var theWord = wordChoices[Math.floor(Math.random() * wordChoices.length)];

// This function will add one "_" to the the variable blanksWord for each letter 
// in theWord (our mystery word) and replace our text in the id #mysteryWord with
// the blanksWord
var blanksWord = "";

function newAdd(){
    return blanksWord += "_";
}

function add() {
    return blanksWord += "_";
}
for (var i = 0; i < theWord.length; i++) {
    add();
    document.getElementById("mysteryWord").innerHTML = blanksWord;
}

// When the user hits a button (actually the key coming back up), we want to go through
// each position in theWord to see if the letter the user picked matches. If the letter
// matches, we want to replace the same position in blanksWord with the letter.
// If the letter does not match any position in theWord, we want to add the letter to 
// the incorrect "Swamp" letters.

document.onkeyup = function(event) {
   var yourGuess = event.key.toUpperCase();
   if (alphabet.indexOf(yourGuess, 0) !== (-1)){
        for (var j = 0; j < theWord.length; j++) {
        
            if (yourGuess === theWord[j]) {
                blanksWord = blanksWord.substr(0, j) + yourGuess + blanksWord.substr(j + 1);
                document.getElementById("mysteryWord").innerHTML = blanksWord;
            }
            else if (j == (theWord.length-1)) {
                document.getElementById("swamp").innerHTML += yourGuess;
            }
        }
    // This keeps the user from being able to guess the same letter twice.
        var removeMe = alphabet.indexOf(yourGuess);
        alphabet.splice(removeMe, 1);
        JguessesLeft --;
        var html =
          "<p>Wins: " + Jwins + "</p>" +
          "<p>Losses: " + Jlosses + "</p>" +
          "<p>Guesses Left: " + Math.max(0,JguessesLeft) + "</p>";
        document.getElementById("score").innerHTML = html;
        
        // If the blanks word has been fully guessed
        if (blanksWord.indexOf('_') < 0) {
            blanksWord = "";
            // Add a win and reset Guesses
            Jwins ++;
            JguessesLeft = 15;
            document.getElementById("score").innerHTML = html;
            // Remove current word choice from array
            var alsoRemoveMe = wordChoices.indexOf(theWord);
            wordChoices.splice(alsoRemoveMe, 1);
            //Pick new word
            theWord = wordChoices[Math.floor(Math.random() * wordChoices.length)];
            for (var i = 0; i < theWord.length; i++) {
                 newAdd();
                 document.getElementById("mysteryWord").innerHTML = blanksWord;
            
            }     //  Reset the alphabet array
             alphabet = [ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", 
                 "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y",
                "Z" ];
            document.getElementById("swamp").innerHTML = "";
        }
        else if (JguessesLeft === 0){
            // Add a loss and reset Guesses
            document.getElementById("mysteryWord").innerHTML = theWord;
             alphabet = [ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", 
                 "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y",
                "Z" ];
        }
        else if (JguessesLeft <0){  
            Jlosses ++;
            JguessesLeft = 15;
            document.getElementById("score").innerHTML = html;
                // Remove current word choice from array
            alsoRemoveMe = wordChoices.indexOf(theWord);
            wordChoices.splice(alsoRemoveMe, 1);
                //Pick new word
            blanksWord = "";
            theWord = wordChoices[Math.floor(Math.random() * wordChoices.length)];
               
                
            for (var i = 0; i < theWord.length; i++) {
                newAdd();
                document.getElementById("mysteryWord").innerHTML = blanksWord;
            //  Reset the alphabet array
             alphabet = [ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", 
                 "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y",
                "Z" ];
            document.getElementById("swamp").innerHTML = "";
            }
        }
    }
    
};  
   
//   // This keeps the user from getting the same word choice twice.
//         var alsoRemoveMe = wordChoices.indexOf(theWord);
//         wordChoices.splice(alsoRemoveMe, 1);








// alphabet.splice(alphabet.indexOf(e.key), 1)


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
//   var yourGuess = event.key;
//     for(var j=0; j < theWord.length; j++){
//       if(yourGuess === theWord[j]){
//             blanksWord[(j)] = yourGuess;
//             document.getElementById("mysteryWord").innerHTML = blanksWord;

//         }
//         else{document.getElementById("swamp").innerHTML += yourGuess;
//     }
//     }
