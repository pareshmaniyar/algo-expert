/*
- breadth first search
	- queue
		- count no of value > 6
- visited
	- dont add its children
	- update if lower value exists
*/


function degreesOfSeparation(friendsLists, personOne, personTwo) {
    let countOne = moreThanSexDegreeCount(personOne, friendsLists);
      let countTwo = moreThanSexDegreeCount(personTwo, friendsLists);
      if(countOne === countTwo) return "";
      return countOne < countTwo ? personOne : personTwo;
  }
  
  function moreThanSexDegreeCount(person, friendsLists) {
      let currentQueue = [person];
      let nextQueue = [];
      let degree = 0;
      let degreeOfFriends = {};
      for(const person of Object.keys(friendsLists)) {
          degreeOfFriends[person] = null;
      }
      while(currentQueue.length > 0 && degree < 10) {
          while(currentQueue.length > 0 && degree < 10) {
              let person = currentQueue.pop();
              if(degreeOfFriends[person] != null) continue;
              degreeOfFriends[person] = degree;
              nextQueue = nextQueue.concat(friendsLists[person]);
          }
          currentQueue = nextQueue;
          nextQueue = [];
          degree++;
          console.log(degree, currentQueue);
      }
      let count = 0;
      for(const degree of Object.values(degreeOfFriends)) {
          if(degree === null || degree > 6) {
              count++;
          }
      }
      return count;
  }
  
  /*
  [a]
  [b, c]
  
  */
  // Do not edit the line below.
  exports.degreesOfSeparation = degreesOfSeparation;
  