# Tries (Prefix Trees) - Summary

## 💡 Core Idea
A Trie is a tree-like data structure used to store a dynamic set of strings. Its key feature is that each node represents a character, and the path from the root to a node represents a prefix. This structure enables highly efficient prefix-based search and insertion, with time complexity dependent only on the length of the string/prefix.

## 🔁 Repeated Sub-Patterns
* **Prefix Search:** Checking if any words in the collection start with a given prefix.
* **Word Search:** Checking for the full existence of a word.
* **Autocomplete & Auto-suggest:** Efficiently finding all words that share a common prefix.
* **Lexicographical Ordering:** Traversal of a Trie naturally yields words in lexicographical order.
* **Longest Common Prefix:** Finding the longest prefix shared by a set of words.
* **IP Routing:** Storing IP addresses for fast lookups.

## 📚 Common Traps
* **Node Implementation:** Forgetting to include a boolean flag in the node to indicate the end of a word.
* **Space Complexity:** Tries can be very space-inefficient for large alphabets or long, non-overlapping words.
* **Edge Cases:** Handling empty strings, empty Tries, or searching for prefixes that don't exist.
* **Dynamic Sizing:** Using a fixed-size array for children (e.g., `children[26]`) when the alphabet is much larger or could vary. A hash map for children `map<char, TrieNode*>` is more flexible.

## 🔁 Time-Space Complexity Tradeoffs
* **Insertion:** **O(L)**, where L is the length of the word.
* **Search:** **O(L)**, where L is the length of the word being searched.
* **Prefix Search:** **O(L)**, where L is the length of the prefix.
* **Space Complexity:** **O(N * L)** in the worst case, where N is the number of words and L is the average word length. It can be much better if words share common prefixes. This is the main tradeoff for its speed.

## 📌 Problem Checklist and Difficulty Tags
* **Checklist:**
    * Does the problem involve a collection of **strings or words**?
    * Do the operations revolve around **prefixes** (searching, matching, auto-completing)?
    * Is there a need to store a large set of words for fast lookups?
    * Can the problem be modeled as a tree where each node represents a character?
    * Is lexicographical ordering a requirement?
* **Difficulty:** Medium (implementation and application are a good test of a data structure from scratch).
