
function bisectionSplice(arr, item){
  if(item < arr[0]){
    arr.unshift(item);
    return arr;
  }
  
  const len = arr.length;
  let min = 0;
  let max = len;
  let mid = Math.floor(max / 2);
  let steps = 0;
  
  while(min < mid && mid < max){
    if(item < arr[mid]){
      max = mid;
      mid = Math.ceil((min + max) / 2);
    } else {
      min = mid;
      mid = Math.ceil((min + max) / 2);
    }
  }

  arr.splice(mid, 0, item);
  return arr;
}
  

function runtime(name, proc){
  const start = performance.now();
  const results = proc();
  const end = performance.now();
  console.log(`[runtime:${name}]`, `${(end-start).toFixed(2)}ms`);
  return results;
}

function assertSort(arr){
  let prev = -1;
  
  for(const item of arr){
    if(prev >= item){
      console.error('not ascending sort');
      return false;
    }
  }
  return true;
}

t0 = (() => {
  const limit = 100;
  let r = [];
  for(let i = 0; i < limit; i++){
    const n = Math.floor(Math.random() * (limit * 10));
    r.push(n);
  }
  const st = new Set(r);
  st.delete(limit);
  return [...st].sort((a, b) => a - b);
})();
len0 = Math.floor(t0.length);
console.log('to insert', len0 * 3);
runtime('bisection', () => {
  bisectionSplice(t0, len0);
});

assertSort(t0);
