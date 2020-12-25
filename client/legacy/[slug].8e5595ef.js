import { r as regenerator, _ as _inherits, a as _getPrototypeOf, b as _possibleConstructorReturn, c as _classCallCheck, i as init, d as _assertThisInitialized, e as dispatch_dev, g as _createClass, S as SvelteComponentDev, h as validate_each_argument, s as safe_not_equal, j as element, A as text, k as space, m as claim_element, o as children, B as claim_text, f as detach_dev, p as claim_space, C as attr_dev, t as add_location, u as insert_dev, D as append_dev, I as set_data_dev, q as query_selector_all, E as _slicedToArray, n as noop, z as destroy_each, v as validate_slots } from './client.182e1ac9.js';
import { c as professors } from './professors.52297b7f.js';

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var file = "src/routes/tags/[slug].svelte";

function get_each_context(ctx, list, i) {
  var child_ctx = ctx.slice();
  child_ctx[2] = list[i];
  return child_ctx;
} // (32:6) {#each matchingProfessors as professor}


function create_each_block(ctx) {
  var li;
  var a;
  var t0_value =
  /*professor*/
  ctx[2].name + "";
  var t0;
  var a_href_value;
  var t1;
  var block = {
    c: function create() {
      li = element("li");
      a = element("a");
      t0 = text(t0_value);
      t1 = space();
      this.h();
    },
    l: function claim(nodes) {
      li = claim_element(nodes, "LI", {});
      var li_nodes = children(li);
      a = claim_element(li_nodes, "A", {
        href: true,
        rel: true,
        class: true
      });
      var a_nodes = children(a);
      t0 = claim_text(a_nodes, t0_value);
      a_nodes.forEach(detach_dev);
      t1 = claim_space(li_nodes);
      li_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(a, "href", a_href_value = "/interviews/" +
      /*professor*/
      ctx[2].slug);
      attr_dev(a, "rel", "prefetch");
      attr_dev(a, "class", "svelte-v80or");
      add_location(a, file, 33, 10, 1344);
      add_location(li, file, 32, 8, 1329);
    },
    m: function mount(target, anchor) {
      insert_dev(target, li, anchor);
      append_dev(li, a);
      append_dev(a, t0);
      append_dev(li, t1);
    },
    p: function update(ctx, dirty) {
      if (dirty &
      /*matchingProfessors*/
      1 && t0_value !== (t0_value =
      /*professor*/
      ctx[2].name + "")) set_data_dev(t0, t0_value);

      if (dirty &
      /*matchingProfessors*/
      1 && a_href_value !== (a_href_value = "/interviews/" +
      /*professor*/
      ctx[2].slug)) {
        attr_dev(a, "href", a_href_value);
      }
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(li);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_each_block.name,
    type: "each",
    source: "(32:6) {#each matchingProfessors as professor}",
    ctx: ctx
  });
  return block;
}

function create_fragment(ctx) {
  var t0;
  var div1;
  var h1;
  var t1;
  var t2;
  var t3;
  var div0;
  var ul;
  var t4;
  var a;
  var t5;
  var each_value =
  /*matchingProfessors*/
  ctx[0];
  validate_each_argument(each_value);
  var each_blocks = [];

  for (var i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
  }

  var block = {
    c: function create() {
      t0 = space();
      div1 = element("div");
      h1 = element("h1");
      t1 = text("#");
      t2 = text(
      /*slug*/
      ctx[1]);
      t3 = space();
      div0 = element("div");
      ul = element("ul");

      for (var _i = 0; _i < each_blocks.length; _i += 1) {
        each_blocks[_i].c();
      }

      t4 = space();
      a = element("a");
      t5 = text("All Tags");
      this.h();
    },
    l: function claim(nodes) {
      var head_nodes = query_selector_all("[data-svelte=\"svelte-1d3glr5\"]", document.head);
      head_nodes.forEach(detach_dev);
      t0 = claim_space(nodes);
      div1 = claim_element(nodes, "DIV", {
        class: true
      });
      var div1_nodes = children(div1);
      h1 = claim_element(div1_nodes, "H1", {
        class: true
      });
      var h1_nodes = children(h1);
      t1 = claim_text(h1_nodes, "#");
      t2 = claim_text(h1_nodes,
      /*slug*/
      ctx[1]);
      h1_nodes.forEach(detach_dev);
      t3 = claim_space(div1_nodes);
      div0 = claim_element(div1_nodes, "DIV", {
        class: true
      });
      var div0_nodes = children(div0);
      ul = claim_element(div0_nodes, "UL", {});
      var ul_nodes = children(ul);

      for (var _i2 = 0; _i2 < each_blocks.length; _i2 += 1) {
        each_blocks[_i2].l(ul_nodes);
      }

      ul_nodes.forEach(detach_dev);
      t4 = claim_space(div0_nodes);
      a = claim_element(div0_nodes, "A", {
        href: true,
        rel: true,
        class: true
      });
      var a_nodes = children(a);
      t5 = claim_text(a_nodes, "All Tags");
      a_nodes.forEach(detach_dev);
      div0_nodes.forEach(detach_dev);
      div1_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      document.title = "Tags | Specimen Magazine";
      attr_dev(h1, "class", "text-lg font-medium");
      add_location(h1, file, 28, 0, 1199);
      add_location(ul, file, 30, 4, 1270);
      attr_dev(a, "href", "/tags");
      attr_dev(a, "rel", "prefetch");
      attr_dev(a, "class", "text-sm svelte-v80or");
      add_location(a, file, 39, 4, 1485);
      attr_dev(div0, "class", "prose");
      add_location(div0, file, 29, 2, 1246);
      attr_dev(div1, "class", "w-full");
      add_location(div1, file, 27, 0, 1178);
    },
    m: function mount(target, anchor) {
      insert_dev(target, t0, anchor);
      insert_dev(target, div1, anchor);
      append_dev(div1, h1);
      append_dev(h1, t1);
      append_dev(h1, t2);
      append_dev(div1, t3);
      append_dev(div1, div0);
      append_dev(div0, ul);

      for (var _i3 = 0; _i3 < each_blocks.length; _i3 += 1) {
        each_blocks[_i3].m(ul, null);
      }

      append_dev(div0, t4);
      append_dev(div0, a);
      append_dev(a, t5);
    },
    p: function update(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      if (dirty &
      /*slug*/
      2) set_data_dev(t2,
      /*slug*/
      ctx[1]);

      if (dirty &
      /*matchingProfessors*/
      1) {
        each_value =
        /*matchingProfessors*/
        ctx[0];
        validate_each_argument(each_value);

        var _i4;

        for (_i4 = 0; _i4 < each_value.length; _i4 += 1) {
          var child_ctx = get_each_context(ctx, each_value, _i4);

          if (each_blocks[_i4]) {
            each_blocks[_i4].p(child_ctx, dirty);
          } else {
            each_blocks[_i4] = create_each_block(child_ctx);

            each_blocks[_i4].c();

            each_blocks[_i4].m(ul, null);
          }
        }

        for (; _i4 < each_blocks.length; _i4 += 1) {
          each_blocks[_i4].d(1);
        }

        each_blocks.length = each_value.length;
      }
    },
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching) detach_dev(t0);
      if (detaching) detach_dev(div1);
      destroy_each(each_blocks, detaching);
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

var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var preload = function preload(_ref3) {
  var params = _ref3.params;
  return __awaiter(void 0, void 0, void 0, /*#__PURE__*/regenerator.mark(function _callee() {
    var matchingProfessors;
    return regenerator.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            matchingProfessors = professors.filter(function (professor) {
              return professor.tags.includes(params.slug);
            });
            return _context.abrupt("return", {
              matchingProfessors: matchingProfessors,
              slug: params.slug
            });

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
};

function instance($$self, $$props, $$invalidate) {
  var _$$props$$$slots = $$props.$$slots,
      slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
      $$scope = $$props.$$scope;
  validate_slots("U5Bslugu5D", slots, []);
  var matchingProfessors = $$props.matchingProfessors,
      slug = $$props.slug;
  var writable_props = ["matchingProfessors", "slug"];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<U5Bslugu5D> was created with unknown prop '".concat(key, "'"));
  });

  $$self.$$set = function ($$props) {
    if ("matchingProfessors" in $$props) $$invalidate(0, matchingProfessors = $$props.matchingProfessors);
    if ("slug" in $$props) $$invalidate(1, slug = $$props.slug);
  };

  $$self.$capture_state = function () {
    return {
      __awaiter: __awaiter,
      professors: professors,
      preload: preload,
      matchingProfessors: matchingProfessors,
      slug: slug
    };
  };

  $$self.$inject_state = function ($$props) {
    if ("matchingProfessors" in $$props) $$invalidate(0, matchingProfessors = $$props.matchingProfessors);
    if ("slug" in $$props) $$invalidate(1, slug = $$props.slug);
  };

  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }

  return [matchingProfessors, slug];
}

var U5Bslugu5D = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(U5Bslugu5D, _SvelteComponentDev);

  var _super = _createSuper(U5Bslugu5D);

  function U5Bslugu5D(options) {
    var _this;

    _classCallCheck(this, U5Bslugu5D);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance, create_fragment, safe_not_equal, {
      matchingProfessors: 0,
      slug: 1
    });
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "U5Bslugu5D",
      options: options,
      id: create_fragment.name
    });
    var ctx = _this.$$.ctx;
    var props = options.props || {};

    if (
    /*matchingProfessors*/
    ctx[0] === undefined && !("matchingProfessors" in props)) {
      console.warn("<U5Bslugu5D> was created without expected prop 'matchingProfessors'");
    }

    if (
    /*slug*/
    ctx[1] === undefined && !("slug" in props)) {
      console.warn("<U5Bslugu5D> was created without expected prop 'slug'");
    }

    return _this;
  }

  _createClass(U5Bslugu5D, [{
    key: "matchingProfessors",
    get: function get() {
      throw new Error("<U5Bslugu5D>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<U5Bslugu5D>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "slug",
    get: function get() {
      throw new Error("<U5Bslugu5D>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<U5Bslugu5D>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }]);

  return U5Bslugu5D;
}(SvelteComponentDev);

export default U5Bslugu5D;
export { preload };
