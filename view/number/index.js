var app = new Vue({
  el: '#app',
  data: {
    value: 5
  },
  methods: {
      onkeyHandler: function (event) {
        console.log(event.keyCode);
      },
     
  },
})
