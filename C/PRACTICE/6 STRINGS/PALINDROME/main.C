#include <stdio.h>
#include <string.h>
int main(){
	char str[100];
	char rev[100];
	int len;
	
	printf("Enter String to Check if its a Palindrome: ");
	scanf("%99s",&str);

	len = strlen(str);
	
	for(int i=len-1;i>=0;i--){
        // printf("i=%d \n",i);
        // printf("len-i-1=%d \n",len-i-1);

		rev[len-i-1]=str[i];
	}

	if (strcmp(str, rev) == 0) {
        	printf("Given String is a palindrome.\n");
	} else {
		printf("Given String is not a palindrome.\n");
	}
	return 0;
}