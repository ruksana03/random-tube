document.getElementById('btn-drawing').addEventListener('click', function () {
   
    const loadVideo = async () => {
        const res = await fetch('https://openapi.programming-hero.com/api/videos/category/1005');
        const data = await res.json();
        const videos = data.data;
        // console.log(videos);
        displayVideos(videos);
    }

    const displayVideos = videos => {
        // console.log(videos);

        const videosContainer = document.getElementById('videos-container');
        videosContainer.textContent= '';

        videos.forEach(video => {
            console.log(video);
            const videoCard = document.createElement('div');


            videoCard.classList = `card bg-base-100 shadow-xl mt-6`


            videoCard.innerHTML = `
            <figure><img class=" h-44 rounded-lg" src="${video.thumbnail}" alt="thumbnail" /></figure>
            <div class="card-body">
               <div class="flex flex-row gap-4">
                  <img class="rounded-full w-10 h-10" src="${video.authors[0].profile_picture}" alt="authors-profile" />
                   <h2 class="card-title">${video.title}</h2>
                </div>

                <div class="flex flex-row gap-0">
                   <p class="pl-14 text-[#171717B3]">${video.authors[0].profile_name}</p>
                   ${video.authors[0].verified ? '<div class="verification-status"><img src="verified.svg" alt="verification-status" /></div>' : ''}
                </div>
                <div class="card-actions justify-end">
                   <p class="pl-14 text-[#171717B3]">${video.others.views}</p>
                </div>
            </div>
            `;

            videosContainer.appendChild(videoCard);
        })
    }
    loadVideo();
})