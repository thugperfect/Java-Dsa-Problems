package javaPrograms.functions;

import java.util.Scanner;

class Four{
    public static void main(String[] args) {
        Scanner s = new Scanner(System.in);
        int a = s.nextInt();
        int b= s.nextInt();
        int sum = sum(a,b);
        System.out.println("SUM="+sum);
    }
static int sum(int a ,int b){
    return a+b;
}
}