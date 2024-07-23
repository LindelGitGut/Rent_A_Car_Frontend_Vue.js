// Konstante um eine Vue App zu erstellen, Name kann frei gewählt werden
const app = Vue.createApp({
    // data ist eine reservierte Funktion, um Werte für eine Vue Komponente zurückzugeben,
    // muss eine Funktion sein, die Objekte zurückgibt
    //einezelne Elemente werden durch Komma getrennt
    // in Objekten wird mit : der Key definiert
    data() {
      return {
        title: "Hans Wurst der Knochenknecht",
        author: "Der Mitternachts Würstchenmann",
        age: 42,
        showBook: true
      };
    },
    // Beispiel für Template, HTML muss als String übergeben werden,
    // das Template wird im DOM an entsprechender ID übergeben, hier setzen wir mit {{attributname}} die referenz zu den data attributen
    template: "<h2> I am a template!</h2><p>title: {{ title }}</p> <p> author: {{author}}</p><p>age: {{age}} <br> <button v-on:click='age++'>Increase Age</button><button v-on:click='age--'>Decrease Age</button><button v-on:click='changeBookTitle'>Change Book Title</button><div v-if='age >= 50'> You are at least half a century old.</div><button v-on:click='toggleShowBook'><span v-if='showBook'>Hide Book</span><span v-if='!showBook'>Show Book</span></button><br><p v-if='showBook'>{{title}}</p></div>"
,

    //durch Methods: werden Methoden für die entsprechende Komponente bereitgestellt

    methods: {
        changeBookTitle(){
            this.title = "This is the new Title!"
        },
        toggleShowBook(){
            this.showBook = !this.showBook;
        }
    }

  });
  
  // App mounten, hier mounten wir die App, wir müssen dafür einen Bezeichner als Parameter übergeben,
  // um diesen später in der HTML verwenden zu können,
  // hier vergeben wir den Namen/Bezeichner app # für den ID-Bezeichner
  app.mount("#app");