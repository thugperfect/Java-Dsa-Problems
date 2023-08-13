//Write a program to print the sum of 
//negative numbers, sum of positive even 
//numbers and the sum of positive odd 
//numbers from a list of numbers (N) 
//entered by the user. The list terminates 
//when the user enters a zero.
package javaPrograms.conditionalsAndLoops;

import java.util.Scanner;

public class Twenty {
   public static void main(String[] args) {
    Scanner s = new Scanner(System.in);
 
    int min = 0,odd =0 ,even=0;
    Boolean boo = true;
    int i = 1;
   while(boo){
    System.out.print("No. "+i+":");
        int no = s.nextInt();
        if(no<0){
            min = min+no;
        }
        else if(no%2 == 0){
            even = even+no;
        }
        else if(no%2 != 0){
            odd =odd+no;
        }
        if(no == 0){
            boo = false;
        }
        i++;
   }
        


    System.out.println("-ve no:"+min);
    System.out.println("even no:"+even);
    System.out.println("odd no:"+odd);
   } 
}
