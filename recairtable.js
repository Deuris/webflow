document.getElementById("offers_form").addEventListener("submit", async function (event) {
    event.preventDefault();
    await postData();
  });

  async function postData() {
    const firstLow = document.getElementById("firstmember_lowPrice").textContent;
    const firstHigh = document.getElementById("firstmember_hightPrice").textContent;
    const secondLow = document.getElementById("secondmember_lowPrice").textContent;
    const secondHigh = document.getElementById("secondmember_hightPrice").textContent;
    const firstSlider = document.getElementById("slider-range-value").value;
    const secondSlider = document.getElementById("slider-range-value2").value;

    let data = {
      records: [
        {
          fields: {
            "First Low": firstLow,
            "First High": firstHigh,
            "Second Low": secondLow,
            "Second High": secondHigh,
            "First Slider": firstSlider,
            "Second Slider": secondSlider,

          },
        },
      ],
    };

    await fetch("https://api.airtable.com/v0/appaNukibMwSkbUtp/tblTcv9uJfLLwK1se", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json",
        Authorization: "Bearer keyW9wlscQjYRuR2l",
      },
      mode: "cors",
      typecast: true,
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  }