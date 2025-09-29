async function getDataNews() {
  const response = await fetch(
    "https://fallapp.falles360.com/api/newNoticias",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      mode: "cors",
    }
  );
  if (!response.ok) {
    console.error("Network response was not ok:", response.statusText);
  } else {
    const data = await response.json();
    console.log(data);
  }

  return data;
}

export default getDataNews;
