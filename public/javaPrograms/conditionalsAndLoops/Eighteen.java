
//HCF & LCM Of Two Numbers Program
package javaPrograms.conditionalsAndLoops;

import java.util.Scanner;

public class Eighteen {
    public static void main(String[] args) {
        Scanner s = new Scanner(System.in);
        System.out.print("Enter 2 no's:");
        int a = s.nextInt();
        int b= s.nextInt();
        int lcm = lcm(a,b);
        int hcf = hcf(a,b);
        System.out.println("lcm :"+lcm);
        System.out.println("hcf :"+hcf);
    }
    static int hcf(int a,int b){
        int hcf;
        if(a>b){
            hcf = b;
        }else{
            hcf = a;
        }
        while(true){
            if(a%hcf == 0 && b%hcf == 0){
                return hcf;
            }
            hcf--;
        }
    }
    static int lcm(int a,int b){
        int lcm;
        if(a>b){
            lcm = a;
        }else{
            lcm = b;
        }
        while(true){
        if(lcm%a == 0 && lcm%b == 0 ){
            return lcm;
        }
        lcm++;
        }
    }
}
