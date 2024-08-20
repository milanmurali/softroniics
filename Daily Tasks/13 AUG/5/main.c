#include <stdio.h>

#define MAX_SIZE 10

int queue[MAX_SIZE];
int front = -1;
int rear = -1;

void enqueue(int value)
{
    if (rear == MAX_SIZE - 1)
    {
        printf("Queue is full\n");
        return;
    }
    queue[++rear] = value;
}

void dequeue()
{
    if (front == rear)
    {
        front = -1;
        rear = -1;
        return;
    }
    front++;
}

int main()
{
    int choice, value;

    do
    {
        printf("1. Enqueue\n");
        printf("2. Dequeue\n");
        printf("3. Display\n");
        printf("4. Exit\n");
        scanf("%d", &choice);
        switch (choice)
        {
        case 1:
            printf("Enter value: ");
            scanf("%d", &value);
            enqueue(value);
            break;
        case 2:
            dequeue();
            break;
        case 3:
            printf("Queue elements: ");
            for (int i = front + 1; i <= rear; i++)
            {
                printf("%d ", queue[i]);
            }
            printf("\n");
            break;
        case 4:
            return 0;
        default:
            printf("Invalid choice\n");
        }
    } while (1);
    return 0;
}