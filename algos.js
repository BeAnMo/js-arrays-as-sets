// Assumes all input arrays are sorted ascending.

function intersection(sm, lg){
  let i = 0;
  let j = 0;
  let results = [];
  
  while(sm[i] !== undefined && lg[j] !== undefined){
    if(sm[i] < lg[j]){
      i++;
    } else if(sm[i] > lg[j]){
      j++;
    } else {
      results.push(sm[i]);
      i++;
      j++;
    }
  }
  
  return results;
}

function difference(sm, lg){
  let i = 0;
  let j = 0;
  let results = [];
  
  while(sm[i] !== undefined && lg[j] !== undefined){
    if(sm[i] < lg[j]){
      results.push(sm[i]);
      i++;
    } else if(sm[i] > lg[j]){
      j++;
    } else {
      i++;
      j++;
    }
  }
  
  while(sm[i] !== undefined){
    results.push(sm[i]);
    i++;
  }
  
  return results;
}

function union(sm, lg){
  let i = 0;
  let j = 0;
  let results = [];
  
  while(sm[i] !== undefined && lg[j] !== undefined){
    if(sm[i] < lg[j]){
      results.push(sm[i]);
      i++;
    } else if(sm[i] > lg[j]){
      results.push(lg[j]);
      j++;
    } else {
      results.push(sm[i]);
      i++;
      j++;
    }
  }
  
  while(sm[i] !== undefined){
    results.push(sm[i]);
    i++;
  }
  
  while(lg[j] !== undefined){
    results.push(lg[j]);
    j++;
  }
  
  return results;
}

function similarity(sm, lg){
  let i = 0;
  let j = 0;
  let sumUnion = 0;
  let sumIntersection = 0;
  
  while(sm[i] !== undefined && lg[j] !== undefined){
    if(sm[i] < lg[j]){
      sumUnion++;
      i++;
    } else if(sm[i] > lg[j]){
      sumUnion++;
      j++;
    } else {
      sumUnion++;
      sumIntersection++
      i++;
      j++;
    }
  }
  
  while(sm[i] !== undefined){
    sumUnion++;
    i++;
  }
  
  while(lg[j] !== undefined){
    sumUnion++;
    j++;
  }
  
  return sumIntersection / sumUnion;
}
