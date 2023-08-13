//Reverse A String In Java
package javaPrograms.conditionalsAndLoops;

import java.util.Scanner;

public class Sixteen {
    public static void main(String[] args) {
        Scanner s = new Scanner(System.in);
        System.out.println("Enter String :");
        String str = s.nextLine();
        String rev = reverse(str);
        System.out.println(rev);


    }
    static String reverse(String str){
        String rev ="";
        for(int i =str.length()-1;i>=0;i--){
            rev = rev + str.charAt(i);
        }
        return rev;
    }
}
