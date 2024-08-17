#include <stdio.h>
#include <string.h>
#include <conio.h>

struct vehicle
{
    char ownername[100];
    char vehiclename[100];
    char model[100];
    int tyre;
};
// array of struct vehicle
struct vehicle vehicles[100];
int count = 0;

void create()
{
    printf("Enter Vehicle Owner Name:  ");
    scanf("%s", vehicles[count].ownername);
    printf("Enter vehicle Name : ");
    scanf("%s", vehicles[count].vehiclename);
    printf("Enter Vehicle Model : ");
    scanf("%s", vehicles[count].model);
    printf("Enter Number of Tyres : ");
    scanf("%d", &vehicles[count].tyre);

    count++;
    printf("New Vehicle Added.\n");
};
void display(int tyre) {
     printf("Vehicles with %d tyres:\n", tyre);
     int dispcount=0;
     for (int i=0; i<count;i++){
        if (vehicles[i].tyre == tyre){
            printf("Owner Name : %s \n",vehicles[i].ownername);
            printf("Vehicle Name : %s \n",vehicles[i].vehiclename);
            printf("Vehicle Model : %s \n",vehicles[i].model);
            printf("Tyres %d \n",vehicles[i].tyre);
            dispcount++;
        }
     }
     if(!dispcount){
        printf("No vehicle found with %d tyres.\n",tyre);
     }
};
int main()
{
    int choice1, choice2;
    do
    {
        printf("\n Vehicle Management System \n");
        printf("1. Create Vehicle\n");
        printf("2. Display Vehicles\n");
        printf("0. Exit\n");
        printf("Enter your choice: ");
        scanf("%d", &choice1);

        switch (choice1)
        {
        case 1:
            create();
            break;
        case 2:
            do
            {
                printf("\nDisplay Vehicles\n");
                printf("1. Two Wheelers\n");
                printf("2. Four Wheelers\n");
                printf("0. Exit\n");
                printf("Enter your choice: ");
                scanf("%d", &choice2);

                switch (choice2)
                {
                case 1:
                    display(2);
                    break;
                case 2:
                    display(4);
                    break;
                case 0:
                    printf("Exiting Menu.\n");
                    break;
                default:
                    printf("Invalid choice.\n");
                }
            } while (choice2 != 0);
            break;
        case 0:
            printf("Exiting Program.\n");
            break;
        default:
            printf("Invalid choice.\n");
        }
    } while (choice1 != 0);

    return 0;
}