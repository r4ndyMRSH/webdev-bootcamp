function fibonacciGenerator(n) {
  var solution = [0, 1];
  for (var i = 2; i < n; i++) {
    solution.push(solution[i - 2] + solution[i - 1]);
  }
  if (n === 1) {
    var solutionA = [0];
    return solutionA;
  } else {
    return solution;
  }
}

