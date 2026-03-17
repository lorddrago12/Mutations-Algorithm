# 🔤 Mutations Algorithm

A JavaScript function that checks whether all the letters of the second string in an array can be found in the first string, **regardless of case**.

---

## 📌 Problem Statement

Given an array of two strings, return `true` if all the letters of the **second string** exist in the **first string**. Return `false` otherwise.

> Letter matching is **case-insensitive**.

---

## 💡 Solution

```javascript
function mutation(words) {
  const first = words[0].toLowerCase();
  const second = words[1].toLowerCase();

  for (let char of second) {
    if (!first.includes(char)) {
      return false;
    }
  }

  return true;
}
```

---

## 🧠 How It Works

1. **Normalize case** — both strings are converted to lowercase so the comparison is case-insensitive.
2. **Iterate** — loop through every character of the second string.
3. **Check** — if any character from the second string is **not found** in the first string, immediately return `false`.
4. **Return `true`** — if all characters are found, the function returns `true`.

---

## 🧪 Test Cases

| Input | Output | Reason |
|-------|--------|--------|
| `["hello", "Hello"]` | `true` | Same letters, different case |
| `["hello", "hey"]` | `false` | `'y'` is not in `"hello"` |
| `["hello", "neo"]` | `false` | `'n'` is not in `"hello"` |
| `["voodoo", "no"]` | `true` | Both `'n'` and `'o'` are in `"voodoo"` |
| `["Mary", "Army"]` | `true` | All letters of `"army"` exist in `"mary"` |
| `["Alien", "line"]` | `true` | All letters of `"line"` exist in `"alien"` |

---

## ⏱️ Complexity

| | Complexity |
|---|---|
| **Time** | O(n × m) — where `n` is the length of the second string and `m` is the length of the first string (`String.includes` is O(m)) |
| **Space** | O(1) — no extra data structures used |

---

## 🚀 Usage

```javascript
console.log(mutation(["hello", "Hello"])); // true
console.log(mutation(["hello", "hey"]));   // false
console.log(mutation(["Mary", "Army"]));   // true
```

---

## 🛠️ How to Use This Project

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/mutations-algorithm.git
   cd mutations-algorithm
   ```

2. **Run the function** — no dependencies needed, just plain JavaScript:
   ```bash
   node mutation.js
   ```

3. **Use it in your own project** by importing the function:
   ```javascript
   const mutation = require('./mutation');

   console.log(mutation(["hello", "Hello"])); // true
   console.log(mutation(["hello", "hey"]));   // false
   ```

---

## 🤝 How to Contribute

Contributions are welcome! Here's how to get started:

1. **Fork** this repository
2. **Create a new branch** for your feature or fix:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. **Make your changes** and commit them:
   ```bash
   git commit -m "Add: your descriptive message here"
   ```
4. **Push** to your fork:
   ```bash
   git push origin feature/your-feature-name
   ```
5. **Open a Pull Request** and describe what you changed and why.

### 💡 Ideas for Contributions
- Add more test cases
- Improve time complexity using a `Set` for O(1) lookups
- Add support for non-English characters using `localeCompare`
- Write unit tests using Jest or Mocha
