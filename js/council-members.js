fetch("/json/council-members.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (items) {
    let placeholder = document.querySelector(`#council-members`);
    let out = "";

    for (let item of items) {
      out += `
                <div class="col-lg-3 col-sm-4 col-md-3">
                  <div class="mentor-itm-itm">
                    <div class="mentor-itm-mmg">
                      <img
                        src="${item.imageSrc}"
                        class="img-responsive"
                      />
                    </div>
                    <div class="mentor-itm-mmg-txt">
                      <h4>${item.name}</h4>
                      <p>${item.position}</p>
                      <p>${item.email}</p>
                    </div>
                  </div>
                </div>
            `;
    }

    placeholder.innerHTML = out;
  });
