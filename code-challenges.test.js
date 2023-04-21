// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

// a) Create a test with an expect statement using the variable provided.

describe('createSentence', () => {
  const people = [
    { name: 'ford prefect', occupation: 'a hitchhiker' },
    { name: 'zaphod beeblebrox', occupation: 'president of the galaxy' },
    { name: 'arthur dent', occupation: 'a radio employee' },
  ]

  it('should return an array with a sentence about each person with their name capitalized.', () => {
    expect(createSentence(people)).toEqual([
      'Ford Prefect is a hitchhiker.',
      'Zaphod Beeblebrox is president of the galaxy.',
      'Arthur Dent is a radio employee.',
    ])
  })
})

// b) Create the function that makes the test pass.

/**
 * Creates an array of sentences from an array of objects with `name` and `occupation` properties.
 *
 * @param {Array<Object>} arrOfObjWithNameAndOccupation - The input array of objects with `name` and `occupation` properties.
 * @returns {Array<string>} An array of sentences in the format "`Name` is `occupation`."
 */
const createSentence = (arrOfObjWithNameAndOccupation) => {
  // For each object in the array, create a sentence in the format "Name is Occupation."
  return arrOfObjWithNameAndOccupation.map(({ name, occupation }) => {
    // Capitalize the first letter of each word in the name
    const capitalized_name = name
      .split(' ')
      .map((name) => name.charAt(0).toUpperCase().concat(name.substring(1)))
      .join(' ')
    // Combine the capitalized name and occupation into a sentence
    return `${capitalized_name} is ${occupation}.`
  })
}

// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.

describe('divideByThreeRemainders', () => {
  const hodgepodge1 = [23, 'Heyyyy!', 45, -10, 0, 'Yo', false]
  const hodgepodge2 = [5, 'Hola', 43, -34, 'greetings', true]

  it('should return an array of only the remainders of the numbers when divided by 3', () => {
    expect(divideByThreeRemainders(hodgepodge1)).toEqual([2, 0, -1, 0])
    expect(divideByThreeRemainders(hodgepodge2)).toEqual([2, 1, -1])
  })
})

// b) Create the function that makes the test pass.

/**
 * Filters an array to include only numeric elements, then maps each remaining element to its remainder when divided by 3.
 *
 * @param {Array<any>} mixedArr - The input array that may contain both numeric and non-numeric elements.
 * @returns {Array<number>} - An array of the remainders when each numeric element of `mixedArr` is divided by 3.
 */
const divideByThreeRemainders = (mixedArr) => {
  return (
    mixedArr
      // Filter out non-numeric elements
      .filter((element) => typeof element === 'number')
      // map each remaining element
      .map((element) => {
        // remainder when divided by 3
        return element % 3
      })
  )
}

// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a) Create a test with an expect statement using the variables provided.

describe('sumOfCubed', () => {
  const cubeAndSum1 = [2, 3, 4]
  const cubeAndSum2 = [0, 5, 10]

  it('should return the sum of all the numbers cubed', () => {
    expect(sumOfCubed(cubeAndSum1)).toEqual(99)
    expect(sumOfCubed(cubeAndSum2)).toEqual(1125)
  })
})

// b) Create the function that makes the test pass.

/**
 * Maps an array of numbers to their cubes, then returns the sum of those cubes.
 *
 * @param {Array<number>} arrOfNums - The input array of numbers.
 * @returns {number} - The sum of the cubes of the numbers in `arrOfNums`.
 */
const sumOfCubed = (arrOfNums) => {
  // Map each element of the input array to its cube, then reduce the resulting array to a single sum
  return arrOfNums.map((num) => num ** 3).reduce((acc, curr) => acc + curr, 0)
}
