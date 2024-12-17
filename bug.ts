function printAll<T>(items: T[]): void {
  items.forEach(item => console.log(item));
}

let strings: string[] = ['a', 'b', 'c'];
let numbers: number[] = [1, 2, 3];

printAll(strings);
printAll(numbers); // This will compile and run without error, but if you try to access a method or property of the items, it would throw a runtime error because it is expecting any type

function printAllWithCheck<T>(items: T[]): void {
  items.forEach(item => {
    if (typeof item === 'string') {
      console.log(item.toUpperCase());
    } else if (typeof item === 'number') {
      console.log(item * 2);
    } else {
      console.log(item);
    }
  });
}

printAllWithCheck(strings);
printAllWithCheck(numbers);