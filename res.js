'use district';

exports.ok = function(values, res){
    var data = {
        'status':200,
        'values':values
    };

     res.json(data);
     res.end();
};

//response untuk nested servis
exports.oknested = function(values, res){
    //lakukan akumulasi
    const hasil = values.reduce((akumulasikan, item)=>{
        //tentukan key group
        if(akumulasikan[item.nama_user]){
            //buat variabel group nama user
            const group = akumulasikan[item.nama_user];
            //cek jika isi array adalah sparepart
            if(Array.isArray(group.t_sparepart)){
                //tambahkan value ke dalam group sparepart
                group.t_sparepart.push(item.t_sparepart);
            }else {
                group.t_sparepart = [group.t_sparepart, item.t_sparepart];
            }
        }else {
            akumulasikan[item.nama_user] = item;
        }
        return akumulasikan;
    }, {});

    var data = {
        'status':200,
        'values':hasil
    };
    
     res.json(data);
     res.end();

}