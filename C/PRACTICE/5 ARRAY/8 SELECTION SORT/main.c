#include <stdio.h>
int main()
{
    int n, i, j, temp;
    printf("Enter the Size of Array : ");
    scanf("%d", &n);
    int arr[n];
    printf("Enter %d Elements : ", n);
    for (i = 0; i < n; i++)
    {
        scanf("%d", &arr[i]);
    }
    printf("Given Array : ");
    for (i = 0; i < n; i++)
    {
        printf("%d ", arr[i]);
    }
    printf("\n");
    for (i = 0; i < n; i++)
    {
        for (j = i + 1; j < n; j++)
        {
            if (arr[j] < arr[i])
            {
                temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    printf("Sorted Array : ");
    for (i = 0; i < n; i++) 
    {
        printf("%d ", arr[i]);
    }
}
