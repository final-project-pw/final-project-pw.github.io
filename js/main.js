//#region Navbar
$(document).ready(function () {
  const allNavId = $(".navbar-nav .nav-item")
    .map(function () {
      return "#" + this.id;
    })
    .toArray();

  const sideBarClass = ["mt-1", "mb-1"];

  // const allNavDefaultColor = allNavId.map(x => $(x).css("color"));
  // const allNavSideBarColor = allNavId.map(x => rgbaMixer($(x).css("color"), 'rgba(0,0,0,1)',
  //     $(x)
  //     .hasClass("active") ? 20 : 50));

  $("#navbarOffcanvasSm").on("show.bs.offcanvas", function () {
    for (let i in allNavId) {
      for (let ii in sideBarClass) $(allNavId[i]).addClass(sideBarClass[ii]);
    }
  });
  $("#navbarOffcanvasSm").on("hidden.bs.offcanvas", function () {
    for (let i in allNavId) {
      for (let ii in sideBarClass) $(allNavId[i]).removeClass(sideBarClass[ii]);
    }
  });
});
//#endregion
