class Solution:
    def runningSum(self, nums: list[int]) -> list[int]:
        result: list[int] = []
        running_tally = 0

        for n in nums:
            running_tally += n
            result.append(running_tally)

        return result
