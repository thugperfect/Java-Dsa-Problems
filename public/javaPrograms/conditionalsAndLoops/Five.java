//Take integer inputs till the 
//user enters 0 and print the 
//largest number from all.
package javaPrograms.conditionalsAndLoops;
import java.util.Scanner;
public class Five {
   public static void main(String[] args) {
    Scanner s = new Scanner(System.in);
    boolean boo = true;
    int max = 0,count = 0;

    while(boo){
        System.out.print("Enter "+count+"th no:");
        int n = s.nextInt();
        if(max<n){
            max = n;
        }
        if(n ==0){
            boo = false;
        }
        count++;
    }
    System.out.println(max);
   } 
}
