/*
Rules we follow

If counter is 0

Set candidate to the current number

Set counter = 1

If the current number is equal to candidate

Increase counter by 1

If the current number is different from candidate

Decrease counter by 1

That’s it. No extra checks while walking.

-------------------------------------------
Example walkthrough

Numbers:
[2, 2, 1, 1, 1, 2, 2]

Start:

candidate = none

counter = 0

Step-by-step walk

See 2

counter is 0

candidate = 2

counter = 1

See 2

same as candidate

counter = 2

See 1

different from candidate

counter = 1

See 1

different from candidate

counter = 0

candidate is discarded

See 1

counter is 0

candidate = 1

counter = 1

See 2

different from candidate

counter = 0

candidate is discarded

See 2

counter is 0

candidate = 2

counter = 1

Final result

candidate = 2

This is the majority element.


*/

function majorityElement(nums: number[]): number {
    //Boyer-Moore Majority element algo
    let candidate = 0
    let count = 0
    for(const num of nums){
        if(count == 0)candidate = num
        if(candidate == num){
            ++count
        }else{
            --count
        }
    }
    return candidate
};