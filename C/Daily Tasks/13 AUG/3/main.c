#include <stdio.h>

int main()
{
    int i, n;
    printf("Enter the Size of the Array: \n ");
    scanf("%d", &n);

    int array[n];
    printf("Enter the %d Elements of Array : \n ", n);
    for (i = 0; i < n; i++)
    {
        scanf("%d", &array[i]);
    }
    for (int i = 0; i < n - 1; i++)
    {
        for (int j = 0; j < n - 1 - i; j++)
        {
            if (array[j] > array[j + 1])
            {
                int temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }

    printf("Largest Element : ");
    printf("%d ", array[n - 1]);

    return 0;
}
