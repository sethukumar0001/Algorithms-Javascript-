// A small frog wants to get to the other side of the road. The frog is currently located at position X
// and wants to get to a position greater than or equal to Y. The small frog always jumps a fixed distance, D.

// Count the minimal number of jumps that the small frog must perform to reach its target.

// howManyJumps(start,stop,jump) );


const howManyJumps = (start, stop, jump) => {
    return Math.ceil((stop - start) / jump);
};
  

//2nd method
const howManyJumps2 = (start, stop, jump) => {
  let count = 0;

  while (stop > count * jump + start) {
    console.log( count * jump + start)//1,3,5
    count += 1;
  }

  return count;
};


  console.log(howManyJumps2(1, 6, 2)); // 3