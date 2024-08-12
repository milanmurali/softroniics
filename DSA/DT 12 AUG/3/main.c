#include <stdio.h>
#include <string.h>

int main()
{
    int arr[5];
    int i, s ;
    printf("Enter the 5 Elements of Array : \n ");
    for (i = 0; i < 5; i++)
    {
        scanf("%d", &arr[i]);
    }

    printf("Enter Element to Search: \n ");
    scanf("%d", &s);
    for (i = 0; i < 5; i++) {
        if (arr[i] == s) {
            printf("%d is present at Index %d\n", s, i);
        }
    }

    return 0;
}