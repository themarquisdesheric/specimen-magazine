import { _ as _inherits, a as _getPrototypeOf, b as _possibleConstructorReturn, c as _classCallCheck, i as init, d as _assertThisInitialized, e as dispatch_dev, S as SvelteComponentDev, s as safe_not_equal, k as space, j as element, A as text, q as query_selector_all, f as detach_dev, p as claim_space, m as claim_element, o as children, B as claim_text, C as attr_dev, t as add_location, u as insert_dev, D as append_dev, n as noop, v as validate_slots } from './client.182e1ac9.js';

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var file = "src/routes/about.svelte";

function create_fragment(ctx) {
  var t0;
  var div2;
  var h1;
  var t1;
  var t2;
  var div1;
  var div0;
  var p;
  var t3;
  var block = {
    c: function create() {
      t0 = space();
      div2 = element("div");
      h1 = element("h1");
      t1 = text("About this site");
      t2 = space();
      div1 = element("div");
      div0 = element("div");
      p = element("p");
      t3 = text("This is the 'about' page. There's not much here.");
      this.h();
    },
    l: function claim(nodes) {
      var head_nodes = query_selector_all("[data-svelte=\"svelte-1tnscur\"]", document.head);
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
      t1 = claim_text(h1_nodes, "About this site");
      h1_nodes.forEach(detach_dev);
      t2 = claim_space(div2_nodes);
      div1 = claim_element(div2_nodes, "DIV", {
        class: true
      });
      var div1_nodes = children(div1);
      div0 = claim_element(div1_nodes, "DIV", {});
      var div0_nodes = children(div0);
      p = claim_element(div0_nodes, "P", {
        class: true
      });
      var p_nodes = children(p);
      t3 = claim_text(p_nodes, "This is the 'about' page. There's not much here.");
      p_nodes.forEach(detach_dev);
      div0_nodes.forEach(detach_dev);
      div1_nodes.forEach(detach_dev);
      div2_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      document.title = "About | Specimen Magazine";
      attr_dev(h1, "class", "text-lg");
      add_location(h1, file, 5, 1, 94);
      attr_dev(p, "class", "text-sm svelte-qsrwop");
      add_location(p, file, 8, 3, 167);
      add_location(div0, file, 7, 2, 158);
      attr_dev(div1, "class", "prose");
      add_location(div1, file, 6, 1, 136);
      attr_dev(div2, "class", "w-full");
      add_location(div2, file, 4, 0, 72);
    },
    m: function mount(target, anchor) {
      insert_dev(target, t0, anchor);
      insert_dev(target, div2, anchor);
      append_dev(div2, h1);
      append_dev(h1, t1);
      append_dev(div2, t2);
      append_dev(div2, div1);
      append_dev(div1, div0);
      append_dev(div0, p);
      append_dev(p, t3);
    },
    p: noop,
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching) detach_dev(t0);
      if (detaching) detach_dev(div2);
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

function instance($$self, $$props) {
  var _$$props$$$slots = $$props.$$slots,
      slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
      $$scope = $$props.$$scope;
  validate_slots("About", slots, []);
  var writable_props = [];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<About> was created with unknown prop '".concat(key, "'"));
  });
  return [];
}

var About = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(About, _SvelteComponentDev);

  var _super = _createSuper(About);

  function About(options) {
    var _this;

    _classCallCheck(this, About);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance, create_fragment, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "About",
      options: options,
      id: create_fragment.name
    });
    return _this;
  }

  return About;
}(SvelteComponentDev);

export default About;
