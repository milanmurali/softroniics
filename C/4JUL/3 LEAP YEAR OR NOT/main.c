#include <stdio.h>
int main()
{
    int y;
    printf("Enter Year:");
    scanf("%d", &y);
    if (y%4==0)
    {
        printf("%d is a Leap Year",y);
    }
    else
    {
        printf("%d is a Not a Leap Year",y);
    }

    return 0;
}