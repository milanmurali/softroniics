#include <stdio.h>
#include <string.h>

int main()
{
    char s[100];
    int len,rep=0;
    char ch;
    printf("\n Enter the String : ");
    scanf("%[^\n]%*c", s);
    
    printf("\n Enter the Charecter to Count Occurences : ");
    scanf(" %c", &ch);
    len = strlen(s);

    for (int i = 0; i <= len - 1; i++)
    {
        if (s[i] == ch)
        {
            rep++;
        }
    }
    printf("Occurences : %d",rep);
    return 0;
}