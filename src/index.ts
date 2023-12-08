type ClassNameRecord = Record<string, boolean>;

function clns(...values: (string | string[] | ClassNameRecord | undefined)[]): string {

  return values
    .filter(Boolean)
    .reduce<string[]>((curr, next) => {
      if (Array.isArray(next)) {
        curr.push(clns(...next));
      } else if (typeof next === 'object') {
        for (const [k, v] of Object.entries(next)) {
          if (v) {
            curr.push(k);
          }
        }
      } else if (typeof next === 'string') {
        curr.push(next);
      }

      return curr;
    }, [])
    .join(' ');
}

export default clns;
export { clns };