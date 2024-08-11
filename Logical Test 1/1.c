#include <stdio.h>
#include <string.h>

int main()
{
    char s[100];
    int len;
    char ch;
    printf("\n Enter the String : ");
    scanf("%[^\n]%*c", s);
    
    printf("\n Enter the Charecter to Delete from the String : ");
    scanf(" %c", &ch);
    len = strlen(s);

    for (int i = 0; i <= len - 1; i++)
    {
        if (s[i] != ch)
        {
            printf("%c", s[i]);
        }
    }

    return 0;
}