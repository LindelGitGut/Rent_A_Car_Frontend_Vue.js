const dynamicClasses = Vue.createApp({

data(){
    return {
        books: [
            {title: "Buch 1", isFav: true},
            {title: "Buch 2", isFav: false},
            {title: "Buch 3", isFav: true},]
    };},


    methods: {

        //challange complete! :)
        toggleFav(bookindex){
            console.log(bookindex);
            this.books[bookindex].isFav = !this.books[bookindex].isFav;
        },

        //andere möglichkeit

        toggleFav2(book){
            book.isFav = !book.isFav;
        }

    },

    //das hier nennt man computed properties, das sind quasi methoden die aufgerufen werden wie ein attribut dennoch werden die attribute
    // unter bestimmten bedingungen neu berechnet

    computed: {
        filteredBooks(){
            //hier geben wir nur books zurück die isFav true sind
            return this.books.filter((book) => book.isFav);
        }
    }




}).mount("#dynamicclassesapp");

//chalange attach click event to list items to add as fav and vice versa
