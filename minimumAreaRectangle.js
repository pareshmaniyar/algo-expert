function minimumAreaRectangle(points) {
    let pointsMap = points.reduce((accum, point) => {
          accum[`${point[0]}-${point[1]}`] = true;
          return accum;
      }, {});
      console.log(pointsMap);
      const len = points.length;
      let minArea = Infinity;
      for(let i = 0;i < len; i++) {
          for(let j = i + 1; j < len; j++) {
              const [point1X, point1Y] = points[i];
              const [point2X, point2Y] = points[j];
              if(point1X === point2X || point1Y === point2Y) continue;
              if(pointsMap[`${point1X}-${point2Y}`] 
                  && pointsMap[`${point2X}-${point1Y}`]) {
                  const area = (point1X - point2X) * (point1Y - point2Y);
                  console.log(area, point1X, point1Y, point2X, point2Y);
                  minArea = Math.min(Math.abs(area), minArea);
              }
          }
      }
      return minArea === Infinity?0:minArea;
  }
  
  // Do not edit the line below.
  exports.minimumAreaRectangle = minimumAreaRectangle;
  