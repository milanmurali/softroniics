#include <stdio.h>
int main()
{
    int h;
    printf("Enter the height in Cm : ");
    scanf("%d", &h);

    if (h >= 195)
    {
        printf("The person is Very Tall.\n");
    }
    else if (h >= 150)
    {
        printf("The person is Tall \n");
    }
    else if (h < 150)
    {
        printf("The person is Short.\n");
    }
    return 0;
}