//ELEMENTOS
let podcastTimeline = document.querySelector("#podcast_timeline");
let podcastTimelineProgress = document.querySelector("#s_podcast .timeline_progress");

let portadaVideo = document.querySelector("#s_portada video")

//EVENTOS
// Ocultar video de portada
window.addEventListener('scroll', () => {
    // Check how far the user has scrolled
    const scrollPosition = window.scrollY;

    // If the user scrolls more than 100vh (100% of the viewport height)
    if (scrollPosition > window.innerHeight) {
        portadaVideo.style.display = "none";  //Hide the content
    } else {
        portadaVideo.style.display = "block";  // Show the content
    }
});

// Attach the event listener
window.addEventListener("scroll", updatePodcastProgress);

// Initial call on load to set the correct height
document.addEventListener("DOMContentLoaded", updatePodcastProgress);

// items show
document.addEventListener("DOMContentLoaded", () => {
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Trigger once on page load
});

//FUNCIONES
function updatePodcastProgress() {
    const sectionRect = podcastTimeline.getBoundingClientRect(); // Position relative to the viewport
    const sectionHeight = podcastTimeline.offsetHeight;

    // Get the scrollable range for the section
    const scrollStart = sectionRect.top + window.scrollY;
    const scrollEnd = scrollStart + sectionHeight;

    const scrollPosition = window.scrollY + window.innerHeight / 2; // Center of the viewport

    // Calculate progress based on the center of the viewport
    let progress = Math.max(
        0,
        Math.min(1, (scrollPosition - scrollStart) / (scrollEnd - scrollStart))
    );

    //max 92.6892
    progress = progress * 100
    //progress = mapRange(progress, 1, 92.6892, 1, 100)
    if (progress > 90) {

        /* for (let i = Math.round(progress); i <= 100; i++) {
            podcastTimelineProgress.style.height = `${i}%`;
        } */
        /*   updateHeightWithDelay(Math.round(progress), 100, 90);  */
        podcastTimelineProgress.style.height = `${100}%`;

    } else {
        // Update the height of the progress line
        podcastTimelineProgress.style.height = `${progress}%`;
    }

    /*  console.log({
         sectionRect,
         sectionHeight,
         scrollPosition,
         progress,
     }); */
}

function delayFor(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function updateHeightWithDelay(start, end, delay) {
    for (let i = start; i <= end; i++) {
        podcastTimelineProgress.style.height = `${i}%`;
        await delayFor(delay); // Wait for the specified delay
    }
}

function handleScroll() {
    const timelineItems = document.querySelectorAll(".timeline_item-wrap");
    const viewportHeight = window.innerHeight;
    let threshold;

    timelineItems.forEach((item) => {
        const rect = item.getBoundingClientRect();
        const elementTop = rect.top;
        const elementBottom = rect.bottom;

        if (item == timelineItems[14]) {
            threshold = viewportHeight / 2;
        } else {
            threshold = viewportHeight / 2.5;
        }
        // Show the item if its top is above the threshold and bottom is below the threshold
        if (elementTop <= threshold) {
            item.classList.remove("hiddenPodcast");
        } else {
            item.classList.add("hiddenPodcast");
        }
    });
}

function mapRange(value, inMin, inMax, outMin, outMax) {
    return outMin + ((value - inMin) / (inMax - inMin)) * (outMax - outMin);
}