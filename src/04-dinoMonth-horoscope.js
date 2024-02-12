
const dinoMonth = require("../data/dinoMonth");
/* This function has parameters 'dinoMonth' (an array of objects) and 'yourBirthMonth' (birthdate month as a string) and when the 
arguments are passed through these parameters, the code first checks to see if that month exists and if not, offers possible format 
errors in a template literal.  However, if there is a match, the code extracts from the data set, the contextual 
properties and corresponding horoscope dinosaur and its correspodning horoscope description.

[NOTE: NONE of the actual code came from ChatGPT BUT a part of the exercise was creative research where I asked chatGPT regarding 
	   animals linked to horoscopes.  Then I asked chatGPT to give me a list of dinosaurs whose properties correlated with the 
	   animals of the horoscope and their corresponding descriptions that matched the animals of the traditional horoscope!] */   


function whichDinoAreYou(dinoMonth, yourBirthMonth){
   let targetDino = dinoMonth.find(dino => dino.birthMonth == yourBirthMonth);
	if(!targetDino){
	   return `${yourBirthMonth} is either not a correct month or not in the correct format. n/NOTE: Please make sure that the first letter of the month is in caps, that the spelling is correct and please enter the full month and not the abbreviation or our Velociraptors will seek you out!  	Thank you and enjoy your visit! `;
	} else {
	   const {birthMonth, dino, description} = targetDino;
	   return `Today you are a ${dino}.  ${description}  Understand your environment and tread carefully!`
    }
}
console.log(whichDinoAreYou(dinoMonth, 'March'));

