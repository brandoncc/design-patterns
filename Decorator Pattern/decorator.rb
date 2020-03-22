# frozen_string_literal: true

class Toolbox
  WEIGHT = 200

  def tool_count
    0
  end

  def weight
    WEIGHT
  end
end

class Wrenches
  TOOL_COUNT = 7
  WEIGHT = 3.5

  attr_reader :toolbox

  def initialize(toolbox)
    @toolbox = toolbox
  end

  def tool_count
    TOOL_COUNT + toolbox.tool_count
  end

  def weight
    WEIGHT + toolbox.weight
  end
end

class Sockets
  TOOL_COUNT = 15
  WEIGHT = 1.8

  attr_reader :toolbox

  def initialize(toolbox)
    @toolbox = toolbox
  end

  def tool_count
    TOOL_COUNT + toolbox.tool_count
  end

  def weight
    WEIGHT + toolbox .weight
  end
end

class Screwdrivers
  TOOL_COUNT = 10
  WEIGHT = 2.5

  attr_reader :toolbox

  def initialize(toolbox)
    @toolbox = toolbox
  end

  def tool_count
    TOOL_COUNT + toolbox.tool_count
  end

  def weight
    WEIGHT + toolbox.weight
  end
end

toolbox = Screwdrivers.new(
  Sockets.new(
    Wrenches.new(
      Toolbox.new
    )
  )
)

p toolbox.tool_count
p toolbox.weight

# >> 32
# >> 207.8
