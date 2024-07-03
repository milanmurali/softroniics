#include <stdio.h>

int main()
{
    float n,c;
    printf("Enter the fahrenheit value:");
    scanf("%f", &n);
    c=(n-32)*5/9;
    printf("Converted value: %f",c);

    return 0;
}