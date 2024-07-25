#include <stdio.h>
int main()
{
    int n, i, j, temp, s, found;
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
    printf("Enter Element to Search : ");
    scanf("%d", &s);
    for (i = 0; i < n; i++)
    {
        if (s == arr[i])
        {
            printf("%d found at %d th position ", s, i + 1);
            found = 1;
            break;
        }
    }
    if (!found)
    {
        printf("%d not found in array ", s);
    }

    return 0;
}
