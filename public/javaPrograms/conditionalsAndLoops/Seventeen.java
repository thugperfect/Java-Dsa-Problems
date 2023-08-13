//Find if a number is palindrome or not
package javaPrograms.conditionalsAndLoops;

import java.util.Scanner;

public class Seventeen {
       public static void main(String[] args) {
        Scanner s = new Scanner(System.in);
        System.out.print("Enter String :");
        String str = s.nextLine();
        Boolean rev = reverse(str);
        System.out.println(rev);


    }
    static Boolean reverse(String str){
        String rev ="";
        for(int i =str.length()-1;i>=0;i--){
            rev = rev + str.charAt(i);
        }
        if(str.equals(rev)){
            return true;
        }
        else{
            return false;
        }
        
    }
}
