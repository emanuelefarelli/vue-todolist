const {createApp} = Vue;

createApp({
  data() {
    return {
      list: [
        {
            text: 'Prendere il latte',
            bool: false,
        },
        {
            text: 'Prendere il caffè',
            bool: false,
        },
        {
            text: 'Lavare la macchina',
            bool: false,
        },
        {
            text: 'Riparare il lavandino',
            bool: false,
        },
        {
            text: 'Mettere a posto il garage',
            bool: false,
        },
        {
            text: 'Assemblare computer',
            bool: false,
        },
      ]
    }
  }
  // methods: {
    
  // }
}).mount('#app');