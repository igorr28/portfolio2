import Vue from "vue";

const skill = {
    template: "#skill",
    props: {
        skillName: String,
        skillPercent: String
    }
    
};

const skillsRow = {
    template: "#skills-row",
    components: {
        skill
    },
    props: {
        skill: Object
    }
};

new Vue({
    el: "#skills-component",
    template: "#skills-list",
    components: {
        skillsRow
    },
    data: {
        skills: []
    },
    created() {
        const data = require("../data/skills.json");
        this.skills = data;
    }    

});
