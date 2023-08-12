
package javaPrograms.firstJava;
import java.util.*;
public class One {
public static void main(String[] args) {
Scanner s =new Scanner(System.in);
while(true){
    System.out.print("Enter a number :");
    
    int n = s.nextInt();
    if(n%2 == 0){

        System.out.println("Even Number...");
    } 
    else{
        System.out.println("Odd Number...");
    }
}

}

}
