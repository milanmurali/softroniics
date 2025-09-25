#include <stdio.h>

int main()
{
    int n, i, j, k = 0;

    printf("Enter the Size of the Array: \n ");
    scanf("%d", &n);

    int arr[n];

    printf("Enter the %d Elements of Array : \n ", n);
    for (i = 0; i < n; i++)
    {
        scanf("%d", &arr[i]);
    }
    printf("Duplicated Elements are :");

    for (i = 0; i < n; i++)
    {
        for (j = i + 1; j < n; j++)
        {
            if (arr[i] == arr[j])
            {
                printf(" %d, ", arr[i]);
                break;
            }
        }
    }

    return 0;
}