const requireAll = (r) => r.keys().forEach(r);
requireAll(require.context('./assets/', true, /\.svg$/));