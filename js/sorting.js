// document.getElementById('sort').addEventListener('click', function () {
//     console.log(handleCategory2());
//   });
  
//   const handleCategory2 = async () => {

//     const response = await fetch('https://openapi.programming-hero.com/api/videos/categories');
//     const data = await response.json();
 
//     const tabContainer = document.getElementById("tab-container");
//     data.data.forEach((category)=>{
//      const div = document.createElement("div");
//      div.innerHTML =`
//      <button onclick="handleLoadVideos('${category.category_id}')" class="btn">${category.category}</button>
//      `;
//      tabContainer.appendChild(div);
//     });
//  };
 
 
 