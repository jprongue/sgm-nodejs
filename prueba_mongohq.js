var mongoose = require('mongoose');

var conn=mongoose.createConnection('mongodb://prueba:prueba@alex.mongohq.com:10002/prueba');

conn.on('error', console.error.bind(console,'No funco che!'));

conn.once('open', function () {
    console.log("se conecto, uuuhh tengo que trabajar");
	//var res=conn.model('Provincia');

	var schprovincias = new mongoose.Schema({ID_PROVINCIA: String, DESCRIPCION: String});

	var provincias = conn.model('provincias',schprovincias);

	//var res=provincias.find().all(function (prov) {
	//sys.puts(prov);
	//});
    provincias.find({ID_PROVINCIA:"TUC"},function (err,provs) {
        if (!err) {
            console.log(provs);
            
        }else{
            throw err;
        }
        
        process.exit();
    });
	console.log('TERMINE');
    
});
