class Solution {
    public String convert(String s, int numRows) {
        if(numRows == 1){
            return s;
        }
        List<Map<Integer,String>> arrayOfMaps = new ArrayList<Map<Integer,String>>();
        boolean goingDown = true;
        int counter = 1; int x = 0; int y = 0;
        for(int j = 0; j < numRows; j++){
            Map<Integer,String> dummyMap = new LinkedHashMap<Integer, String>();
            arrayOfMaps.add(dummyMap);
        }
        for(int i = 0; i < s.length(); i++){
            arrayOfMaps.get(y).put(x, s.substring(i, i+1));
            if(goingDown){
                y = y + 1;
            } else {
                x = x + 1;
                y = y - 1;
            }
            
            if(counter == numRows - 1){
                goingDown = !goingDown;
                counter = 0;
            }
            
            counter += 1;
        }
        String result = "";
        for(int i = 0; i < numRows; i++){
            // System.out.println("arrayOfMaps: " + arrayOfMaps.get(i));
            for(String values: arrayOfMaps.get(i).values()){
                result = result + values;
            }
        }
        return result;
    }
}