'use district';

module.exports = function (app) {
    var jsonku = require('./controller');

    app.route('/')
        .get(jsonku.index);

    app.route('/tampilsparepart')
        .get(jsonku.tampildatasparepart);
    app.route('/tampilmontir')
        .get(jsonku.tampildatamontir);
}