function buildFailures(buildRuns) {
    const percentages = getPersentageBuild(buildRuns);
      let incSeq = 0;
      let maxLen = 0;
      for(let i = 1; i < percentages.length; i++) {
          if(percentages[i] < percentages[i - 1]) {
              incSeq++;
          } else {
              incSeq = 0;
          }
          maxLen = Math.max(maxLen, incSeq);
      }
      return maxLen === 0 ? -1 : maxLen + 1;
  }
  
  function getPersentageBuild(buildRuns) {
      let result = [];
      for(let i = 0; i < buildRuns.length; i++) {
          let build = buildRuns[i];
          let count = getFirstFalseValue(build);
          console.log(count);
          result.push((count / build.length));
      }
      return result;
  }
  
  function getFirstFalseValue(build) {
      let start = 0;
      let end = build.length - 1;
      while(start <= end) {
          let mid = Math.floor(start + ((end - start) / 2));
          if(!build[mid]) {
              if(build[mid - 1]) return mid;
              end = mid;
          } else {
              start = mid + 1;
          }
      }
      return null;
  }
  
  // Do not edit the line below.
  exports.buildFailures = buildFailures;
  