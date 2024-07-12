const axios=require('axios');
console.log("test");

axios.post("http://20.244.56.144/test/register",{
    "companyName":"Mepco Schlenk Engineering College",
    "ownerName":"Elavarasan T",
    "rollNo":"21BAD040",
    "ownerEmail":"elaelavarasan2003_bai25@mepcoeng.ac.in",
    "accessCode":"eswOoe"

})
.then((res)=>{
    console.log(res.data);
}
);

