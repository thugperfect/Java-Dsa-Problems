//Input a number and print all the 
//factors of that number (use loops).
package javaPrograms.conditionalsAndLoops;
import java.util.Scanner;
public class Three {
    public static void main(String[] args) {
        Scanner s = new Scanner(System.in);
        while(true){
            System.out.print("Enter no. :");
            int n = s.nextInt();
            
            for(int i = n;i>0;i--){
                if(n%i == 0){
                    System.out.print(i+",");
                }
            }
            System.out.println("\n");
        }
        

    }
}
