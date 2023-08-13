//Calculate Distance Between Two Points
package javaPrograms.conditionalsAndLoops;

import java.util.Scanner;

public class Ten {
    public static void main(String[] args) {
        Scanner s = new Scanner(System.in);
        System.out.print("x1,x2 ? :");
        int x1 = s.nextInt();
        int x2 = s.nextInt();
        System.out.print("y1,y2 ? :");
        int y1 = s.nextInt();
        int y2 = s.nextInt();
        int x = (x2-x1)*(x2-x1);
        int y = (y2-y1)*(y2-y1);
        int c = x+y;
        double form = rt(c);
        System.out.println("distance :"+form);

    }
    static double rt(int num){
        double sqrt = num/2;
        double t;
        do{
            t= sqrt;
            sqrt = (t+(num/t))/2;
        }while(t-sqrt!=0);{
            return sqrt;
        }
           
    }
}
