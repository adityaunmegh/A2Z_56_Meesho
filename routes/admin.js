var express = require('express');
var router = express.Router();
var db=require('../db.js');
var path = require('path');
var fs=require('fs');
var { sendOTP } = require('../utils/sendOTP');
router.get('/', (req, res) => {
    res.render('admin/dashboard.ejs');
});
router.get('/test-mail', async (req, res) => {

    try {

        await sendOTP(
            'YOUR_OTHER_EMAIL@gmail.com',
            '123456'
        );

        res.send('Email Sent Successfully');

    } catch (err) {

        console.log(err);

        res.send('Email Failed');

    }

});

router.get('/add_product', (req, res) => {
    res.render('admin/add_product.ejs');
});

router.post('/add_product', async (req, res) => {

    try {

        let { pname, pprice, pdescription } = req.body;

        if (!req.files || !req.files.pimage) {
            return res.send("Please Select Image");
        }

        let image = req.files.pimage;

        let imageName = Date.now() + "_" + image.name;

        await image.mv("./public/uploads/" + imageName);

        let sql = `
        INSERT INTO product
        (pname,pprice,pdescription,pimage)
        VALUES(?,?,?,?)
        `;

        await db(sql, [
            pname,
            pprice,
            pdescription,
            imageName
        ]);

        res.redirect('/admin/add_product');

    } catch (err) {

        console.log(err);
        res.send(err);

    }

});

module.exports = router;
