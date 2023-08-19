const getPreviousSameRangeMonths = (fromEpoch, toEpoch) => {
    const fromDate = new Date(fromEpoch * 1000);
    const toDate = new Date(toEpoch * 1000);
    const prevMonthFromDate = new Date(fromDate);
    prevMonthFromDate.setMonth(prevMonthFromDate.getMonth() - 1);
    const prevMonthToDate = new Date(toDate);
    prevMonthToDate.setMonth(prevMonthToDate.getMonth() - 1);
  
    const prevMonthFromEpoch = Math.floor(prevMonthFromDate.getTime() / 1000);
    const prevMonthToEpoch = Math.floor(prevMonthToDate.getTime() / 1000);
  
    return {
      prevMonthFromEpoch,
      prevMonthToEpoch,
    };
  };
  
  const fromEpoch = 1690878626; // Example: Aug 1, 2023 (epoch timestamp)
  const toEpoch = 1682929826;   // Example: May 1, 2023 (epoch timestamp)
  const epochToDate = (epochTimestamp) => {
    return new Date(epochTimestamp * 1000); // Convert from seconds to milliseconds
  };
  const { prevMonthFromEpoch, prevMonthToEpoch } = getPreviousSameRangeMonths(fromEpoch, toEpoch);
  console.log('Previous same range from:', epochToDate(prevMonthFromEpoch));
  console.log('Previous same range to:', epochToDate(prevMonthToEpoch));