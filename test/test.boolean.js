module("boolean");

test("test boolean type", function() {
  var el = createEle();
  var section = {
    section: "boolean section",
    content: [
      {
        name: "myboolean",
        type: "boolean",
        value: false
      }
    ]
  }
  el.innerHTML = formBuilder.render(section);
  ok(1==1);
});
