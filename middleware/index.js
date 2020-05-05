var express = require('express');
var auth = require('./auth');
var control = require('../controller');
var router = express.Router();
var verifikasi = require('./verifikasi');

//daftarkan menu registrasi
router.post('/api/v1/register', auth.registrasi);
router.post('/api/v1/login', auth.login);
router.get('/user/pelanggan/tambahdataservis', verifikasi.verifikasi2(), control.tambahdataservis)

//alamat yang perlu otorisasi
router.get('/user/pelanggan/tampil/biayaservis', verifikasi.verifikasi2(), control.tampilgroupsparepart);


module.exports = router;