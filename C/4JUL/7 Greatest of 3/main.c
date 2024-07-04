#include <stdio.h>
int main()
{
    int c;
    printf("Enter the Temparature in C : ");
    scanf("%d", &c);

    if (c > 40)
    {
        printf("%d is Very Hot", c);
    }
    else if (c > 30)
    {
        printf("%d is Hot", c);
    }
    else if (c > 20)
    {
        printf("%d is Normal", c);
    }
    else if (c > 10)
    {
        printf("%d is Cold", c);
    }
    else if (c > 0)
    {
        printf("%d is Very Cold", c);
    }
    else if (c < 0)
    {
        printf("%d is Freezing", c);
    }

    return 0;
}