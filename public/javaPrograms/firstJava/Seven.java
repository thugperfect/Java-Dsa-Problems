

package javaPrograms.firstJava;
import java.util.*;
public class Seven {
public static void main(String[] args) {
    Scanner s =new Scanner(System.in);
    System.out.println("Enter max :");
    int n =s.nextInt();
    int a = 0;
    int b =1;
    System.out.print(b+",");
    for (int i =0;i<=n;i++){
       int c = a+b;
        a = b;
        b = c;
      
        System.out.print(c+",");
    }
}
}

