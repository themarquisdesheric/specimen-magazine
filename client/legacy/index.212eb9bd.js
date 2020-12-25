import { _ as _inherits, a as _getPrototypeOf, b as _possibleConstructorReturn, c as _classCallCheck, i as init, s as safe_not_equal, d as _assertThisInitialized, e as dispatch_dev, g as _createClass, S as SvelteComponentDev, h as validate_each_argument, v as validate_slots, l as empty, u as insert_dev, w as transition_in, x as transition_out, f as detach_dev, j as element, A as text, k as space, m as claim_element, o as children, B as claim_text, p as claim_space, C as attr_dev, t as add_location, M as set_style, N as add_render_callback, D as append_dev, O as add_resize_listener, E as _slicedToArray, K as group_outros, y as check_outros, z as destroy_each, F as create_component, G as claim_component, H as mount_component, n as noop, J as destroy_component, q as query_selector_all } from './client.182e1ac9.js';
import { T as Tag } from './Tag.599f9c36.js';
import './professors.52297b7f.js';
import { i as issues } from './issues.16ae380a.js';

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var file = "src/components/IssueCard.svelte";

function get_each_context(ctx, list, i) {
  var child_ctx = ctx.slice();
  child_ctx[8] = list[i];
  child_ctx[10] = i;
  return child_ctx;
} // (24:44) 


function create_if_block_1(ctx) {
  var section;
  var p;
  var t0_value =
  /*professor*/
  ctx[8].name + "";
  var t0;
  var t1;
  var tag;
  var t2;
  var if_block_anchor;
  var current;
  tag = new Tag({
    props: {
      tag:
      /*professor*/
      ctx[8].tags[0]
    },
    $$inline: true
  });
  var if_block =
  /*index*/
  ctx[10] !==
  /*professors*/
  ctx[4].length - 1 && create_if_block_2(ctx);
  var block = {
    c: function create() {
      section = element("section");
      p = element("p");
      t0 = text(t0_value);
      t1 = space();
      create_component(tag.$$.fragment);
      t2 = space();
      if (if_block) if_block.c();
      if_block_anchor = empty();
      this.h();
    },
    l: function claim(nodes) {
      section = claim_element(nodes, "SECTION", {
        class: true
      });
      var section_nodes = children(section);
      p = claim_element(section_nodes, "P", {
        class: true
      });
      var p_nodes = children(p);
      t0 = claim_text(p_nodes, t0_value);
      p_nodes.forEach(detach_dev);
      t1 = claim_space(section_nodes);
      claim_component(tag.$$.fragment, section_nodes);
      section_nodes.forEach(detach_dev);
      t2 = claim_space(nodes);
      if (if_block) if_block.l(nodes);
      if_block_anchor = empty();
      this.h();
    },
    h: function hydrate() {
      attr_dev(p, "class", "text-left mr-1");
      add_location(p, file, 25, 8, 1221);
      attr_dev(section, "class", "py-1 flex justify-between items-center");
      add_location(section, file, 24, 6, 1156);
    },
    m: function mount(target, anchor) {
      insert_dev(target, section, anchor);
      append_dev(section, p);
      append_dev(p, t0);
      append_dev(section, t1);
      mount_component(tag, section, null);
      insert_dev(target, t2, anchor);
      if (if_block) if_block.m(target, anchor);
      insert_dev(target, if_block_anchor, anchor);
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
      if (detaching) detach_dev(section);
      destroy_component(tag);
      if (detaching) detach_dev(t2);
      if (if_block) if_block.d(detaching);
      if (detaching) detach_dev(if_block_anchor);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_if_block_1.name,
    type: "if",
    source: "(24:44) ",
    ctx: ctx
  });
  return block;
} // (20:4) {#if index === MAX_PROFESSOR_LENGTH && professors.length - 1 > MAX_PROFESSOR_LENGTH}


function create_if_block(ctx) {
  var section;
  var p;
  var t0;
  var t1_value =
  /*professors*/
  ctx[4].length - MAX_PROFESSOR_LENGTH + "";
  var t1;
  var t2;
  var t3;
  var block = {
    c: function create() {
      section = element("section");
      p = element("p");
      t0 = text("+");
      t1 = text(t1_value);
      t2 = text(" more");
      t3 = space();
      this.h();
    },
    l: function claim(nodes) {
      section = claim_element(nodes, "SECTION", {
        class: true
      });
      var section_nodes = children(section);
      p = claim_element(section_nodes, "P", {
        class: true
      });
      var p_nodes = children(p);
      t0 = claim_text(p_nodes, "+");
      t1 = claim_text(p_nodes, t1_value);
      t2 = claim_text(p_nodes, " more");
      p_nodes.forEach(detach_dev);
      t3 = claim_space(section_nodes);
      section_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(p, "class", "font-light");
      add_location(p, file, 21, 8, 1013);
      attr_dev(section, "class", "py-1 flex justify-between items-center");
      add_location(section, file, 20, 6, 946);
    },
    m: function mount(target, anchor) {
      insert_dev(target, section, anchor);
      append_dev(section, p);
      append_dev(p, t0);
      append_dev(p, t1);
      append_dev(p, t2);
      append_dev(section, t3);
    },
    p: noop,
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching) detach_dev(section);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_if_block.name,
    type: "if",
    source: "(20:4) {#if index === MAX_PROFESSOR_LENGTH && professors.length - 1 > MAX_PROFESSOR_LENGTH}",
    ctx: ctx
  });
  return block;
} // (30:6) {#if index !== professors.length - 1}


function create_if_block_2(ctx) {
  var hr;
  var block = {
    c: function create() {
      hr = element("hr");
      this.h();
    },
    l: function claim(nodes) {
      hr = claim_element(nodes, "HR", {
        class: true
      });
      this.h();
    },
    h: function hydrate() {
      attr_dev(hr, "class", "my-1");
      add_location(hr, file, 30, 8, 1378);
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
    id: create_if_block_2.name,
    type: "if",
    source: "(30:6) {#if index !== professors.length - 1}",
    ctx: ctx
  });
  return block;
} // (19:2) {#each professors as professor, index}


function create_each_block(ctx) {
  var current_block_type_index;
  var if_block;
  var if_block_anchor;
  var current;
  var if_block_creators = [create_if_block, create_if_block_1];
  var if_blocks = [];

  function select_block_type(ctx, dirty) {
    if (
    /*index*/
    ctx[10] === MAX_PROFESSOR_LENGTH &&
    /*professors*/
    ctx[4].length - 1 > MAX_PROFESSOR_LENGTH) return 0;
    if (
    /*index*/
    ctx[10] <= MAX_PROFESSOR_LENGTH) return 1;
    return -1;
  }

  if (~(current_block_type_index = select_block_type(ctx))) {
    if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
  }

  var block = {
    c: function create() {
      if (if_block) if_block.c();
      if_block_anchor = empty();
    },
    l: function claim(nodes) {
      if (if_block) if_block.l(nodes);
      if_block_anchor = empty();
    },
    m: function mount(target, anchor) {
      if (~current_block_type_index) {
        if_blocks[current_block_type_index].m(target, anchor);
      }

      insert_dev(target, if_block_anchor, anchor);
      current = true;
    },
    p: function update(ctx, dirty) {
      if (if_block) if_block.p(ctx, dirty);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(if_block);
      current = true;
    },
    o: function outro(local) {
      transition_out(if_block);
      current = false;
    },
    d: function destroy(detaching) {
      if (~current_block_type_index) {
        if_blocks[current_block_type_index].d(detaching);
      }

      if (detaching) detach_dev(if_block_anchor);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_each_block.name,
    type: "each",
    source: "(19:2) {#each professors as professor, index}",
    ctx: ctx
  });
  return block;
}

function create_fragment(ctx) {
  var a;
  var header;
  var h2;
  var t0;
  var t1;
  var span;
  var t2;
  var header_resize_listener;
  var t3;
  var a_href_value;
  var current;
  var each_value =
  /*professors*/
  ctx[4];
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
      a = element("a");
      header = element("header");
      h2 = element("h2");
      t0 = text(
      /*title*/
      ctx[2]);
      t1 = space();
      span = element("span");
      t2 = text(
      /*date*/
      ctx[3]);
      t3 = space();

      for (var _i = 0; _i < each_blocks.length; _i += 1) {
        each_blocks[_i].c();
      }

      this.h();
    },
    l: function claim(nodes) {
      a = claim_element(nodes, "A", {
        href: true,
        rel: true,
        class: true
      });
      var a_nodes = children(a);
      header = claim_element(a_nodes, "HEADER", {
        style: true,
        class: true
      });
      var header_nodes = children(header);
      h2 = claim_element(header_nodes, "H2", {
        class: true
      });
      var h2_nodes = children(h2);
      t0 = claim_text(h2_nodes,
      /*title*/
      ctx[2]);
      h2_nodes.forEach(detach_dev);
      t1 = claim_space(header_nodes);
      span = claim_element(header_nodes, "SPAN", {
        class: true
      });
      var span_nodes = children(span);
      t2 = claim_text(span_nodes,
      /*date*/
      ctx[3]);
      span_nodes.forEach(detach_dev);
      header_nodes.forEach(detach_dev);
      t3 = claim_space(a_nodes);

      for (var _i2 = 0; _i2 < each_blocks.length; _i2 += 1) {
        each_blocks[_i2].l(a_nodes);
      }

      a_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(h2, "class", "absolute flex justify-between font-bold text-xl svelte-1wnqw13");
      add_location(h2, file, 15, 4, 660);
      attr_dev(span, "class", "absolute text-xl font-extralight svelte-1wnqw13");
      add_location(span, file, 16, 4, 737);
      set_style(header, "--headerWidth",
      /*headerWidth*/
      ctx[0] + "px");
      set_style(header, "background-color",
      /*colors*/
      ctx[5][
      /*number*/
      ctx[1] - 1]);
      attr_dev(header, "class", "relative mb-4 text-white svelte-1wnqw13");
      add_render_callback(function () {
        return (
          /*header_elementresize_handler*/
          ctx[7].call(header)
        );
      });
      add_location(header, file, 10, 2, 489);
      attr_dev(a, "href", a_href_value = "/issues/" +
      /*number*/
      ctx[1]);
      attr_dev(a, "rel", "prefetch");
      attr_dev(a, "class", "issue-card w-full border rounded text-sm p-4 mb-4 svelte-1wnqw13");
      add_location(a, file, 9, 0, 386);
    },
    m: function mount(target, anchor) {
      insert_dev(target, a, anchor);
      append_dev(a, header);
      append_dev(header, h2);
      append_dev(h2, t0);
      append_dev(header, t1);
      append_dev(header, span);
      append_dev(span, t2);
      header_resize_listener = add_resize_listener(header,
      /*header_elementresize_handler*/
      ctx[7].bind(header));
      append_dev(a, t3);

      for (var _i3 = 0; _i3 < each_blocks.length; _i3 += 1) {
        each_blocks[_i3].m(a, null);
      }

      current = true;
    },
    p: function update(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      if (!current || dirty &
      /*headerWidth*/
      1) {
        set_style(header, "--headerWidth",
        /*headerWidth*/
        ctx[0] + "px");
      }

      if (dirty &
      /*professors, MAX_PROFESSOR_LENGTH*/
      16) {
        each_value =
        /*professors*/
        ctx[4];
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

            each_blocks[_i4].m(a, null);
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
      if (detaching) detach_dev(a);
      header_resize_listener();
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

var MAX_PROFESSOR_LENGTH = 5;

function instance($$self, $$props, $$invalidate) {
  var _$$props$$$slots = $$props.$$slots,
      slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
      $$scope = $$props.$$scope;
  validate_slots("IssueCard", slots, []);
  var issue = $$props.issue;
  var _issue = issue,
      number = _issue.number,
      title = _issue.title,
      date = _issue.date,
      professors = _issue.professors;
  var colors = ["rgb(23, 19, 100)", "rgb(236, 175, 148)", "rgb(251, 112, 125)", "rgb(193, 14, 27)", "rgb(206, 203, 244)", "rgb(48, 121, 80)", "rgb(240, 113, 21)", "rgb(225, 172, 87)", "rgb(34, 85, 77)"];
  var headerWidth;
  var writable_props = ["issue"];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<IssueCard> was created with unknown prop '".concat(key, "'"));
  });

  function header_elementresize_handler() {
    headerWidth = this.clientWidth;
    $$invalidate(0, headerWidth);
  }

  $$self.$$set = function ($$props) {
    if ("issue" in $$props) $$invalidate(6, issue = $$props.issue);
  };

  $$self.$capture_state = function () {
    return {
      Tag: Tag,
      issue: issue,
      number: number,
      title: title,
      date: date,
      professors: professors,
      MAX_PROFESSOR_LENGTH: MAX_PROFESSOR_LENGTH,
      colors: colors,
      headerWidth: headerWidth
    };
  };

  $$self.$inject_state = function ($$props) {
    if ("issue" in $$props) $$invalidate(6, issue = $$props.issue);
    if ("headerWidth" in $$props) $$invalidate(0, headerWidth = $$props.headerWidth);
  };

  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }

  return [headerWidth, number, title, date, professors, colors, issue, header_elementresize_handler];
}

var IssueCard = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(IssueCard, _SvelteComponentDev);

  var _super = _createSuper(IssueCard);

  function IssueCard(options) {
    var _this;

    _classCallCheck(this, IssueCard);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance, create_fragment, safe_not_equal, {
      issue: 6
    });
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "IssueCard",
      options: options,
      id: create_fragment.name
    });
    var ctx = _this.$$.ctx;
    var props = options.props || {};

    if (
    /*issue*/
    ctx[6] === undefined && !("issue" in props)) {
      console.warn("<IssueCard> was created without expected prop 'issue'");
    }

    return _this;
  }

  _createClass(IssueCard, [{
    key: "issue",
    get: function get() {
      throw new Error("<IssueCard>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<IssueCard>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }]);

  return IssueCard;
}(SvelteComponentDev);

function _createSuper$1(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$1(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$1() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var file$1 = "src/routes/issues/index.svelte";

function get_each_context$1(ctx, list, i) {
  var child_ctx = ctx.slice();
  child_ctx[0] = list[i];
  return child_ctx;
} // (13:4) {#each issues as issue}


function create_each_block$1(ctx) {
  var issuecard;
  var current;
  issuecard = new IssueCard({
    props: {
      issue:
      /*issue*/
      ctx[0]
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(issuecard.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(issuecard.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(issuecard, target, anchor);
      current = true;
    },
    p: noop,
    i: function intro(local) {
      if (current) return;
      transition_in(issuecard.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(issuecard.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(issuecard, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_each_block$1.name,
    type: "each",
    source: "(13:4) {#each issues as issue}",
    ctx: ctx
  });
  return block;
}

function create_fragment$1(ctx) {
  var t0;
  var div1;
  var h1;
  var t1;
  var t2;
  var div0;
  var current;
  var each_value = issues;
  validate_each_argument(each_value);
  var each_blocks = [];

  for (var i = 0; i < each_value.length; i += 1) {
    each_blocks[i] = create_each_block$1(get_each_context$1(ctx, each_value, i));
  }

  var out = function out(i) {
    return transition_out(each_blocks[i], 1, 1, function () {
      each_blocks[i] = null;
    });
  };

  var block = {
    c: function create() {
      t0 = space();
      div1 = element("div");
      h1 = element("h1");
      t1 = text("Issues");
      t2 = space();
      div0 = element("div");

      for (var _i = 0; _i < each_blocks.length; _i += 1) {
        each_blocks[_i].c();
      }

      this.h();
    },
    l: function claim(nodes) {
      var head_nodes = query_selector_all("[data-svelte=\"svelte-1v91dew\"]", document.head);
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
      t1 = claim_text(h1_nodes, "Issues");
      h1_nodes.forEach(detach_dev);
      t2 = claim_space(div1_nodes);
      div0 = claim_element(div1_nodes, "DIV", {
        class: true
      });
      var div0_nodes = children(div0);

      for (var _i2 = 0; _i2 < each_blocks.length; _i2 += 1) {
        each_blocks[_i2].l(div0_nodes);
      }

      div0_nodes.forEach(detach_dev);
      div1_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      document.title = "Issues | Specimen Magazine";
      attr_dev(h1, "class", "text-lg pb-2");
      add_location(h1, file$1, 9, 2, 224);
      attr_dev(div0, "class", "flex flex-wrap justify-between");
      add_location(div0, file$1, 11, 2, 266);
      attr_dev(div1, "class", "w-full");
      add_location(div1, file$1, 8, 0, 201);
    },
    m: function mount(target, anchor) {
      insert_dev(target, t0, anchor);
      insert_dev(target, div1, anchor);
      append_dev(div1, h1);
      append_dev(h1, t1);
      append_dev(div1, t2);
      append_dev(div1, div0);

      for (var _i3 = 0; _i3 < each_blocks.length; _i3 += 1) {
        each_blocks[_i3].m(div0, null);
      }

      current = true;
    },
    p: function update(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      if (dirty &
      /*issues*/
      0) {
        each_value = issues;
        validate_each_argument(each_value);

        var _i4;

        for (_i4 = 0; _i4 < each_value.length; _i4 += 1) {
          var child_ctx = get_each_context$1(ctx, each_value, _i4);

          if (each_blocks[_i4]) {
            each_blocks[_i4].p(child_ctx, dirty);

            transition_in(each_blocks[_i4], 1);
          } else {
            each_blocks[_i4] = create_each_block$1(child_ctx);

            each_blocks[_i4].c();

            transition_in(each_blocks[_i4], 1);

            each_blocks[_i4].m(div0, null);
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
      if (detaching) detach_dev(div1);
      destroy_each(each_blocks, detaching);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_fragment$1.name,
    type: "component",
    source: "",
    ctx: ctx
  });
  return block;
}

function instance$1($$self, $$props, $$invalidate) {
  var _$$props$$$slots = $$props.$$slots,
      slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
      $$scope = $$props.$$scope;
  validate_slots("Issues", slots, []);
  var writable_props = [];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<Issues> was created with unknown prop '".concat(key, "'"));
  });

  $$self.$capture_state = function () {
    return {
      issues: issues,
      IssueCard: IssueCard
    };
  };

  return [];
}

var Issues = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(Issues, _SvelteComponentDev);

  var _super = _createSuper$1(Issues);

  function Issues(options) {
    var _this;

    _classCallCheck(this, Issues);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance$1, create_fragment$1, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Issues",
      options: options,
      id: create_fragment$1.name
    });
    return _this;
  }

  return Issues;
}(SvelteComponentDev);

export default Issues;
