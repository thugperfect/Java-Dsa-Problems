

package javaPrograms.firstJava;
import java.util.*;
public class Six {
    public static void main(String[] args) {
        Scanner s = new Scanner(System.in);
        while(true){
            System.out.print("Enter INR :");
            int inr = s.nextInt();
            int usd = inr*85;
            System.out.println("USD :"+usd);
        }
    }
}
