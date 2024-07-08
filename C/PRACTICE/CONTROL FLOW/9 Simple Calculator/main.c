#include <stdio.h>
#include <conio.h>
int main()
{
    int a, b, c1, c2;
    printf("Enter the First Number : ");
    scanf("%d", &a);
    printf("Enter the Second Number : ");
    scanf("%d", &b);

    do
    {
        printf("\t Simple Calculator \n");
        printf("1. Addition \n");
        printf("2. Subtraction \n");
        printf("3. Multiplication \n");
        printf("4. Division \n");
        printf("5. Exit \n");

        printf("Enter your choice : ");
        scanf("%d", &c1);

        switch (c1)
        {
        case 1:
            printf("%d + %d = %d \n", a, b, a + b);
            getch();
            break;
        case 2:
            printf("%d - %d = %d \n", a, b, a - b);
            getch();
            break;
        case 3:
            printf("%d * %d = %d \n", a, b, a * b);
            getch();
            break;
        case 4:
            printf("%d / %d = %d \n", a, b, a / b);
            getch();
            break;
        case 5:
            printf("BYE BYE \n");
            getch();
            break;
        default:
            printf("Invalid Choice \n");
            break;
        }
    } while (c1 != 5);

    return 0;
}