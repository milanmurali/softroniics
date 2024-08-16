#include <stdio.h>

int main()
{
    int n, i, j, k = 0;

    printf("Enter the Size of the Array: \n ");
    scanf("%d", &n);

    int arr[n];
    int brr[n];

    printf("Enter the %d Elements of Array : \n ", n);
    for (i = 0; i < n; i++)
    {
        scanf("%d", &arr[i]);
    }

    for (i = 0; i < n; i++)
    {
        for (j = 0; j < i; j++)
        {
            if (arr[i] == arr[j])
            {
                break;
            }
        }
        if (j == i)
        {
            brr[k] = arr[i];
            k++;
        }
    }
    printf("Array after Duplicate Deletion : ");
    for (i = 0; i < k; i++)
    {
        printf(" %d,", brr[i]);
    }

    return 0;
}