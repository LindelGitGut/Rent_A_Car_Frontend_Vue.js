// Konstante um eine Vue App zu erstellen, Name kann frei gewählt werden
const app = Vue.createApp({
    // data ist eine reservierte Funktion, um Werte für eine Vue Komponente zurückzugeben,
    // muss eine Funktion sein, die Objekte zurückgibt
    data() {
      return {
        title: "Hans Wurst der Knochenknecht",
        author: "Der Mitternachts Würstchenmann",
        age: 42
      };
    },
    // Beispiel für Template, HTML muss als String übergeben werden,
    // das Template wird im DOM an entsprechender ID übergeben, hier setzen wir mit {{attributname}} die referenz zu den data attributen
    template: "<h2> I am a template!</h2><br>title: {{ title }}"
  });
  
  // App mounten, hier mounten wir die App, wir müssen dafür einen Bezeichner als Parameter übergeben,
  // um diesen später in der HTML verwenden zu können,
  // hier vergeben wir den Namen/Bezeichner app # für den ID-Bezeichner
  app.mount("#app");