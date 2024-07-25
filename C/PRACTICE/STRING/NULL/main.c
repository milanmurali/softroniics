#include <stdio.h>

int main()
{
    int i = 0, count = 0;
    char s[11] = "javatpoint";
    
    while (s[i] != '\0') {
        if (s[i] == 'a' || s[i] == 'e' || s[i] == 'i' || s[i] == 'o' || s[i] == 'u') {
            count++;
        }
        i++;
    }
    
    printf("The number of vowels is %d\n", count);
    
    return 0;
}
