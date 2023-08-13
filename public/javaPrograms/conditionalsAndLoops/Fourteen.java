//Armstrong Number In Java
package javaPrograms.conditionalsAndLoops;

import java.util.Scanner;

public class Fourteen {
    public static void main(String[] args) {
        Scanner s = new Scanner(System.in);
        System.out.print("Enter no:");
        int n = s.nextInt();
        int clone = n;
        int remadd = 0;
        while(clone>0){
            int rem = clone%10;
            int rem3 = rem*rem*rem;
            remadd = remadd+rem3;
            clone/=10;
        }
        if(n==remadd){
            System.out.println(true);
        }
        else{
            System.out.println(false);
        }
      }
}
