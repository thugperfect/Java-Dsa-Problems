//Find Ncr & Npr
package javaPrograms.conditionalsAndLoops;

import java.util.Scanner;

//npr=n!/(n-r)!
//ncr = n!/(n-r)!*r!
public class Fifteen {
    public static void main(String[] args) {
        Scanner s = new Scanner(System.in);
        System.out.print("Enter n :");
        int n = s.nextInt();
        System.out.print("Enetr r :");
        int r = s.nextInt();
       long p = p(n,r);
       long c= c(n,r);
       System.out.println(n+"P"+r+"="+p);
       System.out.println(n+"C"+r+"="+c);
    }
    static long p(int n,int r){
        long nf = factorial(n);
        int nr = n-r;
        long nrf = factorial(nr);
        long ans = nf/nrf;
        return ans;
    }
       static long c(int n,int r){
        long nf = factorial(n);
        int nr = n-r;
        long nrf = factorial(nr);
        long rf = factorial(r);
        long ans = nf/(nrf*rf);
        return ans;
    }
    static long factorial(int n){
        long mul = 1;
        for(int i = 1;i<=n;i++){
            mul = mul*i;
        }
        return mul;
    }
}
