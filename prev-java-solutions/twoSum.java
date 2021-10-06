class Solution {
    public int[] twoSum(int[] nums, int target) {
        //brute force -- skip as it is routine
        //hash table
        /**
        Method 1: OT(n) & OS(n)
            1. Add all the elements in the hash table
            2. Check for each element a complement in the hash table, return the found one
        */
        /**
        Method 2: OT(<= n) & OS(<= n)
            1. Start adding elements in the hash table
            2. While adding check for a complement in the hash table, return the found one, stop the array
        */
        Map<Integer, Integer> intNumsMap = new HashMap<>();
        for(int i = 0; i <= nums.length; i++){
            int complement = target - nums[i];
            if(intNumsMap.containsKey(complement)){
                return new int[]{intNumsMap.get(complement), i};
            }
            if(!intNumsMap.containsKey(nums[i]))
                intNumsMap.put(nums[i],i);
        }
        throw new IllegalArgumentException("No two sum solution exists");
        //what if the array is sorted?
    }
}