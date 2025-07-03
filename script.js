function mincost(arr)
{ 
//write your code here
// return the min cost
let cost=0;
	while(arr.length>1){
		arr.sort((a,b)=>a-b);
		let f1=arr.shift();
		let f2=arr.shift();
		cost+=f1+f2;
		arr.push(cost);
	}
  return cost;
}

module.exports=mincost;
