//Calculate Average Of N Numbers
package javaPrograms.conditionalsAndLoops;

import java.util.Scanner;

public class Eight {
    public static void main(String[] args) {
        Scanner s = new Scanner(System.in);
     
     
    int add = 0,i;
    System.out.print("enter limit:");
    int n =s.nextInt();
    for(i = 1;i<=n;i++){
        System.out.print("Enter "+i+" no:"); 
        int no = s.nextInt();
        add = add+no;
    }
    System.out.println("average :"+(add/n));
    
   
            
      
    }
   

}
