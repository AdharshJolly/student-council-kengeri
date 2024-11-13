fetch("/json/gallery-imageLoader.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (items) {
    let placeholder = document.querySelector(`#lightgallery`);
    let out = "";

    for (let item of items) {
      out += `
                <li
                          class="col-xs-6 col-sm-4 col-md-3 no-pad pad-5x"
                          data-responsive="./images/gallery/${item.imageId}"
                          data-src="./images/gallery/${item.imageId}"
                          data-sub-html="<h4> </h4>"
                        >
                          <a href="#">
                            <img
                              class="img-responsive zoom"
                              src="./images/gallery/${item.imageId}"
                            />
                          </a>
                        </li>
            `;
    }

    placeholder.innerHTML = out;
  });
