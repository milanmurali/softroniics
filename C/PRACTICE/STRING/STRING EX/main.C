#include <stdio.h>
#include <string.h>
int main()
{

    char a[100];
    char b[100];
    int len;
    printf("\n Enter First string : ");
    scanf("%s", a);

    len = strlen(a);
    printf("\n Length of First String : %d", len);

    printf("\n Enter Second string : ");
    scanf("%s", b);

    if (strcmp(a, b) == 0)
        printf("\n Strings are equal");
    else
        printf("\n Strings are not equal");

    strcat(a, b);
    printf("\n Concatenated String : %s", a);

    printf("\n Lowercase String is: %s", strlwr(a));
    printf("\n Uppercase String is: %s", strupr(a));


    return 0;
}