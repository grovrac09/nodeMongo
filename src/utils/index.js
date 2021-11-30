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