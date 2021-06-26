const app = Vue.createApp({
    data(){
        return { 
            totalPrice:'Type Price Here...',
            percentage:'10',
            ans:0,
            symbol:'$',
            totPeople:1,
        }
    },
    methods:{
        findPercent(){
            this.ans = Math.floor((this.totalPrice * (this.percentage/100)/this.totPeople));
        }
    },
    mounted(){
        this.$refs.totalPrice.focus();
    }
})

app.mount('#app')
