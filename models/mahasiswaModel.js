const db = require('../utils/connection');

exports.getAllMahasiswa = (callback) => {
  const sql = "SELECT * FROM mahasiswa";
  db.query(sql, (err, result) => {
    if (err) throw err;
    callback(result);
  });
};

exports.addMahasiswa = (data, callback) => {
  const sql = "INSERT INTO mahasiswa SET ?";
  db.query(sql, data, (err, fields) => {
    if (err) throw err;
    console.log('Data berhasil disimpan ke MySQL');
    callback();
  });
};

exports.getMahasiswaById = (id, callback) => {
  const sql = `SELECT * FROM mahasiswa WHERE id = ${id}`;
  db.query(sql, (err, fields) => {
    if (err) throw err;
    const mahasiswa = fields[0];
    callback(mahasiswa);
  });
};

exports.updateMahasiswa = (id, data, callback) => {
  const sql = `UPDATE mahasiswa SET ? WHERE id = ${id}`;
  db.query(sql, data, (err, result) => {
    if (err) throw err;
    callback();
  });
};

exports.deleteMahasiswa = (id, callback) => {
  const sql = `DELETE FROM mahasiswa WHERE id = ${id}`;
  db.query(sql, (err, result) => {
    if (err) throw err;
    callback();
  });
};
