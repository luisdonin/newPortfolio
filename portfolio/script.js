// Get the carousel and buttons elements

// Function to show the previous slide
function showPrevSlide() {
  showSlide(slideIndex - 1);
}

// Function to show the next slide
function showNextSlide() {
  showSlide(slideIndex + 1);
}
function playNextVideo() {
	// Get the current video element
	let currentVideo = document.querySelector('.carousel-item.active video');
	
	// Get the next video element
	let nextVideo = currentVideo.parentElement.nextElementSibling.querySelector('video');
	
	if (nextVideo) {
		// If there's a next video, play it
		currentVideo.parentElement.classList.remove('active');
		nextVideo.parentElement.classList.add('active');
		nextVideo.play();
	} else {
		// If there's no next video, start over with the first one
		let firstVideo = document.querySelector('.carousel-item:first-of-type video');
		currentVideo.parentElement.classList.remove('active');
		firstVideo.parentElement.classList.add('active');
		firstVideo.play();
	}
}

// Add an event listener to each video element that calls the playNextVideo function when it ends
document.querySelectorAll('.carousel-item video').forEach(video => {
	video.addEventListener('ended', playNextVideo);
});

