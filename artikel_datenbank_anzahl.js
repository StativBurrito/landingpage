d = d3.csv("numb_articles.csv", function(data){
        console.log(data.Article_all)
        document.getElementById('input').innerHTML = data.Article_all ;

});