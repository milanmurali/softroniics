#include <stdio.h>
#include <string.h>

struct Book
{
    char name[100];
    char author[100];
    float price;
};
struct Book Books[100];
int bookcount = 0;

struct User
{
    char name[100];
    int age;
    char place[100];
    char uusername[100];
    char upassword[100];
};
struct User Users[100];
int usercount = 0;

void addbook()
{
    printf("Enter Book Name : ");
    scanf(" %[^\n]", Books[bookcount].name);
    printf("Enter Book Author: ");
    scanf(" %[^\n]", Books[bookcount].author);
    printf("Enter Book Price : ");
    scanf("%f", &Books[bookcount].price);
    bookcount++;
    printf("Book Added Successfully!\n");
};

void displaybooks()
{
    if (bookcount == 0)
    {
        printf("No Books Available.\n");
    }
    else
    {
        for (int i = 0; i < bookcount; i++)
        {
            printf("Book No : %d \n", i + 1);
            printf("Book Name : %s \n", Books[i].name);
            printf("Book Author : %s \n", Books[i].author);
            printf("Book Price : %.2f \n", Books[i].price);
        }
    }
};

void updatebook()
{
    int bookno;
    if (bookcount == 0)
    {
        printf("No books Available to Update.\n");
        return;
    }
    else
    {
        printf("Enter the Book Number to Update : ");
        scanf("%d", &bookno);
        if (bookno < 1 || bookno > bookcount)
        {
            printf("Invalid Book Number.\n");
            return;
        }
        else
        {
            printf("Enter New Book Name : ");
            scanf(" %[^\n]", Books[bookno - 1].name);
            printf("Enter New Book Author : ");
            scanf(" %[^\n]", Books[bookno - 1].author);
            printf("Enter New Book Price : ");
            scanf("%f", &Books[bookno - 1].price);
            printf("Book Updated Successfully!\n");
        }
    }
};

void deletebook()
{
    int bookno;

    if (bookcount == 0)
    {
        printf("No Books available to Delete.\n");
        return;
    }
    else
    {
        printf("Enter the Book Number to Delete : ");
        scanf("%d", &bookno);
        if (bookno < 1 || bookno > bookcount)
        {
            printf("Invalid book Number.\n");
            return;
        }
        else
        {
            for (int i = bookno - 1; i < bookcount - 1; i++)
            {
                Books[i] = Books[i + 1];
            }
            bookcount--;
        }
        printf("Book Deleted Successfully!\n");
    }
};

void searchbook()
{
    char sname[100];
    int flag = 0;

    if (bookcount == 0)
    {
        printf("No Books Available to Search.\n");
        return;
    }

    else
    {
        printf("Enter Book Name to Search : ");
        scanf(" %[^\n]", sname);

        for (int i = 0; i < bookcount; i++)
        {
            if (strcmp(Books[i].name, sname) == 0)
            {
                printf("Book Found.\n");
                printf("Book Name : %s\n", Books[i].name);
                printf("Book Author : %s\n", Books[i].author);
                printf("Book Price : %.2f\n", Books[i].price);
                flag = 1;
                break;
            }
        }
        if (!flag)
        {
            printf("Book Not Found.\n");
        }
    }
};

void userregister()
{
    printf("Enter Name : ");
    scanf(" %[^\n]", Users[usercount].name);
    printf("Enter Age : ");
    scanf("%d", &Users[usercount].age);
    printf("Enter Place : ");
    scanf(" %[^\n]", Users[usercount].place);
    printf("Enter Username : ");
    scanf("%s", Users[usercount].uusername);
    printf("Enter Password : ");
    scanf("%s", Users[usercount].upassword);
    usercount++;
    printf("User Registered Successfully!\n");
};

void userlogin()

{
    char username[100];
    char password[100];
    int choice;
    int flag = 0;

    printf("Enter Username: ");
    scanf("%s", username);
    printf("Enter Password: ");
    scanf("%s", password);

    for (int i = 0; i < usercount; i++)
    {
        if (strcmp(Users[i].uusername, username) == 0 && (strcmp(Users[i].upassword, password) == 0))
        {
            printf("Login Successful! Welcome %s \n", Users[i].name);

            do
            {
                printf("\n--- User Menu ---\n");
                printf("1. Display Books\n");
                printf("2. Search Book\n");
                printf("0. Exit\n");
                printf("Enter your Choice: ");
                scanf("%d", &choice);
                switch (choice)
                {
                case 1:
                    displaybooks();
                    break;
                case 2:
                    searchbook();
                    break;
                case 0:
                    printf("BYE!\n");
                    break;
                default:
                    break;
                }
            } while (choice != 0);
            flag = 1;
            break;
        }
    }
    if (!flag)
    {
        printf("Invalid Username or Password!\n");
    }
}

void adminmenu()
{
    char ausername[100] = {"admin"};
    char apassword[100] = {"admin"};
    char username[100];
    char password[100];
    int choice;

    printf("Enter Username: ");
    scanf("%s", username);
    printf("Enter Password: ");
    scanf("%s", password);

    if (strcmp(ausername, username) == 0 && strcmp(apassword, password) == 0)
    {
        do
        {
            printf("\n--- Admin Menu ---\n");
            printf("1. Add Book\n");
            printf("2. Display Books\n");
            printf("3. Update Book\n");
            printf("4. Delete Book\n");
            printf("0. Exit\n");
            printf("Enter your Choice : ");
            scanf("%d", &choice);
            switch (choice)
            {
            case 1:
                addbook();
                break;
            case 2:
                displaybooks();
                break;
            case 3:
                updatebook();
                break;
            case 4:
                deletebook();
                break;
            case 0:
                printf("BYE!\n");
                break;
            default:
                printf("Invalid Choice. Please try again.\n");
            }
        } while (choice != 0);
    }
    else
    {
        printf("Invalid Username or Password! ");
    }
};

void usermenu()
{
    int choice;

    do
    {
        printf("\n--- User Menu ---\n");
        printf("1. Registration\n");
        printf("2. Login\n");
        printf("3. Exit\n");
        printf("Enter your choice : ");
        scanf("%d", &choice);

        switch (choice)
        {
        case 1:
            userregister();
            break;
        case 2:
            userlogin();
            break;
        case 3:
            printf("BYE!\n");
            break;
        default:
            printf("Invalid choice. Please try again.\n");
        }
    } while (choice != 3);
};

int main()
{
    int c1;
    do
    {
        printf("\n Select Menu \n");
        printf("1. Admin\n");
        printf("2. User\n");
        printf("0. Exit\n");
        printf("Enter your choice: ");
        scanf("%d", &c1);

        switch (c1)
        {
        case 1:
            adminmenu();
            break;
        case 2:
            usermenu();
            break;
        case 0:
            printf("Bye!\n");
            break;
        default:
            printf("Invalid Choice.\n");
        }
    } while (c1 != 0);
    return 0;
}