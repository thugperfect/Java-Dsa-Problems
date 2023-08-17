package javaPrograms.functions;

import java.util.Scanner;

class Seven{
    public static void main(String[] args) {

        Scanner s = new Scanner(System.in);
        int n = s.nextInt();
        boolean isPrime = isPrime(n);
        System.out.println(isPrime);
       
    }
static boolean isPrime(int n){
    boolean isPrime=false;
    if(n==0||n==1){
        isPrime = false;
        return isPrime;
    }else{
for(int i =2;i<n/2;i++){   
        if(n%i==0){
            isPrime = false;
            break; //important...
         
        }
        else{
            isPrime = true;
            
        }
    }
    }
    if(n==2||n==3||n==5){
        isPrime = true;
        return isPrime;
    }
    return isPrime;
}



}