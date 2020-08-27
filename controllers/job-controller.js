const {Profile , Login , Job , ProfileJob} = require('../models')

class JobController{

    // yang akan menampilkan list Job dengan isTrue = true
    static listJob(req , res){

        Job.findAll({
            where:{
                isTrue : true
            }
        })
            .then(data=>{
                res.render('job' , {dataFeature:data})
            })
            .catch(err=>{
                res.send(err)
            })

    }

    //get Add Job (Untuk pindah ke halaman form job dan menambahkan job)
    static getAddJob(req , res){
        res.render('form-job')
    }


    // post Add Job (untuk posting hasil job yang sudah ditambahkan)
    static postAddJob(req , res){

        let dataJob = req.body
        // penambahan data yang belum ada di form (isTrue akan dipakai untuk list job yang akan dimunculkan)
        dataJob.createdAt = new Date()
        dataJob.updatedAt = new Date()
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
        let deleteId = req.params.id

        Job.destroy({ where: { id: deleteId}})
        .then (()=>{
            return res.redirect(`/jobs`)
        })
        .catch((err)=>{
            return res.send(err)
        })
    }

}

module.exports = JobController