

function resetTabSelections(){
    document.getElementById("nav_about").className="inactive";
    document.getElementById("nav_blogs").className="inactive";
    document.getElementById("nav_resume").className="inactive";
}


function route(text){
    resetTabSelections();
    location.hash=text
    if (text.startsWith("blogs")){
        document.getElementById("nav_blogs").className="active";
        routeToBlogs(text);
    }
    else if (text === "about"){
        document.getElementById("nav_about").className="active";
        routeToAbout();
    } else if (text === "resume"){
        document.getElementById("nav_resume").className="active";
        routeToResume();
    } 
    
    // else if (text === "detailed_resume"){
    //     document.getElementById("nav_resume").className="active";
    //     routeToDummy();
    // }
}

function routeToBlogs(text){
    var paths = text.split("/")

    var url = "/blog_home.html";
    var is_blogs_home = true;

    if (paths.length === 2) {
        var url = "/blogs/"+paths[1];
        is_blogs_home = false;
    }

    var content_area = document.getElementById("right-pane");
        fetch(url,{
        }).then(function(response){
            content_area.innerHTML=response.text().then(function(content){
                content_area.innerHTML=content;
                if (is_blogs_home){
                    initBlogs();
                }
            });
        });
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


function routeToResume(){
    var content_area = document.getElementById("right-pane");
        fetch("/blogs/resume.html",{
        }).then(function(response){
            content_area.innerHTML=response.text().then(function(content){
                content_area.innerHTML=content;
            });
      });
}


function routeToDummy(){
    var content_area = document.getElementById("right-pane");
        fetch("/blogs/dummy.html",{
        }).then(function(response){
            content_area.innerHTML=response.text().then(function(content){
                content_area.innerHTML=content;
            });
      });
}