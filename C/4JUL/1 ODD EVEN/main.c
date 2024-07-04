#include <stdio.h>
int main()
{
    int n=0;
    printf("Enter  a Number:");
    scanf("%d",&n);
    if(n%2==0)
      {
        printf("Number is even");
      }
      else{
        printf("Number is odd");
      }

      return 0;
}