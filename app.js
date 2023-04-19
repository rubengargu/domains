let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];

for (let i=0; i < pronoun.length; i++){
    for (let k=0; k < adj.length; k++){
        for(let j=0; j < noun.length; j++) {
            let domainName= pronoun[i] + adj[k] + noun[j] +".com";
            console.log(domainName);
        }
     }
    }