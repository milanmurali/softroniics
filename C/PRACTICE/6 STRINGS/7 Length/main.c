#include <stdio.h>
#include <string.h>
int main()
{

    char a[100];
    char b[100];
    int len;

    printf("\n Enter First string : ");
    scanf("%s", a);
    printf("\n Enter Second string : ");
    scanf("%s", b);
    len = strlen(a);
    printf("\n Length of First String : %d", len);

    return 0;
}