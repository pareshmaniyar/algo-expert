class Solution {
    public void merge(int[] nums1, int m, int[] nums2, int n) {
        /**
            [1,6,10,0,0]
            [2,3,7]
            [1,2,3,0,0]
            [2,3,r7]
            C = [L=6,10,R=2]
        */
        if(m == 0){
            // System.out.println("right: ");
            // nums1 = nums2;
            for (int i = 0; i < nums1.length; i++)
                nums1[i] = nums2[i];
            return;
        };
        if(n == 0){
            return;
        }
        int[] carry = new int[m + n];
        for(int i = 0; i < m + n; i++){
            carry[i] = Integer.MAX_VALUE;
        }
        int ref = 0;int carryRight = 0;int carryLeft = 0;int temp = 0;
        if(nums1[0] > nums2[ref]){
            carry[carryRight] = nums1[0];
            nums1[0] = nums2[ref];
            ref = ref + 1;
            carryRight = carryRight + 1;
        }
        for(int i = 1; i < m; i++){
            if(ref < n && nums1[i] > nums2[ref] && carry[carryLeft] > nums2[ref]) {
                carry[carryRight] = nums1[i];
                carryRight = carryRight + 1;
                nums1[i] = nums2[ref];
                ref = ref + 1;
            } else if(nums1[i] > carry[carryLeft]){
                temp = nums1[i];
                nums1[i] = carry[carryLeft];
                carryLeft = carryLeft + 1;
                // System.out.println("carry1: " + Arrays.toString(carry) + ", temp: " + temp + ", carryRight: "+ carryRight + ", carryLeft: "+ carryLeft);
                carry[carryRight] = temp;
                carryRight = carryRight + 1;
            }
        // System.out.println("carry: " + Arrays.toString(carry));
        }
        for(int i = m; i < m + n; i++){
            if(ref < n && carry[carryLeft] > nums2[ref]) {
                nums1[i] = nums2[ref];
                ref = ref + 1;
            } else {
                nums1[i] = carry[carryLeft];
                carryLeft = carryLeft + 1;
            }
        }
    }
}

