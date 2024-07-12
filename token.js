const axios=require('axios');
console.log("test");

axios.post("http://20.244.56.144/test/auth",{
    "companyName":"Mepco Schlenk Engineering College",
    "clientID":"3a570ca5-8ac8-4256-8e3c-78f7db5bd085",
    "clientSecret": "NaTrMgqtCLhWEtIS",
    "ownerName": "Elavarasan T",
    "ownerEmail": "elaelavarasan2003_bai25@mepcoeng.ac.in",
    "rollNo": "21BAD040"
  }

)
.then((res)=>{
    console.log(res.data);
}
);

