
function initBlogs(){
    window.LAST_BLOG_ID=0;
    window.BLOG_INDEX =0;

    fetch("/meta/head.json",{
    }).then(function(response){
        response.json().then(function(head_meta){
            window.LAST_BLOG_ID=head_meta.starts_at;
            window.BLOG_INDEX =0;

            
            var result = loadRecentBlogs();
            while (result){
                result = loadRecentBlogs();
            }
        });
    });
}

function getNextBlogId(){
    var next_blog_index = window.LAST_BLOG_ID - window.BLOG_INDEX;
    window.BLOG_INDEX++;
    return next_blog_index;
}

function getBlogNo(blog_index){
    var no = window.LAST_BLOG_ID - blog_index + 1;
    return no;
}

function loadRecentBlogs(){
    var next_blog_index = getNextBlogId();

    if (next_blog_index == 0 ){
        return false;
    }

    var list = document.getElementById("blog_list");
    var element = document.createElement("p");
    list.appendChild(element);

    var blog_meta_url = "/meta/blogs/"+next_blog_index+".json";
    fetch(blog_meta_url,{
    }).then(function(response){
        response.json().then(function(json){
            var url = json.blog_url;
            element.onclick=function(){
                route(url);
            };
           element.innerHTML=getBlogNo(next_blog_index) +" ) " +json.blog_name;
        });
    });

    return true;
}