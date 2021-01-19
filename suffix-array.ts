export function createSuffixArrayFind(orig: string) {
  const sortedIndexes: number[] = Array.from(Array(orig.length)).map((_, i) => i)
      .sort((a, b) => orig.substring(a).localeCompare(orig.substring(b)))
  return function binSearch(sub: string, from: number = 0, to: number = orig.length): number {
    const midIndex = Math.floor((from + to) / 2);
    const suffix = orig.substring(sortedIndexes[midIndex]);
    if (suffix.startsWith(sub)) return sortedIndexes[midIndex];
    if (from + 1 === to) return -1;
    return sub.localeCompare(suffix) < 0 ? binSearch(sub, from, midIndex) : binSearch(sub, midIndex, to);
  };
}
