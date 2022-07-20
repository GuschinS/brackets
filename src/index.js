module.exports = function check(str, bracketsConfig) {
  const brackets = bracketsConfig.flat()
  let result = []
  let currentSymbol = ''
  let openBrackets = []
  let bracketsPair = {}
  let topElement = ''
  let br = '|'

  for (let j = 0; j < brackets.length; j += 2) {
    openBrackets.push(brackets[j])
  }
  bracketsPair = {
    [brackets[1]]: brackets[0],
    [brackets[3]]: brackets[2],
    [brackets[5]]: brackets[4],
    [brackets[7]]: brackets[6],
    [brackets[9]]: brackets[8]
  }
  for (let i = 0; i < str.length; i++) {
    currentSymbol = str[i]
    if (openBrackets.includes(currentSymbol)) {
      result.push(currentSymbol)
    } else {
      if (result.length === 0) {
        return false
      }
      topElement = result[result.length - 1]
      if (bracketsPair[currentSymbol] === topElement) {
        result.pop()
      } else {
        return false
      }

    }
    if (result.includes(br)) {
      result = result.filter(function (value) {
        return value !== br;
      })
    }
  }

  return result.length === 0
}