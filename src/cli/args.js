const parseArgs = () => {
  const someArgs = process.argv
    .reduce((acc, cur, index, arr) => {
      if (cur.startsWith('--')) {
        acc.push(`${cur.replace('--', '')} is ${arr[index + 1]}`);
      }
      return acc;
    }, [])
    .join(', ');

  console.log(someArgs);
};

parseArgs();
