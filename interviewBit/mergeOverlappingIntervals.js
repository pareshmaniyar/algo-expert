/**
 * Definition for an interval.
 * public class Interval {
 *     int start;
 *     int end;
 *     Interval() { start = 0; end = 0; }
 *     Interval(int s, int e) { start = s; end = e; }
 * }
 */
 //[1,3],[2,6],[8,10],[15,18]
 public class Solution {
    public ArrayList<Interval> merge(ArrayList<Interval> intervals) {
        ArrayList<Interval> finalArray = new ArrayList<Interval>();
        if(intervals.size() == 0){
            return intervals;
        } else {
            //check ascending order
            finalArray.add(intervals.get(0));
        }
        for(int i = 1; i < intervals.size(); i++){
            finalArray = insert(finalArray, intervals.get(i));
            //ascending order of start and end
            // int length = finalArray.size();
            // if(intervals.get(i).start <= finalArray.get(length - 1).end){
            //     if(intervals.get(i).end > finalArray.get(length - 1).end){
            //         finalArray.get(length - 1).end = intervals.get(i).end;
            //     }
            //     if(intervals.get(i).start < finalArray.get(length - 1).start){
            //         finalArray.get(length - 1).start = intervals.get(i).start;
            //     }
            // } else {
            //     finalArray.add(intervals.get(i));
            // }
        }
        return finalArray;
    }
    public ArrayList<Interval> insert(ArrayList<Interval> intervals, Interval newInterval) {
        ArrayList<Interval> finalArray = new ArrayList<Interval>();
        // System.out.println("intervals: " + intervals.toString());
        // System.out.println("newInterval: " + newInterval.start + ", " + newInterval.end);
        if(newInterval.start > newInterval.end){
            newInterval.start = newInterval.start + newInterval.end;
            newInterval.end = newInterval.start - newInterval.start;
            newInterval.start = newInterval.start + newInterval.end;
        }
        // System.out.println("newInterval in ascending order: " + newInterval.start + ", " + newInterval.end);
        double ls = -0.5; double le = -0.5; int i;
        // System.out.println("Loop started for getting start interval and pushing initial intervals: ");
        for(i = 0; i < intervals.size(); i++) {
            //find the point of entrance
//[-0.5{s:-10,e:-6}0.5,{s:-3,e:-1}1.5,{s:1,e:3}2.5,{s:5,e:7},{s:9,e:11},{s:15,e:21}]....{s:2,e:10}
// i + le - ls = 1.5, 2.5, 2
// i + le - ls + 1 = 2, 2, 2
// i + le - ls = 1.5, 1.5, 2
// i + le - ls - 1 = 2, 4, 2
// i + le - ls + 1 = 0, 4, 2
//2.5,3 -> 3, 3,3 -> 4
            if(intervals.get(i).start > newInterval.start){
                ls = i - 0.5;break;
//got i(2) for change and c(3) for number of elements to merge
//new array from 0 to i - 1, new obj(min(intervals[s:intervals[i].s, newInterval.s), e: intervals[i + c].e
// then concat from i + c + 1 to end
            } else if(intervals.get(i).end > newInterval.start){
                ls = i;break;
            } else {
                //push intervals elements
                // System.out.println("Add " + intervals.get(i).start + ", " + intervals.get(i).end + " at " + i + "in finalArray");
                finalArray.add(intervals.get(i));
            }
        }
        if(i == intervals.size()){
            ls = i + 0.5;
            le = i + 0.5;
        }
        // System.out.println("Start interval point: " + ls);
        // System.out.println("Creating end Interval");
        int j;
        for(j = i; j < intervals.size(); j++){
            if(intervals.get(j).start > newInterval.end){
                le = j - 0.5;break;
            } else if(intervals.get(j).end > newInterval.end){
                le = j;break;
            }
        }
        if(j == intervals.size()){
            le = j - 0.5;
        }
        // System.out.println("End interval point: " + le);
        // got ls,le
        //if ls is an integer push intervals[ls + 0.5] else push newInterval.s into finalArray.s; same with e
        //ls = ls + ''; le = le + '';//in java??
        //if(length > 2 && ls[ls.length - 1] == 5 && ls[ls.length - 2] == .) {
        if(ls % 1 == 0){
            ls = ls + 0.5;
            int lsInt = (int)ls;
            newInterval.start = intervals.get(lsInt).start;
        }
        if(le % 1 == 0) {
            le = le + 0.5;
            int leInt = (int)le;
            newInterval.end = intervals.get(leInt).end;
        }
        // System.out.println("newInterval: " + newInterval.start + ", " + newInterval.end);
        finalArray.add(newInterval);
        //round off le to next bigger integer if decimal
        // System.out.println(le);
        int k = (int)(le + 0.5);
        // System.out.println("Starting remaining interval additions from: " + k);
        for(; k < intervals.size(); k++){
            // System.out.println("Add remaining: " + intervals.get(k).start + ", " + intervals.get(k).end + " at " + k + "in intervals");
            finalArray.add(intervals.get(k));
        }
        return finalArray;
    }
}
