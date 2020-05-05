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

//menambahkan data servis
exports.tambahdataservis = function (req, res) {
    var tgl_servis = req.body.tgl_servis;
    var id_user = req.body.id_user;
    var id_montir = req.body.id_montir;
    var jumlah_sparepart = req.body.jumlah_sparepart;
    var id_sparepart = req.body.id_sparepart;


    connection.query('INSERT INTO t_servis (tgl_servis,id_user,id_montir,jumlah_sparepart,id_sparepart) VALUES (?,?,?,?,?)',
        [tgl_servis, id_user, id_montir, jumlah_sparepart, id_sparepart],

        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Input Data Servis Sukses", res);
            }
        });
};

//menampilkan total biaya
exports.tampilgroupsparepart = function (req, res) {
    connection.query('SELECT t_user.nama_user, t_servis.tgl_servis, t_montir.nama_montir, t_sparepart.nama_sparepart, t_sparepart.harga_sparepart, t_servis.jumlah_sparepart, (harga_perjam + jumlah_sparepart * harga_sparepart) AS total_harga FROM t_servis JOIN t_user JOIN t_montir JOIN t_sparepart WHERE t_servis.id_user = t_user.id_user AND t_servis.id_montir = t_montir.id_montir AND t_servis.id_sparepart = t_sparepart.id_sparepart ORDER BY t_user.id_user ',
        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.oknested(rows, res);
            }
        }
    )

}

