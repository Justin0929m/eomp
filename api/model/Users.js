const db = require('../config');
const { hash, compare, hashSync } = require("bcrypt");
const { createToken } = require("../middleware/AuthenticateUser");

class Users{
    fetchUsers(req, res){
        const query = "SELECT userID, firstName, lastName, gender, userDOB, emailAdd, profileUrl FROM Users; ";

        db.query(query, (err, results) =>{
            if(err) throw err
            res.json({
                status: res.statusCode,
                results
            })
        })
    }
}

module.exports = Users
