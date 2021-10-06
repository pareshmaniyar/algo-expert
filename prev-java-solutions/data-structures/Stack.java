/* Java program to implement basic Stack1
   operations through arrays*/
class Stack1
{
    static final int MAX = 1000;
    int top;
    int a[] = new int[MAX]; // Maximum size of Stack1

    boolean isEmpty()
    {
        return (top < 0);
    }
    Stack1()
    {
        top = -1;
    }

    boolean push(int x)
    {
        if (top >= MAX)
        {
            System.out.println("Stack1 Overflow");
            return false;
        }
        else
        {
            a[++top] = x;
            return true;
        }
    }

    int pop()
    {
        if (top < 0)
        {
            System.out.println("Stack1 Underflow");
            return 0;
        }
        else
        {
            int x = a[top--];
            return x;
        }
    }
    int peek()
    {
        if(top < 0)
        {
            System.out.println("Peeking an empty Stack1, awesome! ;)");
            return -1;
        }
        else
        {
            int x = a[top];
            return x;
        }
    }
}

// Driver code
class Main
{
    public static void main(String args[])
    {
        Stack1 s = new Stack1();
        s.push(10);
        s.push(20);
        s.push(30);
        System.out.println(s.pop() + " Popped from Stack1");
        System.out.println(s.peek());
        System.out.println(s.pop() + " Popped from Stack1");
    }
}