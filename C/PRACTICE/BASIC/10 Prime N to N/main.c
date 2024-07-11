#include <stdio.h>

int main() {
    int num, prime = 1, div;
    int low, high;

    printf("Enter a Lower Limit: ");
    scanf("%d", &low);

    printf("Enter a Upper Limit: ");
    scanf("%d", &high);

    if (low <= 1) {
        printf("Lower Limit should be greater than 1! ");
    } else {
        for (num = low; num <= high; num++) {
            prime = 1;
            for (div = 2; div >= 2 && div <= num / 2; div++) {
                if (num % div == 0) {
                    prime = 0;
                    break;
                }
            }

            if (prime) {
                printf(" %d,", num);
            }
        }
    }

    return 0;
}
