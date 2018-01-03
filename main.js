// Create a list of n+1 numbers
const initList = (n) => {
  let result = [];
  for (let i = 0; i < n; i++) {
    result.push(i);
  }
  let randomNumber = Math.round(Math.random()*n);
  result.push(randomNumber);
  result.sort((a, b) => {return a - b});
  return result;
}
