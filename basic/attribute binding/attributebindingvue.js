const attributebindingvue = Vue.createApp({

data(){
   return {
    url: 'https://www.lindele.de',
    image: 'assets/img1.webp',
    books: [{title: "Hans Wurst der Knochenknecht", author: "Der Mitternachts Würstchenmann", img: 'assets/img1.webp'},
            {title: "Hans Wurst der Knochenknecht 1.5", author: "Der Mitternachts Würstchenmann",img: 'assets/img2.jpg'},
            {title: "Hans Wurst der Knochenknecht 2", author: "Der Mitternachts Würstchenmann", img: 'assets/img3.png'},
            {title: "Hans Wurst der Knochenknecht 3", author: "Der Mitternachts Würstchenmann", img: 'assets/img4.jpg'}
            ],
   }
   
},


methods:{}





}).mount("#attributebindingapp");