/**
 * 8.	Implement a simple HashMap class with put, get, and remove methods.
 */

class HashMap {
    constructor() {

        this.collections = []; 
    }

    /** calculates the hash 
     * @param {string} key - The key to hash.
     * @returns {number} - The calculated hash value. 
     */
    hash(key) {
        let hashValue = 0;
        for (const char of key) {
            hashValue += char.charCodeAt(0);
        }
        return hashValue % this.collections.length;
    }

    /** Adds a key-value pair to the hashmap.
     * @param {string} key - The key.
     * @param {*} value - The associated value.
     */

    put(key, value) {
        const index = this.hash(key);
        if (!this.collections[index]) {
            this.collections[index] = [];
        }
        this.collections[index].push({ key, value });
    }

     /**
     * Finds the value associated with a given key.
     * @param {string} key - The key to look up.
     * @returns {*} - The value associated with the key (or undefined if not found).
     */
    
    get(key) {
        const index = this.hash(key);
        const collection = this.collections[index];
        if (!collection) {
            return undefined; 
        }
        for (const pair of collection) {
            if (pair.key === key) {
                return pair.value;
            }
        }
        return undefined; // Key not found
    }

    /**
     * Removes a key-value pair from the hashmap.
     * @param {string} key - The key to remove.
     */
    remove(key) {
        const index = this.hash(key);
        const collection = this.collections[index];
        if (!collection) {
            return; // Key not found
        }
        const updatedCollection = collection.filter(pair => pair.key !== key);
        this.collections[index] = updatedCollection;
    }
}

const myMap = new HashMap();
myMap.put('apple', 64);
myMap.put('banana', 'yellow');
console.log(myMap.get('apple'));
myMap.remove('banana');
console.log(myMap.get('banana')); 
