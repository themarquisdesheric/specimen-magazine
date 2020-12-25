import { _ as _inherits, a as _getPrototypeOf, b as _possibleConstructorReturn, c as _classCallCheck, i as init, s as safe_not_equal, d as _assertThisInitialized, e as dispatch_dev, g as _createClass, S as SvelteComponentDev, v as validate_slots, j as element, A as text, m as claim_element, o as children, B as claim_text, f as detach_dev, C as attr_dev, L as toggle_class, t as add_location, u as insert_dev, D as append_dev, E as _slicedToArray, I as set_data_dev, n as noop } from './client.182e1ac9.js';

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var file = "src/components/Tag.svelte";

function create_fragment(ctx) {
  var a;
  var t;
  var a_href_value;
  var a_class_value;
  var block = {
    c: function create() {
      a = element("a");
      t = text(
      /*tag*/
      ctx[0]);
      this.h();
    },
    l: function claim(nodes) {
      a = claim_element(nodes, "A", {
        href: true,
        rel: true,
        class: true
      });
      var a_nodes = children(a);
      t = claim_text(a_nodes,
      /*tag*/
      ctx[0]);
      a_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(a, "href", a_href_value = "/tags/" +
      /*tag*/
      ctx[0]);
      attr_dev(a, "rel", "prefetch");
      attr_dev(a, "class", a_class_value = "text-xs border rounded p-1 bg-gray-50 " +
      /*className*/
      ctx[1] + " truncate" + " svelte-eiof7n");
      toggle_class(a, "mr-2", !
      /*lastOrOnlyTag*/
      ctx[2]);
      add_location(a, file, 5, 0, 110);
    },
    m: function mount(target, anchor) {
      insert_dev(target, a, anchor);
      append_dev(a, t);
    },
    p: function update(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      if (dirty &
      /*tag*/
      1) set_data_dev(t,
      /*tag*/
      ctx[0]);

      if (dirty &
      /*tag*/
      1 && a_href_value !== (a_href_value = "/tags/" +
      /*tag*/
      ctx[0])) {
        attr_dev(a, "href", a_href_value);
      }

      if (dirty &
      /*className*/
      2 && a_class_value !== (a_class_value = "text-xs border rounded p-1 bg-gray-50 " +
      /*className*/
      ctx[1] + " truncate" + " svelte-eiof7n")) {
        attr_dev(a, "class", a_class_value);
      }

      if (dirty &
      /*className, lastOrOnlyTag*/
      6) {
        toggle_class(a, "mr-2", !
        /*lastOrOnlyTag*/
        ctx[2]);
      }
    },
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching) detach_dev(a);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_fragment.name,
    type: "component",
    source: "",
    ctx: ctx
  });
  return block;
}

function instance($$self, $$props, $$invalidate) {
  var _$$props$$$slots = $$props.$$slots,
      slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
      $$scope = $$props.$$scope;
  validate_slots("Tag", slots, []);
  var _$$props$tag = $$props.tag,
      tag = _$$props$tag === void 0 ? "" : _$$props$tag;
  var _$$props$className = $$props.className,
      className = _$$props$className === void 0 ? "" : _$$props$className;
  var _$$props$lastOrOnlyTa = $$props.lastOrOnlyTag,
      lastOrOnlyTag = _$$props$lastOrOnlyTa === void 0 ? true : _$$props$lastOrOnlyTa;
  var writable_props = ["tag", "className", "lastOrOnlyTag"];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<Tag> was created with unknown prop '".concat(key, "'"));
  });

  $$self.$$set = function ($$props) {
    if ("tag" in $$props) $$invalidate(0, tag = $$props.tag);
    if ("className" in $$props) $$invalidate(1, className = $$props.className);
    if ("lastOrOnlyTag" in $$props) $$invalidate(2, lastOrOnlyTag = $$props.lastOrOnlyTag);
  };

  $$self.$capture_state = function () {
    return {
      tag: tag,
      className: className,
      lastOrOnlyTag: lastOrOnlyTag
    };
  };

  $$self.$inject_state = function ($$props) {
    if ("tag" in $$props) $$invalidate(0, tag = $$props.tag);
    if ("className" in $$props) $$invalidate(1, className = $$props.className);
    if ("lastOrOnlyTag" in $$props) $$invalidate(2, lastOrOnlyTag = $$props.lastOrOnlyTag);
  };

  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }

  return [tag, className, lastOrOnlyTag];
}

var Tag = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(Tag, _SvelteComponentDev);

  var _super = _createSuper(Tag);

  function Tag(options) {
    var _this;

    _classCallCheck(this, Tag);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance, create_fragment, safe_not_equal, {
      tag: 0,
      className: 1,
      lastOrOnlyTag: 2
    });
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Tag",
      options: options,
      id: create_fragment.name
    });
    return _this;
  }

  _createClass(Tag, [{
    key: "tag",
    get: function get() {
      throw new Error("<Tag>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Tag>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "className",
    get: function get() {
      throw new Error("<Tag>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Tag>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "lastOrOnlyTag",
    get: function get() {
      throw new Error("<Tag>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Tag>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }]);

  return Tag;
}(SvelteComponentDev);

export { Tag as T };
