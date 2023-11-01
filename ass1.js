function sumofNum(n,callback)
{
    let sum=0;
    for(let i=0; i<=n;i++)
    {
        sum+=i;
    }
    callback(sum);
}

function calculateSum(n) {
    return new Promise((resolve, reject) => {
      if (n > 0) {
        sumOfNum(n, (result) => {
          resolve(result);
        });
      } else {
        reject("Number should be greater than 0");
      }
    });
}


calculateSum(4)
.then((result)=>{
    console.log("Sum is ",result);
})
.catch((error)=>{
    console.error(error);
});




//using async/await
function sumOfNum(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
      sum += i;
    }
    return sum;
}
  
function calculateSum(n) {
    return new Promise((resolve, reject) => {
      if (n > 0) {
        resolve(sumOfNum(n));
      } else {
        reject("Number should be greater than 0");
      }
    });
  }
  
  async function calc() {
    try {
      const result = await calculateSum(4);
      console.log("Sum is", result);
    } catch (error) {
      console.error(error);
    }
  }
  
  calc();
  

  

  