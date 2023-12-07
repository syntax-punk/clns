type ClassNameRecord = Record<string, boolean>;

export function classnames(...values: (string | string[] | ClassNameRecord | undefined)[]): string {
  
  const result = values
    .filter(Boolean) // filter out undefined, null, false, 0, NaN, ''
    .reduce<string[]>((classes, next) => {
      if (Array.isArray(next)) {
        // handle arrays of classnames using recursion
        classes.push(classnames(...next));
      } else if (typeof next === 'object') {
        // handle objects (ClassNameRecord) using for...of with Object.entries
        for (const [key, value] of Object.entries(next)) {
          if (value) {
            classes.push(key);
          }
        }
      } else if (typeof next === 'string') {
        classes.push(next);
      }

      return classes;
    }, [])
    .join(' ');
  
  return result;
}