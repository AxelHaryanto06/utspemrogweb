var express = require('express');
var auth = require('./auth');
var control = require('../controller');
var router = express.Router();
var verifikasi = require('./verifikasi');

//daftarkan menu registrasi
router.post('/api/v1/register', auth.registrasi);
router.post('/api/v1/login', auth.login);
router.post('/user/pelanggan/tambahdataservis', verifikasi.verifikasi2(), control.tambahdataservis)

//alamat yang perlu otorisasi
router.get('/user/pelanggan/tampil/biayaservis', verifikasi.verifikasi2(), control.tampilgroupsparepart);

//admin
router.post('/user/admin/input/montir', verifikasi.verifikasi1(), control.tambahmontir);
router.post('/user/admin/input/sparepart', verifikasi.verifikasi1(), control.tambahsparepart);
router.post('/user/admin/input/user', verifikasi.verifikasi1(), control.tambahuser);
router.post('/user/admin/input/level', verifikasi.verifikasi1(), control.tambahlevel);
router.post('/user/admin/input/servis', verifikasi.verifikasi1(), control.tambahservis);

router.put('/user/admin/ubah/montir', verifikasi.verifikasi1(), control.ubahmontir);
router.put('/user/admin/ubah/sparepart', verifikasi.verifikasi1(), control.ubahsparepart);
router.put('/user/admin/ubah/user', verifikasi.verifikasi1(), control.ubahuser);
router.put('/user/admin/ubah/level', verifikasi.verifikasi1(), control.ubahlevel);
router.put('/user/admin/ubah/servis', verifikasi.verifikasi1(), control.ubahservis);

router.delete('/user/admin/hapus/montir', verifikasi.verifikasi1(), control.hapusmontir);
router.delete('/user/admin/hapus/sparepart', verifikasi.verifikasi1(), control.hapussparepart);
router.delete('/user/admin/hapus/user', verifikasi.verifikasi1(), control.hapususer);
router.delete('/user/admin/hapus/level', verifikasi.verifikasi1(), control.hapuslevel);
router.delete('/user/admin/hapus/servis', verifikasi.verifikasi1(), control.hapusservis);

module.exports = router;