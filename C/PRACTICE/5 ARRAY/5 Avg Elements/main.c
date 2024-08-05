#include <stdio.h>
int main()
{
    int n, i, avg=0;
    printf("Enter the Size of Array : ");
    scanf("%d", &n);
    int arr[n];
    printf("Enter %d Elements : ", n);
    for (i = 0; i < n; i++)
    {
        scanf("%d", &arr[i]);
    }
    for (i = 0; i < n; i++){
        avg = avg + arr[i];
    }
    avg = avg / n;
    printf("Average of Array Elements : %d", avg);
    return 0;
}