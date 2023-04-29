const listUsers = async () => {
    try{
const response = await fetch("https://jsonplaceholder.typicode.com/users");
const data = await response.json();
console.log(data);
    }catch(ex){
        alert(ex);
    }
};

window.addEventListener("Load", async () => {
 await listUsers();
});