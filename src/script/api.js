export default function get(URL,useState= null,filter = null)
{
    fetch(URL,{method:"GET"})
    .then(data => {
        return data.json();
    }).then((a)=>{
        var result = a
        if(filter != null){
            result = result.filter(filter)
        }
        console.log(result)
        useState(result)
    })
}