#include <stdio.h>

int main() {
    int length, width, area, peri;
    printf("Enter the length of the rectangle : ");
    scanf("%d", &length);

    printf("Enter the width of the rectangle: ");
    scanf("%d", &width);
    
    area = length * width;
    peri = 2 * (length + width);    

    printf("The area of the rectangle is: %d\n", area);
    printf("The perimeter of the rectangle is: %d\n", peri);

    return 0;
}
