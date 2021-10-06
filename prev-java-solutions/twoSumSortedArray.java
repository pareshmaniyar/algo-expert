class Solution {
    public int[] twoSum(int[] numbers, int target) {
        //what if it is a tree, linked list
        //brute force - OT(n^2)
        /**
        Method 1:
            1. Check if complement exists in hash table
            2. Adding one by one element from array in the hash table
            3. Using interpolation try to find a compliment for the array
            4. Keep adding the found elements in the hash table
        */
        /**
        Method 2:
            1. Start from first and last elements
            2. If the sum is greater than target, inc left else dec right
            What would the time and space complexity be? OT(n) OS(1)
            Can we jump through some elements through interpolation for faster solution?
        */
    }
}