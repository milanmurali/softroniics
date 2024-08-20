#include <stdio.h>
#include <string.h>

struct Student
{
    char name[20];
    int age;
    char grade[3];
} students[100];

void create(int n)
{

    for (int i = 0; i < n; i++)
    {
        printf("Enter data for student %d:\n", i + 1);
        printf("Enter Name: ");
        scanf("%s", students[i].name);
        printf("Enter Age: ");
        scanf("%d", &students[i].age);
        printf("Enter Grade : ");
        scanf("%s", students[i].grade);
    }
}

void display(int n)
{
    printf("\n\n");
    printf("Student data:\n");
    for (int i = 0; i < n; i++)
    {
        printf("Name: %s\n", students[i].name);
        printf("Age: %d\n", students[i].age);
        printf("Grade: %s\n\n", students[i].grade);
    }
}
void sort(int n)
{
    for (int i = 0; i < n - 1; i++)
    {
        for (int j = i + 1; j < n; j++)
        {
            if (strcmp(students[i].grade, students[j].grade) > 0)
            {
                struct Student temp = students[i];
                students[i] = students[j];
                students[j] = temp;
            }
        }
    }
}
int main()
{
    int n;
    printf("Enter the Number of Students: ");
    scanf("%d", &n);
    create(n);
    sort(n);
    display(n);

    return 0;
}