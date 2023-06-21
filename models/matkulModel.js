const db = require('../utils/connection')

exports.getAllMatkul = (callback) => {
    const sql = "SELECT * FROM matkul"
    db.query(sql, (err, result) => {
        if (err) throw err
        callback(result);
    })
}

exports.addMatkul = (data, callback) => {
    const sql = "INSERT INTO matkul SET ?"
    db.query(sql, data, (err, fields) => {
        if (err) throw err
        console.log('Data berhasil disimpan')
        callback();
    })
}

exports.getMatkulById = (id, callback) => {
    const sql = `SELECT * FROM matkul WHERE id = ${id}`
    db.query(sql, (err, fields) => {
        if (err) throw err
        const mahasiswa = fields[0]
        callback(mahasiswa)
    })
}

exports.updateMatkul = (id, data, callback) => {
    const sql = `UPDATE matkul SET ? WHERE id = ${id}`
    db.query(sql, data, (err, result) => {
        if (err) throw err
        callback()
    })
}

exports.deleteMatkul = (id, callback) => {
    const sql = `DELETE FROM matkul WHERE id = ${id}`
    db.query(sql, (err, fields) => {
        if (err) throw err
        callback()
    })
}