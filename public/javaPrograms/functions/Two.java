package javaPrograms.functions;

import java.util.Scanner;

class Two{
    public static void main(String[] args) {
        Scanner s = new Scanner(System.in);
        int n = s.nextInt();
        boolean oddoreven = oddOrEven(n);
        if(oddoreven){
            System.out.println("ODD");
        }
        else{
            System.out.println("EVEN");
        }

    }
static boolean oddOrEven(int n){
    if(n%2 ==0){
        return false;
    }
    else{
        return true;
    }
}
}