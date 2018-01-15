document.getElementById("button1").addEventListener("click", getText);
document.getElementById("button2").addEventListener("click", getJson);
//document.getElementById("button3").addEventListener("click", getExternal);

function getText(){
    //console.log("hi");
    fetch("text.txt") //fetch returns promise
    .then(function(res){ //when u get response from a promise u need to use then
        return res.text();
    })
    .then(function(data){
        console.log(data);
        document.getElementById("output").innerHTML = data;
    })
    .catch(function(err){
        console.log(err);
    });
}
function getJson(){
    fetch('posts.json') //fetch returns promise
    .then(function(res){ //when u get response from a promise u need to use then
        return res.json();
    })
    .then(function(data){
        data.forEach(function(post) {
            output += `<li>${post.title}</li>`;
          });
        document.getElementById('output').innerHTML = output;
    })
    .catch(function(err){
        console.log(err);
    });
}