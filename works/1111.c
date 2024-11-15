#include <stdio.h>
#include <string.h>

int main()
{
    char input[] = "Hello,Rabbit,Balloon,Cat";
    int ipsize = strlen(input);
    int arr[10];
    char temp;
    for (int i = 0; i <= ipsize; i++)
    {
        if (input[i] != ',')
        {
            temp += input[i];
        }
            printf("%c",temp);
    }
    return 0;
}