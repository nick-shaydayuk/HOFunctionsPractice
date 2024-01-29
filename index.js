export const convertToLowerOrUpperCase = (arr, caseParam) => {
  if (!arr || !caseParam) return;
  arr.forEach((str, index) => {
    if (typeof str === 'string') {
      if (caseParam === 'upper') {
        arr[index] = str.toUpperCase();
      }
      if (caseParam === 'lower') {
        arr[index] = str.toLowerCase();
      }
    }
  });
  return arr;
};

export const convertToFilteredLowerOrUpperCase = (arr, caseParam) => {
  if (!arr || !caseParam) return;
  return arr
    .filter((str) => typeof str === 'string')
    .map((str) => {
      if (caseParam.toLowerCase() === 'upper') {
        return str.toUpperCase();
      }
      if (caseParam.toLowerCase() === 'lower') {
        return str.toLowerCase();
      }
    });
};

export const filterUsersByAge = (users) => {
  if (!users) return;
  return users.filter((user) => user.age > 18);
};

export const filterUsersByParam = (users, param, paramValue, bracket) => {
  if (!users || !param) return;
  switch (typeof paramValue) {
    case 'boolean':
      console.log(1);
      return users.filter((user) => user[param] === paramValue);
    case 'number':
      return bracket === '>'
        ? users.filter((user) => user[param] > paramValue)
        : users.filter((user) => user[param] < paramValue);
    default:
      break;
  }
};

export const divisibleAverage = (numbers, divisor) => {
  if (!numbers || !divisor) return;
  return numbers
    .filter((num) => num % divisor === 0)
    .reduce((acc, curr, index, array) => {
      acc += curr;
      if (index === array.length - 1) {
        return acc / array.length;
      } else {
        return acc;
      }
    }, 0);
};
