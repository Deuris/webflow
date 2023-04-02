document.getElementById("offers_form").addEventListener("submit", async function (event) {
    event.preventDefault();
    await postData();
  });

  async function postData() {
    const firstLow = document.getElementById("test_title").value;
    const firstHigh = document.getElementById("firstmember_hightPrice").value;
    const secondLow = document.getElementById("test_title_2").value;
    const secondHigh = document.getElementById("secondmember_hightPrice").value;
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