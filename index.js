// code your solution here
function superbowlWin(record) {
    const winYear = record.find(entry => entry.result === 'W');
    if(winYear){
        return winYear.year;
    }else{
        return undefined
    }
  }
  