#include <stdio.h>

int main()
{
    int rows, i, j;

    printf("Enter number of rows: ");
    scanf("%d", &rows);

    for (i = 0; i < rows; i++)
    {
        for (int j = 0; j < rows - i; j++)
        {
            printf(" ");
        }
        for (int j = 0; j < i; j++)
        {

            printf("%c ", 'A' + j);
        }
        printf("\n");
    }
    // butt
    for (i = 0; i <= rows - 1; i++)
    {
        for (j = 0; j < i; j++)
        {
            printf(" ");
        }
        for (j = 0; j < rows - i; j++)
        {
            printf("%c ", 'A' + i + j);
        }

        printf("\n");
    }
    return 0;
}