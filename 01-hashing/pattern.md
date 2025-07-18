# Hashing / Hash Maps - Pattern

## When to Apply This Pattern
Apply the Hashing pattern when:
* You need to **store and quickly retrieve information** based on a key.
* You're looking for **pairs or complements** in an array/list (e.g., finding two numbers that sum to a target).
* You need to **count frequencies** of elements (characters, numbers, etc.).
* You need to **check for duplicates** or unique elements efficiently.
* You want to optimize a brute-force `O(N^2)` solution to `O(N)` by reducing lookup time.

## Common Variations
* **Two Sum / Pair Finding:** Store `(number, index)` or `(number, count)`.
* **Anagrams / Character Frequencies:** Store character counts.
* **Duplicate Detection:** Store elements in a hash set to quickly check for existence.
* **Grouping / Categorization:** Group elements by a certain property.

## Key Implementation Insights
* **Choose the Right Map Type:**
    * `std::unordered_map` (C++), `HashMap` (Java), `dict` (Python) for average `O(1)` operations.
    * `std::map` (C++), `TreeMap` (Java) if you need **sorted keys** (logarithmic time complexity).
* **What to Store:** Carefully consider what your **key** should be (the value you're looking up) and what your **value** should be (the information you need associated with that key, e.g., index, count, boolean).
* **Single Pass Optimization:** Often, you can optimize two passes (populate map, then search map) into a single pass by checking for the complement *before* adding the current element to the map. This prevents using the same element twice for pair-finding problems.
* **Edge Cases:** Consider empty inputs, all same values, large values (hash collisions generally handled by standard libraries).
