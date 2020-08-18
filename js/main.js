console.log("JS Open");

function scroller(elementID) {
  console.log(elementID);
  var element = document.getElementById(elementID);
  // smooth scroll to element and align it at the bottom
  
  element.scrollIntoView({ behavior: "smooth", block: "end" });
}
