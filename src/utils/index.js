exports.addMusic = async (collection, dataObj) => {
    try {
        await collection.insertOne(dataObj);
    } catch (error) { 
        console.log(error)
    }
}

exports.listMusic = async (collection) => {
    try {
        const listAll = await collection.find().toArray();
        console.log(listAll);
    } catch (error) {
        console.log(error);
    }
};

// exports.updateMusic = async (collection, dataObj) => {
//     try {
//         const updateSong = collection.find({song: {$gt: "Freak On A Leash"}});
//         await collection.updateOne(dataObj);
//         console.log(updateSong);
//     } catch (error) {
//         console.log(error)
//     }
// };


exports.deleteMusic = async (collection, dataObj) => {
    console.log(dataObj);
    try {
        await collection.deleteMany({genre: dataObj.genre});
    } catch (error) {
        console.log(error);
    }
};