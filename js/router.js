


function route(text){
    location.hash=text
    if (text === "blogs"){
        
    }
    else if (text === "about"){
        routeToAbout();
    }
}

function routeToBlogs(text){
    var content_area = document.getElementById("right-pane");
        content_area.innerHTML="Hello World"
}

function routeToAbout(){
    var content_area = document.getElementById("right-pane");
        fetch("/blogs/about.html",{
        }).then(function(response){
            content_area.innerHTML=response.text().then(function(content){
                content_area.innerHTML=content;
            });
      });
}