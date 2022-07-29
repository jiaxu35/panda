type Predicate<R = any> = (value: any, path: string[]) => R;

function isObject(value: any): value is object {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

type Mapped<T, K> = {
  [Prop in keyof T]: T[Prop] extends Array<any>
    ? Mapped<T[Prop][number], K>[]
    : T[Prop] extends object
    ? Mapped<T[Prop], K>
    : K;
};

export function walkObject<T, K>(
  target: T,
  predicate: Predicate<K>,
  options: { maxDepth?: number } = {}
): Mapped<T, ReturnType<Predicate<K>>> {
  const { maxDepth = Infinity } = options;

  function inner(value: any, path: string[] = []): any {
    if (isObject(value) || Array.isArray(value)) {
      const result: Record<string, string> = {};
      for (const [key, child] of Object.entries(value)) {
        const childPath = [...path, key];
        if (childPath.length > maxDepth) {
          return predicate(value, path);
        }
        result[key] = inner(child, childPath);
      }
      return result;
    }

    return predicate(value, path);
  }

  return inner(target);
}
