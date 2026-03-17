function mutation(words) {
  const first = words[0].toLowerCase();
  const second = words[1].toLowerCase();

  for (let char of second) {
    if (!first.includes(char)) {
      return false
    }
  }
  return true
}

console.log(mutation(["Hello", "hello"]));
