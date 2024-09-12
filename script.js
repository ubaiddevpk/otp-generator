function otpGenerate() {
  let otplength=document.getElementById("input").value;
  let otpstoring="";
  for(let i=0;i<otplength;i++)
  {
    otpstoring=otpstoring+Math.floor(Math.random()*10)
    document.getElementById("para").textContent=otpstoring;
  }
}
  