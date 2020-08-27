const {Profile , Login , Job , ProfileJob} = require('../models')
const session = require('express-session');
// const bcrypt = require('bcryptjs')
class LoginController{

    static logout(req , res){
        req.session.destroy(err=>{
            if(err){
                res.send(err)
            }

            res.redirect('/')
        })
    }

    static getLogin(req , res){
        if(req.query.err){
            res.render('formLogin' , {
                errorLogin : true
            })
        }else{
            res.render('formLogin' , {
                errorLogin : false
            })
        }
    }

    static postLogin(req , res){

        Login.findOne({
            where:{
                username : req.body.username,
                password : req.body.password
            }
        })
        .then(data=>{
            if(data === null){
                res.redirect('/?err=true')
            }else{
                req.session.isLoggedIn = true
                req.session.username = data.username
                req.session.profileid = data.ProfileId
                req.session.role = data.isAdmin
                console.log(req.session.role)
            }

            if(req.session.role === false){
                res.redirect(`/profiles/myprofile?user=${req.session.username}&profile=${req.session.profileid}`)
            }else{
                res.redirect('/profiles')
            }
        })
        .catch(err=>{
            res.send(err)
        })
    }
}


module.exports = LoginController