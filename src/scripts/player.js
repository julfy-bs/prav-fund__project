
// YouTubeIframeAPI - менеджмент


function onYouTubeIframeAPIReady() {
	let clientWidth = document.documentElement.clientWidth;

	player = new YT.Player('youtube-player', {
		width: clientWidth / 1.5,

		videoId: 'CsCednu9VjA',
		events: {
			'onReady': onPlayerReady,
			'onStateChange': onPlayerStateChange
		},
		playerVars: {
			controls: 0,
			disablekb: 0,
			showinfo: 0,
			rel: 0,
			autoplay: 0,
			modestbranding: 0
		}
	});
}
