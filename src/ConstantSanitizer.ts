/**
 * Converts the specified string to PascalCase.
 * @param str the string to convert
 * @returns the PascalCase string
 */
var pascalCase: (str: string) => string = require("pascalcase");

/**
 * Sanitizes the specified string for usage with CSharp constants.
 * @param str the string to sanitize
 * @returns the sanitized string
 */
function sanitizeConstantName(str: string) {
  // transform to pascal case
  str = pascalCase(str);

  // check if the first character is a number, then write it out
  if (str[0] >= "0" && str[0] <= "9") {
    str = "_" + str;
  }

  return str;
}

export default sanitizeConstantName;
