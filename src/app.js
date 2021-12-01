const connection = require("./database/connection");
const {addMusic, listMusic, updateMusic} = require("./utils");

const command = process.argv[2]; 

const app = async () => {
    if (command === "add"){
        const newMusic = {
            band: process.argv[3],
            song: process.argv[4],
            genre: process.argv[5]
        };
    await connection(addMusic, newMusic);
    } else if (command === "list") {
        await connection(listMusic);
    } else if (command === "update"){
        await connection(updateMusic);
    } else {
        console.log("invalid command")
    }
};

app();