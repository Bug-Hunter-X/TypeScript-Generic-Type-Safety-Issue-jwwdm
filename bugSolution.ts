function printAllWithCheck<T>(items: T[]): void {
  items.forEach(item => {
    if (typeof item === 'string') {
      console.log(item.toUpperCase());
    } else if (typeof item === 'number') {
      console.log(item * 2);
    } else {
      console.log(item); // handles other types gracefully
    }
  });
}

let strings: string[] = ['a', 'b', 'c'];
let numbers: number[] = [1, 2, 3];
let mixed: (string | number)[] = ['a', 1, 'b', 2];

printAllWithCheck(strings);
printAllWithCheck(numbers);
printAllWithCheck(mixed); 