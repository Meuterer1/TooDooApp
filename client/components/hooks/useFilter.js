const useFilter = () => {
  const filterTasks = (key, tasks) => {
    const differingValues = {};
    let filtered = tasks;

    Object.entries(key).forEach(([filterKey, value]) => {
      if (value !== "all") {
        differingValues[filterKey] = value;
      }
    });

    if (Object.keys(differingValues).length > 0) {
      filtered = filtered.filter((item) =>
        Object.entries(differingValues).every(
          ([filterKey, value]) => item[filterKey] === value
        )
      );
      return filtered;
    } else {
      return tasks;
    }
  };

  return filterTasks;
};

export default useFilter;
