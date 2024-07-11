// inverted full pyramid
#include <stdio.h>

int main()
{
    int n, i, j, s;

    printf("Enter number of rows: ");
    scanf("%d", &n);

    for (i = 1; i <= n; i++)
    {
        for (s = 0; s <= i; s++)
        {
            printf(" ");
        }
        for (j = n; j >= i; j--)
        {
            printf("* ");
        }

        printf("\n");
    }
    return 0;
}
