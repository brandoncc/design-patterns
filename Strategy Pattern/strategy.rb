# frozen_string_literal: true

class Character
  attr_accessor :item, :movement_behavior

  def initialize
    @item = NoItem.new
    @movement_behavior = NoMovement.new
  end

  def use_item
    item.use
  end

  def move
    movement_behavior.move
  end
end

class NoItem
  def use
    puts "There is no item in the character's hand."
  end
end

class NoMovement
  def move
    puts 'The character does not know how to move.'
  end
end

class Sword
  def use
    puts 'The character has slain a mighty dragon with their sword!'
  end
end

class Rototiller
  def use
    puts 'The character has put in a long day of work tilling the ground!'
  end
end

class Pen
  def use
    puts 'The character has written a very sweet letter to their Mom using a pen!'
  end
end

class Walk
  def move
    puts 'The character walked down the street.'
  end
end

class Run
  def move
    puts 'The character ran down the street in the flash of an eye!'
  end
end

class Fly
  def move
    puts "The character flew over the city, something they didn't know they could do!"
  end
end

zander = Character.new

zander.use_item
zander.move

zander.item = Sword.new
zander.use_item

zander.item = Rototiller.new
zander.use_item

zander.item = Pen.new
zander.use_item

zander.movement_behavior = Walk.new
zander.move

zander.movement_behavior = Run.new
zander.move

zander.movement_behavior = Fly.new
zander.move
