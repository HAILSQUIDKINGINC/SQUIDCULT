document.onclick = function (e) {
  if (e === undefined) e = window.event;
  var target = "target" in e ? e.target : e.srcElement;

  if (
    target.parentNode.href == undefined &&
    target.tagName == "IMG" &&
    target.onclick == null &&
    target.id != "niggerbabble_image" &&
    target.dataset.gallery != "false"
  ) {
    var imgs = document.getElementsByTagName("img");
    var imgSrcs = [];
    var texts = [];
    var curImg = 0;
    var failed = 0;

    for (var i = 0; i < imgs.length; i++) {
      if (imgs[i].dataset.gallery != "false") {
        if (imgs[i].src == target.src) curImg = i - failed;
        imgSrcs.push(imgs[i].src);
        texts.push(imgs[i].alt);
      } else failed++;
    }

    // Main div
    var leDiv = document.createElement("div");
    leDiv.style = `
    position: fixed;
    background-color: rgba(0, 0, 0, 0.9);
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    z-index: 9998;
    display: block;
    overflow-y: hidden;
    overflow-x: hidden;`;
    leDiv.id = "niggerbabble";

    // Close
    var leClose = document.createElement("p");
    leClose.style = `cursor: pointer;
    position: absolute;
    margin-left: 50vw;
    top: 0vh;
    right: 0vw;
    padding-right: 50px;
    width: 1vh;
    height: 1vh;
    margin: auto;
    font-size: 50px;
    text-align: right;
    color: white;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;`;
    leClose.id = "niggerbabble_close";
    leClose.innerText = "×";
    leClose.onmouseenter = function () {
      leClose.style["color"] = "grey";
    };
    leClose.onmouseleave = function () {
      leClose.style["color"] = "white";
    };
    leClose.onclick = function () {
      leDiv.remove();
    };
    leDiv.appendChild(leClose);

    // Image
    var leImage = document.createElement("img");
    leImage.style = `cursor: pointer;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    object-fit: contain;
    max-width: 80%;
    max-height: 70%;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;`;
    leImage.onclick = function () {
      window.open(leImage.src, "_blank").focus();
    };
    leImage.id = "niggerbabble_image";
    leImage.src = imgSrcs[curImg];
    leDiv.appendChild(leImage);


    // TextBorder
    var leTextBorder = document.createElement("p");
    leTextBorder.style = `background-color: rgba(0, 0, 0, 0.9);
      border: 1px solid white;
      position: fixed;
      width: 88vw;
      height: 14vh;
      margin: 0;
      left: 6vw;
      bottom: 1vh;
      overflow-y: scroll;
      text-align: center;
      overscroll-behavior-y: contain;
      `;
    leDiv.appendChild(leTextBorder);


   // Text
    var leText = document.createElement("p");
    leText.style = `
      margin: 20;
      font-size: calc(20px + 1vw);
      color: white;
      user-select: none;
      word-break: break-all;
      overflow-y: scroll;
      text-align: center;
      overscroll-behavior-y: contain;
      `;
    leText.id = "niggerbabble_text";
    if (texts[curImg] == "") leText.style["display"] = "none";
    else leText.style["display"] = "";
    leText.innerText = texts[curImg];
    leTextBorder.appendChild(leText);

    // Left arrow
    var leLeft = document.createElement("p");
    leLeft.style = `cursor: pointer;
    position: absolute;
    margin-left: auto;
    top: 0;
    bottom: 0;
    height: 15vh;
    line-height: 15vh;
    margin: auto;
    font-size: 300%;
    margin-left: 2%;
    color: white;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;`;
    if (curImg == 0) leLeft.style["display"] = "none";
    leLeft.onmouseenter = function () {
      leLeft.style["color"] = "grey";
    };
    leLeft.onmouseleave = function () {
      leLeft.style["color"] = "white";
    };
    leLeft.id = "niggerbabble_left";
    leLeft.innerText = "◄";
    leLeft.onclick = function () {
      leRight.style["display"] = "";
      if (curImg > 0) {
        curImg--;
        leImage.src = imgSrcs[curImg];
        leText.innerText = texts[curImg];
        if (texts[curImg] == "") leText.style["display"] = "none";
        else leText.style["display"] = "";
      }
      if (curImg == 0) leLeft.style["display"] = "none";
    };
    leDiv.appendChild(leLeft);

    // Right arrow
    var leRight = document.createElement("p");
    leRight.style = `cursor: pointer;
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    height: 15vh;
    line-height: 15vh;
    margin: auto;
    font-size: 300%;
    color: white;
    text-align: right;
    padding-right: 2%;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;`;
    if (curImg >= imgSrcs.length - 1) leRight.style["display"] = "none";
    leRight.onmouseenter = function () {
      leRight.style["color"] = "grey";
    };
    leRight.onmouseleave = function () {
      leRight.style["color"] = "white";
    };
    leRight.id = "niggerbabble_right";
    leRight.innerText = "►";
    leRight.onclick = function () {
      leLeft.style["display"] = "";
      if (curImg < imgSrcs.length - 1) {
        curImg++;
        leImage.src = imgSrcs[curImg];
        leText.innerText = texts[curImg];
        if (texts[curImg] == "") leText.style["display"] = "none";
        else leText.style["display"] = "";
      }
      if (curImg == imgSrcs.length - 1) leRight.style["display"] = "none";
    };
    leDiv.appendChild(leRight);

    document.body.appendChild(leDiv);
  }
};
