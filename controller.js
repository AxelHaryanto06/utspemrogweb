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

//input data montir
exports.tambahmontir = function (req, res) {
    var nama_montir = req.body.nama_montir;
    var harga_perjam = req.body.harga_perjam;    


    connection.query('INSERT INTO t_montir (nama_montir,harga_perjam) VALUES (?,?)',
        [nama_montir, harga_perjam],

        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Input Data Montir Sukses", res);
            }
        });
};

//input data sparepart
exports.tambahsparepart = function (req, res) {
    var nama_sparepart = req.body.nama_sparepart;
    var harga_sparepart = req.body.harga_sparepart;
    var satuan = req.body.satuan;    


    connection.query('INSERT INTO t_sparepart (nama_sparepart,harga_sparepart,satuan) VALUES (?,?,?)',
        [nama_sparepart, harga_sparepart, satuan],

        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Input Sparepart Sukses", res);
            }
        });
};

//input data user
exports.tambahuser = function (req, res) {
    var nama_user = req.body.nama_user;
    var email = req.body.email;
    var password = req.body.password;
    var level = req.body.level;

    connection.query('INSERT INTO t_user (nama_user,email,password,level) VALUES (?,?,?,?)',
    [nama_user,email,password,level],

        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Input User Sukses", res);
            }
        });
};

//input data level
exports.tambahlevel = function (req, res) {
    var nama_level = req.body.nama_level;    

    connection.query('INSERT INTO t_level (nama_level) VALUES (?)',
    [nama_level],

        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Level Berhasil Di tambahkan", res);
            }
        });
};

//input data service
exports.tambahservis = function (req, res) {
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
                response.ok("Data Servis Berhasil di Tambahkan", res);
            }
        });
};

//ubah montir
exports.ubahmontir = function (req, res) {
    var id_montir = req.body.id_montir;
    var nama_montir = req.body.nama_montir;
    var harga_perjam = req.body.harga_perjam;    


    connection.query('UPDATE t_montir SET nama_montir=?,harga_perjam=? WHERE id_montir=?',
    [nama_montir,harga_perjam,id_montir],

        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Data Montir Berhasil Diubah", res);
            }
        });
};

//ubah sparepart
exports.ubahsparepart = function (req, res) {
    var id_sparepart = req.body.id_sparepart;
    var nama_sparepart = req.body.nama_sparepart;
    var harga_sparepart = req.body.harga_sparepart;    
    var satuan = req.body.satuan;

    connection.query('UPDATE t_sparepart SET nama_sparepart=?,harga_sparepart=?,satuan=? WHERE id_sparepart=?',
    [nama_sparepart,harga_sparepart,satuan,id_sparepart],

        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Data Sparepart Berhasil Diubah", res);
            }
        });
};

//ubah user
exports.ubahuser = function (req, res) {
    var id_user = req.body.id_user;
    var nama_user = req.body.nama_user;
    var email = req.body.email;    
    var password = req.body.password;
    var level = req.body.level;

    connection.query('UPDATE t_user SET nama_user=?,email=?,password=?,level=? WHERE id_user=?',
    [nama_user,email,password,level,id_user],

        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Data User Berhasil Diubah", res);
            }
        });
};

//ubah level
exports.ubahlevel = function (req, res) {
    var id_level = req.body.id_level;
    var nama_level = req.body.nama_level;    

    connection.query('UPDATE t_level SET nama_level=? WHERE id_level=?',
    [nama_level,id_level],

        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Level Berhasil Diubah", res);
            }
        });
};

//ubah servis
exports.ubahservis = function (req, res) {
    var id_servis = req.body.id_servis;
    var tgl_servis = req.body.tgl_servis;
    var id_user = req.body.id_user;
    var id_montir = req.body.id_montir;
    var jumlah_sparepart = req.body.jumlah_sparepart;
    var id_sparepart = req.body.id_sparepart;

    connection.query('UPDATE t_servis SET tgl_servis=?,id_user=?,id_montir=?,jumlah_sparepart=?,id_sparepart=? WHERE id_servis=?',
    [tgl_servis,id_user,id_montir,jumlah_sparepart,id_sparepart,id_servis],

        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Data Servis Berhasil Diubah", res);
            }
        });
};

//hapus montir
exports.hapusmontir = function (req, res) {
    var id_montir = req.body.id_montir;    

    connection.query('DELETE FROM t_montir WHERE id_montir=?',
    [id_montir],

        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Data Montir Berhasil Dihapus", res);
            }
        });
};

//hapus sparepart
exports.hapussparepart = function (req, res) {
    var id_sparepart = req.body.id_sparepart;    

    connection.query('DELETE FROM t_sparepart WHERE id_sparepart=?',
    [id_sparepart],

        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Data Sparepart Berhasil Dihapus", res);
            }
        });
};

//hapus user
exports.hapususer = function (req, res) {
    var id_user = req.body.id_user;    

    connection.query('DELETE FROM t_user WHERE id_user=?',
    [id_user],

        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Data User Berhasil Dihapus", res);
            }
        });
};

//hapus level
exports.hapuslevel = function (req, res) {
    var id_level = req.body.id_level;    

    connection.query('DELETE FROM t_level WHERE id_level=?',
    [id_level],

        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Data Level Berhasil Dihapus", res);
            }
        });
};

//hapus servis
exports.hapusservis = function (req, res) {
    var id_servis = req.body.id_servis;    

    connection.query('DELETE FROM t_servis WHERE id_servis=?',
    [id_servis],

        function (error, rows, fields) {
            if (error) {
                console.log(error);
            } else {
                response.ok("Data Servis Berhasil Dihapus", res);
            }
        });
};