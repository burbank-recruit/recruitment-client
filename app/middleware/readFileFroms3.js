const path = require('path');
const csv = require('csvtojson');

module.exports = async (req, res, next) => {
    // let csvFilePath = require(path.join(__dirname, '../files/recruitment-csv.csv'));
    //
    // const jsonArray = await csv().fromFile(csvFilePath);
    // console.log(jsonArray);
    return next();

};
