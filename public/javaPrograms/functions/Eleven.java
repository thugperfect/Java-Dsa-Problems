package javaPrograms.functions;

import java.util.Scanner;

//pythagorean triplet are nos 
//that satisfy the pythogores theorem
//input 3 nos
//a^2 = b^2 + c^2
class Eleven{
    public static void main(String[] args) {
        Scanner s = new Scanner(System.in);
        int a = s.nextInt();
        int b = s.nextInt();
        int c = s.nextInt();
        boolean triplet = isTriplet(a, b, c);
System.out.println(triplet);

    }
static boolean isTriplet(int x, int y, int z){
    int a =0,b=0,c=0;
    if(x>y){
        if(x>z){
            a = x;b = y;c = z;
        }else{
            a= z;b = x;c = y;
        }
    }
    else{
        if(y>z){
            a=y;b=x;c = z;
        }
        else{
             a= z;b = x;c = y;
        }
    }
    int a2 = a*a,b2 = b*b,c2=c*c;
    int rhs = b2+c2;
    if(a2 == rhs){
        return true;
    }else{
        return false;
    }

    
}
}