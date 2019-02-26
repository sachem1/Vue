var app = new Vue({
    el: '#app',
    data: {
        list: [
            {
                id: 1,
                name: 'iphone8',
                price: 8562,
                count: 1,
                ischeck:true
            },
            {
                id: 2,
                name: 'ipad',
                price: 6200,
                count: 2,
                ischeck: true
            },
            {
                id: 3,
                name: 'macbook pro',
                price: 18562,
                count: 1,
                ischeck: true
            }
        ],
        list2:[
            {
                type:"电子产品",
                list:[
                    {
                        id: 1,
                        name: 'iphone8',
                        price: 8562,
                        count: 1,
                        ischeck: true
                    }, {
                        id: 2,
                        name: 'ipad',
                        price: 6200,
                        count: 2,
                        ischeck: true
                    }, {
                        id: 3,
                        name: 'macbook pro',
                        price: 18562,
                        count: 1,
                        ischeck: true
                    }
                ]               
            },
            {
                type: "电子书",
                list: [{
                    id: 1,
                    name: 'vue.js实战',
                    price: 82,
                    count: 1,
                    ischeck: true
                }, {
                    id: 2,
                    name: 'TDD测试驱动开发',
                    price: 62,
                    count: 1,
                    ischeck: true
                }, {
                    id: 3,
                    name: 'Docker从入门到实践',
                    price: 52,
                    count: 1,
                    ischeck: true
                }]
            },
        ]

    },
    computed: {
        totalPrice:function(){
            var total=0;
            for(var i=0 ; i<this.list.length;i++){
                var item =this.list[i];
                if(item.ischeck)
                    total+=item.price * item.count;
            }
            return total.toString().replace(/\B(?=(\d{3})+$)/g,',');
        }
    },
    methods: {
        handleReduce:function(index){
            if(this.list[index].count===1)return;
            this.list[index].count--;
        },
        handleAdd:function(index){
            this.list[index].count++;
        },
        handleRemove:function(index){
            this.list.splice(index,1);
        }
    },
})