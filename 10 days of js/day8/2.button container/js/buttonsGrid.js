function clockwise(){
  let temp=btn1.innerHTML;
  btn1.innerHTML=btn4.innerHTML;
  btn4.innerHTML=btn7.innerHTML;
  btn7.innerHTML=btn8.innerHTML;
  btn8.innerHTML=btn9.innerHTML;
  btn9.innerHTML=btn6.innerHTML;
  btn6.innerHTML=btn3.innerHTML;
  btn3.innerHTML=btn2.innerHTML;
  btn2.innerHTML=temp;
}

// let nums=[1,2,3,6,9,8,7,4];
// const ids=[1,2,3,6,9,8,7,4];
//
// function clockwise() {
//     nums.unshift(nums.pop()); //delete last index & added this first index
   //nums.pop() deleted the nums in last index  &
   //nums.unshift added the number in first index
//     for (i=0; i<=7; i++) {
//         document.getElementById("btn"+ids[i]).innerHTML=nums[i];
//     }
// }
