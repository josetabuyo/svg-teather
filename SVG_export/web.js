/*********** SETUP: Vortex *************/

var Vortex = require('vortexjs');
var Vx = Vortex.Vx;

Vx.verbose = true;

/*********** ERROR debugging by Vortex *************/
process.on('uncaughtException', function (err) {
  	console.log('Tiró error: ', err.toString());
	Vx.send({
		tipoDeMensaje: "vortex.debug.error",
		error: err.toString()
	});
});
var server_vortex = new Vortex.ServerVortex();

/*********** SETUP: FileSystem *************/
var fs = require('fs');


/*********** SETUP: svgexport *************/
var svgexport = require('svgexport');








/************************/

Vx.when({ 
	tipoDeMensaje: 'SVG_export'
}, function(mensaje, response){
	
	
	fs.writeFile('frame.svg', mensaje.svg, function(error){
		
		console.log(error);
		
		/*
		response.send({
			error: error,
			data: 'OK'
		});
		svgexport.render('SVG_export/jpeg_config.json', function(param){
			error+='\n'+param;
			console.log('algo terminó, no sé bien que', param);
			fs.unlinkSync('SVG_export/tmp_archivo.svg');
		});
		*/
		
	});
	
});