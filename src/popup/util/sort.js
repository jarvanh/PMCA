import { getDelayedHours, getNextReviewTime } from "./utils";

const reverse = (sorter) => {
    return (p1, p2) => -sorter(p1, p2)
}

const problemReviewTimeComparator = (p1, p2) => {
    return getNextReviewTime(p1).valueOf() - getNextReviewTime(p2).valueOf();
}

const problemDelayTimeComparator = (p1, p2) => {
    return getDelayedHours(p2).valueOf() - getDelayedHours(p1).valueOf();
}

// functions used to sort problems
export const problemSorters = {
    // reviewTimeSorter:
    sortByReviewTimeDesc:   reverse(problemReviewTimeComparator),
    sortByReviewTimeAsc:    problemReviewTimeComparator,
    sortByDelayHoursDesc:   problemDelayTimeComparator,
    sortByDelayHoursAsc:    reverse(problemDelayTimeComparator)
}

const problemSorterArr = [
    problemSorters.sortByReviewTimeAsc, 
    problemSorters.sortByReviewTimeDesc,
    problemSorters.sortByDelayHoursAsc,
    problemSorters.sortByDelayHoursDesc
];

export const idOf = (sorter) => {
    return problemSorterArr.indexOf(sorter);
}

export const getSorterById = (id) => {
    return problemSorterArr[id];
}