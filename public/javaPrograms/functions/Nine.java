package javaPrograms.functions;

import java.util.Scanner;

class Nine{
    public static void main(String[] args) {
        Scanner s = new Scanner(System.in);
        int n = s.nextInt();
        int fact = factorial(n);
        System.out.println(fact);
    }
static int factorial(int n){
    int mul = 1,i;
    for(i=n;i>0;i--){
        mul = mul*i;
    }
    return mul;
}
}