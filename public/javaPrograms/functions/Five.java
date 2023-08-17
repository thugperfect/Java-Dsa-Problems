package javaPrograms.functions;

import java.util.Scanner;

class Five{
  
        public static void main(String[] args) {
            Scanner s = new Scanner(System.in);
            int a = s.nextInt();
            int b= s.nextInt();
            int mul = mul(a,b);
            System.out.println("MUL="+mul);
        }
    static int mul(int a ,int b){
        return a*b;
    }
    }
