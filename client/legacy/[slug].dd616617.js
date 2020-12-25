import { r as regenerator, _ as _inherits, a as _getPrototypeOf, b as _possibleConstructorReturn, c as _classCallCheck, i as init, d as _assertThisInitialized, e as dispatch_dev, g as _createClass, S as SvelteComponentDev, h as validate_each_argument, s as safe_not_equal, j as element, A as text, k as space, m as claim_element, o as children, B as claim_text, f as detach_dev, p as claim_space, C as attr_dev, t as add_location, u as insert_dev, D as append_dev, n as noop, F as create_component, G as claim_component, H as mount_component, w as transition_in, x as transition_out, J as destroy_component, q as query_selector_all, E as _slicedToArray, y as check_outros, z as destroy_each, v as validate_slots, K as group_outros } from './client.182e1ac9.js';
import { T as Tag } from './Tag.599f9c36.js';
import { b as professorsKeyedBySlug } from './professors.52297b7f.js';

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var file = "src/routes/interviews/[slug].svelte";

function get_each_context(ctx, list, i) {
  var child_ctx = ctx.slice();
  child_ctx[7] = list[i];
  child_ctx[9] = i;
  return child_ctx;
} // (37:3) {#if interviewers[1]}


function create_if_block(ctx) {
  var p0;
  var t0;
  var t1;
  var p1;
  var t2_value =
  /*interviewers*/
  ctx[2][1].name + "";
  var t2;
  var block = {
    c: function create() {
      p0 = element("p");
      t0 = text("and");
      t1 = space();
      p1 = element("p");
      t2 = text(t2_value);
      this.h();
    },
    l: function claim(nodes) {
      p0 = claim_element(nodes, "P", {
        class: true
      });
      var p0_nodes = children(p0);
      t0 = claim_text(p0_nodes, "and");
      p0_nodes.forEach(detach_dev);
      t1 = claim_space(nodes);
      p1 = claim_element(nodes, "P", {
        class: true
      });
      var p1_nodes = children(p1);
      t2 = claim_text(p1_nodes, t2_value);
      p1_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(p0, "class", "italic leading-6 svelte-172mjym");
      add_location(p0, file, 37, 4, 1454);
      attr_dev(p1, "class", "uppercase text-xl font-extrabold svelte-172mjym");
      add_location(p1, file, 38, 4, 1494);
    },
    m: function mount(target, anchor) {
      insert_dev(target, p0, anchor);
      append_dev(p0, t0);
      insert_dev(target, t1, anchor);
      insert_dev(target, p1, anchor);
      append_dev(p1, t2);
    },
    p: noop,
    d: function destroy(detaching) {
      if (detaching) detach_dev(p0);
      if (detaching) detach_dev(t1);
      if (detaching) detach_dev(p1);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_if_block.name,
    type: "if",
    source: "(37:3) {#if interviewers[1]}",
    ctx: ctx
  });
  return block;
} // (52:2) {#each tags as tag, index}


function create_each_block(ctx) {
  var tag;
  var current;
  tag = new Tag({
    props: {
      tag:
      /*tag*/
      ctx[7],
      lastOrOnlyTag:
      /*tags*/
      ctx[1].length - 1 ===
      /*index*/
      ctx[9],
      className: "mb-2"
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(tag.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(tag.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(tag, target, anchor);
      current = true;
    },
    p: noop,
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
      destroy_component(tag, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_each_block.name,
    type: "each",
    source: "(52:2) {#each tags as tag, index}",
    ctx: ctx
  });
  return block;
}

function create_fragment(ctx) {
  var title_value;
  var t0;
  var div6;
  var header;
  var div0;
  var h1;
  var t1;
  var t2;
  var p0;
  var t3;
  var t4;
  var p1;
  var t5_value =
  /*interviewers*/
  ctx[2][0].name + "";
  var t5;
  var t6;
  var t7;
  var p2;
  var t8;
  var div3;
  var div1;
  var t9;
  var p3;
  var t10;
  var t11;
  var div2;
  var t12;
  var div4;
  var t13;
  var div5;
  var current;
  document.title = title_value = "" + (
  /*name*/
  ctx[0] + " | Specimen Magazine");
  var if_block =
  /*interviewers*/
  ctx[2][1] && create_if_block(ctx);
  var each_value =
  /*tags*/
  ctx[1];
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
      div6 = element("div");
      header = element("header");
      div0 = element("div");
      h1 = element("h1");
      t1 = text(
      /*name*/
      ctx[0]);
      t2 = space();
      p0 = element("p");
      t3 = text("interviewed by");
      t4 = space();
      p1 = element("p");
      t5 = text(t5_value);
      t6 = space();
      if (if_block) if_block.c();
      t7 = space();
      p2 = element("p");
      t8 = space();
      div3 = element("div");
      div1 = element("div");
      t9 = space();
      p3 = element("p");
      t10 = text(
      /*date*/
      ctx[4]);
      t11 = space();
      div2 = element("div");
      t12 = space();
      div4 = element("div");

      for (var _i = 0; _i < each_blocks.length; _i += 1) {
        each_blocks[_i].c();
      }

      t13 = space();
      div5 = element("div");
      this.h();
    },
    l: function claim(nodes) {
      var head_nodes = query_selector_all("[data-svelte=\"svelte-yf3szh\"]", document.head);
      head_nodes.forEach(detach_dev);
      t0 = claim_space(nodes);
      div6 = claim_element(nodes, "DIV", {
        class: true
      });
      var div6_nodes = children(div6);
      header = claim_element(div6_nodes, "HEADER", {
        class: true
      });
      var header_nodes = children(header);
      div0 = claim_element(header_nodes, "DIV", {
        class: true
      });
      var div0_nodes = children(div0);
      h1 = claim_element(div0_nodes, "H1", {
        class: true
      });
      var h1_nodes = children(h1);
      t1 = claim_text(h1_nodes,
      /*name*/
      ctx[0]);
      h1_nodes.forEach(detach_dev);
      t2 = claim_space(div0_nodes);
      p0 = claim_element(div0_nodes, "P", {
        class: true
      });
      var p0_nodes = children(p0);
      t3 = claim_text(p0_nodes, "interviewed by");
      p0_nodes.forEach(detach_dev);
      t4 = claim_space(div0_nodes);
      p1 = claim_element(div0_nodes, "P", {
        class: true
      });
      var p1_nodes = children(p1);
      t5 = claim_text(p1_nodes, t5_value);
      p1_nodes.forEach(detach_dev);
      t6 = claim_space(div0_nodes);
      if (if_block) if_block.l(div0_nodes);
      div0_nodes.forEach(detach_dev);
      t7 = claim_space(header_nodes);
      p2 = claim_element(header_nodes, "P", {
        class: true
      });
      var p2_nodes = children(p2);
      p2_nodes.forEach(detach_dev);
      t8 = claim_space(header_nodes);
      div3 = claim_element(header_nodes, "DIV", {
        class: true
      });
      var div3_nodes = children(div3);
      div1 = claim_element(div3_nodes, "DIV", {
        class: true
      });
      children(div1).forEach(detach_dev);
      t9 = claim_space(div3_nodes);
      p3 = claim_element(div3_nodes, "P", {
        class: true
      });
      var p3_nodes = children(p3);
      t10 = claim_text(p3_nodes,
      /*date*/
      ctx[4]);
      p3_nodes.forEach(detach_dev);
      t11 = claim_space(div3_nodes);
      div2 = claim_element(div3_nodes, "DIV", {
        class: true
      });
      children(div2).forEach(detach_dev);
      div3_nodes.forEach(detach_dev);
      header_nodes.forEach(detach_dev);
      t12 = claim_space(div6_nodes);
      div4 = claim_element(div6_nodes, "DIV", {
        class: true
      });
      var div4_nodes = children(div4);

      for (var _i2 = 0; _i2 < each_blocks.length; _i2 += 1) {
        each_blocks[_i2].l(div4_nodes);
      }

      div4_nodes.forEach(detach_dev);
      t13 = claim_space(div6_nodes);
      div5 = claim_element(div6_nodes, "DIV", {
        class: true
      });
      var div5_nodes = children(div5);
      div5_nodes.forEach(detach_dev);
      div6_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(h1, "class", "uppercase svelte-172mjym");
      add_location(h1, file, 30, 3, 1267);
      attr_dev(p0, "class", "italic svelte-172mjym");
      add_location(p0, file, 31, 3, 1304);
      attr_dev(p1, "class", "uppercase text-xl font-extrabold svelte-172mjym");
      add_location(p1, file, 32, 3, 1344);
      attr_dev(div0, "class", "text-center");
      add_location(div0, file, 29, 2, 1238);
      attr_dev(p2, "class", "italic svelte-172mjym");
      add_location(p2, file, 43, 2, 1596);
      attr_dev(div1, "class", "border-b w-full mr-3");
      add_location(div1, file, 45, 3, 1684);
      attr_dev(p3, "class", "svelte-172mjym");
      add_location(p3, file, 46, 3, 1724);
      attr_dev(div2, "class", "border-b w-full ml-3");
      add_location(div2, file, 47, 3, 1741);
      attr_dev(div3, "class", "flex justify-center items-center");
      add_location(div3, file, 44, 2, 1634);
      attr_dev(header, "class", "svelte-172mjym");
      add_location(header, file, 28, 1, 1227);
      attr_dev(div4, "class", "flex flex-wrap justify-center my-5");
      add_location(div4, file, 50, 1, 1799);
      attr_dev(div5, "class", "article-content svelte-172mjym");
      add_location(div5, file, 59, 1, 1991);
      attr_dev(div6, "class", "prose svelte-172mjym");
      add_location(div6, file, 27, 0, 1206);
    },
    m: function mount(target, anchor) {
      insert_dev(target, t0, anchor);
      insert_dev(target, div6, anchor);
      append_dev(div6, header);
      append_dev(header, div0);
      append_dev(div0, h1);
      append_dev(h1, t1);
      append_dev(div0, t2);
      append_dev(div0, p0);
      append_dev(p0, t3);
      append_dev(div0, t4);
      append_dev(div0, p1);
      append_dev(p1, t5);
      append_dev(div0, t6);
      if (if_block) if_block.m(div0, null);
      append_dev(header, t7);
      append_dev(header, p2);
      p2.innerHTML =
      /*quote*/
      ctx[3];
      append_dev(header, t8);
      append_dev(header, div3);
      append_dev(div3, div1);
      append_dev(div3, t9);
      append_dev(div3, p3);
      append_dev(p3, t10);
      append_dev(div3, t11);
      append_dev(div3, div2);
      append_dev(div6, t12);
      append_dev(div6, div4);

      for (var _i3 = 0; _i3 < each_blocks.length; _i3 += 1) {
        each_blocks[_i3].m(div4, null);
      }

      append_dev(div6, t13);
      append_dev(div6, div5);
      div5.innerHTML =
      /*html*/
      ctx[5];
      current = true;
    },
    p: function update(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      if ((!current || dirty &
      /*name*/
      1) && title_value !== (title_value = "" + (
      /*name*/
      ctx[0] + " | Specimen Magazine"))) {
        document.title = title_value;
      }

      if (
      /*interviewers*/
      ctx[2][1]) if_block.p(ctx, dirty);

      if (dirty &
      /*tags*/
      2) {
        each_value =
        /*tags*/
        ctx[1];
        validate_each_argument(each_value);

        var _i4;

        for (_i4 = 0; _i4 < each_value.length; _i4 += 1) {
          var child_ctx = get_each_context(ctx, each_value, _i4);

          if (each_blocks[_i4]) {
            each_blocks[_i4].p(child_ctx, dirty);

            transition_in(each_blocks[_i4], 1);
          } else {
            each_blocks[_i4] = create_each_block(child_ctx);

            each_blocks[_i4].c();

            transition_in(each_blocks[_i4], 1);

            each_blocks[_i4].m(div4, null);
          }
        }

        group_outros();

        for (_i4 = each_value.length; _i4 < each_blocks.length; _i4 += 1) {
          out(_i4);
        }

        check_outros();
      }
    },
    i: function intro(local) {
      if (current) return;

      for (var _i5 = 0; _i5 < each_value.length; _i5 += 1) {
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
      if (detaching) detach_dev(t0);
      if (detaching) detach_dev(div6);
      if (if_block) if_block.d();
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
    return regenerator.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", {
              professor: professorsKeyedBySlug[params.slug]
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
  validate_slots("U5Bslugu5D", slots, []);
  var professor = $$props.professor;
  var _professor = professor,
      name = _professor.name,
      tags = _professor.tags,
      _professor$interview = _professor.interview,
      interviewers = _professor$interview.interviewers,
      quote = _professor$interview.quote,
      date = _professor$interview.date,
      html = _professor$interview.html;
  var writable_props = ["professor"];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<U5Bslugu5D> was created with unknown prop '".concat(key, "'"));
  });

  $$self.$$set = function ($$props) {
    if ("professor" in $$props) $$invalidate(6, professor = $$props.professor);
  };

  $$self.$capture_state = function () {
    return {
      __awaiter: __awaiter,
      professorsKeyedBySlug: professorsKeyedBySlug,
      Tag: Tag,
      preload: preload,
      professor: professor,
      name: name,
      tags: tags,
      interviewers: interviewers,
      quote: quote,
      date: date,
      html: html
    };
  };

  $$self.$inject_state = function ($$props) {
    if ("professor" in $$props) $$invalidate(6, professor = $$props.professor);
  };

  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }

  return [name, tags, interviewers, quote, date, html, professor];
}

var U5Bslugu5D = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(U5Bslugu5D, _SvelteComponentDev);

  var _super = _createSuper(U5Bslugu5D);

  function U5Bslugu5D(options) {
    var _this;

    _classCallCheck(this, U5Bslugu5D);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance, create_fragment, safe_not_equal, {
      professor: 6
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
    /*professor*/
    ctx[6] === undefined && !("professor" in props)) {
      console.warn("<U5Bslugu5D> was created without expected prop 'professor'");
    }

    return _this;
  }

  _createClass(U5Bslugu5D, [{
    key: "professor",
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
