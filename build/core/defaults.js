export var defaults = {
    labels: {
        "search.placeholder": "Search ..."
    },
    css: {
        /* moar css */
        ItemTree: "ItemTree",
        opener: "opener",
        depth: "depth",
        selected: "selected",
        category: "category",
        folded: "folded",
        disabled: "disabled",
        async: "async",
        loading: "loading",
        nodrop: "nodrop",
        dragover: "dragover",
        search: "search",
        item: "item"
    },
    strategies: {
        selection: ["modifiers"],
        click: [],
        fold: ["opener-control"]
    },
    display: function display(_) {
        return _.toString();
    },
    async: function async(_) {
        return _();
    },
    noOpener: false,
    dragndrop: {
        draggable: false,
        droppable: false
    }
};
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(defaults, "defaults", "src/core/defaults.js");
}();

;
//# sourceMappingURL=defaults.js.map