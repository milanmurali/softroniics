#include <stdio.h>
int main()
{   
    int a, b, temp=0;
    printf("Enter the First Number : ");
    scanf("%d",&a);
    printf("Enter the Second Number : ");
    scanf("%d",&b);
    temp=a;
    a=b;
    b=temp;
        printf("First Number = %d \n Second Number = %d",a,b);

    return 0;
}