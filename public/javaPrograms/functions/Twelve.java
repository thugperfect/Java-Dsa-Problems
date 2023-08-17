package javaPrograms.functions;

import java.util.Scanner;

class Twelve{
public static void main(String[] args) {
    Scanner s = new Scanner(System.in);
    int min = s.nextInt();
    int max = s.nextInt();
    for(int i = min;i<=max;i++){
 prime(i);
    }
   
}
static void prime(int a){
 int flag = 0;
for(int i = 2;i<a/2;i++){
   
    if(a%i == 0){
        flag = 0;
        break;
    }
    else{
        flag = 1;
    }  
}
 if(a == 2||a==3||a==5||flag ==1){
        System.out.print(a+" ");
    }

}
}