export const MORE_CODING_QUESTIONS = [
  {
    id: 'merge-intervals',
    title: 'Merge Intervals',
    description: 'Given an array of intervals where intervals[i] = [start_i, end_i], merge all overlapping intervals and return the non-overlapping intervals that cover all the intervals.',
    examples: [
      { input: '[[1,3],[2,6],[8,10],[15,18]]', output: '[[1,6],[8,10],[15,18]]' },
      { input: '[[1,4],[4,5]]', output: '[[1,5]]' },
    ],
    starterCode: {
      javascript: `function merge(intervals) {\n  // Write your solution here\n}`,
      python: `def merge(intervals):\n    # Write your solution here\n    pass`,
      java: `class Solution { public int[][] merge(int[][] intervals) { /*...*/ } }`,
      cpp: `#include <bits/stdc++.h>\nusing namespace std;\nvector<vector<int>> merge(vector<vector<int>>& intervals) { /*...*/ }`,
    },
  },
  {
    id: 'longest-substring',
    title: 'Longest Substring Without Repeating Characters',
    description: 'Given a string s, find the length of the longest substring without repeating characters.',
    examples: [
      { input: `"abcabcbb"`, output: '3' },
      { input: `"bbbbb"`, output: '1' },
    ],
    starterCode: {
      javascript: `function lengthOfLongestSubstring(s) {\n  // Write your solution here\n}`,
      python: `def length_of_longest_substring(s):\n    # Write your solution here\n    pass`,
      java: `class Solution { public int lengthOfLongestSubstring(String s) { return 0; } }`,
      cpp: `#include <bits/stdc++.h>\nusing namespace std;\nint lengthOfLongestSubstring(string s) { return 0; }`,
    },
  },
  {
    id: 'valid-parentheses',
    title: 'Valid Parentheses',
    description: 'Given a string s containing just the characters ()[]{} determine if the input is valid.',
    examples: [
      { input: '()[]{}', output: 'true' },
      { input: '(]', output: 'false' },
    ],
    starterCode: {
      javascript: `function isValid(s) {\n  // Write your solution here\n}`,
      python: `def is_valid(s):\n    # Write your solution here\n    pass`,
      java: `class Solution { public boolean isValid(String s) { return false; } }`,
      cpp: `#include <bits/stdc++.h>\nusing namespace std;\nbool isValid(string s) { return false; }`,
    },
  },
  {
    id: 'container-most-water',
    title: 'Container With Most Water',
    description: 'Given n non-negative integers a1..an where each represents a point at coordinate (i, ai), find two lines that together with x-axis form a container that holds the most water.',
    examples: [
      { input: '[1,8,6,2,5,4,8,3,7]', output: '49' },
    ],
    starterCode: {
      javascript: `function maxArea(height) {\n  // Write your solution here\n}`,
      python: `def max_area(height):\n    # Write your solution here\n    pass`,
      java: `class Solution { public int maxArea(int[] height) { return 0; } }`,
      cpp: `#include <bits/stdc++.h>\nusing namespace std;\nint maxArea(vector<int>& height) { return 0; }`,
    },
  },
  {
    id: 'climbing-stairs',
    title: 'Climbing Stairs',
    description: 'You are climbing a stair case. Each time you can climb 1 or 2 steps. In how many distinct ways can you climb to the top of n steps?',
    examples: [
      { input: 'n = 2', output: '2' },
      { input: 'n = 3', output: '3' },
    ],
    starterCode: {
      javascript: `function climbStairs(n) {\n  // Write your solution here\n}`,
      python: `def climb_stairs(n):\n    # Write your solution here\n    pass`,
      java: `class Solution { public int climbStairs(int n) { return 0; } }`,
      cpp: `#include <bits/stdc++.h>\nusing namespace std;\nint climbStairs(int n) { return 0; }`,
    },
  },
  {
    id: 'maximum-subarray',
    title: 'Maximum Subarray',
    description: 'Find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.',
    examples: [
      { input: '[-2,1,-3,4,-1,2,1,-5,4]', output: '6' },
    ],
    starterCode: {
      javascript: `function maxSubArray(nums) {\n  // Write your solution here\n}`,
      python: `def max_sub_array(nums):\n    # Write your solution here\n    pass`,
      java: `class Solution { public int maxSubArray(int[] nums) { return 0; } }`,
      cpp: `#include <bits/stdc++.h>\nusing namespace std;\nint maxSubArray(vector<int>& nums) { return 0; }`,
    },
  },
  {
    id: 'best-time-buy-sell',
    title: 'Best Time to Buy and Sell Stock',
    description: 'Given an array prices where prices[i] is the price of a given stock on the ith day, maximize profit by choosing a single buy and sell.',
    examples: [
      { input: '[7,1,5,3,6,4]', output: '5' },
    ],
    starterCode: {
      javascript: `function maxProfit(prices) {\n  // Write your solution here\n}`,
      python: `def max_profit(prices):\n    # Write your solution here\n    pass`,
      java: `class Solution { public int maxProfit(int[] prices) { return 0; } }`,
      cpp: `#include <bits/stdc++.h>\nusing namespace std;\nint maxProfit(vector<int>& prices) { return 0; }`,
    },
  },
  {
    id: 'search-rotated',
    title: 'Search in Rotated Sorted Array',
    description: 'Given a rotated sorted array nums and a target, return the index of target if it exists, otherwise return -1.',
    examples: [
      { input: '[4,5,6,7,0,1,2], target=0', output: '4' },
    ],
    starterCode: {
      javascript: `function search(nums, target) {\n  // Write your solution here\n}`,
      python: `def search(nums, target):\n    pass`,
      java: `class Solution { public int search(int[] nums, int target) { return -1; } }`,
      cpp: `#include <bits/stdc++.h>\nusing namespace std;\nint search(vector<int>& nums, int target) { return -1; }`,
    },
  },
  {
    id: 'binary-tree-inorder',
    title: 'Binary Tree Inorder Traversal',
    description: 'Given the root of a binary tree, return the inorder traversal of its nodes\' values.',
    examples: [
      { input: '[1,null,2,3]', output: '[1,3,2]' },
    ],
    starterCode: {
      javascript: `function inorderTraversal(root) {\n  // Write your solution here\n}`,
      python: `def inorderTraversal(root):\n    pass`,
      java: `class Solution { public List<Integer> inorderTraversal(TreeNode root) { return null; } }`,
      cpp: `#include <bits/stdc++.h>\nusing namespace std;\nvector<int> inorderTraversal(TreeNode* root) { return {}; }`,
    },
  },
  {
    id: 'symmetric-tree',
    title: 'Symmetric Tree',
    description: 'Given a binary tree, check whether it is a mirror of itself (symmetric around its center).',
    examples: [
      { input: '[1,2,2,3,4,4,3]', output: 'true' },
    ],
    starterCode: {
      javascript: `function isSymmetric(root) {\n  // Write your solution here\n}`,
      python: `def is_symmetric(root):\n    pass`,
      java: `class Solution { public boolean isSymmetric(TreeNode root) { return false; } }`,
      cpp: `#include <bits/stdc++.h>\nusing namespace std;\nbool isSymmetric(TreeNode* root) { return false; }`,
    },
  },
  {
    id: 'level-order',
    title: 'Binary Tree Level Order Traversal',
    description: 'Return the level order traversal of a binary tree\'s nodes values (from left to right, level by level).',
    examples: [
      { input: '[3,9,20,null,null,15,7]', output: '[[3],[9,20],[15,7]]' },
    ],
    starterCode: {
      javascript: `function levelOrder(root) {\n  // Write your solution here\n}`,
      python: `def levelOrder(root):\n    pass`,
      java: `class Solution { public List<List<Integer>> levelOrder(TreeNode root) { return null; } }`,
      cpp: `#include <bits/stdc++.h>\nusing namespace std;\nvector<vector<int>> levelOrder(TreeNode* root) { return {}; }`,
    },
  },
  {
    id: 'add-two-numbers',
    title: 'Add Two Numbers',
    description: 'You are given two non-empty linked lists representing two non-negative integers. Add the two numbers and return the sum as a linked list.',
    examples: [
      { input: '[2,4,3] + [5,6,4]', output: '[7,0,8]' },
    ],
    starterCode: {
      javascript: `function addTwoNumbers(l1, l2) {\n  // Write your solution here\n}`,
      python: `def addTwoNumbers(l1, l2):\n    pass`,
      java: `class Solution { public ListNode addTwoNumbers(ListNode l1, ListNode l2) { return null; } }`,
      cpp: `#include <bits/stdc++.h>\nusing namespace std;\nListNode* addTwoNumbers(ListNode* l1, ListNode* l2) { return nullptr; }`,
    },
  },
  {
    id: 'palindrome-linked-list',
    title: 'Palindrome Linked List',
    description: 'Given the head of a singly linked list, return true if it is a palindrome.',
    examples: [
      { input: '[1,2,2,1]', output: 'true' },
    ],
    starterCode: {
      javascript: `function isPalindrome(head) {\n  // Write your solution here\n}`,
      python: `def is_palindrome(head):\n    pass`,
      java: `class Solution { public boolean isPalindrome(ListNode head) { return false; } }`,
      cpp: `#include <bits/stdc++.h>\nusing namespace std;\nbool isPalindrome(ListNode* head) { return false; }`,
    },
  },
  {
    id: 'linked-list-cycle',
    title: 'Linked List Cycle',
    description: 'Given head, determine if the linked list has a cycle in it.',
    examples: [
      { input: '[3,2,0,-4] with pos=1', output: 'true' },
    ],
    starterCode: {
      javascript: `function hasCycle(head) {\n  // Write your solution here\n}`,
      python: `def has_cycle(head):\n    pass`,
      java: `class Solution { public boolean hasCycle(ListNode head) { return false; } }`,
      cpp: `#include <bits/stdc++.h>\nusing namespace std;\nbool hasCycle(ListNode* head) { return false; }`,
    },
  },
  {
    id: 'min-path-sum',
    title: 'Minimum Path Sum',
    description: 'Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right which minimizes the sum of all numbers along its path.',
    examples: [
      { input: '[[1,3,1],[1,5,1],[4,2,1]]', output: '7' },
    ],
    starterCode: {
      javascript: `function minPathSum(grid) {\n  // Write your solution here\n}`,
      python: `def min_path_sum(grid):\n    pass`,
      java: `class Solution { public int minPathSum(int[][] grid) { return 0; } }`,
      cpp: `#include <bits/stdc++.h>\nusing namespace std;\nint minPathSum(vector<vector<int>>& grid) { return 0; }`,
    },
  },
  {
    id: 'coin-change',
    title: 'Coin Change',
    description: 'Given coins and amount, return the fewest number of coins needed to make up that amount.',
    examples: [
      { input: 'coins=[1,2,5], amount=11', output: '3' },
    ],
    starterCode: {
      javascript: `function coinChange(coins, amount) {\n  // Write your solution here\n}`,
      python: `def coin_change(coins, amount):\n    pass`,
      java: `class Solution { public int coinChange(int[] coins, int amount) { return -1; } }`,
      cpp: `#include <bits/stdc++.h>\nusing namespace std;\nint coinChange(vector<int>& coins, int amount) { return -1; }`,
    },
  },
  {
    id: 'word-break',
    title: 'Word Break',
    description: 'Given a string s and a dictionary of words wordDict, return true if s can be segmented into a space-separated sequence of one or more dictionary words.',
    examples: [
      { input: 's="leetcode", wordDict=["leet","code"]', output: 'true' },
    ],
    starterCode: {
      javascript: `function wordBreak(s, wordDict) {\n  // Write your solution here\n}`,
      python: `def word_break(s, word_dict):\n    pass`,
      java: `class Solution { public boolean wordBreak(String s, List<String> wordDict) { return false; } }`,
      cpp: `#include <bits/stdc++.h>\nusing namespace std;\nbool wordBreak(string s, vector<string>& wordDict) { return false; }`,
    },
  },
  {
    id: 'kth-largest',
    title: 'Kth Largest Element in an Array',
    description: 'Find the kth largest element in an unsorted array.',
    examples: [
      { input: '[3,2,1,5,6,4], k=2', output: '5' },
    ],
    starterCode: {
      javascript: `function findKthLargest(nums, k) {\n  // Write your solution here\n}`,
      python: `def find_kth_largest(nums, k):\n    pass`,
      java: `class Solution { public int findKthLargest(int[] nums, int k) { return 0; } }`,
      cpp: `#include <bits/stdc++.h>\nusing namespace std;\nint findKthLargest(vector<int>& nums, int k) { return 0; }`,
    },
  },
  {
    id: 'top-k-frequent',
    title: 'Top K Frequent Elements',
    description: 'Given a non-empty array of integers, return the k most frequent elements.',
    examples: [
      { input: '[1,1,1,2,2,3], k=2', output: '[1,2]' },
    ],
    starterCode: {
      javascript: `function topKFrequent(nums, k) {\n  // Write your solution here\n}`,
      python: `def top_k_frequent(nums, k):\n    pass`,
      java: `class Solution { public int[] topKFrequent(int[] nums, int k) { return null; } }`,
      cpp: `#include <bits/stdc++.h>\nusing namespace std;\nvector<int> topKFrequent(vector<int>& nums, int k) { return {}; }`,
    },
  },
];
