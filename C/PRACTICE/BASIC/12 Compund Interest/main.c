#include <stdio.h>

int main(){
    int amt, rate, time, si;

    printf("Enter the Amount : ");
    scanf("%d",&amt);
    printf("Enter the Interest Rate : ");
    scanf("%d",&rate);
    printf("Enter the Time : ");
    scanf("%d",&time);

    si=(amt*rate*time)/100;
    printf("Simple Interest = %d",si);
}










































