import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class ArrayInput {
    public static void main(String[] args) throws IOException {
        // One dimension for string
        System.out.println("Hello, World!");
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
/*
        System.out.print("Write number of best friends :");
        int num = Integer.parseInt(br.readLine());
        String[] names = new String[num];

        System.out.print("Write names of your best friends :");
        for(int i=0;i<num;i++)
        {
            names[i]=br.readLine();
        }
        for(int i=0;i<num;i++)
        {
            System.out.println(names[i]);
        }
        // One dimension for integer

        System.out.print("Write number of subjects :");
        int num1 = Integer.parseInt(br.readLine());
        int[] names1 = new int[num1];

        System.out.print("Write marks in each one:");
        for(int i=0;i<num1;i++)
        {
            names1[i]=Integer.parseInt(br.readLine());
        }
        for(int i=0;i<num1;i++)
        {
            System.out.println(names1[i]);
        }
        //2 dimensional array of integers, String tokenizer is faster
        StringTokenizer tk = new StringTokenizer(br.readLine());
        int row = Integer.parseInt(tk.nextToken());System.out.println(row);
        int col = Integer.parseInt(tk.nextToken());System.out.println(col);
        int [][]twoda = new int[row][col];
        for(int i=0;i<row;i++){
            System.out.println("reading row " + i);
            StringTokenizer tk1 = new StringTokenizer(br.readLine());
            for(int j=0; j<col;j++){
                twoda[i][j]= Integer.parseInt(tk1.nextToken());
            }
        }
        for(int i=0;i<row;i++){
            System.out.print("row "+ i+ ": ");
            for(int j=0; j<col;j++){
                System.out.print(twoda[i][j] + " ");
            }
            System.out.println();
        }*/
        //3 D Array of integers
        StringTokenizer tk2 = new StringTokenizer(br.readLine());
        int stack =Integer.parseInt(tk2.nextToken());
        int row1 =Integer.parseInt(tk2.nextToken());
        int col1 =Integer.parseInt(tk2.nextToken());
        int [][][]tda = new int[stack][row1][col1];
        for(int k =0;k<stack;k++) {
            System.out.println(" Stack:" + (k+1));
            for (int i = 0; i < row1; i++) {
                StringTokenizer tk3 = new StringTokenizer(br.readLine());
                for (int j = 0; j < col1; j++) {
                    tda[k][i][j] =Integer.parseInt(tk3.nextToken());
                }
            }
        }
        for(int k =0;k<stack;k++) {
            System.out.println(" Stack: " + (k+1));
            for (int i = 0; i < row1; i++) {
                for (int j = 0; j < col1; j++) {
                    System.out.print(tda[k][i][j]+" ");
                }
                System.out.println();
            }
        }
    }
}
