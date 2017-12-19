class whatEver {
  constructor (noMatter) {
    this.noMatter = noMatter;
    // console.log(this)
    // this.someMethod()
  }
  someMethod() {
    console.log("someThinf ;",this.noMatter)
  }
}

let someThingOutOfInteresting = new whatEver("a Word ")
console.log(someThingOutOfInteresting.someMethod())
