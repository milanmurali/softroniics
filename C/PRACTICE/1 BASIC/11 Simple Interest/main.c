#include <stdio.h>

int main(){
    float amt, rate, time, si;

    printf("Enter the Amount : ");
    scanf("%f",&amt);
    printf("Enter the Interest Rate : ");
    scanf("%f",&rate);
    printf("Enter the Time : ");
    scanf("%f",&time);

    si=(amt*rate*time)/100;
    printf("Simple Interest = %f",si);
}