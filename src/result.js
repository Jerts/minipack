(function (modules) {
  function require(id) {
    const [fn, mapping] = modules[id];

    function localRequire(name) {
      return require(mapping[name]);
    }

    const module = {
      exports: {}
    };

    fn(localRequire, module, module.exports);

    return module.exports;
  }

  require(0);
})({
  0: [
    function (require, module, exports) {
      "use strict";

      var _message = require("./message.mjs");

      var _message2 = _interopRequireDefault(_message);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
          default: obj
        };
      }

      console.log(_message2.default);
    },
    {
      "./message.mjs": 1
    },
  ],
  1: [
    function (require, module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _name = require("./name.mjs");

      exports.default = "hello " + _name.name + "!";
    },
    {
      "./name.mjs": 2
    },
  ],
  2: [
    function (require, module, exports) {
      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      var name = exports.name = 'world';
    },
    {},
  ],
})
  