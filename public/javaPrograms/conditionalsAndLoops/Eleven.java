
package javaPrograms.conditionalsAndLoops;

import java.util.Scanner;

public class Eleven {
    public static void main(String[] args) {
        Scanner s =  new Scanner(System.in);
        System.out.print("price rs ?:");
        int price = s.nextInt();
        System.out.print("commission % ?:");
        int dis = s.nextInt();
        int reduce = price*dis/100;
      
        System.out.println("commmission :"+reduce);
    }
}
