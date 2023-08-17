package javaPrograms.functions;

import java.util.Scanner;

class Seven{
    public static void main(String[] args) {

        Scanner s = new Scanner(System.in);
        int n = s.nextInt();
        fib(n);
        System.out.println(" ");
        fibb(n);
    }
static void fib(int n){
    int a =0;
    int b = 1,i;
    System.out.print(b+" ");
    for(i= 0;i<n;i++){
        int c = a+b;
        a=b;b=c;
        System.out.print(c+" ");
    }
}



}