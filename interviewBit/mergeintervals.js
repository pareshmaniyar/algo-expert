/**
 * Given a set of non-overlapping intervals, insert a new interval into the intervals (merge if necessary).

You may assume that the intervals were initially sorted according to their start times.

Example 1:

Given intervals [1,3],[6,9] insert and merge [2,5] would result in [1,5],[6,9].

Example 2:

Given [1,2],[3,5],[6,7],[8,10],[12,16], insert and merge [4,9] would result in [1,2],[3,10],[12,16].

This is because the new interval [4,9] overlaps with [3,5],[6,7],[8,10].

Make sure the returned intervals are also sorted.
 */

/**
 * Definition for an interval.
 * public class Interval {
 *     int start;
 *     int end;
 *     Interval() { start = 0; end = 0; }
 *     Interval(int s, int e) { start = s; end = e; }
 * }
 */
 
import java.util.Arrays;
public class Solution {
    public ArrayList<Interval> insert(ArrayList<Interval> intervals, Interval newInterval) {
        ArrayList<Interval> finalArray = new ArrayList<Interval>;
        for(int i = 0; i < ArrayList.size(); i++) {
            //find the point of entrance
//[{s:-10,e:-6},{s:-3,e:-1},{s:1,e:3},{s:5,e:7},{s:9,e:11},{s:15,e:21}]....{s:2,e:10}
            if(ArrayList[i].e > newInterval.s){
                int c = 1;
                while(c + i < ArrayList.length && ArrayList[i + c].e < newInterval.s){
                    c = c + 1;
                }
//got i(2) for change and c(2) for number of elements to merge
//new array from 0 to i - 1, new obj(ArrayList[s:ArrayList[i].s, e: ArrayList[i + c].e
// then concat from i + c + 1 to end
                
                
            } else  {
                //push ArrayList elements 
            }
        }
    }
}

/**
 * Definition for an interval.
 * public class Interval {
 *     int start;
 *     int end;
 *     Interval() { start = 0; end = 0; }
 *     Interval(int s, int e) { start = s; end = e; }
 * }
 */
 
import java.util.Arrays;
public class Solution {
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



