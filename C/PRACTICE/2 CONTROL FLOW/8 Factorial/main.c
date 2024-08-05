#include <stdio.h>

int main()
{
    int i, fac, n;

    printf("Enter a Number : ");
    scanf("%d", &n);
    fac = n;
    for (i = n - 1; i >= 1; i--)
    {
        fac = fac * i;
    }
    printf("Factorial of %d = %d", n, fac);
    return 0;
}
