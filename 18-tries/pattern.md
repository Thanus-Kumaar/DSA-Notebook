# Tries (Prefix Trees) - Pattern

## When to Apply This Pattern
Apply the Trie pattern when:
* You need to store a large collection of **strings** for **fast search and prefix-based operations**.
* The time complexity of search should not depend on the number of words (`N`) but rather on the length of the word or prefix (`L`).
* Problems involve features like **autocomplete, spell-checking, or finding the longest common prefix**.

## Common Variations
* **Basic Trie:** Implements `insert(word)` and `search(word)`.
* **Prefix Search:** Adds a `startsWith(prefix)` method to check for any words with a given prefix.
* **Compressed Trie (Radix Tree):** Nodes with only one child are merged, making it more space-efficient.
* **Trie with Wildcards:** Nodes can have special wildcard characters (e.g., `.`) that match any character, used in pattern matching.
* **Trie on Integers:** By representing integers in binary form, a Trie can be used to solve problems like finding the maximum XOR of a pair of numbers.
* **Lexicographical Ordering:** Iterating through a Trie with a DFS-like traversal naturally yields words in lexicographical order.

## Key Implementation Insights

1.  **Node Structure:**
    * Each node needs an array or map to store pointers to its children. A `std::array<TrieNode*, 26>` is efficient for a fixed, small alphabet like English letters. A `std::unordered_map<char, TrieNode*>` is more flexible.
    * Each node needs a boolean flag, `isEndOfWord`, to indicate that a word ends at this node (as a prefix might also be a word).

    ```cpp
    struct TrieNode {
        std::unordered_map<char, TrieNode*> children;
        bool isEndOfWord;

        TrieNode() {
            isEndOfWord = false;
        }
    };
    ```

2.  **`Trie` Class:**
    * The main class needs a `TrieNode* root;` pointer.
    * The destructor should recursively free all memory.
    * **`insert(word)` method:**
        * Start from the root.
        * Iterate through each character `c` in the word.
        * If the current node doesn't have a child for `c`, create a new node.
        * Move to that child node.
        * After the loop, set the current node's `isEndOfWord` flag to `true`.
    * **`search(word)` method:**
        * Start from the root.
        * Iterate through each character `c` in the word.
        * If the current node doesn't have a child for `c`, the word doesn't exist. Return `false`.
        * Move to that child node.
        * After the loop, check if the current node's `isEndOfWord` flag is `true`. Return that value.
    * **`startsWith(prefix)` method:**
        * This is very similar to `search(word)`.
        * You follow the path for the prefix.
        * If you reach the end of the prefix, the prefix exists. Return `true`.

3.  **Efficiency:** The elegance of the Trie lies in its time complexity. Because you only traverse the depth of the tree (which is the length of the word), all operations are `O(L)`. This is a significant advantage over hashing or other search methods for prefix-based problems.

4.  **Handling Memory:** In C++, you're responsible for memory management. The Trie destructor should recursively delete all `TrieNode`s to prevent memory leaks.
