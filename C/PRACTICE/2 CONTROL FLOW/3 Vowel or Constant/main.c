#include <stdio.h>

int main()
{
    char n;
    printf("Enter a Letter : ");
    scanf("%c", &n);

    if (n == 'a' || n == 'A' ||
        n == 'e' || n == 'E' ||
        n == 'i' || n == 'I' ||
        n == 'o' || n == 'O' ||
        n == 'u' || n == 'U')
    {
        printf("%c is a vowel.\n", n);
    }
    else {
        printf("%c is a consonant.\n", n);
    }
return 0;
}