//right angle tirangle increment 1
#include <stdio.h>

int main()
{
    int rows, i, j;

    printf("Enter number of rows: ");
    scanf("%d", &rows);

    for (i = 1; i <= rows; i++)
    {
        for (j = rows; j >=i; j--)
        {
            printf("* ");
        }

        printf("\n");
    }
    return 0;
}
