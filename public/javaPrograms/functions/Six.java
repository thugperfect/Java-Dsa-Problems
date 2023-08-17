package javaPrograms.functions;

import java.util.Scanner;

class Six{
    public static void main(String[] args) {
        Scanner s = new Scanner(System.in);
        int n= s.nextInt();
        int area = area(n);
        int circum = circum(n);
        System.out.println("AREA="+area);
        System.out.println("CIRCUMFERENCE="+circum);
    }
static int area(int r){
    int area = 22/7*r*r;
    return area;
}
static int circum(int r){
    int circum = 2*22/7*r;
    return circum;
}
}