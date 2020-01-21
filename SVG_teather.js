var svg = Snap("#svg");

var SVG_teather = function(opt){
	$.extend(this, {
		x: 0,
		y: 0
		
	}, opt);
	
	this.start();
};


SVG_teather.prototype = {
	
	protagonista: null,
	start: function (){
		var self = this;
		
		self.template('start');
		
		
		$('body').on('keydown', function(e){
			
			self.template('key1');
		})
		
	},
	template: function(templatePattern){
		var self = this;
		
		self['template_' + templatePattern ]();
		
	},
	template_start: function(){
		var self = this;
		
		var pos = {
			x:0,
			y:0
		};
		
		
		try{
			bb = self.protagonista.getBBox();
			
			pos = {
				x:bb.x,
				y:bb.y
			};
			
			self.protagonista.remove();
			self.fondo.remove();
		}catch(e){
			
		}
		
		

		self.fondo = svg.group(
			svg.rect(0,0, $('svg').width(), $('svg').height())
		);
		self.fondo.attr({
			fill: "#000000"
		});
		
		
		self.protagonista = svg.group(
			svg.circle(150,100,150)
		);
		
		
		self.protagonista.attr({
			transform: "t"+pos.x+","+pos.y,
			fill: "#FFFFFF",
			filter: svg.filter(Snap.filter.blur(5, 5))
			//filter: Snap.filter.blur(5, 10)
		});
		
		
		svg.mousemove(function(e){
			self.protagonista.animate({ transform: 't'+ e.pageX +','+ e.pageY }, 5, mina.easyin );
		});
		
	},
	template_key1: function(){
		var self = this;
		
		self.template('start');
		

		self.protagonista.attr({
			fill: "#FFFF00"
		});
		
		self.fondo.attr({
			fill: "#AA11AA"
		});
		
	}

};

