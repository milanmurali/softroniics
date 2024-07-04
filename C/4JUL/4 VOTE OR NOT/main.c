#include <stdio.h>
int main()
{
    int y;
    printf("Enter Birth Year : ");
    scanf("%d", &y);
    if (2024-y>=18)
    {
        printf("Candidate is Eligible for Vote");
    }
    else
    {
        printf("Candidate is  NOT Eligible for Vote");
    }

    return 0;
}