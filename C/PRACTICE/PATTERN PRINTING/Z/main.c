#include <stdio.h>

int main()
{
    int n, i, j;

    printf("Enter number of Rows: ");
    scanf("%d", &n);

    // first line
    for (j = 0; j <= n; j++)
    {
        printf("* ");
    }
    printf("\n");

    // diag
    for (i = n - 1; i >= 1; i--)
    {
        for (j = 1; j <= i; j++)
        {
            printf("  ");
        }
        printf("*  \n");
    }

    // last line
    for (j = 0; j <= n; j++)
    {
        printf("* ");
    }
    printf("\n");

    return 0;
}