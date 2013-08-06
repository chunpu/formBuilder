(function() {

  // export only render
  var formBuilder = {
    render: genSectionView,
    isSection: isSection,
    qsStringify: qsStringify
  };
  if (window) {
    window.formBuilder = formBuilder;
  } else if (module && module.exports) {

    // nodejs, I think here has problem
    module.exports = formBuilder
  } 

  function isSection(o) {
    if (o.section && o.content) {
      if (Array.isArray(o.content)) {
        return true;
      }
    }
    return false;
  }

  function genSectionView(section, level) {
    var html = '';
    level = level || 1;
    var attrs = section.content;
    html += '<fieldset>';
    html += '<legend class="bold section-h' + level + '">' + section.section + '</legend>';
    html += '<div class="section-content">';
    for (var i = 0; i < attrs.length; i++) {
      if (isSection(attrs[i])) {
        html += arguments.callee(attrs[i], level+1);
      } else {
        html += genObjView(attrs[i]);
      }
    }
    html += '</div>';
    html += '</fieldset>';
    return html;
  }

  function qsStringify(o, opt) {
    // add class theme, maybe var later
    var skey = ['checked', 'selected', 'disable', 'readonly'];
    var str = '';
    /*
    if (o.class) {
      o.class += ' form-control';
    } else {
      o.class = 'form-control';
    }
    */
    
    for (var key in o) {
      if (o[key]) {
        if (skey.indexOf(key) != -1) {
          str += key + ' ';
        } else {
          str += key + '=' + o[key] + ' ';
        }
      }
    }
    return str;
    /*
    opt = opt || {};
    opt.ignore = opt.ignore || [];
    if (opt && opt.label) {
      opt.label = opt.label || 'input';
      html += '<' + opt.label + '';
    }

    if ('class' in o) {
      o['class'] += ' form-control';
    } else {
      o['class'] = 'form-control';
    }

    // delete the attr not belog to tag, like options

    for (var key in o) {
      if (opt.ignore.indexOf(key) != -1) {
        // should be ignore
        continue;
      }
      if (o[key]) {
        if (['selected', 'checked', 'disable', 'readonly'].indexOf(key) != -1) {

          // o[key] should be true!
          html += ' ' + key;
        } else {
          // checkbox, radio cannot have value
          if (!(key == 'value' && o.type && (o.type == 'checkbox' || o.type == 'radio'))) {
            html += ' ' + key + '="' + o[key] + '"';
          }
        }
      }
    }

    if (opt && opt.label) {
      html += ' />';
    }
    */
  }

  function formatOptions(options) {
    for (var i = 0; i < options.length; i++) {
      var type = typeof(options[i]);
      if (type == 'string' || type == 'number') {
        var _o = {
          value: options[i],
          //name: options[i]
        }
        options[i] = _o;
      }
    }
    return options;
  }

  function genObjView(o) {
    var html = '';
    o.label = o.label || o.name;
    html += '<div class="attr">';
    // type
    if ([undefined, 'input', 'select', 'range'].indexOf(o.type) != -1) {
      html += '<label class="full-width">';
      html += '<span class="attr-name">' + o.label + '</span>';
      if (o.type == 'select') {

        // select type, it has options
        // html += '<select class="form-control">';
        if (o.value) {
          var value = o.value;
          delete(o.value);
        }
        o.class = "form-control";
        html += '<select ' + qsStringify(o) + ' >';
        o.options = formatOptions(o.options);
        console.log(o.options);
        if (Array.isArray(o.options) && o.options.length > 0) {
          for (var i = 0; i < o.options.length; i++) {
            // html += '<option>' + o.options[i]  + '</option>';
            var content = o.options[i].name || o.options[i].value;
            //html += qsStringify(o.options[i], {label: 'option',content: content});
            if (o.options[i].value == value) {
              o.options[i].selected = true;
            }
            html += '<option ' + qsStringify(o.options[i]) + '>' + content + '</options>';
          }
        }
        html += '</select>';

      } else {

        // input type
        o.type = o.type || 'text';
        var _o = {
          'type': o.type,
          'class': 'form-control',
          'name': o.name,
          'placeholder': o.placeholder,
          'value': o.value,
          'id': o.id
        };
        if (o.type == 'range') {
          _o.max = o.max;
          _o.min = o.min;
        }
        html += '<input ' + qsStringify(_o) + '></input>';
      }
      html += '</label>';

    } else if (['radio', 'checkbox'].indexOf(o.type) != -1) {
      
      // radio, checkbox type, they have multi input options!
      html += '<span class="attr-name">' + o.name + '</span>';
      if (Array.isArray(o.options) && o.options.length > 0) {
        o.options = formatOptions(o.options);
        for (var i = 0; i < o.options.length; i++) {
          html += '<label class="' + o.type + '-inline">';
          html += '<input ';
          var checked = false;
          if (Array.isArray(o.value)) {
            if (o.value.indexOf(o.options[i].value) != -1) {
              console.log(2222222);
              checked = true;
            }
          } else if (o.value == o.options[i].value){
            checked = true;
          }
          html += qsStringify({
            'type': o.type,
            'name': o.name,
            'checked': checked,
            'value': o.options[i].value,
            'id': o.id
          });
          var text = o.options[i].text || o.options[i].value;
          html += '>' + text + '</input>';
          html += '</label>';
        }
      }
    } else if (o.type == 'list') {
      html += '<span class="attr-name">' + o.name + '</span>';
      if (o.value && o.value.length > 0) {
        for (var i = 0; i < o.value.length; i++) {
          html += '<br><input name="' + o.name + '.' + i + '" value="' + o.value[i] + '"/><button name="' + o.name + '.' + i + '" method="delete">删除</button>';
        }
      }
      html += '<br><button name="' + o.name + '" method="push">添加</button>';
    }
    html += '</div>';
    return html;
  }

})();
