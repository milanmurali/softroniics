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
        printf("Numbers are Equal");
    }
    else
    {
        printf("Numbers are Not Equal");
    }

    return 0;
}