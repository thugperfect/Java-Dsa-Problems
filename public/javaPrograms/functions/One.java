package javaPrograms.functions;

import java.util.Scanner;

class One{
    public static void main(String[] args) {
        Scanner s = new Scanner (System.in);
        int a = s.nextInt();
        int b = s.nextInt();
        int c = s.nextInt();
        int min = min(a,b,c);
        int max = max(a,b,c);
        System.out.println("MIN:"+min);
        System.out.println("MAX:"+max);
    }
    static int max(int a,int b,int c){
        if(a>b){
            if(a>c){
                return a;
            }
            else{
                return c;
            }
        }else{
            if(b>c){
                return b;
            }
            else{
                return c;
            }
        }
    }
     static int min(int a,int b,int c){
        if(a<b){
            if(a<c){
                return a;
            }
            else{
                return c;
            }
        }else{
            if(b<c){
                return b;
            }
            else{
                return c;
            }
        }
    }
}