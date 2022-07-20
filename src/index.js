module.exports = function check(str, bracketsConfig) {
  let currentSymbol =''
  let result = []

  for (i = 0; i < str.length; i++) {
    currentSymbol = str[i]
    for (j = 0; j < bracketsConfig.length; j++) {
      if (currentSymbol === bracketsConfig[j][1] && result.length === 0 && currentSymbol !== '|') {
        console.log(false)
        return false
      }
      else if (result[result.length - 1] === bracketsConfig[j][0] && currentSymbol === bracketsConfig[j][1]) {
        result.pop(currentSymbol)
      }
      else if (result[result.length - 1] === bracketsConfig[j][1] && currentSymbol === bracketsConfig[j][0]) {
        result.pop(currentSymbol)
      }
      else  if (currentSymbol === bracketsConfig[j][0]){
        result.push(currentSymbol)

      }
    }
  }
  
  return result.length == 0
}