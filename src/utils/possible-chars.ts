export const possibleChars: string[] = [];

for (let i = 0; i <= 9; i++) {
  possibleChars.push(i.toString());
}

for (let i = 'a'.charCodeAt(0); i <= 'z'.charCodeAt(0); i += 1) {
  const char = String.fromCharCode(i);
  possibleChars.push(char);
  possibleChars.push(char.toUpperCase());
}

possibleChars.push('!', '.', '?', '@', '$', '#');
