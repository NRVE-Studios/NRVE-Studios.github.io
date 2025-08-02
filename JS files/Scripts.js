    const video = document.getElementById('myVideo');

    const options = {
        root: null, // The viewport is the root
        rootMargin: '0px',
        threshold: 0.5 // Trigger when 50% of the video is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Video is in view, play it
                entry.target.play();
            } else {
                // Video is out of view, pause it
                entry.target.pause();
            }
        });
    }, options);

    // Start observing the video element
    observer.observe(video);
