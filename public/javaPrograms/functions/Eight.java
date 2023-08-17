package javaPrograms.functions;

import java.util.Scanner;

class Eight {
    public static void main(String[] args) {
        
Scanner s = new Scanner(System.in);
int n = s.nextInt();
String grade = grade(n);
System.out.println(grade);
        
    }
static String grade(int marks){
    String one = "O";
    String two = "A+";
    String three = "A";
    String four = "B+";
    String five = "B";
    String six = "U";
    String invalid  = "invalid input";
    if(marks>=90){
        return one;
    }
    else if(marks>80&& marks<90){
        return two;
    }
   else if(marks>70&& marks<80){
        return three;
    }
    else if(marks>60&& marks<70){
        return four;
    }
    else if(marks>50&& marks<60){
        return five;
    }
   else if(marks<50){
    return six;
   }
   else{
return invalid;
   }

}
}