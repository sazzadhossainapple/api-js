const loadArtistList = async (search) => {
  const url = `https://www.theaudiodb.com/api/v1/json/2/search.php?s=${search}`;

  try {
    const res = await fetch(url);
    const data = await res.json();
    displayArtistList(data.artists);
  } catch (error) {
    console.log(error);
  }
};

const displayArtistList = (artists) => {
  const artistContainer = document.getElementById("artist-container");
  artistContainer.textContent = "";
  //   display not found
  const noArtist = document.getElementById("no-found-message");
  if (artists === null) {
    noArtist.classList.remove("d-none");
    return;
  } else {
    noArtist.classList.add("d-none");
  }

  //diplay all
  artists.forEach((artist) => {
    // console.log(artist);
    const divArtist = document.createElement("div");
    divArtist.classList.add("col");
    divArtist.innerHTML = `
    <div onclick="loadArtisListDetails(${artist.idArtist})"  class="img-artist" data-bs-toggle="modal"
    data-bs-target="#artistDetailsModal">
    
    <img src="${artist.strArtistThumb}" class="card-img-top" alt="..." />
       <span>${artist.strArtist}</span>
    </div>
    `;
    artistContainer.appendChild(divArtist);
  });
  //stop loader
  toggleSpinner(false);
};

const searchArtistList = () => {
  // start loader
  toggleSpinner(true);
  const searchField = document.getElementById("search-field");
  const searchText = searchField.value;
  loadArtistList(searchText);
  searchField.value = "";
};

// search
document
  .getElementById("search-field")
  .addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      searchArtistList();
    }
  });

const loadArtisListDetails = async (id) => {
  const url = `https://theaudiodb.com/api/v1/json/2/artist.php?i=${id}`;

  try {
    const res = await fetch(url);
    const data = await res.json();
    displayArtistListDetails(data.artists[0]);
  } catch (error) {
    console.log(error);
  }
};

const displayArtistListDetails = (artist) => {
  console.log(artist);
  const bandName = document.getElementById("artistDetailsModalLabel");
  bandName.innerText = artist.strArtist;
  const artistBandDtails = document.getElementById("artist-details");
  artistBandDtails.textContent = "";

  const divNew = document.createElement("div");
  divNew.innerHTML = `

  <div class="card" w-100">
  <img src="${artist.strArtistThumb}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title d-flex justify-content-between">Country: ${artist.strCountry} 
   <span>Catagory: ${artist.strGenre}<span>
    </h5>
    <p class="card-text">${artist.strBiographyEN}</p>
   
    <a href="${artist.strFacebook}" target="_blank" class="text-decoration-none"><i class="bi bi-facebook"></i></a>

    <a href="${artist.strTwitter}" target="_blank" class="text-decoration-none"><i class="bi bi-twitter"></i></a>

    <a href="${artist.strWebsite}" target="_blank" class="text-decoration-none"><i class="bi bi-file-person"></i></a>
   
  </div>
</div>
    

  `;
  artistBandDtails.appendChild(divNew);
};

const toggleSpinner = (isLoading) => {
  const loaderSection = document.getElementById("loader");
  if (isLoading) {
    loaderSection.classList.remove("d-none");
  } else {
    loaderSection.classList.add("d-none");
  }
};

loadArtistList("");
