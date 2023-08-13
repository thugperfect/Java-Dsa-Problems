
package javaPrograms.conditionalsAndLoops;

import java.util.Scanner;

public class Seven {
    public static void main(String[] args) {
        Scanner s =  new Scanner(System.in);
        while(true){
            System.out.print("Enter units:");
            int units =s.nextInt();
            System.out.print("domestic?y:n):");
            char val = s.next().charAt(0);
            boolean domestic;
            double read;
            if(val == 'y'){
                domestic = true;
            }
            else{
                domestic = false;
            }
            if(domestic){
            if(units<100){
                read = units;
             
            }
            else{
               read = units*1.5; 
            }
            }
            else{
                read =units*3.5;
            }
            System.out.println(read);
    
        }
       
    }
  
    
}
