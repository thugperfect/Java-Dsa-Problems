//Kunal is allowed to go out with his 
//friends only on the even days of a given 
//month. Write a program to count the 
//number of days he can go out in the month 
//of August.
package javaPrograms.conditionalsAndLoops;

import java.util.Scanner;

public class Twentyone {
    public static void main(String[] args) {
    Scanner s = new Scanner(System.in);
    int aug = 31;
    int i,count =0;
    for(i = 1;i<=32;i++){
        if(i%2 == 0)
        count++;
    }
    System.out.println(count);

    
    }
   
}
