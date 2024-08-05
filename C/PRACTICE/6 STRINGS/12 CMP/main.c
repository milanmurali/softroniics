#include <stdio.h>
#include <string.h>
int main()
{

    char a[100];
    char b[100];
    printf("\n Enter First string : ");
    scanf("%s", a);
    printf("\n Enter Second string : ");
    scanf("%s", b);
    if (strcmp(a, b) == 0)
        printf("\n Strings are Equal");
    else
        printf("\n Strings are Not Equal");

    return 0;
}
