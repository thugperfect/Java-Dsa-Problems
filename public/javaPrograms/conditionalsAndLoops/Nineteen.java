//Check Leap Year Or Not
package javaPrograms.conditionalsAndLoops;

import java.util.Scanner;

public class Nineteen {
    public static void main(String[] args) {
        Scanner s = new Scanner(System.in);
        System.out.print("Year ? :");
        int y = s.nextInt();
        if(y%4 == 0){
            System.out.println(true);
        }
        else{
            System.out.println(false);
        }
        
    }
}
