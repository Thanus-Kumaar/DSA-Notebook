# Hashing / Hash Maps - Summary

## 🔁 Repeated Sub-Patterns
* **Frequency Counting:** Storing counts of elements (e.g., characters, numbers) to check for occurrences, anagrams, or duplicates.
* **Lookup for Complement/Target:** Efficiently finding a required partner value (e.g., `target - num`) in a collection.
* **Keeping Track of Visited/Seen Elements:** Marking elements as seen to detect duplicates or avoid redundant processing (e.g., cycle detection using a set, though we saw a better way for LLs).

## 📚 Common Traps
* **Using Value Instead of Index/Pointer:** For problems where elements might have duplicate values but distinct positions (like in "Two Sum"), ensure you store/retrieve the correct identifier (index, memory address) in the map.
* **Collision Handling (Theoretical):** While built-in hash map implementations handle collisions well, be aware theoretically that worst-case scenarios can degrade `O(1)` operations to `O(N)`. This is rarely an interview concern for standard library usage.
* **Null/Empty Input:** Ensure your code handles empty collections gracefully.

## 🔁 Time-Space Complexity Tradeoffs
* **Time Complexity:** Generally **O(1)** on average for insertions, deletions, and lookups. This makes it powerful for reducing `O(N^2)` brute-force solutions to **O(N)**.
* **Space Complexity:** **O(N)** in the worst case, as the hash map might store up to N distinct elements. This is the primary tradeoff for the time efficiency gained.

## 📌 Problem Checklist and Difficulty Tags
* **Checklist:**
    * Do I need to store associations between elements (key-value)?
    * Do I need fast lookups for existence or associated data?
    * Am I dealing with frequency counts?
    * Can I reduce a nested loop (`O(N^2)`) to a single pass (`O(N)`)?
* **Difficulty:** Easy to Medium
