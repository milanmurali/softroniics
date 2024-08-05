#include <stdio.h>

void count() {
    static int count = 0;
    count++;
    printf("Function called %d times.\n", count);
}

int main() {
    count(); // Output: Function called 1 times.
    count(); // Output: Function called 2 times.
    count(); // Output: Function called 3 times.
    ///
    return 0;
}
