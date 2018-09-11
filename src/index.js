module.exports = function makeExchange(currency) {
  var money = {};
  var buffer;
  const obj = {"H" : 50, "Q" : 25, "D" : 10, "N" : 5, "P" : 1};

  if (currency <= 0) 
    return money;
  if (currency > 10000) 
    return {error: "You are rich, my friend! We don't have so much coins for exchange"};
      
  for (let o in obj){
    buffer = Math.floor(currency / obj[o]);
      
    if (buffer) {
      money[o] = buffer;
      currency -= money[o] * obj[o];
    }
  }  
  
  return money;
};
