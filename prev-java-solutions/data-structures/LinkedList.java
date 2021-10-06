// A complete working Java program to demonstrate all insertion methods
// on linked list
class LinkedList
{
    Node head; // head of list

    /* Linked list Node*/
    class Node
    {
        int data;
        Node next;
        Node(int d) {data = d; next = null; }
    }

    /* Inserts a new Node at front of the list. */
    public void push(int new_data)
    {
		/* 1 & 2: Allocate the Node &
				Put in the data*/
        Node new_node = new Node(new_data);

        /* 3. Make next of new Node as head */
        new_node.next = head;

        /* 4. Move the head to point to new Node */
        head = new_node;
    }
    /* Inserts a new node after the given prev_node. */
    public void insertAfter(Node prev_node, int new_data)
    {
        /* 1. Check if the given Node is null */
        if (prev_node == null)
        {
            System.out.println("The given previous node cannot be null");
            return;
        }

		/* 2 & 3: Allocate the Node &
				Put in the data*/
        Node new_node = new Node(new_data);

        /* 4. Make next of new Node as next of prev_node */
        new_node.next = prev_node.next;

        /* 5. make next of prev_node as new_node */
        prev_node.next = new_node;
    }
    /* Appends a new node at the end. This method is
    defined inside LinkedList class shown above */
    public void append(int new_data)
    {
		/* 1. Allocate the Node &
		2. Put in the data
		3. Set next as null */
        Node new_node = new Node(new_data);

		/* 4. If the Linked List is empty, then make the
			new node as head */
        if (head == null)
        {
            head = new Node(new_data);
            return;
        }

		/* 4. This new node is going to be the last node, so
			make next of it as null */
        new_node.next = null;

        /* 5. Else traverse till the last node */
        Node last = head;
        while (last.next != null)
            last = last.next;

        /* 6. Change the next of last node */
        last.next = new_node;
        return;
    }
    /* This function prints contents of linked list starting from
        the given node */
    public void printList()
    {
        Node tnode = head;
        while (tnode != null)
        {
            System.out.print(tnode.data+" ");
            tnode = tnode.next;
        }
    }
    /* Given a key, deletes the first occurrence of key in linked list */
    void deleteNode(int key)
    {
        // Store head node
        Node temp = head, prev = null;

        // If head node itself holds the key to be deleted
        if (temp != null && temp.data == key)
        {
            head = temp.next; // Changed head
            return;
        }

        // Search for the key to be deleted, keep track of the
        // previous node as we need to change temp.next
        while (temp != null && temp.data != key)
        {
            prev = temp;
            temp = temp.next;
        }

        // If key was not present in linked list
        if (temp == null) return;

        // Unlink the node from linked list
        prev.next = temp.next;
    }
    void deleteNodeByPostion(int position)
    {
        // If linked list is empty
        if (head == null)
            return;

        // Store head node
        Node temp = head;

        // If head needs to be removed
        if (position == 0)
        {
            head = temp.next;   // Change head
            return;
        }

        // Find previous node of the node to be deleted
        for (int i=0; temp!=null && i<position-1; i++)
            temp = temp.next;

        // If position is more than number of nodes
        if (temp == null || temp.next == null)
            return;

        // Node temp->next is the node to be deleted
        // Store pointer to the next of node to be deleted
        Node next = temp.next.next;

        temp.next = next;  // Unlink the deleted node from list
    }

    public int getCount()
    {
        Node temp = head;
        int count = 0;
        while (temp != null)
        {
            count++;
            temp = temp.next;
        }
        return count;
    }

    public int getCountRec(Node node)
    {
        // Base case
        if (node == null)
            return 0;

        // Count is this node plus rest of the list
        return 1 + getCountRec(node.next);
    }

    /* Wrapper over getCountRec() */
    public int getCountRecWrapper()
    {
        return getCountRec(head);
    }

    public boolean search(Node head, int x)
    {
        Node current = head;    //Initialize current
        while (current != null)
        {
            if (current.data == x)
                return true;    //data found
            current = current.next;
        }
        return false;    //data not found
    }

    public boolean searchRec(Node head, int x)
    {
        // Base case
        if (head == null)
            return false;

        // If key is present in current node,
        // return true
        if (head.data == x)
            return true;

        // Recur for remaining list
        return search(head.next, x);
    }

    /* Takes index as argument and return data at index*/
    public int GetNth(int index)
    {
        Node current = head;
        int count = 0; /* index of Node we are
                          currently looking at */
        while (current != null)
        {
            if (count == index)
                return current.data;
            count++;
            current = current.next;
        }

        /* if we get to this line, the caller was asking
        for a non-existent element so we assert fail */
        assert(false);
        return 0;
    }
    void printMiddle()
    {
        Node slow_ptr = head;
        Node fast_ptr = head;
        if (head != null)
        {
            while (fast_ptr != null && fast_ptr.next != null)
            {
                fast_ptr = fast_ptr.next.next;
                slow_ptr = slow_ptr.next;
            }
            System.out.println("The middle element is [" +
                    slow_ptr.data + "] \n");
        }
    }
    public void swapNodes(int x, int y)
    {
        // Nothing to do if x and y are same
        if (x == y) return;

        // Search for x (keep track of prevX and CurrX)
        Node prevX = null, currX = head;
        while (currX != null && currX.data != x)
        {
            prevX = currX;
            currX = currX.next;
        }

        // Search for y (keep track of prevY and currY)
        Node prevY = null, currY = head;
        while (currY != null && currY.data != y)
        {
            prevY = currY;
            currY = currY.next;
        }

        // If either x or y is not present, nothing to do
        if (currX == null || currY == null)
            return;

        // If x is not head of linked list
        if (prevX != null)
            prevX.next = currY;
        else //make y the new head
            head = currY;

        // If y is not head of linked list
        if (prevY != null)
            prevY.next = currX;
        else // make x the new head
            head = currX;

        // Swap next pointers
        Node temp = currX.next;
        currX.next = currY.next;
        currY.next = temp;
    }

    public static void main(String[] args)
    {
        /* Start with the empty list */
        LinkedList llist = new LinkedList();

        // Insert 6. So linked list becomes 6->NUllist
        llist.append(6);

        // Insert 7 at the beginning. So linked list becomes
        // 7->6->NUllist
        llist.push(7);

        // Insert 1 at the beginning. So linked list becomes
        // 1->7->6->NUllist
        llist.push(1);
        llist.push(13);
        llist.push(45);
        llist.push(61);
        llist.push(108);
        // Insert 4 at the end. So linked list becomes
        // 1->7->6->4->NUllist
        llist.append(4);

        // Insert 8, after 7. So linked list becomes
        // 1->7->8->6->4->NUllist
        llist.insertAfter(llist.head.next, 8);

        System.out.println("\nCreated Linked list is: ");
        llist.printList();
        llist.deleteNode(6); // Delete node at position 4

        System.out.println("\nLinked List after Deletion at position 4:");
        llist.printList();
        llist.deleteNodeByPostion(3);
        System.out.println("\nLinked List after Deletion at position 4:");
        llist.printList();
        System.out.println("\nCount of nodes is " +
                llist.getCount());
        System.out.println("Count of nodes through recursion is " +
                llist.getCountRecWrapper());
        if (llist.search(llist.head, 21))
            System.out.println("Yes");
        else
            System.out.println("No");
        if (llist.searchRec(llist.head, 108))
            System.out.println("Yes");
        else
            System.out.println("No");
        System.out.println("Element at index 3 is "+llist.GetNth(3));
        llist.printMiddle();
        llist.swapNodes(13,7);
        llist.printList();

    }
}