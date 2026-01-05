type Interval = [number, number];

//sorting left and right and trhne adding the middle by proper comparison - method 1

function insert(intervals: Interval[], newInterval: Interval): Interval[] {
    const left: Interval[] = [];
    const right: Interval[] = [];

    let [start, end] = newInterval;

    for (const interval of intervals) {
        // completely on the left
        if (interval[1] < start) {
            left.push(interval);
        }
        // completely on the right
        else if (interval[0] > end) {
            right.push(interval);
        }
        // overlapping
        else {
            start = Math.min(start, interval[0]);
            end = Math.max(end, interval[1]);
        }
    }

    return [...left, [start, end], ...right];
}
