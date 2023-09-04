const handleCategory = async () => {

   const response = await fetch('https://openapi.programming-hero.com/api/videos/categories');
   const data = await response.json();

   const tabContainer = document.getElementById("tab-container");
   data.data.forEach((category)=>{
    const div = document.createElement("div");
    div.innerHTML =`
    <button onclick="handleLoadVideos('${category.category_id}')" class="btn">${category.category}</button>
    `;
    tabContainer.appendChild(div);
   });
};


const handleLoadVideos = async (categoryId) => {
    const response = await fetch(`https://openapi.programming-hero.com/api/videos/category/${categoryId}`);
    const data = await response.json();
    const loadData = data.data;
   
    const videosContainer = document.getElementById("videos-container");
    videosContainer.textContent= '';

    data.data.forEach((video)=>{
      viewsTotal = video.others.views
// console.log(viewsTotal);
const hours = Math.floor(video.others.posted_date / 3600);

    const remainingSeconds = video.others.posted_date % 3600;
    const minutes = Math.floor(remainingSeconds / 60);

        const div = document.createElement('div');
        div.innerHTML = `
        <figure><img class="w-full h-44 rounded-lg" src="${video.thumbnail}" alt="thumbnail" /></figure>
        ${video.others.posted_date ? `<div class="card-actions justify-end -mt-10 m-3">
        <button class="bg-[#171717] text-white text-xs font-light p-2 rounded-lg "> ${hours} hrs ${minutes} min ago</button>
        </div>` 
        : ''}
            <div class="card-body">
               <div class="flex flex-row gap-4">
                  <img class="rounded-full w-10 h-10" src="${video.authors[0].profile_picture}" alt="authors-profile" />
                   <h2 class="card-title">${video.title}</h2>
                </div>

                <div class="flex ">
                   <p class="pl-14 text-[#171717B3]">${video.authors[0].profile_name}</p>
                   ${video.authors[0].verified ? '<div class="verification-status"><img src="verified.svg" alt="verification-status" /></div>' : ''}
                </div>
                <div class="card-actions justify-end">
                   <p class="pl-14 text-[#171717B3]">${video.others.views}</p>
                </div>
            </div>
        `;
        videosContainer.appendChild(div);
   
    });


   const dataContainer = document.getElementById('no-data-section');
   dataContainer.textContent= '';
    if (loadData.length == 0) {
        const div = document.createElement("div");
        div.innerHTML = `
        <img class="ml-32 md:ml-28 lg:ml-28" src="icon.png" alt="thumbnail" />
        <P class="text-4xl font-bold text-center">Oops!! Sorry, There is no <br> content here</P>
        `
         dataContainer.appendChild(div);
       }
     
    else{ 
         console.log("continue work")
     }
   
};
    
handleCategory();
handleLoadVideos(1000);





  


