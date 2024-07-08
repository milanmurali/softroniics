#include <stdio.h>

int main(){
    int amt, rate, time, ci;

    printf("Enter the Amount : ");
    scanf("%d",&amt);
    printf("Enter the Interest Rate : ");
    scanf("%d",&rate);
    printf("Enter the Time : ");
    scanf("%d",&time);

    ci=(amt*rate*time)/100;
    printf("cimple Interest = %d",ci);
}










































