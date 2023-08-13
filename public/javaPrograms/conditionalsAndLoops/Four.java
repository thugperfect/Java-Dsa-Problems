//Take integer inputs till the user 
//enters 0 and print the sum of all 
//numbers (HINT: while loop)
package javaPrograms.conditionalsAndLoops;
import java.util.Scanner;
public class Four {
public static void main(String[] args) {
Scanner s  =new Scanner(System.in);
int count = 0,add =0;
boolean boo = true;
while(boo){
    System.out.print("Enter "+count+"th no:");
    int n = s.nextInt();
    if(n == 0){
        boo=false;
    }
    add  =  add+n;
    count++;
}
System.out.println(add);
}
}
