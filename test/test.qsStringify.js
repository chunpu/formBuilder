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
    var v = _arr[1].substring(1, _arr[1].length-1);
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

  // we don't need name for select option
  var obj = {
    name: "name1",
    value: "value1"
  };
  var str = formBuilder.qsStringify(obj, ['name']);
  var obj1 = {
    value: "value1",
    "class": "form-control"
  };
  deepEqual(qsParse(str), obj1);
});
