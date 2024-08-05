#include <stdio.h>
#include <math.h>
int main()
{
    float amt, rate, time, ci;
    printf("Enter Principal Amount :");
    scanf("%f", &amt);
    printf("Enter Rate of Interest:");
    scanf("%f", &rate);
    printf("Enter Time in Years:");
    scanf("%f",&time);

    ci = amt * pow((1 + rate / 100), time) - amt;
    printf("compound interest is %f:", ci);

    return 0;
}