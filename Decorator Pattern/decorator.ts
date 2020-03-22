interface IToolbox {
  weight: number;
  toolCount: number;
}

class Toolbox implements IToolbox {
  private _weight = 200;
  private _toolCount = 0;

  get weight() {
    return this._weight;
  }

  get toolCount() {
    return this._toolCount;
  }
}

class Wrenches implements IToolbox {
  private _toolbox: IToolbox;
  private _weight = 3.5;
  private _toolCount = 7;

  constructor(toolbox: IToolbox) {
    this._toolbox = toolbox;
  }

  get weight() {
    return this._weight + this._toolbox.weight;
  }

  get toolCount() {
    return this._toolCount + this._toolbox.toolCount;
  }
}

class Sockets implements IToolbox {
  private _toolbox: IToolbox;
  private _weight = 1.8;
  private _toolCount = 15;

  constructor(toolbox: IToolbox) {
    this._toolbox = toolbox;
  }

  get weight() {
    return this._weight + this._toolbox.weight;
  }

  get toolCount() {
    return this._toolCount + this._toolbox.toolCount;
  }
}

class Screwdrivers implements IToolbox {
  private _toolbox: IToolbox;
  private _weight = 2.5;
  private _toolCount = 10;

  constructor(toolbox: IToolbox) {
    this._toolbox = toolbox;
  }

  get weight() {
    return this._weight + this._toolbox.weight;
  }

  get toolCount() {
    return this._toolCount + this._toolbox.toolCount;
  }
}

const toolbox = new Screwdrivers(new Sockets(new Wrenches(new Toolbox())));

console.log(toolbox.weight); // 207.8
console.log(toolbox.toolCount); // 32
