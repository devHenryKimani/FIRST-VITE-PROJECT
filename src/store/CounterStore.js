import { defineStore} from "pinia";
export let useCounterStore = defineStore('counter',{
    state(){
        return{
            count:5
        };
    }


});

