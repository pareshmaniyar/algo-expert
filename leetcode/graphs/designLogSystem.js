/*
year -> month -> date -> time

*/

var LogSystem = function() {
    this.graph = {};
};

/** 
 * @param {number} id 
 * @param {string} timestamp
 * @return {void}
 */
LogSystem.prototype.put = function(id, timestamp) {
    const [year, month, currentDate, h, m, s] = timestamp.split(":");
    this.graph[year][month][currentDate][h][m][s] = id;
};

/** 
 * @param {string} start 
 * @param {string} end 
 * @param {string} granularity
 * @return {number[]}
 */
LogSystem.prototype.retrieve = function(start, end, granularity) {
    const result = [];
    const [startYear, startMonth, startDate, startHour, startMin, startSec] = start.split('');
    const [endYear, endMonth, endDate, endHour, endMin, endSec] = end.split('');
    let searchArea = {};
    const graph = this.graph;
    for(let year = startYear; year <= endYear; year++) {
        if(!(year in graph)) continue;
        if(granularity === "Year") {
            searchArea[year] = graph[year];
            continue;
        }
        for(let month = startMonth; month <= endMonth; month++) {
            if(!(month in graph[year])) continue;
            if(granularity === "Month") {
                searchArea[year][month] = graph[year][month];
                continue;
            }
        }
    }
    return compute(searchArea);
    
    
};

/** 
 * Your LogSystem object will be instantiated and called as such:
 * var obj = new LogSystem()
 * obj.put(id,timestamp)
 * var param_2 = obj.retrieve(start,end,granularity)
 */