
package javaPrograms.firstJava;
import java.util.*;
public class Three{
public static void main(String[] args) {
Scanner s = new Scanner(System.in);
while(true){

System.out.println("Enter Principle :");
int p = s.nextInt();
System.out.println("Enter Time :");
int t = s.nextInt();
System.out.println("Enter Rate :");
int r = s.nextInt();
int si = p*t*r/100;
System.out.println("SI :"+si);


}
    
 }   
}
