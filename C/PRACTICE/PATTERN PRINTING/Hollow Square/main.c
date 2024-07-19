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

    // mid
    for (i = 0; i <= n - 1; i++)
    {
        for (j = 0; j <= n; i++)
        {
            if (j == 0 || j == n)
                printf("* ");
            else
                printf(" ");
        }
            printf("\n");
    }


    // last line
    for (j = 0; j <= n; j++)
    {
        printf("* ");
    }
    return 0;
}
