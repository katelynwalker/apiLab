"use strict"

$.get('https://www.reddit.com/r/aww/.json').then((data)=>{  
        let display = data.data.children
        for (let i= 1; i<=10; i++){
        $("body").append(`
        <section class="container">
        <section class="post">
          <p class="title">${display[i].data.title}</p>
          <img src="${display[i].data.thumbnail}">
          <a href ="${display[i].data.url}">Click</a>
        </section>
        </section>
        `)
        console.log(data.data.children[10]);
    }})



