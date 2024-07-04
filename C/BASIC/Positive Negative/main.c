#include <stdio.h>
int main()
{
    int num;
    printf("Enter a Number : ");
    scanf("%d",&num);
    if (num>0) {
        printf("The Number %d is positive",num);        
    }
    else {
        printf("The Number %d is Negative",num);
    }
return 0;
}