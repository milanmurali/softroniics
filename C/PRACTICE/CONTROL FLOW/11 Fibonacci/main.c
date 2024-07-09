#include <stdio.h>
int main()
{
    int a = 0, b = 1, next, i, n;
    printf("Enter No of Terms : ");
    scanf("%d", &n);
    printf("Fibonacci Series \n");
    printf("%d, %d, ", a, b);
    next = a + b;

    for (i = 3; i <= n; i++)
    {
        printf("%d, ",next);
        a = b;
        b = next;
        next = a + b;
    }
    return 0;
}
