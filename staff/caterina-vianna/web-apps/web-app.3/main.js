(function () {
  // root - where starts to be introduced all the code
  var root = getElementById("root");

  //title
  var title = mountTitle(function () {
    root.lastChild.replaceWith(access);
  });

  root.append(title); //append is used to append(adjuntar) a text into an element
});
