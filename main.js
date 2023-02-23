// var vueInstance= new Vue({
//     el: '#app',
//     data: {
//         title:'hiiiiii' 
//     },
//     method:{
        
//     }
// })
// console.log(vueInstance);
const { createApp } = Vue;

createApp({
    data() {
      return {
        "products":{
          "product1": {
            "name": 'Beats Studio3 Wireless Headphone',
            "img":'img/5a42ec6a97cf5053ea7b3beaca6e26c2.png',
            "rate":'5',
            "review": '200+',
            "order":'122',
            "des":'Ergonomic or cupe with on-oor controls up to 22 hours of tening time. Apple Wi crip & Closs',
            "price":'$450.55'
          },
          "product2": {
            "name": 'Original Beats Pro',
            "img":'img/AB0012.png',
            "rate":'4.9',
            "review": '200+',
            "order":'132',
            "des":'Ergonomic or cupe with on-oor controls up to 22 hours of tening time. Apple Wi crip & Closs',
            "price":'$400.55'
          },
          "product3": {
            "name": 'Bots New Headphone ',
            "img":'img/e980ba056a83f22373ea918c2aaaff0a.png',
            "rate":'4.8',
            "review": '200+',
            "order":'120',
            "des":'Ergonomic or cupe with on-oor controls up to 22 hours of tening time. Apple Wi crip & Closs',
            "price":'$320.55'
          },
          "product4": {
            "name": 'Best Headphones For ',
            "img":'img/93dcfecf671eff3912e97628512af575.png',
            "rate":'5',
            "review": '255+',
            "order":'156',
            "des":'Ergonomic or cupe with on-oor controls up to 22 hours of tening time. Apple Wi crip & Closs',
            "price":'$500'
          },
          "product5": {
            "name": 'Headphones 700',
            "img":'img/beats_studio3_wireless_over_ear_headphones-removebg-preview.png',
            "rate":'4.5',
            "review": '136+',
            "order":'155',
            "des":'Ergonomic or cupe with on-oor controls up to 22 hours of tening time. Apple Wi crip & Closs',
            "price":'$337.5'
          },
          "product6": {
            "name": 'Jabra elite 75t',
            "img":'img/beatssoloproden-650x650.png',
            "rate":'4.5',
            "review": '220+',
            "order":'102',
            "des":'Ergonomic or cupe with on-oor controls up to 22 hours of tening time. Apple Wi crip & Closs',
            "price":'$440.99'
          },
          "product7": {
            "name": 'Beats Studio3 Wireless Headphone',
            "img":'img/tai-nghe-chup-tai-beats-solo3-mx432-mv8t2-mx472-thumb-2-2-1-2-650x650.png',
            "rate":'5',
            "review": '551+',
            "order":'100',
            "des":'Ergonomic or cupe with on-oor controls up to 22 hours of tening time. Apple Wi crip & Closs',
            "price":'$550.99'
          },
          "product8": {
            "name": 'Headphones wireless',
            "img":'img/tai-nghe-beats-studio-3-do-den-thumb-650x650.png',
            "rate":'4.7',
            "review": '100+',
            "order":'125',
            "des":'Ergonomic or cupe with on-oor controls up to 22 hours of tening time. Apple Wi crip & Closs',
            "price":'$336.55'
          },
          "product9": {
            "name": 'Beats Studio3 Wireless Headphone',
            "img":'img/AB0012.png',
            "rate":'4.9',
            "review": '200+',
            "order":'120',
            "des":'Ergonomic or cupe with on-oor controls up to 22 hours of tening time. Apple Wi crip & Closs',
            "price":'$400.55'
          },
        },
      }
    },
  }
  ).mount('#App')
    // console.log(products);