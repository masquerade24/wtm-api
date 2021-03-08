const drugInfo = require('../utils/drugInfo');
const models = require('../models/');

function search(req, res) {
    models.DB_drug
        .findOne({
            where: {
                printFront: req.body.print,
                drugShape: req.body.shape,
                colorClass1: req.body.color,
            },
        })
        .then(drug => {
            if (drug) {
                drugInfo(drug.itemName, (error, info) => {
                    res.status(200).json({
                        itemName: drug.itemName,
                        entpName: info["entpName"],
                        itemImage: info["itemImage"],
                        efficiency: info["efcyQesitm"].replace(/(<p>|<\/p>)+/g, '\n').trim(),
                        useMethod: info["useMethodQesitm"].replace(/(<p>|<\/p>)+/g, '\n').trim(),
                        warning: info["atpnQesitm"].replace(/(<p>|<\/p>)+/g, '\n').trim(),
                        intrcnt: info["intrcQesitm"].replace(/(<p>|<\/p>)+/g, '\n').trim(),
                        sideEffect: info["seQesitm"].replace(/(<p>|<\/p>)+/g, '\n').trim(),
                        depositMethod: info["depositMethodQesitm"].replace(/(<p>|<\/p>)+/g, '\n').trim(),
                    })
                })
            } else {
                res.status(401).json({
                    message: 'Cannot found matching drug!',
                })
            }
        })
        .catch(error => {
            res.status(500).json({
                message: 'Something went wrong!',
            })
        });
}

module.exports = {
    search,
}