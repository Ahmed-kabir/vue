new Vue({
    el:"#main",
    data: {
        title: "first title",
        arrayData: ["toyota", "ford"],
        objectData: {
            name: "kabir"
        },
        hello: ()=>{
            return "hello";
        }
    }
});