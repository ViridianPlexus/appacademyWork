// // Your code here 
// Take some time to browse through each file. __public/index.html__ is where your
// page will exist and where your scripts will inject DOM elements into.

// You'll be primarily working in the __public/index.js__ file today, and at the
// current moment, it's empty. Your job will be to write a `window.onload`
// callback. This callback should inject the page with all the necessary elements
// to match __wireframes/phase-1.png__. The image will have to be fetched from the
// Cats API. Make sure you look through the [API documentation].

const add = document.getElementById("add");
const remove = document.getElementById("remove");

 window.addEventListener("load", async (event) => {
    try {
    console.log("page is fully loaded");
    //inject h1 element kitten pic

    

    const res = await fetch("https://api.thecatapi.com/v1/images/search");
    const data = await res.json();
     console.log(data);
     let url = data[0].url;

     console.log("here2: "+url);
    let div = document.createElement("div")
    let h2= document.createElement("h2") 
    let img = document.createElement("img")
    img.src = url

    h2.innerText = "pussy pic"
    div.appendChild(h2)
    div.appendChild(img)

    document.body.appendChild(div)
    //inject the image pic
}catch (e) {
    console.log("Couldn't fetch dog :(");
  }
  });

  add.addEventListener("click", async () => {
    try {
      const res = await fetch("https://api.thecatapi.com/v1/images/search");
      const data = await res.json();
       console.log(data);
       let url = data[0].url;
  
       console.log("here2: "+url);
      let div = document.createElement("div")
      let h2= document.createElement("h2") 
      let img = document.createElement("img")
      img.src = url
  
      h2.innerText = "pussy pic"
      div.appendChild(h2)
      div.appendChild(img)
  
      document.body.appendChild(div)
    }catch (e) {
      console.log("Couldn't fetch chatte :(");
    }

  });

  remove.addEventListener("click", async () => {
    try {
      const res = await fetch("https://api.thecatapi.com/v1/images/search");
      const data = await res.json();
       console.log(data);
       let url = data[0].url;
  
       console.log("here2: "+url);
      let div = document.createElement("div")
      let h2= document.createElement("h2") 
      let img = document.createElement("img")
      img.src = url
  
      h2.innerText = "pussy pic"
      div.appendChild(h2)
      div.appendChild(img)
  
      document.body.appendChild(div)
    }catch (e) {
      console.log("Couldn't fetch chatte :(");
    }

  });


//   First, add a button that requests and displays a new cat image, replacing the
// // original image.

