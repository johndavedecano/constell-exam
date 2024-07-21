type Callback<T> = (err: Error | null, result?: T) => void;

function promisify<T>(
  callbackFunction: (...args: [...any[], Callback<T>]) => void
): (...args: any[]) => Promise<T> {
  return function (...args: any[]): Promise<T> {
    return new Promise((resolve, reject) => {
      callbackFunction(...args, (err: Error | null, result?: T) => {
        if (err) {
          return reject(err);
        }
        resolve(result as T);
      });
    });
  };
}
