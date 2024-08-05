#include <stdio.h>
void main(){
    int n,rev,r;
    printf("Enter a Number : ");
    scanf ("%d",&n);
    while (n>0)
    {
        r=n%10;
        rev=rev*10+r;
        n/=10;

    }
    printf("Reverse : %d",rev);

}
