const query =  async (json) => {

const local = 'http://localhost/toyota/server/api/API.php';
const api = 'https://toyotappcitaspm.000webhostapp.com/toyota/server/api/API.php';

const req = await fetch(api, {

method : 'POST',
body : JSON.stringify(json),
credentials : "same-origin"
})

const res = await req.json()

return res;
};




export {query};
