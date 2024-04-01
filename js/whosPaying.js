var buyers = ["Jack", "Angela", "Rick", "Roy", "Bethany"];
function whosPaying(names) {
  var i = Math.round(Math.random() * names.length) - 1;
  var s = names[i] + " is going to buy lunch today!"
  return s;
}
console.log(whosPaying(buyers));
