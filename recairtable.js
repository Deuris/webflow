document.getElementById("form_submit").addEventListener("submit", async function (event) {
    event.preventDefault();
    await postData();
  });

  async function postData() {
    const firstLow = document.getElementById("firstmember_lowPrice").value;
    const firstHigh = document.getElementById("firstmember_hightPrice").value;
    const secondLow = document.getElementById("secondmember_lowPrice").value;
    const secondHigh = document.getElementById("secondmember_hightPrice").value;


    let data = {
      records: [
        {
          fields: {
            "First Low": firstLow,
            "First High": firstHigh,
            "Second Low": secondLow,
            "Second High": secondHigh,
          },
        },
      ],
    };

    await fetch("https://api.airtable.com/v0/appaNukibMwSkbUtp/tblTcv9uJfLLwK1se/", {
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
