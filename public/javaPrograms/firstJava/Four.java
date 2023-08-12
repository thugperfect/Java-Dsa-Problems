 
package javaPrograms.firstJava;
import java.util.*;
public class Four {
public static void main(String[] args) {
Scanner s = new Scanner(System.in);
while(true){
    System.out.print("Enter two no's :");
    int n1 = s.nextInt();
    int n2 = s.nextInt();
    System.out.print("set operator :");
    char op =s.next().charAt(0);
    if(op == '+'){
        System.out.println(n1+""+op+""+n2+"="+(float)(n1+n2));
    }
    else if(op == '-'){
        System.out.println(n1+""+op+""+n2+"="+(float)(n1-n2));
    }
    else if(op == '*'){
        System.out.println(n1+""+op+""+n2+"="+(float)(n1*n2));
    }
    else if(op == '/'){
        System.out.println(n1+""+op+""+n2+"="+(float)(n1/n2));
    }
    else{
        System.out.println("operator invalid");
    }
}
     
        
}
}
