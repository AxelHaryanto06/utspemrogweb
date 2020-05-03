'use district';

var response = require('./res');
var connection = require('./koneksi');

exports.index = function (req, res) {
    response.ok("Aplikasi REST API berjalan !", res)
};

//menampilkan semua data sparepart
exports.tampildatasparepart = function (req, res) {
    connection.query('SELECT * FROM t_sparepart', function (error, rows, fields) {
        if (error) {
            console.log(error);
        } else {
            response.ok(rows, res)
        }
    });
};

//menampilkan data sparepart berdasarkan id
exports.tampilsparepartid = function (req, res) {
    let id = req.params.id;
    connection.query('SELECT * FROM t_sparepart WHERE id_sparepart = ?', (id),
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok(rows, res);
            }
        });
};

//menampilkan semua data montir
exports.tampildatamontir = function (req, res) {
    connection.query('SELECT * FROM t_montir', function (error, rows, fields) {
        if (error) {
            console.log(error);
        } else {
            response.ok(rows, res)
        }
    });
};

//menampilkan data montir berdasarkan id
exports.tampilmontirid = function (req, res) {
    let id = req.params.id;
    connection.query('SELECT * FROM t_montir WHERE id_montir = ?', (id),
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok(rows, res);
            }
        });
};

//menampilkan sparepart group
exports.tampilgroupsparepart = function(req, res){
    connection.query('SELECT mahasiswa.id_mahasiswa, mahasiswa.nim, mahasiswa.nama, mahasiswa.jurusan, matakuliah.matakuliah, matakuliah.sks from krs JOIN matakuliah JOIN mahasiswa WHERE krs.id_matakuliah = matakuliah.id_matakuliah AND krs.id_mahasiswa = mahasiswa.id_mahasiswa ORDER BY mahasiswa.id_mahasiswa',
        function (error, rows, fields){
            if(error){
                console.log(error);
            }else {
                response.oknested(rows, res);
            }
        }
    )

}