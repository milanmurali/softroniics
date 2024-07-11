//inverted left half triangle
#include <stdio.h>

int main()
{
    int n, i, j, s;

    printf("Enter number of rows: ");
    scanf("%d", &n);

    for (i = 0; i <= n; i++)
    {
        for (s = 0; s <= n; s++)
        {
            printf("s");

            for (j = n; j >= i; j--)
            {
                printf("*");
            }
        }
        printf("\n");
    }
    return 0;
}
