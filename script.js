function mincost(arr)
{ 
//write your code here
// return the min cost
let cost=0;
	while(arr.length>1){
		arr.sort((a,b)=>a-b);
		let f1=arr.shift();
		let f2=arr.shift();
		let cc=f1+f2;
		cost+=cc;
		arr.push(cc);
	}
  return cost;
}

module.exports=mincost;
