#include <stdio.h>

int main()
{
    int n, i, j;

    printf("Enter number of Rows: ");
    scanf("%d", &n);

    for (i = n; i >= 0; i--)
    {
        for (j = 0; j <= n - i; j++)
        {
            printf(" ");
        }
        for (j = 0; j <= i; j++)
        {
            printf("* ");
        }

        printf("\n");
    }

    for (i = 2; i <= n; i++)
    { 
        for (j = 0; j <= n - i + 1; j++)
        {
            printf(" ");
        }
        for (j = 0; j < i; j++)
        {
            printf("* ");
        }
        printf("\n");
    }
    return 0;
}
