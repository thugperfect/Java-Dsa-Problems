//Sum Of N Numbers
package javaPrograms.conditionalsAndLoops;

import java.util.Scanner;

public class Thirteen {
    public static void main(String[] args) {
       Scanner s =new Scanner(System.in);
       System.out.print("Enter limit:");
       int n = s.nextInt();
       int i;
       int add = 0;
        for(i = 1;i<=n;i++){
            System.out.print("no. "+i+":");
            int no = s.nextInt();
            add = add+no;
        }
        System.out.println(add);
    }
}
