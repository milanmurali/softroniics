#include <stdio.h>
#include <string.h>

int main()
{
    int arr[5];
    int new[5];
    int i, j = 0, k;
    printf("Enter the 5 Elements of Array : \n ");

    for (i = 0; i < 5; i++)
    {
        scanf("%d", &arr[i]);
    }
    
    for (i = 0; i <= 5; i = i + 2)
    {
        new[j] = arr[i];
        j++;
    }

    printf("Elements at Even Indices are : ");
    for (k = 0; k < j; k++)
    {
        printf("%d ", new[k]);
    }
    return 0;
}
