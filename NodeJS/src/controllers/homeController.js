
let getHomePage = (req, res) => {
    return res.render('homePage.ejs');
}


// Mot Object gom key va value
// object:{
//     key:'',
//     value:''
// }

module.exports = {
    getHomePage: getHomePage,
}