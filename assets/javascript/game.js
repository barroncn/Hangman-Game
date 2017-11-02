// wordChoices1 is the full word bank that the computer can pick a word from
var wordChoices1 = ["GORILLA", "KANGAROO", "KOALA", "OCELOT", "BEAR", "OTTER", "PYTHON", "ELEPHANT", "LION", "TIGER", "JAGUAR", "GIRAFFE", "CHEETAH", "HYENA", "BUTTERFLY",
                   "CHIMPANZEE", "MONKEY", "SNAKE", "LIZARD", "IGUANA", "RHINO", "MOOSE", "DEER", "WOLF", "APE", "RABBIT", "FLAMINGO", "EAGLE", "LEMUR", "MEERKAT","HEDGEHOG", "GOPHUR", 
                   "ORANGUTAN", "PENGUIN", "ANTEATER", "ARMADILLO", "PARAKEET", "WILDEBEAST", "SLOTH", "FALCON", "GAZELLE", "HIPPO", "COUGAR", "WARTHOG", "TURTLE", "IBIS"];

// alphabet1 is the full letter bank the user can choose from
var alphabet1 = [ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", 
    "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y",
    "Z" ];

//Initially the number of Wins = 0, Losses = 0, and Guesses Left = 15. Also, the alphabet array is set to the full alphabet and the wordChoices array is set to all the choices.
var Jwins = 0;
var Jlosses = 0;
var JguessesLeft = 15;
var alphabet = alphabet1.slice(0);
var wordChoices = wordChoices1.slice(0);

// theWord variable is the word the computer chooses at random from our word bank.   
var theWord = wordChoices[Math.floor(Math.random() * wordChoices.length)];

// The variable blanksWord will be the "mystery Word" appearing on the screen. The add function will add an new underscore to the existing blanksWord
var blanksWord = "";
function add() {
    return blanksWord += "_";
}

//This loop calls the add function to add a blank to blanksWord for every letter in theWord chosen by the computer. It then puts blanksWord onto the webpage.
for (var i = 0; i < theWord.length; i++) {
    add();
    document.getElementById("mysteryWord").innerHTML = blanksWord;
}

// Now the game can begin. When the user presses a key on the keyboard, it gets changed to an uppercase letter. If the letter is in the
// alphabet array, a loop compares the letter chosen by the user to each letter in theWord chosen by the computer.
document.onkeyup = function(event) {
   var yourGuess = event.key.toUpperCase();
   if (alphabet.indexOf(yourGuess, 0) !== (-1)){
        for (var j = 0; j < theWord.length; j++) {
            // If the letter matches, blanksWord will be set to equal the string of characters before the position of the underscore 
            // that needs to be replaced + the letter guessed + the string of characters after the replacement. Then it puts the new
            // blanksWord in the webpage
            if (yourGuess === theWord[j]) {
                blanksWord = blanksWord.substr(0, j) + yourGuess + blanksWord.substr(j + 1);
                document.getElementById("mysteryWord").innerHTML = blanksWord;
            }
            
            // Once the computer checks the whole loop for a match, the letter is added to the "swamp"
            else if (j == (theWord.length-1)) {
                document.getElementById("swamp").innerHTML += yourGuess;
            }
        }
        
        // Once a letter is picked, it is removed from the acceptable letter choices so the user cannot pick it agian, the number of
        // guesses left is reduced by one, and the stats are updated on the screen.
         var removeMe = alphabet.indexOf(yourGuess);
        alphabet.splice(removeMe, 1);
        JguessesLeft --;
        var html =
            "<p>Wins:  " + Jwins + "</p>" +
            "<p>Losses:  " + Jlosses + "</p>" +
            "<p>Guesses Left:  " + Math.max(0,JguessesLeft) + "</p>";
        document.getElementById("score").innerHTML = html;
        
        // If the blanks word has been fully guessed by the user, wins increases by one, guesses left is reset to 15 and the score is updated.
        //The wordChoice that was just guessed is removed from the wordChoices array so the user will not get a repeat until they have tried all
        // words. A new word is picked from the updated wordChoices array, the alphabet array is reset so the user can pick any letter, and the
        //guessed letters in the "swamp" are removed.
        if (blanksWord.indexOf('_') < 0) {
            Jwins ++;
            JguessesLeft = 15;
            document.getElementById("score").innerHTML = html;
            var alsoRemoveMe = wordChoices.indexOf(theWord);
            wordChoices.splice(alsoRemoveMe, 1);
            blanksWord = "";
            theWord = wordChoices[Math.floor(Math.random() * wordChoices.length)];
            for (var i = 0; i < theWord.length; i++) {
                add();
                document.getElementById("mysteryWord").innerHTML = blanksWord;
            }   
            alphabet = alphabet1.slice(0);
            document.getElementById("swamp").innerHTML = "";
        }
    
        // If the Guesses left gets to zero, the correct word is shown on the screen and the alphabet array is reset so the user can pick any
        // letter key to continue
        else if (JguessesLeft === 0){
                document.getElementById("mysteryWord").innerHTML = theWord;
                 alphabet = alphabet1.slice(0);
        }
    
        // Once the user presses another letter, the game will reset the game as it did when the correct word was fully guessed and the updated
        // score will be displayed with an increase in the number of losses.
        else if (JguessesLeft <0){  
            Jlosses ++;
            JguessesLeft = 15;
            document.getElementById("score").innerHTML = html;
            alsoRemoveMe = wordChoices.indexOf(theWord);
            wordChoices.splice(alsoRemoveMe, 1);
            blanksWord = "";
            theWord = wordChoices[Math.floor(Math.random() * wordChoices.length)];    
            for (var i = 0; i < theWord.length; i++) {
                add();
                document.getElementById("mysteryWord").innerHTML = blanksWord;
            }
            alphabet = alphabet1.slice(0);
            document.getElementById("swamp").innerHTML = "";
        }
    
        // If the user goes through all of the word choices, the array will reset
        if(wordChoices.length === 0){
            wordChoices = wordChoices.slice(0);
        }
    }
};  