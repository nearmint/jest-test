const sum = require("./sum");

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

test("two plus two is four", () => {
  expect(2 + 2).toBe(4);
});

test("adding positive numbers is not zero", () => {
  for (let a = 1; a < 10; a++) {
    for (let b = 1; b < 10; b++) {
      expect(a + b).not.toBe(0);
    }
  }
});

test("two plus two", () => {
  const value = 2 + 2;
});

test("null", () => {
  const n = null;
  expect(n).toBeNull();
  expect(n).toBeDefined();
  expect(n).not.toBeUndefined();
  expect(n).not.toBeTruthy();
  expect(n).toBeFalsy();
});

test("zero", () => {
  const z = 0;
  expect(z).not.toBeNull();
  expect(z).toBeDefined();
  expect(z).not.toBeUndefined();
  expect(z).not.toBeTruthy();
  expect(z).toBeFalsy();
});

test("two plus two", () => {
  const value = 2 + 2;
  expect(value).toBeGreaterThan(3);
  expect(value).toBeGreaterThanOrEqual(3.5);
  expect(value).toBeLessThan(5);
  expect(value).toBeLessThanOrEqual(4.5);

  expect(value).toBe(4);
  expect(value).toEqual(4);
});

test("adding floating point numbers", () => {
  const value = 0.1 + 0.2;
  expect(value).toBeCloseTo(0.3);
});

test("there is no I in team", () => {
  expect("team").not.toMatch(/I/);
});

test('but there is a "stop" in Christoph', () => {
  expect("Christoph").toMatch(/stop/);
});

const shoppingList = [
  "diapers",
  "kleenex",
  "trash bags",
  "paper towels",
  "beer",
];

test("the shopping list has beer on it", () => {
  expect(shoppingList).toContain("beer");
  expect(new Set(shoppingList)).toContain("beer");
});

function compileAndroidCode() {
  throw new Error("you are using the wrong JDK");
}

test("compiling android goes as expected", () => {
  expect(compileAndroidCode).toThrow();
  expect(compileAndroidCode).toThrow(Error);

  expect(compileAndroidCode).toThrow("you are using the wrong JDK");
  expect(compileAndroidCode).toThrow(/JDK/);
});

test("capitalize(string) takes a string and returns that string with the first character capitalized", () => {
  function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  expect(capitalize("hello")).toEqual("Hello");
});

test("reverseString(string) takes a string and returns it reversed", () => {
  function reverseString(str) {
    let result = "";
    for (let i = 0; i < str.length; i++) {
      result += str[str.length - 1 - i];
    }
    return result;
  }

  expect(reverseString("hello")).toEqual("olleh");
});

test("A calculator obj that contains the basic operations add, subtract, divide, and multiply", () => {
  let calculator = {
    add: function (a, b) {
      return a + b;
    },
    subtract: function (a, b) {
      return a - b;
    },
    divide: function (a, b) {
      return a / b;
    },
    multiply: function (a, b) {
      return a * b;
    },
  };

  expect(calculator.add(5, 3)).toEqual(8);
  expect(calculator.subtract(5, 3)).toEqual(2);
  expect(calculator.divide(6, 3)).toEqual(2);
  expect(calculator.multiply(6, 3)).toEqual(18);
});

test("Caesar Cipher basic function, wrapping from z to a, same case, punctuation", () => {
  function caesarCipher(str, num) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let result = "";

    for (let i = 0; i < str.length; i++) {
      let charCapitalization = str[i] == str[i].toUpperCase();
      let nonLetter = true;

      for (let e = 0; e < alphabet.length; e++) {
        if (str[i].toLowerCase() === alphabet[e]) {
          nonLetter = false;

          let generatedNum = e + 1 + num;
          if (generatedNum <= 0) {
            generatedNum = 26 + (generatedNum % 26);
          }

          if (charCapitalization) {
            let add = alphabet[(generatedNum - 1) % 26].toUpperCase();
            result += add;
          } else {
            result += alphabet[(generatedNum - 1) % 26];
          }
        }
      }

      if (nonLetter) {
        result += str[i];
      }
    }

    return result;
  }

  expect(caesarCipher("hello", 1)).toEqual("ifmmp");
  expect(caesarCipher("hello", 26)).toEqual("hello");
  expect(caesarCipher("hello", 27)).toEqual("ifmmp");
  expect(caesarCipher("MoRning", 1)).toEqual("NpSojoh");
  expect(caesarCipher("hello sir", 1)).toEqual("ifmmp tjs");
  expect(caesarCipher("bcdefghijklmnopqrstuvwxyza", -1)).toEqual(
    "abcdefghijklmnopqrstuvwxyz"
  );
  expect(caesarCipher("defend the east wall of the castle", 1)).toEqual(
    "efgfoe uif fbtu xbmm pg uif dbtumf"
  );

  expect(caesarCipher("f", -7)).toEqual("y");

  expect(
    caesarCipher(
      "If he had anything confidential to say, he wrote it in cipher, that is, by so changing the order of the letters of the alphabet, that not a word could be made out.",
      -7
    )
  ).toEqual(
    "By ax atw tgrmabgz vhgybwxgmbte mh ltr, ax pkhmx bm bg vbiaxk, matm bl, ur lh vatgzbgz max hkwxk hy max exmmxkl hy max teiatuxm, matm ghm t phkw vhnew ux ftwx hnm."
  );
});

test("A function that takes an array of numbers and returns an object with the following properties: average, min, max, and length.", () => {});
