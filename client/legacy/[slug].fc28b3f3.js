import { r as regenerator, _ as _inherits, a as _getPrototypeOf, b as _possibleConstructorReturn, c as _classCallCheck, i as init, d as _assertThisInitialized, e as dispatch_dev, g as _createClass, S as SvelteComponentDev, h as validate_each_argument, s as safe_not_equal, j as element, A as text, k as space, F as create_component, m as claim_element, o as children, B as claim_text, f as detach_dev, p as claim_space, G as claim_component, C as attr_dev, t as add_location, u as insert_dev, D as append_dev, H as mount_component, n as noop, w as transition_in, x as transition_out, J as destroy_component, q as query_selector_all, E as _slicedToArray, y as check_outros, z as destroy_each, v as validate_slots, K as group_outros } from './client.182e1ac9.js';
import { T as Tag } from './Tag.599f9c36.js';
import './professors.52297b7f.js';
import { i as issues } from './issues.16ae380a.js';

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var file = "src/routes/issues/[slug].svelte";

function get_each_context(ctx, list, i) {
  var child_ctx = ctx.slice();
  child_ctx[7] = list[i];
  return child_ctx;
}

function get_each_context_1(ctx, list, i) {
  var child_ctx = ctx.slice();
  child_ctx[10] = list[i];
  return child_ctx;
} // (40:6) {#each professors as professor}


function create_each_block_1(ctx) {
  var li;
  var a;
  var t0_value =
  /*professor*/
  ctx[10].name + "";
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
      ctx[10].tags[0]
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
      ctx[10].slug);
      attr_dev(a, "class", "svelte-tjc988");
      add_location(a, file, 41, 10, 1504);
      attr_dev(li, "class", "flex justify-between svelte-tjc988");
      add_location(li, file, 40, 8, 1460);
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
      if (detaching) detach_dev(li);
      destroy_component(tag);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_each_block_1.name,
    type: "each",
    source: "(40:6) {#each professors as professor}",
    ctx: ctx
  });
  return block;
} // (57:8) {#if book.subtitle}


function create_if_block(ctx) {
  var p;
  var t_value =
  /*book*/
  ctx[7].subtitle + "";
  var t;
  var block = {
    c: function create() {
      p = element("p");
      t = text(t_value);
      this.h();
    },
    l: function claim(nodes) {
      p = claim_element(nodes, "P", {
        class: true
      });
      var p_nodes = children(p);
      t = claim_text(p_nodes, t_value);
      p_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(p, "class", "text-sm italic svelte-tjc988");
      add_location(p, file, 57, 10, 2030);
    },
    m: function mount(target, anchor) {
      insert_dev(target, p, anchor);
      append_dev(p, t);
    },
    p: noop,
    d: function destroy(detaching) {
      if (detaching) detach_dev(p);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_if_block.name,
    type: "if",
    source: "(57:8) {#if book.subtitle}",
    ctx: ctx
  });
  return block;
} // (52:4) {#each readingList as book}


function create_each_block(ctx) {
  var section;
  var a;
  var p0;
  var t0_value =
  /*book*/
  ctx[7].title + "";
  var t0;
  var a_href_value;
  var t1;
  var t2;
  var p1;
  var t3_value =
  /*book*/
  ctx[7].author + "";
  var t3;
  var t4;
  var if_block =
  /*book*/
  ctx[7].subtitle && create_if_block(ctx);
  var block = {
    c: function create() {
      section = element("section");
      a = element("a");
      p0 = element("p");
      t0 = text(t0_value);
      t1 = space();
      if (if_block) if_block.c();
      t2 = space();
      p1 = element("p");
      t3 = text(t3_value);
      t4 = space();
      this.h();
    },
    l: function claim(nodes) {
      section = claim_element(nodes, "SECTION", {
        class: true
      });
      var section_nodes = children(section);
      a = claim_element(section_nodes, "A", {
        href: true,
        target: true,
        rel: true
      });
      var a_nodes = children(a);
      p0 = claim_element(a_nodes, "P", {
        class: true
      });
      var p0_nodes = children(p0);
      t0 = claim_text(p0_nodes, t0_value);
      p0_nodes.forEach(detach_dev);
      a_nodes.forEach(detach_dev);
      t1 = claim_space(section_nodes);
      if (if_block) if_block.l(section_nodes);
      t2 = claim_space(section_nodes);
      p1 = claim_element(section_nodes, "P", {
        class: true
      });
      var p1_nodes = children(p1);
      t3 = claim_text(p1_nodes, t3_value);
      p1_nodes.forEach(detach_dev);
      t4 = claim_space(section_nodes);
      section_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(p0, "class", "font-sans svelte-tjc988");
      add_location(p0, file, 54, 10, 1941);
      attr_dev(a, "href", a_href_value =
      /*book*/
      ctx[7].url);
      attr_dev(a, "target", "_blank");
      attr_dev(a, "rel", "noopener noreferrer");
      add_location(a, file, 53, 8, 1869);
      attr_dev(p1, "class", "text-sm svelte-tjc988");
      add_location(p1, file, 59, 8, 2098);
      attr_dev(section, "class", "mb-4 sm:mb-6 svelte-tjc988");
      add_location(section, file, 52, 6, 1830);
    },
    m: function mount(target, anchor) {
      insert_dev(target, section, anchor);
      append_dev(section, a);
      append_dev(a, p0);
      append_dev(p0, t0);
      append_dev(section, t1);
      if (if_block) if_block.m(section, null);
      append_dev(section, t2);
      append_dev(section, p1);
      append_dev(p1, t3);
      append_dev(section, t4);
    },
    p: function update(ctx, dirty) {
      if (
      /*book*/
      ctx[7].subtitle) if_block.p(ctx, dirty);
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(section);
      if (if_block) if_block.d();
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_each_block.name,
    type: "each",
    source: "(52:4) {#each readingList as book}",
    ctx: ctx
  });
  return block;
}

function create_fragment(ctx) {
  var title_value;
  var t0;
  var div3;
  var h1;
  var t1;
  var t2;
  var div0;
  var span0;
  var t3;
  var t4;
  var t5;
  var span1;
  var t6;
  var t7;
  var p0;
  var t8;
  var h20;
  var t9;
  var t10;
  var div1;
  var ul;
  var t11;
  var h21;
  var t12;
  var t13;
  var p1;
  var t14;
  var t15;
  var div2;
  var current;
  document.title = title_value = "Issue №" +
  /*number*/
  ctx[1] + " | Specimen Magazine";
  var each_value_1 =
  /*professors*/
  ctx[5];
  validate_each_argument(each_value_1);
  var each_blocks_1 = [];

  for (var i = 0; i < each_value_1.length; i += 1) {
    each_blocks_1[i] = create_each_block_1(get_each_context_1(ctx, each_value_1, i));
  }

  var out = function out(i) {
    return transition_out(each_blocks_1[i], 1, 1, function () {
      each_blocks_1[i] = null;
    });
  };

  var each_value =
  /*readingList*/
  ctx[4];
  validate_each_argument(each_value);
  var each_blocks = [];

  for (var _i = 0; _i < each_value.length; _i += 1) {
    each_blocks[_i] = create_each_block(get_each_context(ctx, each_value, _i));
  }

  var block = {
    c: function create() {
      t0 = space();
      div3 = element("div");
      h1 = element("h1");
      t1 = text(
      /*title*/
      ctx[0]);
      t2 = space();
      div0 = element("div");
      span0 = element("span");
      t3 = text("Issue №");
      t4 = text(
      /*number*/
      ctx[1]);
      t5 = space();
      span1 = element("span");
      t6 = text(
      /*date*/
      ctx[2]);
      t7 = space();
      p0 = element("p");
      t8 = space();
      h20 = element("h2");
      t9 = text("Interviews");
      t10 = space();
      div1 = element("div");
      ul = element("ul");

      for (var _i2 = 0; _i2 < each_blocks_1.length; _i2 += 1) {
        each_blocks_1[_i2].c();
      }

      t11 = space();
      h21 = element("h2");
      t12 = text("Reading List");
      t13 = space();
      p1 = element("p");
      t14 = text("Texts discussed in this issue");
      t15 = space();
      div2 = element("div");

      for (var _i3 = 0; _i3 < each_blocks.length; _i3 += 1) {
        each_blocks[_i3].c();
      }

      this.h();
    },
    l: function claim(nodes) {
      var head_nodes = query_selector_all("[data-svelte=\"svelte-btny52\"]", document.head);
      head_nodes.forEach(detach_dev);
      t0 = claim_space(nodes);
      div3 = claim_element(nodes, "DIV", {
        class: true
      });
      var div3_nodes = children(div3);
      h1 = claim_element(div3_nodes, "H1", {
        class: true
      });
      var h1_nodes = children(h1);
      t1 = claim_text(h1_nodes,
      /*title*/
      ctx[0]);
      h1_nodes.forEach(detach_dev);
      t2 = claim_space(div3_nodes);
      div0 = claim_element(div3_nodes, "DIV", {
        class: true
      });
      var div0_nodes = children(div0);
      span0 = claim_element(div0_nodes, "SPAN", {});
      var span0_nodes = children(span0);
      t3 = claim_text(span0_nodes, "Issue №");
      t4 = claim_text(span0_nodes,
      /*number*/
      ctx[1]);
      span0_nodes.forEach(detach_dev);
      t5 = claim_space(div0_nodes);
      span1 = claim_element(div0_nodes, "SPAN", {});
      var span1_nodes = children(span1);
      t6 = claim_text(span1_nodes,
      /*date*/
      ctx[2]);
      span1_nodes.forEach(detach_dev);
      div0_nodes.forEach(detach_dev);
      t7 = claim_space(div3_nodes);
      p0 = claim_element(div3_nodes, "P", {
        class: true
      });
      var p0_nodes = children(p0);
      p0_nodes.forEach(detach_dev);
      t8 = claim_space(div3_nodes);
      h20 = claim_element(div3_nodes, "H2", {
        class: true
      });
      var h20_nodes = children(h20);
      t9 = claim_text(h20_nodes, "Interviews");
      h20_nodes.forEach(detach_dev);
      t10 = claim_space(div3_nodes);
      div1 = claim_element(div3_nodes, "DIV", {});
      var div1_nodes = children(div1);
      ul = claim_element(div1_nodes, "UL", {});
      var ul_nodes = children(ul);

      for (var _i4 = 0; _i4 < each_blocks_1.length; _i4 += 1) {
        each_blocks_1[_i4].l(ul_nodes);
      }

      ul_nodes.forEach(detach_dev);
      div1_nodes.forEach(detach_dev);
      t11 = claim_space(div3_nodes);
      h21 = claim_element(div3_nodes, "H2", {
        class: true
      });
      var h21_nodes = children(h21);
      t12 = claim_text(h21_nodes, "Reading List");
      h21_nodes.forEach(detach_dev);
      t13 = claim_space(div3_nodes);
      p1 = claim_element(div3_nodes, "P", {
        class: true
      });
      var p1_nodes = children(p1);
      t14 = claim_text(p1_nodes, "Texts discussed in this issue");
      p1_nodes.forEach(detach_dev);
      t15 = claim_space(div3_nodes);
      div2 = claim_element(div3_nodes, "DIV", {
        class: true
      });
      var div2_nodes = children(div2);

      for (var _i5 = 0; _i5 < each_blocks.length; _i5 += 1) {
        each_blocks[_i5].l(div2_nodes);
      }

      div2_nodes.forEach(detach_dev);
      div3_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(h1, "class", "pb-2 svelte-tjc988");
      add_location(h1, file, 28, 2, 1198);
      add_location(span0, file, 30, 4, 1288);
      add_location(span1, file, 31, 4, 1321);
      attr_dev(div0, "class", "flex justify-between text-lg font-light");
      add_location(div0, file, 29, 2, 1230);
      attr_dev(p0, "class", "svelte-tjc988");
      add_location(p0, file, 34, 2, 1353);
      attr_dev(h20, "class", "svelte-tjc988");
      add_location(h20, file, 36, 2, 1377);
      add_location(ul, file, 38, 4, 1409);
      add_location(div1, file, 37, 2, 1399);
      attr_dev(h21, "class", "pb-2 svelte-tjc988");
      add_location(h21, file, 48, 2, 1671);
      attr_dev(p1, "class", "svelte-tjc988");
      add_location(p1, file, 49, 2, 1708);
      attr_dev(div2, "class", "flex flex-wrap justify-between");
      add_location(div2, file, 50, 2, 1747);
      attr_dev(div3, "class", "prose w-full svelte-tjc988");
      add_location(div3, file, 27, 0, 1169);
    },
    m: function mount(target, anchor) {
      insert_dev(target, t0, anchor);
      insert_dev(target, div3, anchor);
      append_dev(div3, h1);
      append_dev(h1, t1);
      append_dev(div3, t2);
      append_dev(div3, div0);
      append_dev(div0, span0);
      append_dev(span0, t3);
      append_dev(span0, t4);
      append_dev(div0, t5);
      append_dev(div0, span1);
      append_dev(span1, t6);
      append_dev(div3, t7);
      append_dev(div3, p0);
      p0.innerHTML =
      /*intro*/
      ctx[3];
      append_dev(div3, t8);
      append_dev(div3, h20);
      append_dev(h20, t9);
      append_dev(div3, t10);
      append_dev(div3, div1);
      append_dev(div1, ul);

      for (var _i6 = 0; _i6 < each_blocks_1.length; _i6 += 1) {
        each_blocks_1[_i6].m(ul, null);
      }

      append_dev(div3, t11);
      append_dev(div3, h21);
      append_dev(h21, t12);
      append_dev(div3, t13);
      append_dev(div3, p1);
      append_dev(p1, t14);
      append_dev(div3, t15);
      append_dev(div3, div2);

      for (var _i7 = 0; _i7 < each_blocks.length; _i7 += 1) {
        each_blocks[_i7].m(div2, null);
      }

      current = true;
    },
    p: function update(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      if ((!current || dirty &
      /*number*/
      2) && title_value !== (title_value = "Issue №" +
      /*number*/
      ctx[1] + " | Specimen Magazine")) {
        document.title = title_value;
      }

      if (dirty &
      /*professors*/
      32) {
        each_value_1 =
        /*professors*/
        ctx[5];
        validate_each_argument(each_value_1);

        var _i8;

        for (_i8 = 0; _i8 < each_value_1.length; _i8 += 1) {
          var child_ctx = get_each_context_1(ctx, each_value_1, _i8);

          if (each_blocks_1[_i8]) {
            each_blocks_1[_i8].p(child_ctx, dirty);

            transition_in(each_blocks_1[_i8], 1);
          } else {
            each_blocks_1[_i8] = create_each_block_1(child_ctx);

            each_blocks_1[_i8].c();

            transition_in(each_blocks_1[_i8], 1);

            each_blocks_1[_i8].m(ul, null);
          }
        }

        group_outros();

        for (_i8 = each_value_1.length; _i8 < each_blocks_1.length; _i8 += 1) {
          out(_i8);
        }

        check_outros();
      }

      if (dirty &
      /*readingList*/
      16) {
        each_value =
        /*readingList*/
        ctx[4];
        validate_each_argument(each_value);

        var _i9;

        for (_i9 = 0; _i9 < each_value.length; _i9 += 1) {
          var _child_ctx = get_each_context(ctx, each_value, _i9);

          if (each_blocks[_i9]) {
            each_blocks[_i9].p(_child_ctx, dirty);
          } else {
            each_blocks[_i9] = create_each_block(_child_ctx);

            each_blocks[_i9].c();

            each_blocks[_i9].m(div2, null);
          }
        }

        for (; _i9 < each_blocks.length; _i9 += 1) {
          each_blocks[_i9].d(1);
        }

        each_blocks.length = each_value.length;
      }
    },
    i: function intro(local) {
      if (current) return;

      for (var _i10 = 0; _i10 < each_value_1.length; _i10 += 1) {
        transition_in(each_blocks_1[_i10]);
      }

      current = true;
    },
    o: function outro(local) {
      each_blocks_1 = each_blocks_1.filter(Boolean);

      for (var _i11 = 0; _i11 < each_blocks_1.length; _i11 += 1) {
        transition_out(each_blocks_1[_i11]);
      }

      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(t0);
      if (detaching) detach_dev(div3);
      destroy_each(each_blocks_1, detaching);
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
              issue: issues[params.slug - 1]
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
  var issue = $$props.issue;
  var _issue = issue,
      title = _issue.title,
      number = _issue.number,
      date = _issue.date,
      intro = _issue.intro,
      readingList = _issue.readingList,
      professors = _issue.professors;
  var writable_props = ["issue"];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<U5Bslugu5D> was created with unknown prop '".concat(key, "'"));
  });

  $$self.$$set = function ($$props) {
    if ("issue" in $$props) $$invalidate(6, issue = $$props.issue);
  };

  $$self.$capture_state = function () {
    return {
      __awaiter: __awaiter,
      issues: issues,
      Tag: Tag,
      preload: preload,
      issue: issue,
      title: title,
      number: number,
      date: date,
      intro: intro,
      readingList: readingList,
      professors: professors
    };
  };

  $$self.$inject_state = function ($$props) {
    if ("issue" in $$props) $$invalidate(6, issue = $$props.issue);
  };

  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }

  return [title, number, date, intro, readingList, professors, issue];
}

var U5Bslugu5D = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(U5Bslugu5D, _SvelteComponentDev);

  var _super = _createSuper(U5Bslugu5D);

  function U5Bslugu5D(options) {
    var _this;

    _classCallCheck(this, U5Bslugu5D);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance, create_fragment, safe_not_equal, {
      issue: 6
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
    /*issue*/
    ctx[6] === undefined && !("issue" in props)) {
      console.warn("<U5Bslugu5D> was created without expected prop 'issue'");
    }

    return _this;
  }

  _createClass(U5Bslugu5D, [{
    key: "issue",
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
