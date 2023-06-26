const parseEnv = () => {
  const envRss = Object.entries(process.env)
    .reduce((acc, cur) => {
      if (cur[0].startsWith('RSS_')) {
        acc.push(`${cur[0]}=${cur[1]}`);
      }
      return acc;
    }, [])
    .join('; ');

  console.log(envRss);
};

parseEnv();
