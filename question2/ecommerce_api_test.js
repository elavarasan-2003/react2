const axios=require('axios');


function getToken() {
    return "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzIwNzY4OTc3LCJpYXQiOjE3MjA3Njg2NzcsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6IjNhNTcwY2E1LThhYzgtNDI1Ni04ZTNjLTc4ZjdkYjViZDA4NSIsInN1YiI6ImVsYWVsYXZhcmFzYW4yMDAzX2JhaTI1QG1lcGNvZW5nLmFjLmluIn0sImNvbXBhbnlOYW1lIjoiTWVwY28gU2NobGVuayBFbmdpbmVlcmluZyBDb2xsZWdlIiwiY2xpZW50SUQiOiIzYTU3MGNhNS04YWM4LTQyNTYtOGUzYy03OGY3ZGI1YmQwODUiLCJjbGllbnRTZWNyZXQiOiJOYVRyTWdxdENMaFdFdElTIiwib3duZXJOYW1lIjoiRWxhdmFyYXNhbiBUIiwib3duZXJFbWFpbCI6ImVsYWVsYXZhcmFzYW4yMDAzX2JhaTI1QG1lcGNvZW5nLmFjLmluIiwicm9sbE5vIjoiMjFCQUQwNDAifQ.UL7TzKH23z-O4PPFzdA3U_UjDuI4whM_nwUalpzgEKA";
  }
  

  axios.get('http://20.244.56.144/test/companies/AMZ/categories/Laptop/products?top=10&minPrice=1&maxPrice=10000', {
    headers: {

        'Authorization': `Bearer ${getToken()}`
          }
  })
  .then(response => console.log(response.data))
  .catch(error => console.error('Error:', error));