#include <stdio.h>
int main()
{
    int a, b, c;
    printf("Enter the First Number : ");
    scanf("%d", &a);
    printf("Enter the Second Number : ");
    scanf("%d", &b);
    printf("Enter the Third Number : ");
    scanf("%d", &c);

    if (a > b && a > c)
    {
        printf("Largest Number : %d", a);
    }
    else if (b > a && b > c)
    {
        printf("Largest Number : %d", b);
    }
    else
    {
        printf("Largest Number : %d", c);
    }

    return 0;
}