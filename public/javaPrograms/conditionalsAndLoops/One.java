
package javaPrograms.conditionalsAndLoops;
import java.util.*;
public class One {
    public static void main(String[] args) {
      Scanner s = new Scanner(System.in);
      System.out.print("Enter limit :");
      int limit = s.nextInt();
      int a =0;
      int b = 1;
      System.out.print(b+",");
      for (int i = 0;i<limit;i++){
        int c = a+b;
        a = b;
        b =c;
        System.out.print(c+",");
      }

    }
}
