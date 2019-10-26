import Vue from "vue";


const reviewsRow = {
    template: "#reviews-row",    
    props: {
        review: Object
    }
};

 new Vue({
    el: "#reviews-component",
    template: "#reviews-list",
    components: {
        reviewsRow        
    },
    data: {
        reviews: []
    },
    created() {
        const data = require("../data/reviews.json");
        this.reviews = data;
    }
});





