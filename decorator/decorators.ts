// TS decorators (experimental construct for TS class derivatives)

// decorator signature:
// function <name>(target: typeof T | any, key?: string, desc?: PropertyDescriptor):void {....}
// where:
//  target class prototype object (stores only methods)
//  key class property name
//  desc JS PropertyDescriptor object

@classDecorator
class Boat {
  @testDecorator
  color: string = "red";

  @testDecorator
  get formattedColor(): string {
    return `This boat color is ${this.color}`;
  }

  @logError("Oops, boat was sunk")
  pilot(
    @parameterDecorator speed: string,
    @parameterDecorator generateWake: boolean = false
  ): void {
    if (speed === "fast") {
      console.log("swish");
    } else {
      console.log("nothing");
    }
    throw new Error();
  }
}

// parameterDecorator decorates function input argument
function parameterDecorator(target: any, key: string, index: number) {
  console.log("parameter Decorator", key, index);
}

// testDecorator for class properties (no desc input prop)
function testDecorator(target: any, key: string): void {
  console.log(target);
  console.log(key);
}

// decorator factory for class methods
function logError(msg: string) {
  return function (target: any, key: string, desc: PropertyDescriptor): void {
    const method = desc.value;

    desc.value = function () {
      try {
        method();
      } catch (e) {
        console.log(msg);
      }
    };
  };
}

function classDecorator(constructor: typeof Boat) {
  console.log("Class Decorator:", constructor);
}

const b = new Boat();
b.pilot("slow");
