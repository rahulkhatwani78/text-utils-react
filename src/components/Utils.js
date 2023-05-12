
// Function to toggle the case in a sentence
export const toggleCase = (str) => {
    let toggleSentence = "";
    for(let i=0; i<str.length; i++) {
        if(str[i] >= 'a' && str[i] <= 'z') {
            toggleSentence += str[i].toUpperCase();
        } else if(str[i] >= 'A' && str[i] <= 'Z') {
            toggleSentence += str[i].toLowerCase();
        } else {
            toggleSentence += str[i];
        }
    }
    return toggleSentence;
}