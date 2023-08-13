
package javaPrograms.firstJava;
import java.util.*;
public class Nine {
    public static void main(String[] args) {
        Scanner s = new Scanner(System.in);
        System.out.print("enter limit :");
        int limit = s.nextInt();
        int rem;
        for(int i = 1;i < limit;i++){
            int clone = i;
           
            int rem3 = 0;
            while(clone>0){
                

                rem = clone%10;
               rem3 = rem3+rem*rem*rem;
               clone = clone/10;
            }
           if(i == rem3){
            System.out.println(i);
           }
        }

    }
    
    
}