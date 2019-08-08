
const User = require('../models/user-model')

exports.findAll = (req, res) => {

    User.find({}, (error, users) => {

        if(error) {
            console.log('deu erro!')
        }
        else {
            res.status(200).json(users)
        }

    })

}

exports.createUser = (req, res) => {

    const body = req.body

    const user = new User({
        name: body.name,
        email: body.email,
        fone: body.fone,
        date: body.date
    })

    user.save((err, user) => {  

        if(err) {
            console.log('deu erro!', err)
        }
        else {
            res.status(200).json(user)
        }

    })

}

exports.deleteUser = (req, res) => {

    id = req.params.userId

    User.findByIdAndDelete(id, (err) => {

        if(err) {

            console.log('deu erro!', err)

        }
        else {

            res.status(200).json({
                msg: 'excluido'
            })

        }

    })
}

exports.updateUser = (req, res) => {

    body = req.body
    id = req.params.userId

    User.findByIdAndUpdate(id, body, {new: true})
    .then(user => {

        if(!user) {

            return res.status(404).json({
                msg: "user id " + id + " not found "
            })

        }
        res.json(user)

    })
    .catch( err => {

        if(err) {
            return res.status(404).json({
                msg: "user id " + id + " not found "
            })             
        }
        return res.status(500).json({
            msg: "Error to update user id " + id
        })

    })
}

exports.findOne = (req, res) => {

    id = req.params.userId

    User.findById(id, (err, user) => {  

        if(err) {
            console.log('deu erro!', err)
        }
        else {
            res.status(200).json(user)
        }

    })
}

