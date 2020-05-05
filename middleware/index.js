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

//admin
router.get('/user/admin/input/montir', verifikasi.verifikasi1(), control.tambahmontir);
router.get('/user/admin/input/sparepart', verifikasi.verifikasi1(), control.tambahsparepart);
router.get('/user/admin/input/user', verifikasi.verifikasi1(), control.tambahuser);
router.get('/user/admin/input/level', verifikasi.verifikasi1(), control.tambahlevel);
router.get('/user/admin/input/servis', verifikasi.verifikasi1(), control.tambahservis);

module.exports = router;