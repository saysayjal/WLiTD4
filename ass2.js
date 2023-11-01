
const DEMO_URL="https://course-api.com/react-store-products"


function fetchData(DEMO_URL, callback){
    fetch(DEMO_URL).then((response)=>{
        console.log(response)
        return response.json()
    }).then((data)=>{
        callback(data)
    }).catch((error)=>{
        console.log("Error occurred",error)
    })
}

function handleData(data){

    const heading=document.getElementById("heading")
    heading.innerHTML=data[0]["name"] + " <br>" +data[0]["price"] +"<br> "+ data[0]["shipping"]+" <br>"+
    data[0]["colors"]+" <br>"+data[0]["company"]+" <br>"+ data[0]["description"]
    
    const displayImage=document.getElementById("image")
    displayImage.src=data[0]["image"]    
    
}

fetchData(DEMO_URL, handleData)