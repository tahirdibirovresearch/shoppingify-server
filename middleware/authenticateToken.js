const jwt = require("jsonwebtoken")
const { SECRET_KEY } = require("../config/env")

const authenticateToken = (req, res, next) =>{
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if(token===null) return res.sendStatus(401)

    jwt.verify(token, SECRET_KEY, (err, usr)=>{
        if(err) return res.sendStatus(403)
        req.user = user
        next()
    })

}

module.exports = authenticateToken