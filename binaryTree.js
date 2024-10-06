class Node {
    constructor(value,value2,value3){
        this.value = value // moist
        this.value2 = value2 // country name
        this.value3 = value3 // fruit name
        this.left = null
        this.right = null
    }
  }
  
  class BinaryTree {
    constructor() {
        this.root = null;
    }

    // Function to insert a new value into the tree
    insert(value,value2,value3) {
        const newNode = new Node(value,value2,value3);
        // If the tree is empty, set the root to the new node
        if (this.root === null) {
            this.root = newNode;
        } else {
            this._insertNode(this.root, newNode);
        }
    }

    // Helper function to recursively insert the node
    _insertNode(currentNode, newNode) {
        // Insert same or smaller values on the left
        if (newNode.value <= currentNode.value) {
            if (currentNode.left === null) {
                currentNode.left = newNode;
            } else {
                this._insertNode(currentNode.left, newNode);
            }
        } else { // Insert larger values on the right
            if (currentNode.right === null) {
                currentNode.right = newNode;
            } else {
                this._insertNode(currentNode.right, newNode);
            }
        }
    }
      //END OF INSERT

    //recursion for sort
    rangeList(name, array = [], current = this.root) {
        if (current === null) {
            return;
        }
    
        this.rangeList(name, array, current.left);
    
        if (current.value2 === name) {
            let map = {};
            map[current.value3] = current.value; // Use current.value3 here
            array.push(map); // Push the new object to the array
        }
    
        this.rangeList(name, array, current.right);
        return array; // Ensure you return the array
    }
    

      
  }
