const {Profile , Login , Job , ProfileJob} = require('../models')
const session = require('express-session');

const help = require('../helpers/helper.js')

class JobController{

    // yang akan menampilkan list Job dengan isTrue = true
    static listJob(req , res){
        if(req.session.isLoggedIn === true){
            Job.findAll({
                where:{
                    isTrue : true
                }
            })
                .then(data=>{
                    if(req.session.role === false){
                        res.render('jobapplicants' , {dataFeature:data})
                    }  else{
                        res.render('job' , {dataFeature:data})
                    } 
                    
                })
                .catch(err=>{
                    res.send(err)
                })
        }else{
            res.redirect('/?err=true')
        }
        

    }

    //get Add Job (Untuk pindah ke halaman form job dan menambahkan job)
    static getAddJob(req , res){
        if(req.session.isLoggedIn === true){
            if(req.session.role === false){
                res.send('Mohon maaf tidak diberikan akses')
            }else{
                res.render('form-job')
            }
        }else{
            res.redirect('/?err=true')
        }
        
    }


    // post Add Job (untuk posting hasil job yang sudah ditambahkan)
    static postAddJob(req , res){

        let dataJob = req.body
        // penambahan data yang belum ada di form (isTrue akan dipakai untuk list job yang akan dimunculkan)
        help.newDate(dataJob)
        dataJob.jumlah_pelamar = 0
        dataJob.isTrue = 'true'

        //insert data -> apabila berhasil akan redirect ke job
        Job.create(dataJob)
            .then(data=>{
                res.redirect('/jobs')
            })
            .catch(err=>{
                res.send(err)
            })

    }

    //get Edit job
    static getEditJob(req , res){
        if(req.session.isLoggedIn === true){
            if(req.session.role === false){
                res.send('Mohon maaf tidak diberikan akses')
            }else{
                let idJob = req.params.id
            
                // Search data Job yang akan di edit
                Job.findOne({
                    where :{
                        id:idJob
                    }
                })
                .then(data=>{
                    console.log(data)
                    res.render('job-edit' , {data})
                })
                .catch(err=>{
                    res.send(err)
                })
            }
        }else{
            res.redirect('/?err=true')
        }    
    }

    //posting form Edit job
    static postEditJob(req , res){
        let idJob = req.params.id
        let dataJob = req.body
        //jika update akan mengganti tanggal updated
        dataJob.updatedAt = new Date()

        //update data job dengan id dan data yang sudah diperbaharui
        Job.update(dataJob , {
            where:{
                id:idJob
            }
        })
        .then(data=>{
            res.redirect('/jobs')
        })
        .catch(err=>{
            res.send(err)
        })   
    }

    static getDeleteJob(req,res){
        if(req.session.isLoggedIn === true){
            if(req.session.role === false){
                res.send('Mohon maaf tidak diberikan akses')
            }else{
                let deleteId = req.params.id
    
                Job.destroy({ where: { id: deleteId}})
                .then (()=>{
                    return res.redirect(`/jobs`)
                })
                .catch((err)=>{
                    return res.send(err)
                })
            }
        }else{
            res.redirect('/?err=true')
        }
    }

    static lamarJob(req , res){
        if(req.session.isLoggedIn === true){

            let id = req.params.id

            Job.findAll()
            .then(data=>{
                res.render('lamarjob' , {data , id : id})
            })
            .catch(err=>{
                res.send(err)
            })
        }else{
            res.redirect('/?err=true')
        }
    }

    static postLamarJob(req , res){
        let data = req.body
        let idProfile = req.params.id

        let dataLamaran = {
            ProfileId : idProfile,
            JobId : data.JobId,
            status : 'On Process',
        }

        help.newDate(dataLamaran)
        

        ProfileJob.create(dataLamaran)
            .then(data=>{
                res.redirect(`/profiles/myprofile?user=${req.session.username}&profile=${req.session.profileid}`)
            })
            .catch(err=>{
                res.send(err)
            })
    }
}

module.exports = JobController