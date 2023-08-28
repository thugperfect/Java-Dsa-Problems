
package javaPrograms.firstJava;
import java.util.*;
public class Eight {
public static void main(String[] args) {
Scanner s = new Scanner(System.in);
while(true){
    System.out.print("Enter str :");
    String str  = s.nextLine();
    int len =str.length() -1;
    String rev ="";
    for (int i = len;i>=0;i--){
        rev = rev + str.charAt(i);
    }
    if(str.equals(rev)){
        System.out.println("palindrome");
    }
    else{
        System.out.println("not a palindrome");
    }
}
 
}
}
