describe("Filter a word from the string", function () {
    it("removing banned words from string", function () {
      assert.equal(
        "This house is not nice!".filter(["not","!"]),
        "This house is  nice"
      );
    });
  });
  
  describe("BubbleSort Algorithm on Arrays", function () {
    it(" BubbleSort algorithm on the Array object", function () {
      expect([6, 4, 0, 3, -2, 1].BubbleSort()).to.eql( [-2, 0, 1, 3, 4, 6]);
    });
  });
  
  describe("Ihneritance in javascript", function () {
    it("Initialize Teacher by input value", function () {
      let myTeacher = new Teacher();
      myTeacher.initialize("Michael", "40");
  
      assert.equal(
        myTeacher.teaches("WAP"),
        "Michael is now teaching WAP"
      );
    });
  });