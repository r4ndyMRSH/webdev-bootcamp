function beer() {
  var i = 99;
  while (i > 0) {
    console.log(i + " bottles of beer on the wall, " + i + " bottles of beer.");
    i--;
    if (i === 0){
        console.log("Take one down and pass it around, no more bottles of beer on the wall.");
        console.log("No more bottles of beer on the wall, no more bottles of beer.");
        console.log("Go to the store and buy some more, 99 bottles of beer on the wall.");
    } else{
        console.log("Take one down and pass it around, " + i + " bottles of beer on the wall.");
    }
  }
}
beer();
