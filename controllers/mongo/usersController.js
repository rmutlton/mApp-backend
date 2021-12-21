const users = require("../../models/mongo/users.js");

exports.insert = async (req, res, next) => {
    let data = new users({
        email: "tonmorakot@gmail.com",
        name: "มรกต",
        lastname: "ทองพรหม"
    });

    data.save();
    res.status(200).json({
        message: "บันทึกข้อมูลเรียบร้อยแล้ว"
    });
}