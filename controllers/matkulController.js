const matkulModel = require('../models/matkulModel')

exports.getAllMatkul = (req, res) => {
    matkulModel.getAllMatkul((matkul) => {
        res.render('matkul', {matkul: matkul})
    })
}

exports.addMatkul= (req, res) => {
    const data = {
        kode_matkul: req.body.kode_matkul,
        nama_matkul: req.body.nama_matkul,
        sks: req.body.sks
    }

    matkulModel.addMatkul(data, () => {
        res.redirect('/matkul')
    })
}

exports.getMatkulById= (req, res) => {
    const id = req.query.id

    matkulModel.getMatkulById(id, (matkul) => {
        res.render('matkulUpdate', { matkul: matkul })
    })
}

exports.updateMatkul = (req, res) => {
    const { id, kode_matkul, nama_matkul, sks } = req.body
    const data = { id, kode_matkul, nama_matkul, sks }

    matkulModel.updateMatkul(id, data, () => {
        res.redirect('/matkul')
    })
}

exports.deleteMatkul = (req, res) => {
    const id = req.query.id

    matkulModel.deleteMatkul(id, () => {
        res.redirect('/matkul')
    })
}