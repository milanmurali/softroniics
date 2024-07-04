#include <stdio.h>
int main()
{
    int a, b;
    printf("Enter First Number:");
    scanf("%d", &a);
    printf("Enter Second number:");
    scanf("%d", &b);
    if (a==b)
    {
        printf("%d & %d are Equal",a,b);
    }
    else
    {
        printf("%d & %d are Not Equal",a,b);
    }

    return 0;
}