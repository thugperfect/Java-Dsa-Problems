package javaPrograms.functions;

import java.util.Scanner;

class Ten{
    public static void main(String[] args) {
       Scanner s= new Scanner (System.in);
       int n = s.nextInt();
       boolean pal = isPalindrome(n);
       System.out.println(pal);
    }
static boolean isPalindrome(int n){
    int sep,clone =n,rev =0;
    while(clone>0){
        sep  = clone%10;
        clone/=10;
        rev = rev*10+sep;
    }
    if(n==rev){
        return true;
    }
    else{
        return false;
    }
    
}
}