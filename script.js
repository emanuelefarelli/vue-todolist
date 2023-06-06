const {createApp} = Vue;

createApp({
  data() {
    return {
      list: [
        {
          text: 'Prendere il latte',
          done: false,
        },
        {
          text: 'Prendere il caffè',
          done: false,
        },
        {
          text: 'Lavare la macchina',
          done: true,
        },
        {
          text: 'Riparare il lavandino',
          done: false,
        },
        {
          text: 'Mettere a posto il garage',
          done: false,
        },
        {
          text: 'Assemblare computer',
          done: false,
        },
      ]
    }
  },
  methods: {
    toDoDone(elementIndex){
      this.list[elementIndex].done = !this.list[elementIndex].done;
    },

    deleteItem(elementIndex){
      this.list.splice(elementIndex, 1);
    }
  }
}).mount('#app');