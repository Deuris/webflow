
  async function fetchData() {
    const fieldsToRetrieve = ["First name", "Real date"].map(encodeURIComponent).join("&fields[]=");

    await fetch(`https://api.airtable.com/v0/appaNukibMwSkbUtp/tblYqFxuHf0Ns4wgg?sort[0][field]=_createdTime&sort[0][direction]=desc&maxRecords=1&fields[]=${fieldsToRetrieve}`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        Authorization: "Bearer keyW9wlscQjYRuR2l",
      },
      mode: "cors",
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);

        // Assuming you want to use the newest record's data
        const record = json.records[0];

        // Fill the data into the input fields
        document.getElementById("offer_firstmember_date").value = record.fields["Real date"] || "";
        document.getElementById("h5_name").value = record.fields["First name"] || "";

      });
  }

  fetchData();