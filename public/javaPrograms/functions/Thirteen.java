package javaPrograms.functions;

import java.util.Scanner;

class Thirteen{
    public static void main(String[] args) {
        Scanner s = new Scanner(System.in);
        int limit = s.nextInt();
        int sum = sum(limit);
        System.out.println("SUM="+sum);

    }
    static int sum(int n){
        int sum = 0;
        for(int i = 0;i<=n;i++){
            sum = sum+i;
        }
        return sum;
    }
}