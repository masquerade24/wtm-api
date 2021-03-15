const hsptInfo = require('../API/hospitalInfo');
const models = require('../models/');

function search(req, res) {
    try {
        hsptInfo(req.body.address, req.body.hsptNm, (error, info) => {
            res.status(200).json({
                telno: info["telno"],
                hsptUrl: info["hospUrl"],
                addr: info["addr"],
            })
        })
    } catch (error) {
        res.status(500).json({
            message: 'Something went wrong!',
            error: error
        })
    }
}

module.exports = {
    search,
}