//TODO: get nth node from the end

// class Solution {

//   getNthFromLast(head, n) {
//     let index = 0;
//     let countHead = head;
//     while (countHead) {
//       countHead = countHead.next;
//       index++;
//     }

//     let nodeIndex = index - n + 1;
//     index = 1;

//     if (nodeIndex <= 0) return -1;

//     while (head) {
//       if (index === nodeIndex) {
//         return head.data;
//       } else {
//         index++;
//         head = head.next;
//       }
//     }
//   }
// }

// TODO: find the middle node in linked list

// class Solution {
//   getMiddle(node) {
//     let index = 0;
//     let head = node;

//     while (head) {
//       index++;
//       head = head.next;
//     }
//     let middleIndex = index % 2 == 0 ? index / 2 + 1 : (index - 1) / 2 + 1;
//     index = 0;
//     while (node) {
//       index++;
//       if (index === middleIndex) return node.data;
//       node = node.next;
//     }
//   }
// }

// TODO: reverse a linked list

// class Solution {
//   //Function to reverse a linked list.
//   reverseList(head) {
//     let current = head;
//     let next = null;
//     let prev = null;

//     while (current) {
//       next = current.next;
//       current.next = prev;
//       prev = current;
//       current = next;
//     }
//     return current;
//   }
// }

// TODO: number of node in a linked list

// class Solution {
//   //Function to count nodes of a linked list.
//   getCount(head) {
//     let numberOfnodes = 0;

//     while (head) {
//       numberOfnodes++;
//       head = head.next;
//     }
//     return numberOfnodes
//   }
// }

// TODO: delete a given node from a linked list

// class Solution {
//   deleteNode(head, x) {
//     let temp = head;
//     if (head === null) return null;

//     if (x === 1) {
//       head = temp.next;
//       return head;
//     }

//     for (let i = 1; temp !== null && i < x - 1; i++) {
//       temp = temp.next;
//     }

//     if (temp === null || temp.next === null) return null;

//     if (temp.next.next === null) temp.next = null;
//     else temp.next = temp.next.next;

//     return head;
//   }
// }

// TODO: check if a linked list contain cycle

// class Solution {
//   isCycle(head) {
//     let slow = head;
//     let fast = head;
//     while (fast && fast.next) {
//       fast = fast.next.next;
//       slow = slow.next;
//       if (fast === slow) {
//         return true;
//       }
//     }
//     return false;
//   }
// }

// TODO: count the number of node is a loop;

// class Solution {
//   //Function to find the length of a loop in the linked list.
//   countNodesinLoop(head) {
//     let slow = head;
//     let fast = head;
//     let count = 0;
//     let isCyclic = false;

//     while (fast && fast.next) {
//       fast = fast.next.next;
//       slow = slow.next;

//       if (isCyclic) count++;
//       if (isCyclic && fast === slow) break;
//       if (fast == slow) isCyclic = true;
//     }

//     return count;
//   }
// }

// TODO: Find the Sum of Last N nodes of the Linked List

// class Solution {
//   sumOfLastN_Nodes(head, n) {
//     let sum = 0;
//     let length = 0;
//     let current = head;
//     while (current) {
//       length++;
//       current = current.next;
//     }
//     let lastN = length - n;
//     length = 0;
//     while (head) {
//       length++;
//       if (length > lastN) sum += head.data;
//       head = head.next;
//     }

//     return sum;
//   }
// }

// TODO: find the starting node of a loop in linked list

// class Solution {
//   //Function to find the length of a loop in the linked list.
//   countNodesinLoop(head) {
//     let slow = head;
//     let fast = head;
//     let count = 0;
//     let isCyclic = false;

//     while (fast && fast.next) {
//       fast = fast.next.next;
//       slow = slow.next;

//       if (isCyclic) count++;

//       if (isCyclic && fast === slow) break;

//       if (fast == slow) {
//         isCyclic = true;
//       }
//     }

//     let p1 = head;
//     let p2 = head;

//     while (count > 0) {
//       p2 = p2.next;
//       count--;
//     }

//     while (true) {
//       if (p1 == p2) return p1.data;
//       p1 = p1.next;
//       p2 = p2.next;
//     }
//   }
// }

// TODO: check if two linked list are identical
// class Solution {
//     //Function to check whether two linked lists are identical or not.
//     areIdentical(head1, head2)
//     {
//         while(head1 ||  head2){
//             if(!head1 || !head2) return false
//             if(head1.data !== head2.data){
//                 return false;
//             }
//             head1 = head1.next
//             head2 = head2.next
//         }
//         return true
//     }
// }

// TODO: Insert node at the middle of the linked list
// class Solution {
//     //Function to insert a node in the middle of the linked list.
//     insertInMiddle(head, x)
//     {
//         let newNode = new Node(x)
//         let count = 0;
//         let current = head;
//         while(current){
//             count++;
//             current = current.next;
//         }
//         let middleIndex = count % 2 == 0 ? (count / 2) : ((count - 1) / 2) + 1;
//         count = 1;
//         current = head

//         while(current){
//             if(count == middleIndex){
//                  let nextInd = current.next;
//                  current.next = newNode;
//                  newNode.next = nextInd
//             }
//             current = current.next;
//             count++
//         }

//         return head
//     }

// }

// TODO: delete the middle node in linked list

// class Solution {
//     deleteMid(node)
//     {
//         let count = 0
//         let current = head;

//         while(current){
//             count++;
//             current = current.next;
//         }

//         let middleIndex = count % 2 == 0 ? (count / 2) + 1 : ((count - 1) / 2) + 1;

//         for(let i = 1; i< middleIndex - 1; i++){
//             head = head.next;
//         }

// head.next = head.next.next;
//         return head

//     }
// }

// TODO:  delete duplicate form a sorted linked list;

// class Solution {
//   //Function to remove duplicates from sorted linked list.
//   removeDuplicates(head) {
//     let current = head;

//     while (current) {
//       if (current.next && current.data == current.next.data) {
//         current.next = current.next.next;
//       } else {
//         current = current.next;
//       }
//     }

//     return head;
//   }
// }

// TODO:  delete duplicate form a unsorted linked list;

// class Solution {
//   //Function to remove duplicates from unsorted linked list.

//   removeDuplicates(head) {
//     let hashTable = {};
//     let current = head;
//     while (current) {
//       if (!hashTable[current.data]) hashTable[current.data] = true;

//       if (current.next && hashTable[current.next.data]) {
//         current.next = current.next.next;
//       } else {
//         current = current.next;
//       }
//     }

//     return head;
//   }
// }

// TODO: Given two linked list of size N1 and N2 respectively of distinct elements, your task is to complete the function countPairs(), which returns the count of all pairs from both lists whose sum is equal to the given value X.

// class Solution {

//         countPairs(head1, head2, x)
//         {
//             let h1 = head1;
//             let h2 = head2
//             let hashTable = {}
//             let count = 0

//             while(h1){
//                 if(!hashTable[h1.data]) hashTable[h1.data] = true;
//                 h1 = h1.next;
//             }

//             while(h2){
//                 if(hashTable[x - h2.data]) count++;
//                 h2 = h2.next;
//             }
//             return count
//         }
//     }

// TODO: Delete without head pointer

// class Solution {
//   deleteNode(del) {
//     del.data = del.next.data;
//     del.next = del.next.next;
//   }
// }

// // TODO:  Delete even numbers in linked list
// class Solution {
//   deleteEven(head, x) {
//     let dummyList = new Node(0);
//     dummyList.next = head;
//     let current = dummyList;

//     while (current) {
//       if (current.next && current.next.data % 2 == 0) {
//         current.next = current.next.next;
//       } else {
//         current = current.next;
//       }
//     }
//     return dummyList.next;
//   }
// }

// TODO: remove the nth node from the end of a linked list
// class Solution {
//   deleteNode(head, x) {
//     let dummyList = new Node(0);
//     dummyList.next = head;
//     let slow = dummyList;
//     let fast = dummyList;
//     for (let i = 1; i <= x; i++) {
//       fast = fast.next;
//     }

//     while (fast.next) {
//       fast = fast.next;
//       slow = slow.next;
//     }
//     slow.next = slow.next.next;

//     return dummyList.next;
//   }
// }

// TODO: frequency of element in linked list

// class Solution {
//   //Function to remove duplicates from sorted linked list.
//   frequency(head) {
//     let freqTable = {};

//     while (head) {
//       if (!freqTable[head.data]) {
//         freqTable[head.data] = 1;
//       } else {
//         let val = freqTable[head.data];
//         freqTable[head.data] = val + 1;
//       }
//       head = head.next;
//     }
//     console.log(freqTable);
//   }
// }

// TODO: find unique element in a linked list
// class Solution {
//   //Function to remove duplicates from sorted linked list.
//   findUnique(head) {
//     let freqTable = {};
//     let current = head;
//     while (current) {
//       if (!freqTable[current.data]) {
//         freqTable[current.data] = 1;
//       } else {
//         freqTable[current.data]++;
//       }
//       current = current.next;
//     }

//     while (head) {
//       if (freqTable[head.data] == 1) {
//         console.log(head.data);
//       }
//       head = head.next;
//     }
//   }
// }

//TODO: find the most occurring node in a linked list
// class Solution {
//   //Function to remove duplicates from sorted linked list.
//   MostOccuring(head) {
//     let freqTable = {};
//     let current = head;
//     while (current) {
//       if (!freqTable[current.data]) {
//         freqTable[current.data] = 1;
//       } else {
//         freqTable[current.data]++;
//       }
//       current = current.next;
//     }
//     let highestOcc = 0;
//     let highestNode;
//     while (head) {
//       if (freqTable[head.data] > highestOcc) {
//         highestOcc = freqTable[head.data];
//         highestNode = head.data;
//       }
//       head = head.next;
//     }
//     console.log(highestNode + " : " + highestOcc);
//   }
// }

// TODO: find the sum of unique numbers in linked list;
// class Solution {
//   //Function to remove duplicates from sorted linked list.
//   removeDuplicates(head) {
//     let freqTable = {};
//     let current = head;
//     while (current) {
//       if (!freqTable[current.data]) {
//         freqTable[current.data] = 1;
//       } else {
//         freqTable[current.data]++;
//       }
//       current = current.next;
//     }
//     let sumOfUnique = 0;

//     while (head) {
//       if (freqTable[head.data] == 1) {
//         sumOfUnique += head.data;
//       }
//       head = head.next;
//     }

//     console.log(sumOfUnique);
//   }
// }

// TODO: delete a give value in linked list;

// class Solution {
//   //Function to remove duplicates from sorted linked list.
//   removeGivenVal(head, deleteVal) {
//     let dummyList = new Node(0);
//     dummyList.next = head;
//     let current = dummyList;

//     while (current) {
//       if (current.next && current.next.data == deleteVal) {
//         current.next = current.next.next;
//       } else {
//         current = current.next;
//       }
//     }

//     return dummyList.next;
//   }
// }


// TODO: remove loop in a linked list
// class Solution {
//   //Function to remove a loop in the linked list.
//   removeLoop(head) {
//     let slow = head;
//     let fast = head;
//     let loopCount = 0;
//     let isLoop = false;

//     while (fast && fast.next) {
//       fast = fast.next.next;
//       slow = slow.next;
//       if (isLoop) loopCount++;
//       if (isLoop && fast == slow) break;
//       if (fast == slow) isLoop = true;
//     }

//     let loopStartingNode;
//     let h1 = head;
//     let h2 = head;

//     for (let i = 0; i < loopCount; i++) {
//       h1 = h1.next;
//     }

//     while (h2) {
//       if (h2 == h1) {
//         loopStartingNode = h2;
//         break;
//       }
//       h2 = h2.next;
//       h1 = h1.next;
//     }

//     let startingNode = loopStartingNode;
//     for (let i = 1; i < loopCount; i++) {
//       startingNode = startingNode.next;
//     }
//     if (isLoop) startingNode.next = null;
//   }
// }

// TODO: check if a given linked list is palindrome

// class Solution {
//     //Function to check whether the list is palindrome.
//     isPalindrome(head)
//     {
//        let slow = head;
//     let fast = head;
//     while (fast && fast.next) {
//       slow = slow.next;
//       fast = fast.next.next;
//     }

//     // Reverse the second half of the linked list
//     let prev = null;
//     let curr = slow;

//     while (curr) {
//       let next = curr.next;
//       curr.next = prev;
//       prev = curr;
//       curr = next;
//     }

//     let left = head;
//     let right = prev;

//     while(right){
//         if(right.data !== left.data) return false;
//         left = left.next;
//         right = right.next
//     }
//     return true
//     }

// }

// TODO: insert node into a sorted circular list in sorted way
// class Solution {
//   sortedInsert(head, data) {
//     let newNode = new Node(data);
//     let dummy = new Node(0);
//     dummy.next = head;
//     let current = dummy;

//     while (current && current.next) {
//       if (current.next && data <= current.next.data) {
//         let nextNode = current.next;
//         current.next = newNode;
//         newNode.next = nextNode;
//         break;
//       }
//       current = current.next;
//     }

//     current.next = newNode;
//     return dummy.next;
//   }
// }


// TODO: rotate linked list k times
// class Solution {
//   //Function to rotate a linked list.
//   rotate(head, k) {
//     if (!head || k === 0) {
//       return;
//     }
//     let current = head;
//     let count = 1;
//     while (count < k && current) {
//       current = current.next;
//       count++;
//     }
//     if (!current) {
//       return;
//     }

//     let kthNode = current;
//     while (current.next) {
//       current = current.next;
//     }
//     current.next = head;
//     head = kthNode.next;
//     kthNode.next = null;

//     return head;
//   }
// }

// TODO: pair swap elements in linked list
// class Solution {
//   pairWiseSwap(head) {
//     if (!head || !head.next) return head;
//
//     let current = head;
//     while (current && current.next) {
//       const temp = current.data;
//       current.data = current.next.data;
//       current.next.data = temp;
//       current = current.next.next;
//     }
//     return head;
//   }
// }

// TODO: sort linked list

// class Solution {
//   merge(left, right) {
//     const sortedList = new Node(null);
//     let current = sortedList;

//     while (left && right) {
//       if (left.data < right.data) {
//         current.next = left;
//         left = left.next;
//       } else {
//         current.next = right;
//         right = right.next;
//       }
//       current = current.next;
//     }

//     current.next = left || right;
//     return sortedList.next;
//   }

//   getMid(head) {
//     let slow = head;
//     let fast = head;
//     while (fast.next && fast.next.next) {
//       slow = slow.next;
//       fast = fast.next.next;
//     }
//     const mid = slow.next;
//     slow.next = null;
//     return mid;
//   }

//   mergeSort(head) {
//     if (!head || !head.next) {
//       return head;
//     }

//     const mid = getMid(head);
//     const left = mergeSort(head);
//     const right = mergeSort(mid);

//     return merge(left, right);
//   }
// }