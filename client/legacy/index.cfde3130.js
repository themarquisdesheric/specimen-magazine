import { _ as _inherits, a as _getPrototypeOf, b as _possibleConstructorReturn, c as _classCallCheck, i as init, d as _assertThisInitialized, e as dispatch_dev, S as SvelteComponentDev, h as validate_each_argument, s as safe_not_equal, F as create_component, G as claim_component, H as mount_component, n as noop, w as transition_in, x as transition_out, J as destroy_component, k as space, j as element, A as text, q as query_selector_all, f as detach_dev, p as claim_space, m as claim_element, o as children, B as claim_text, C as attr_dev, t as add_location, u as insert_dev, D as append_dev, E as _slicedToArray, y as check_outros, z as destroy_each, v as validate_slots, P as _toConsumableArray, K as group_outros } from './client.182e1ac9.js';
import { T as Tag } from './Tag.599f9c36.js';
import { c as professors } from './professors.52297b7f.js';

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var file = "src/routes/tags/index.svelte";

function get_each_context(ctx, list, i) {
  var child_ctx = ctx.slice();
  child_ctx[2] = list[i];
  child_ctx[4] = i;
  return child_ctx;
} // (18:4) {#each uniqueTags as tag, index}


function create_each_block(ctx) {
  var tag;
  var current;
  tag = new Tag({
    props: {
      tag:
      /*tag*/
      ctx[2],
      lastOrOnlyTag:
      /*uniqueTags*/
      ctx[0].length - 1 ===
      /*index*/
      ctx[4],
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
    source: "(18:4) {#each uniqueTags as tag, index}",
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
  var div0;
  var current;
  var each_value =
  /*uniqueTags*/
  ctx[0];
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
      div1 = element("div");
      h1 = element("h1");
      t1 = text("Tags");
      t2 = space();
      div0 = element("div");

      for (var _i = 0; _i < each_blocks.length; _i += 1) {
        each_blocks[_i].c();
      }

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
      t1 = claim_text(h1_nodes, "Tags");
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
      document.title = "Tags | Specimen Magazine";
      attr_dev(h1, "class", "text-lg pb-2");
      add_location(h1, file, 14, 2, 346);
      attr_dev(div0, "class", "flex flex-wrap");
      add_location(div0, file, 16, 2, 386);
      attr_dev(div1, "class", "w-full");
      add_location(div1, file, 13, 0, 323);
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
      /*uniqueTags*/
      1) {
        each_value =
        /*uniqueTags*/
        ctx[0];
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
  validate_slots("Tags", slots, []);
  var tags = [];
  professors.forEach(function (professor) {
    tags = tags.concat(professor.tags);
  });

  var uniqueTags = _toConsumableArray(new Set(tags));

  var writable_props = [];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<Tags> was created with unknown prop '".concat(key, "'"));
  });

  $$self.$capture_state = function () {
    return {
      professors: professors,
      Tag: Tag,
      tags: tags,
      uniqueTags: uniqueTags
    };
  };

  $$self.$inject_state = function ($$props) {
    if ("tags" in $$props) tags = $$props.tags;
  };

  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }

  return [uniqueTags];
}

var Tags = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(Tags, _SvelteComponentDev);

  var _super = _createSuper(Tags);

  function Tags(options) {
    var _this;

    _classCallCheck(this, Tags);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance, create_fragment, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Tags",
      options: options,
      id: create_fragment.name
    });
    return _this;
  }

  return Tags;
}(SvelteComponentDev);

export default Tags;
