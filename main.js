
  function changeColor() {
    var body = document.body;
    var currentColor = body.style.backgroundColor;

    if (currentColor === "black") 
    {
      body.style.backgroundColor = "#1c87c9"; // First color
    }
    else 
    {
      body.style.backgroundColor = "black"; // Second color
    }
  } 