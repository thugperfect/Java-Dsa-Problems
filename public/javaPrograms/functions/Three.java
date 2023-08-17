package javaPrograms.functions;

import java.util.Scanner;

class Three{
    public static void main(String[] args) {
        Scanner s = new Scanner(System.in);
        int n =  s.nextInt();
        boolean vote = vote(n);
        if(vote){
            System.out.println("HE CAN VOTE");
        }else{
            System.out.println("NO,HE CAN'T");
        }
    }
    static boolean vote(int n){
        if(n>=18){
            return true;
        }else{
            return false;
        }
    }
}