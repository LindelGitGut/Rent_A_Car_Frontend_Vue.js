const mouseventapp = Vue.createApp({

data(){
    return {
        x: 0,
        y: 0
    };},

    methods:

{
    mouseOverEvent(){
        console.log("Mouseover");
    },

    mouseLeaveEvent(){
        console.log("Mouseleave");
    },

    doubleClickEvent(){
        console.log("Double Click");
    },

    //Beispiel um das Event selbst als Parameter zu verwenden
    mouseMoveEvent(event){
        console.log("Mousemove");
        // console.log(event);

    //wir nehmen die x und y koordinaten des Mauszeigers innerhalb der box und schreiben diese in data als attribut um später in der box anzuzeigen
        this.x = event.offsetX;
        this.y = event.offsetY;
    },
}








}).mount("#mouseeventapp");