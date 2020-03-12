interface Item {
  use(): void;
}

interface MovementBehavior {
  move(): void;
}

interface Character {
  setMovementBehavior(M: MovementBehavior): void;
  move(): void;
  useItem(): void;
  setItem(I: Item): void;
}

function Character(): Character {
  let item = NoItem();
  let movementBehavior = NoMovement();

  return {
    setItem(newItem) {
      item = newItem;
    },
    useItem() {
      item.use();
    },
    setMovementBehavior(behavior) {
      movementBehavior = behavior;
    },
    move() {
      movementBehavior.move();
    }
  };
}

function NoItem(): Item {
  return {
    use() {
      console.log("There is no item in the character's hand.");
    }
  };
}

function NoMovement(): MovementBehavior {
  return {
    move() {
      console.log("The character does not know how to move.");
    }
  };
}

function Sword(): Item {
  return {
    use() {
      console.log("The character has slain a mighty dragon with their sword!");
    }
  };
}

function Rototiller(): Item {
  return {
    use() {
      console.log(
        "The character has put in a long day of work tilling the ground!"
      );
    }
  };
}

function Pen(): Item {
  return {
    use() {
      console.log(
        "The character has written a very sweet letter to their Mom using a pen!"
      );
    }
  };
}

function Walk(): MovementBehavior {
  return {
    move() {
      console.log("The character walked down the street.");
    }
  };
}

function Run(): MovementBehavior {
  return {
    move() {
      console.log("The character ran down the street in the flash of an eye!");
    }
  };
}

function Fly(): MovementBehavior {
  return {
    move() {
      console.log(
        "The character flew over the city, something they didn't know they could do!"
      );
    }
  };
}

const zander = Character();

zander.useItem();
zander.move();

zander.setItem(Sword());
zander.useItem();

zander.setItem(Rototiller());
zander.useItem();

zander.setItem(Pen());
zander.useItem();

zander.setMovementBehavior(Walk());
zander.move();

zander.setMovementBehavior(Run());
zander.move();

zander.setMovementBehavior(Fly());
zander.move();
