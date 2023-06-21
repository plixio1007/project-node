const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')
const ejs = require('ejs')
const expressLayouts = require('express-ejs-layouts')
const path = require('path')
const mahasiswaController = require('./controllers/mahasiswaController');
const matkulController = require('./controllers/matkulController');

app.use(express.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(expressLayouts)

app.use(express.static(path.join(__dirname, 'public')))

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.set('layout', 'layouts/main')

app.get('/', (req, res) => {
  const title = 'Halaman Utama'
  res.render('index', { title })
})

app.get("/mahasiswa", mahasiswaController.getAllMahasiswa)
app.get("/matkul", matkulController.getAllMatkul)

app.post("/mahasiswa/tambah", mahasiswaController.addMahasiswa)
app.post("/matkul/tambah", matkulController.addMatkul)

app.get("/mahasiswa/tambah", (req, res) => {
  res.render('mahasiswaTambah')
})
app.get("/matkul/tambah", (req, res) => {
  res.render('matkulTambah')
})

app.get('/mahasiswa/update', mahasiswaController.getMahasiswaById)
app.get('/matkul/update', matkulController.getMatkulById)

app.post("/mahasiswa/update", mahasiswaController.updateMahasiswa)
app.post("/matkul/update", matkulController.updateMatkul)

app.get("/mahasiswa/delete", mahasiswaController.deleteMahasiswa);
app.get("/matkul/delete", matkulController.deleteMatkul);

app.listen(port, () => {
  console.log(`Web berjalan pada port ${port}`)
})
