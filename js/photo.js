const loadAllPhoto = () => {
  fetch("https://jsonplaceholder.typicode.com/photos")
    .then((res) => res.json())
    .then((data) => displayAllPhoto(data))
    .catch((error) => console.log(error));
};

const displayAllPhoto = (photos) => {
  const photoContainer = document.getElementById("photo-container");
  photos.forEach((photo) => {
    const divPhoto = document.createElement("div");
    divPhoto.classList.add("col");
    divPhoto.innerHTML = `
        <div class="card h-100">
        <img src="${photo.thumbnailUrl}" class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">${photo ? photo.title : "No Title"}</h5>
          <!-- Button trigger modal -->
          <button
          onclick="loadPhotoDetails(${photo.id})"
            type="button"
            class="btn btn-primary mt-3"
            data-bs-toggle="modal"
            data-bs-target="#detialPhotoModal"
          >
            Details
          </button>  
        </div>
      </div>
        `;
    photoContainer.appendChild(divPhoto);
  });
};

const loadPhotoDetails = (id) => {
  const url = `https://jsonplaceholder.typicode.com/photos/${id}`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => displayPhotoDetails(data))
    .catch((error) => console.log(error));
};
const displayPhotoDetails = (photos) => {
  const photoDetails = document.getElementById("photo-details");
  photoDetails.textContent = "";
  const detailsDiv = document.createElement("div");
  detailsDiv.classList.add("modal-content");
  detailsDiv.innerHTML = `
  <div class="modal-header">
  <h5 class="modal-title" id="detialPhotoModalLabel">${photos.title}</h5>
  <button
    type="button"
    class="btn-close"
    data-bs-dismiss="modal"
    aria-label="Close"
  ></button>
</div>
<div class="modal-body">
  <div>
    <img
      src="${photos.thumbnailUrl}"
      class="card-img-top"
      alt="..."
    />
  </div>
  <div class="mt-4">
    <img
      src="${photos.url}"
      class="card-img-top"
      alt="..."
    />
  </div>
</div>
<div class="modal-footer">
  <button
    type="button"
    class="btn btn-secondary"
    data-bs-dismiss="modal"
  >
    Close
  </button>
</div>
  

  `;
  photoDetails.appendChild(detailsDiv);
};
loadAllPhoto();
