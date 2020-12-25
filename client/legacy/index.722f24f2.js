import { r as regenerator, _ as _inherits, a as _getPrototypeOf, b as _possibleConstructorReturn, c as _classCallCheck, i as init, d as _assertThisInitialized, e as dispatch_dev, g as _createClass, S as SvelteComponentDev, h as validate_each_argument, s as safe_not_equal, j as element, k as space, l as empty, m as claim_element, o as children, f as detach_dev, p as claim_space, t as add_location, u as insert_dev, w as transition_in, x as transition_out, y as check_outros, z as destroy_each, A as text, q as query_selector_all, B as claim_text, C as attr_dev, D as append_dev, E as _slicedToArray, v as validate_slots, F as create_component, G as claim_component, H as mount_component, I as set_data_dev, J as destroy_component, K as group_outros } from './client.182e1ac9.js';
import { T as Tag } from './Tag.599f9c36.js';
import './professors.52297b7f.js';
import { i as issues } from './issues.16ae380a.js';

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var file = "src/routes/interviews/index.svelte";

function get_each_context(ctx, list, i) {
  var child_ctx = ctx.slice();
  child_ctx[1] = list[i];
  child_ctx[3] = i;
  return child_ctx;
}

function get_each_context_1(ctx, list, i) {
  var child_ctx = ctx.slice();
  child_ctx[4] = list[i];
  return child_ctx;
} // (29:5) {#each issue.professors as professor}


function create_each_block_1(ctx) {
  var li;
  var a;
  var t0_value =
  /*professor*/
  ctx[4].name + "";
  var t0;
  var a_href_value;
  var t1;
  var tag;
  var t2;
  var current;
  tag = new Tag({
    props: {
      tag:
      /*professor*/
      ctx[4].tags[0]
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      li = element("li");
      a = element("a");
      t0 = text(t0_value);
      t1 = space();
      create_component(tag.$$.fragment);
      t2 = space();
      this.h();
    },
    l: function claim(nodes) {
      li = claim_element(nodes, "LI", {
        class: true
      });
      var li_nodes = children(li);
      a = claim_element(li_nodes, "A", {
        rel: true,
        href: true,
        class: true
      });
      var a_nodes = children(a);
      t0 = claim_text(a_nodes, t0_value);
      a_nodes.forEach(detach_dev);
      t1 = claim_space(li_nodes);
      claim_component(tag.$$.fragment, li_nodes);
      t2 = claim_space(li_nodes);
      li_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(a, "rel", "prefetch");
      attr_dev(a, "href", a_href_value = "/interviews/" +
      /*professor*/
      ctx[4].slug);
      attr_dev(a, "class", "svelte-6kegdk");
      add_location(a, file, 34, 9, 1500);
      attr_dev(li, "class", "flex justify-between svelte-6kegdk");
      add_location(li, file, 33, 8, 1457);
    },
    m: function mount(target, anchor) {
      insert_dev(target, li, anchor);
      append_dev(li, a);
      append_dev(a, t0);
      append_dev(li, t1);
      mount_component(tag, li, null);
      append_dev(li, t2);
      current = true;
    },
    p: function update(ctx, dirty) {
      if ((!current || dirty &
      /*issues*/
      1) && t0_value !== (t0_value =
      /*professor*/
      ctx[4].name + "")) set_data_dev(t0, t0_value);

      if (!current || dirty &
      /*issues*/
      1 && a_href_value !== (a_href_value = "/interviews/" +
      /*professor*/
      ctx[4].slug)) {
        attr_dev(a, "href", a_href_value);
      }

      var tag_changes = {};
      if (dirty &
      /*issues*/
      1) tag_changes.tag =
      /*professor*/
      ctx[4].tags[0];
      tag.$set(tag_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(tag.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(tag.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(li);
      destroy_component(tag);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_each_block_1.name,
    type: "each",
    source: "(29:5) {#each issue.professors as professor}",
    ctx: ctx
  });
  return block;
} // (40:4) {#if issues.length - 1 !== index}


function create_if_block(ctx) {
  var hr;
  var block = {
    c: function create() {
      hr = element("hr");
      this.h();
    },
    l: function claim(nodes) {
      hr = claim_element(nodes, "HR", {});
      this.h();
    },
    h: function hydrate() {
      add_location(hr, file, 40, 5, 1695);
    },
    m: function mount(target, anchor) {
      insert_dev(target, hr, anchor);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(hr);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_if_block.name,
    type: "if",
    source: "(40:4) {#if issues.length - 1 !== index}",
    ctx: ctx
  });
  return block;
} // (27:3) {#each issues as issue, index}


function create_each_block(ctx) {
  var ul;
  var t;
  var if_block_anchor;
  var current;
  var each_value_1 =
  /*issue*/
  ctx[1].professors;
  validate_each_argument(each_value_1);
  var each_blocks = [];

  for (var i = 0; i < each_value_1.length; i += 1) {
    each_blocks[i] = create_each_block_1(get_each_context_1(ctx, each_value_1, i));
  }

  var out = function out(i) {
    return transition_out(each_blocks[i], 1, 1, function () {
      each_blocks[i] = null;
    });
  };

  var if_block = issues.length - 1 !==
  /*index*/
  ctx[3] && create_if_block(ctx);
  var block = {
    c: function create() {
      ul = element("ul");

      for (var _i = 0; _i < each_blocks.length; _i += 1) {
        each_blocks[_i].c();
      }

      t = space();
      if (if_block) if_block.c();
      if_block_anchor = empty();
      this.h();
    },
    l: function claim(nodes) {
      ul = claim_element(nodes, "UL", {});
      var ul_nodes = children(ul);

      for (var _i2 = 0; _i2 < each_blocks.length; _i2 += 1) {
        each_blocks[_i2].l(ul_nodes);
      }

      ul_nodes.forEach(detach_dev);
      t = claim_space(nodes);
      if (if_block) if_block.l(nodes);
      if_block_anchor = empty();
      this.h();
    },
    h: function hydrate() {
      add_location(ul, file, 27, 4, 1169);
    },
    m: function mount(target, anchor) {
      insert_dev(target, ul, anchor);

      for (var _i3 = 0; _i3 < each_blocks.length; _i3 += 1) {
        each_blocks[_i3].m(ul, null);
      }

      insert_dev(target, t, anchor);
      if (if_block) if_block.m(target, anchor);
      insert_dev(target, if_block_anchor, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      if (dirty &
      /*issues*/
      1) {
        each_value_1 =
        /*issue*/
        ctx[1].professors;
        validate_each_argument(each_value_1);

        var _i4;

        for (_i4 = 0; _i4 < each_value_1.length; _i4 += 1) {
          var child_ctx = get_each_context_1(ctx, each_value_1, _i4);

          if (each_blocks[_i4]) {
            each_blocks[_i4].p(child_ctx, dirty);

            transition_in(each_blocks[_i4], 1);
          } else {
            each_blocks[_i4] = create_each_block_1(child_ctx);

            each_blocks[_i4].c();

            transition_in(each_blocks[_i4], 1);

            each_blocks[_i4].m(ul, null);
          }
        }

        group_outros();

        for (_i4 = each_value_1.length; _i4 < each_blocks.length; _i4 += 1) {
          out(_i4);
        }

        check_outros();
      }

      if (issues.length - 1 !==
      /*index*/
      ctx[3]) {
        if (if_block) ; else {
          if_block = create_if_block(ctx);
          if_block.c();
          if_block.m(if_block_anchor.parentNode, if_block_anchor);
        }
      } else if (if_block) {
        if_block.d(1);
        if_block = null;
      }
    },
    i: function intro(local) {
      if (current) return;

      for (var _i5 = 0; _i5 < each_value_1.length; _i5 += 1) {
        transition_in(each_blocks[_i5]);
      }

      current = true;
    },
    o: function outro(local) {
      each_blocks = each_blocks.filter(Boolean);

      for (var _i6 = 0; _i6 < each_blocks.length; _i6 += 1) {
        transition_out(each_blocks[_i6]);
      }

      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(ul);
      destroy_each(each_blocks, detaching);
      if (detaching) detach_dev(t);
      if (if_block) if_block.d(detaching);
      if (detaching) detach_dev(if_block_anchor);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_each_block.name,
    type: "each",
    source: "(27:3) {#each issues as issue, index}",
    ctx: ctx
  });
  return block;
}

function create_fragment(ctx) {
  var t0;
  var div2;
  var h1;
  var t1;
  var t2;
  var div1;
  var div0;
  var current;
  var each_value = issues;
  validate_each_argument(each_value);
  var each_blocks = [];

  for (var i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
  }

  var out = function out(i) {
    return transition_out(each_blocks[i], 1, 1, function () {
      each_blocks[i] = null;
    });
  };

  var block = {
    c: function create() {
      t0 = space();
      div2 = element("div");
      h1 = element("h1");
      t1 = text("Interviews");
      t2 = space();
      div1 = element("div");
      div0 = element("div");

      for (var _i7 = 0; _i7 < each_blocks.length; _i7 += 1) {
        each_blocks[_i7].c();
      }

      this.h();
    },
    l: function claim(nodes) {
      var head_nodes = query_selector_all("[data-svelte=\"svelte-1cux3c\"]", document.head);
      head_nodes.forEach(detach_dev);
      t0 = claim_space(nodes);
      div2 = claim_element(nodes, "DIV", {
        class: true
      });
      var div2_nodes = children(div2);
      h1 = claim_element(div2_nodes, "H1", {
        class: true
      });
      var h1_nodes = children(h1);
      t1 = claim_text(h1_nodes, "Interviews");
      h1_nodes.forEach(detach_dev);
      t2 = claim_space(div2_nodes);
      div1 = claim_element(div2_nodes, "DIV", {
        class: true
      });
      var div1_nodes = children(div1);
      div0 = claim_element(div1_nodes, "DIV", {});
      var div0_nodes = children(div0);

      for (var _i8 = 0; _i8 < each_blocks.length; _i8 += 1) {
        each_blocks[_i8].l(div0_nodes);
      }

      div0_nodes.forEach(detach_dev);
      div1_nodes.forEach(detach_dev);
      div2_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      document.title = "Interviews | Specimen Magazine";
      attr_dev(h1, "class", "text-lg");
      add_location(h1, file, 23, 1, 1066);
      add_location(div0, file, 25, 2, 1125);
      attr_dev(div1, "class", "prose");
      add_location(div1, file, 24, 1, 1103);
      attr_dev(div2, "class", "w-full");
      add_location(div2, file, 22, 0, 1044);
    },
    m: function mount(target, anchor) {
      insert_dev(target, t0, anchor);
      insert_dev(target, div2, anchor);
      append_dev(div2, h1);
      append_dev(h1, t1);
      append_dev(div2, t2);
      append_dev(div2, div1);
      append_dev(div1, div0);

      for (var _i9 = 0; _i9 < each_blocks.length; _i9 += 1) {
        each_blocks[_i9].m(div0, null);
      }

      current = true;
    },
    p: function update(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      if (dirty &
      /*issues*/
      1) {
        each_value = issues;
        validate_each_argument(each_value);

        var _i10;

        for (_i10 = 0; _i10 < each_value.length; _i10 += 1) {
          var child_ctx = get_each_context(ctx, each_value, _i10);

          if (each_blocks[_i10]) {
            each_blocks[_i10].p(child_ctx, dirty);

            transition_in(each_blocks[_i10], 1);
          } else {
            each_blocks[_i10] = create_each_block(child_ctx);

            each_blocks[_i10].c();

            transition_in(each_blocks[_i10], 1);

            each_blocks[_i10].m(div0, null);
          }
        }

        group_outros();

        for (_i10 = each_value.length; _i10 < each_blocks.length; _i10 += 1) {
          out(_i10);
        }

        check_outros();
      }
    },
    i: function intro(local) {
      if (current) return;

      for (var _i11 = 0; _i11 < each_value.length; _i11 += 1) {
        transition_in(each_blocks[_i11]);
      }

      current = true;
    },
    o: function outro(local) {
      each_blocks = each_blocks.filter(Boolean);

      for (var _i12 = 0; _i12 < each_blocks.length; _i12 += 1) {
        transition_out(each_blocks[_i12]);
      }

      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(t0);
      if (detaching) detach_dev(div2);
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

var preload = function preload() {
  return __awaiter(void 0, void 0, void 0, /*#__PURE__*/regenerator.mark(function _callee() {
    return regenerator.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", {
              issues: issues
            });

          case 1:
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
  validate_slots("Interviews", slots, []);
  var issues = $$props.issues;
  var writable_props = ["issues"];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<Interviews> was created with unknown prop '".concat(key, "'"));
  });

  $$self.$$set = function ($$props) {
    if ("issues" in $$props) $$invalidate(0, issues = $$props.issues);
  };

  $$self.$capture_state = function () {
    return _defineProperty({
      __awaiter: __awaiter,
      issues: issues,
      Tag: Tag,
      preload: preload
    }, "issues", issues);
  };

  $$self.$inject_state = function ($$props) {
    if ("issues" in $$props) $$invalidate(0, issues = $$props.issues);
  };

  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }

  return [issues];
}

var Interviews = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(Interviews, _SvelteComponentDev);

  var _super = _createSuper(Interviews);

  function Interviews(options) {
    var _this;

    _classCallCheck(this, Interviews);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance, create_fragment, safe_not_equal, {
      issues: 0
    });
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Interviews",
      options: options,
      id: create_fragment.name
    });
    var ctx = _this.$$.ctx;
    var props = options.props || {};

    if (
    /*issues*/
    ctx[0] === undefined && !("issues" in props)) {
      console.warn("<Interviews> was created without expected prop 'issues'");
    }

    return _this;
  }

  _createClass(Interviews, [{
    key: "issues",
    get: function get() {
      throw new Error("<Interviews>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Interviews>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }]);

  return Interviews;
}(SvelteComponentDev);

export default Interviews;
export { preload };
