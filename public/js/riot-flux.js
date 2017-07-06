// Dispatcherクラス
class Dispatcher {
  get stores() { return this._stores; }
  addStore(key, store) { this._stores[key] = store }
  constructor(...stores) {
    this._stores  = {}
    this._actions = {}
  }

  trigger(action, ...data) {
    let callback = this._actions[action]
    if ( typeof callback === "function" )
      callback(this.stores, ...data)
    //else
    //  console.warn("コールバック関数が登録されていません。")
  }
  on(action, callback) {
    this._actions[action] = callback
  }
}
const dispatcher = new Dispatcher();

// Storeクラス
class Store {
  constructor() {
    riot.observable(this)
  }
  changed(...args) {  //console.log(args)
    //console.log(new Error().stack)
    this.trigger("changed", ...args);
  }
}
