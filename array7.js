let data=[
    [10,10],
[10,10],
[10,10]
];

var sum=0;
  
for(var i=0;i<data.length;i++){
  for(var j=0;j<data[i].length;j++){
    sum+=sum+data[i][j]
  }
}
console.log(sum);