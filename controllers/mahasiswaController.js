const mahasiswaModel = require('../models/mahasiswaModel');

exports.getAllMahasiswa = (req, res) => {
  mahasiswaModel.getAllMahasiswa((mahasiswa) => {
    res.render('mahasiswa', { mahasiswa: mahasiswa });
  });
};

exports.addMahasiswa = (req, res) => {
  const data = {
    nim: req.body.nim,
    nama: req.body.nama,
    alamat: req.body.alamat,
    email: req.body.email,
  };

  mahasiswaModel.addMahasiswa(data, () => {
    res.redirect('/mahasiswa');
  });
};

exports.getMahasiswaById = (req, res) => {
  const id = req.query.id;

  mahasiswaModel.getMahasiswaById(id, (mahasiswa) => {
    res.render('mahasiswaUpdate', { mahasiswa: mahasiswa });
  });
};

exports.updateMahasiswa = (req, res) => {
  const { id, nim, nama, alamat, email } = req.body;
  const data = { nim, nama, alamat, email };

  mahasiswaModel.updateMahasiswa(id, data, () => {
    res.redirect('/mahasiswa');
  });
};

exports.deleteMahasiswa = (req, res) => {
  const id = req.query.id;

  mahasiswaModel.deleteMahasiswa(id, () => {
    res.redirect('/mahasiswa');
  });
};
