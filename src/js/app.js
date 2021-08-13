// export default class Validator {
//   validateUsername(username) {
//     const templateOne = /^[^_\W\d-][\w-]*[^_\W\d-]+$/;
//     const templateTwo = /\d{4}/;
//     const isValidUsername = templateOne.test(username) && !templateTwo.test(username);
//     if (isValidUsername) {
//       this.username = username;
//       return true;
//     }
//     throw new Error(`Имя ${username} некорректно.`);
//   }
// }

export default class Validator {
  static validateUsername(username) {
    return /^[a-z][-\w]+[a-z]$/i.test(username) && !/\d{4,}/.test(username);
  }
}
