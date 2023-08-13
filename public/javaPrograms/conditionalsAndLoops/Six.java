
package javaPrograms.conditionalsAndLoops;
import java.util.Scanner;
public class Six {
public static void main(String[] args) {
    Scanner s = new Scanner(System.in);
    while(true){
        System.out.print("Enter a no. :");
        int n = s.nextInt();
        long mul = 1l;
        while(n>0){
            mul = mul*n;
            n-=1;
        }
        System.out.println(mul);
    }

}    
}
