function findFirstNonRepeatedCharacter(inputString) {
    // Create an object to store the frequency of each character
    const charFrequency = {};

    // Count the frequency of each character in the input string
    for (const char of inputString) {
        charFrequency[char] = (charFrequency[char] || 0) + 1;
    }

    // Find the first character with a frequency of 1 (non-repeated character)
    for (const char of inputString) {
        if (charFrequency[char] === 1) {
            return char;
        }
    }

    // If no non-repeated character is found, return null
    return null;
}

// Get input from the user using prompt()
const userInput = prompt("Enter a string:");
const result = findFirstNonRepeatedCharacter(userInput);

if (result) {
    console.log(`The first non-repeated character is: ${result}`);
} else {
    console.log("No non-repeated character found in the input string.");
}
