#include <stdio.h>
void main(){
    int n,i,sum=0;
    printf("Enter a Limit : ");
    scanf ("%d",&n);
    for (i = 0; i <=n; i++)
    {
      sum=sum+i;
    }
    printf("SUM = %d ",sum);

}