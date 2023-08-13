
package javaPrograms.conditionalsAndLoops;
import java.util.Scanner;
public class Two {
    public static void main(String[] args) {
        Scanner s = new Scanner(System.in);
        System.out.print("Enter a no. :");
        int n = s.nextInt();
        int mul = 1;
        int add  = 0;
        while(n>0){
            int rem = n%10;
             mul = mul*rem;
             add = add+rem;
            n/=10;
        }
        System.out.println(
            mul-add
        );
        
    }
}
