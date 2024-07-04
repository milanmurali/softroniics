#include <stdio.h>
int main()
{
    int m, n;
    printf("Enter Integer M: ");
    scanf("%d", &m);
    if (m > 0)
    {
        n = 1;
        printf(" N = %d", n);
    }
    else if (m == 0)
    {
        n = 0;
        printf(" N = %d", n);
    }
    else
    {
        n = -1;
        printf(" N = %d", n);
    }

    return 0;
}