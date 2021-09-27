
class Solution:
    def selectionSortArray(self, nums):
        n = len(nums) -1
        for i in range(n):
            min_index = i
            for j in range(i + 1, n):
                if (nums[j] <= nums[min_index]):
                    min_index = j
                temp = nums[i]
                nums[i] = nums[min_index]
                nums[min_index] = temp
        return nums

    def bubbleSortArray(self, nums):
        n = len(nums)
        for i in range(n):
            for j in range(0, n-i-1):
                if nums[j] > nums[j+1]:
                    nums[j],nums[j+1] = nums[j+1],nums[j]
        return nums
    
    def selectionSortArray2(self, nums):

        for i in range(len(nums)-1):
            min_index = i
            for j in range(i + 1, len(nums)):
                if (nums[j] <= nums[min_index]):
                    min_index = j
                temp = nums[i]
                nums[i] = nums[min_index]
                nums[min_index] = temp
        return nums

arr = [5, 2, 1, 5, 9, 12, 13, 16]

solution = Solution()
print(solution.selectionSortArray(arr))