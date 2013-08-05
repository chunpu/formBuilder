module('qsStringify');

function qsParse(str) {
  // simple just for test
  str = str.trim();
  console.log(str);
  var obj = {};
  var arr = str.split(' ');
  for (var i = 0; i < arr.length; i++) {
    var _arr = arr[i].split('=');
    var k = _arr[0];
    var v = _arr[1].substring(0, _arr[1].length);
    obj[k] = v;
  }
  return obj;
}

test('{name: "name", value: "val"}', function() {
  var obj = {
    name: "name",
    value: "val"
  };
  var str = formBuilder.qsStringify(obj, {ignore: ['name']});
  obj['class'] = 'form-control';
  deepEqual(qsParse(str), obj);
});

test("", function() {

  var obj = {
    name: "name1",
    value: "value1"
  };
  var str = formBuilder.qsStringify(obj);
  var obj1 = {
    value: "value1",
    name: "name1",
    "class": "form-control"
  };
  deepEqual(qsParse(str), obj1);
});
