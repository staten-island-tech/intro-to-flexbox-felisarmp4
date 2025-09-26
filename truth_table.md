Perfect — let’s make this beginner-friendly and APCSP-aligned. Here’s a ready-to-teach lesson:

---

# Lesson: Truth Tables in Computer Science

## What is a Truth Table?

A **truth table** is a chart that shows all possible inputs and the resulting output for a logical expression (like `AND`, `OR`, `NOT`).

Think of it like a **cheat sheet** that shows every possible way something could be true or false.

---

## Why do we use them? (APCSP Connection)

In AP Computer Science Principles, truth tables help us:

- Understand how computers make **decisions**
- Analyze **Boolean logic** in algorithms
- Break down conditions step by step

This connects to **Big Idea 3: Algorithms and Programming** and **Big Idea 4: Abstraction** — because truth tables help us reason about logic in a clear, abstract way.

---

## Example 1: `NOT`

| Input | Output |
| ----- | ------ |
| true  | false  |
| false | true   |

The `NOT` operator just flips the value.

---

## Example 2: `AND` (`&&`)

| A     | B     | A AND B |
| ----- | ----- | ------- |
| true  | true  | true    |
| true  | false | false   |
| false | true  | false   |
| false | false | false   |

Both must be true for the result to be true.

---

## Example 3: `OR` (`||`)

| A     | B     | A OR B |
| ----- | ----- | ------ |
| true  | true  | true   |
| true  | false | true   |
| false | true  | true   |
| false | false | false  |

Only one needs to be true for the result to be true.

---

## How to Think About It (Middle School Analogy)

- `AND` is like: _“I’ll go to the movies if my friend comes **AND** I have money.”_
- `OR` is like: _“I’ll go to the movies if my friend comes **OR** I have money (or both).”_
- `NOT` is like: _“I’ll go to the movies if I do **NOT** have homework.”_

---

## Challenge

You are designing a video game. A player can **enter the castle** if:

- They have a **key**, OR
- They have **magic powers**
- BUT they **must NOT be banned**

### Task:

1. Create a truth table showing all possible combinations of `hasKey`, `hasMagic`, and `isBanned`.
2. Show which situations allow the player into the castle.

---

## Solution

### Step 1: Variables

- `hasKey` = true/false
- `hasMagic` = true/false
- `isBanned` = true/false

Condition:

```
(canEnter) = (hasKey OR hasMagic) AND (NOT isBanned)
```

| hasKey | hasMagic | isBanned | hasKey OR hasMagic | NOT isBanned | Can Enter? |
| ------ | -------- | -------- | ------------------ | ------------ | ---------- |
| true   | true     | true     |                    |              |            |
| true   | true     | false    |                    |              |            |
| true   | false    | true     |                    |              |            |
| true   | false    | false    |                    |              |            |
| false  | true     | true     |                    |              |            |
| false  | true     | false    |                    |              |            |
| false  | false    | true     |                    |              |            |
| false  | false    | false    |                    |              |            |

### Step 2: Truth Table

| hasKey | hasMagic | isBanned | Can Enter? |
| ------ | -------- | -------- | ---------- |
| true   | true     | true     | false      |
| true   | true     | false    | true       |
| true   | false    | true     | false      |
| true   | false    | false    | true       |
| false  | true     | true     | false      |
| false  | true     | false    | true       |
| false  | false    | true     | false      |
| false  | false    | false    | false      |

✅ The player gets in only if they have **a key or magic**, and are **not banned**.

---
