const {Profile , Login , Job , ProfileJob} = require('../models')

class ProfileController{

    //untuk menambahkan Profile
    static getAddProfile(req , res){
        res.render('form')
    }

    //Create new Profile & Login
    static postAddProfile(req , res){
        
        //data yang dibutuhkan untuk Profile
        let profile = req.body
        //data yang dibutuhkan untuk Login
        let login = {
            username : profile.username,
            password : profile.password,
            isAdmin : false
        }

        //variable penampung untuk Profile
        let dataProfile = {}

        //looping profile biar username & password engga masuk
        for(var dataprofile in profile){
            if(dataprofile != 'username' || dataprofile != 'password'){
                dataProfile[dataprofile] = profile[dataprofile]
            }
        }

        //Penambahan data yang dibutuhkan untuk table Profile
        dataProfile.createdAt = new Date()
        dataProfile.updatedAt = new Date()
        dataProfile.status = 'On Process'
        if(!dataProfile.image){
            dataProfile.image = null
        }
         

        //Create profile menggunakan data yang sudah ditambahkan
        Profile.create(dataProfile)
            .then(data=>{

                login.ProfileId = data.id
        
                //Create table login menggunakan data yang sudah ada Profile id
                return Login.create(login)
            })
            .then(data=>{
                res.redirect('/profiles')
            })
            .catch(err=>{
                res.send(err)
            })
    }


    // Mengambil data Profile yang akan di edit
    static getEditProfile(req , res){
        let idProfile = req.params.id
        
        Profile.findOne({
            where:{
                id:idProfile
            }
        })
        .then(data=>{
            //mengarahkan data ke edit profile
            res.render('profile-edit' , {dataFeature:data})
        })
        .catch(err=>{
            res.send(err)
        })
    }


    // Posting data Profile yang sudah di edit
    static postEditProfile(req , res){
        let idProfile = req.params.id

        let dataProfile = req.body

        Profile.update(dataProfile,{
            where:{
                id:idProfile
            }
        })
        .then(data=>{
            res.redirect('/profile')
        })
        .catch(err=>{
            res.send(err)
        })
    }

    static listProfile(req , res){
        let name = req.query.sortname
        let experience = req.query.sortexperience
        let salary = req.query.sortsalary


        Profile.findAll({
            where:{
                status : 'On Process'
            },
            order:[['first_name' , `${name}`],
            ['year_of_experience' , `${experience}`],
            ['month_of_experience' , `${experience}`],
            ['expected_salary' , `${salary}`]]
        })
        .then(data=>{
            data.forEach(el=>{
                el.pengalaman = `${el.year_of_experience} tahun ${el.month_of_experience} bulan`
            })

            res.render('profile' , {dataFeature:data})
        })
        .catch(err=>{
            res.send(err)
        })
    }
}

module.exports = ProfileController