#include <stdio.h>
int main()
{
    int num, Prime = 1, div;
    printf("Enter a Number : ");
    scanf("%d", &num);

    if (num <= 1)
        Prime = 0;
    else
    {
        div = num / 2;
        while (div > 1)
        {
            if (num % div == 0)
            {
                Prime = 0;
                break;
            }
            div--;
        }
    }
    if (Prime)
        printf("%d is a Prime Number", num);
    else
        printf("%d is not a Prime Number", num);
    
return 0;
}