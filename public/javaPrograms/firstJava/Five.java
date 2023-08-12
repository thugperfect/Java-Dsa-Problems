
package javaPrograms.firstJava;
import java.util.*;
public class Five {
public static void main(String[] args) {
    Scanner s = new Scanner(System.in);
    while(true){
        System.out.print("Enter 3 no's :");
        int n1 = s.nextInt();
        int n2 = s.nextInt();
        int n3 = s.nextInt();
        int max;
        if(n1>n2){
            if(n1>n3){
               max = n1; 
            }
            else{
                max = n3;
            }
        }
        else {
            max = n2;
        }
        System.out.println("max :"+max);
    }
    }
}
