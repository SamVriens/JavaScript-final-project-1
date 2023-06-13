'use strict';

const mockData = require('./mockData.js').data;

// Your code here
// console.log(mockData)
let profileSelf = {};

function askFirstName() {
  const firstName = prompt("What is your first name?");
  if (firstName.trim() === "") {
    alert("First name cannot be empty. Please enter a valid value.");
    return askFirstName();
  }
  return firstName;
}

function askLastName() {
  const lastName = prompt("What is your last name?");
  if (lastName.trim() === "") {
    alert("Last name cannot be empty. Please enter a valid value.");
    return askLastName();
  }
  return lastName;
}

function askAge() {
  const age = Number(prompt("What is your age?"));
  if (isNaN(age) || age < 18) {
    alert("Age must be a number and >= 18. Please enter a valid value.");
    return askAge();
  }
  return age;
}

function askGender() {
  const gender = prompt("What is your gender? (M,F,X)");
  if (!["M", "F", "X"].includes(gender.toUpperCase())) {
    alert("Gender can only be 'M', 'F', or 'X'. Please enter a valid value.");
    return askGender();
  }
  return gender.toUpperCase();
}

function askGenderInterest() {
  const genderInterest = prompt("What is your gender interest? (M,F,X)");
  if (!["M", "F", "X"].includes(genderInterest.toUpperCase())) {
    alert("Gender interest can only be 'M', 'F', or 'X'. Please enter a valid value.");
    return askGenderInterest();
  }
  return genderInterest.toUpperCase();
}

function askLocation() {
  const location = prompt("What is your location? (city,rural)");
  if (location.toLowerCase() !== "rural" && location.toLowerCase() !== "city") {
    alert("Location can only be 'rural' or 'city'. Please enter a valid value.");
    return askLocation();
  }
  return location.toLowerCase();
}

function askMinAgeInterest() {
  const minAgeInterest = Number(prompt("What is your minimum age interest?"));
  if (isNaN(minAgeInterest) || minAgeInterest < 18) {
    alert("Minimum age interest must be a number and >= 18. Please enter a valid value.");
    return askMinAgeInterest();
  }
  return minAgeInterest;
}

function askMaxAgeInterest(minAgeInterest) {
  const maxAgeInterest = Number(prompt("What is your maximum age interest?"));
  if (isNaN(maxAgeInterest) || maxAgeInterest < 18 || maxAgeInterest <= minAgeInterest) {
    alert("Maximum age interest must be a number, >= 18, and higher than the minimum age interest. Please enter a valid value.");
    return askMaxAgeInterest(minAgeInterest);
  }
  return maxAgeInterest;
}

profileSelf.first_name = askFirstName();
profileSelf.last_name = askLastName();
profileSelf.age = askAge();
profileSelf.gender = askGender();
profileSelf.gender_interest = askGenderInterest();
profileSelf.location = askLocation();
profileSelf.min_age_interest = askMinAgeInterest();
profileSelf.max_age_interest = askMaxAgeInterest(profileSelf.min_age_interest);

console.log(profileSelf);

let matches = [];

for (const person of mockData) {
  if (
    person.age >= profileSelf.min_age_interest && person.age <= profileSelf.max_age_interest &&
    profileSelf.age >= person.min_age_interest && profileSelf.age <= person.max_age_interest &&
    (person.gender_interest === profileSelf.gender || person.gender === profileSelf.gender_interest) &&
    (person.location === profileSelf.location)
  ) {
    matches.push(person);
  }
}

// Printing matches
// Printing matches
console.log("Possible matches:");
for (const match of matches) {
  console.log(`Name: ${"❤️ "} ${match.first_name} ${match.last_name}, Age: ${match.age}, Location: ${match.location} ${"❤️"}`);
}
// console.log("Possible matches:");
// for (const match of matches) {
//   console.log(`Name: ${match.first_name} ${match.last_name}, Age: ${match.age}, Location: ${match.location}`);
// }

// Number of matches
console.log(`Number of matches: ${matches.length}`);