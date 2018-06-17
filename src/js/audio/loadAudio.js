export default function(music, vol) {
		let audio = document.createElement('AUDIO');
		let source = document.createElement('source');
		source.src = music;
		audio.appendChild(source);
		audio.volume = vol || 1;

		let elem = {
			dom : false,
			state: 'stop',
			play: function() {
				this.dom.currentTime = 0;
				this.dom.play();
				this.state = 'play';
			},
			pause: function() {
			 	this.dom.pause();
				this.state = 'pause';
			},
			stop: function() {
			 	this.dom.pause();
				this.dom.currentTime = 0;
				this.state = 'stop';
			},
			setVolume : function(vol) {
				this.dom.volume = vol;
			}
		}
		elem.dom = audio;
		return elem;
}