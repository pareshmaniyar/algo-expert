class Solution {
    public int romanToInt(String s) {
        //Approach 1
        //array of key value pairs
        //[{"I": 1},{"V": 5},{"X": 10}]
        //start from right and find the index of the key in the above array of objects (hashmaps)
        List<Map<String, String>> listOfKeyValues = new ArrayList<Map<String, String>>();
        HashMap<String,Integer> table = new HashMap<String,Integer>();
        table.put("I", 1);table.put("V", 5);table.put("X", 10);table.put("L", 50);
        table.put("C", 100);table.put("D", 500);table.put("M", 1000);
        int result = 0;int temp = 1001;
        for(int i = 0; i < s.length(); i++){
            System.out.println(table.get(s.substring(i,i+1)));
            if(i >= 1 && table.get(s.substring(i, i + 1)) > table.get(s.substring(i - 1, i))){
                result = result - 2 * table.get(s.substring(i - 1, i)) + table.get(s.substring(i,i+1));
                
            } else {
                result = result + table.get(s.substring(i,i+1));
            }
        }
        
        //Approach 2:
        //use switch statments
        return result;
    }
}