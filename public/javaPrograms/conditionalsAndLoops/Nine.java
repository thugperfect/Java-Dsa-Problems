//Calculate Discount Of Product
package javaPrograms.conditionalsAndLoops;

import java.util.Scanner;

public class Nine {
    public static void main(String[] args) {
        Scanner s =  new Scanner(System.in);
        System.out.print("price rs ?:");
        int price = s.nextInt();
        System.out.print("Discount % ?:");
        int dis = s.nextInt();
        int reduce = price*dis/100;
        int rp= price-reduce;
        System.out.println("reduce price :"+rp);
    }
}
