new TypeIt("#typeit_name", {
  speed: 70,
  deleteSpeed: 40,
  cursorChar: "|",
  loop: false,
  waitUntilVisible: true,
})
.pause(1000)
.type("selfxiron")
.pause(1000)
.delete(9)
.pause(250)
.type("Jeet Pratap Singh Rajput")
.pause(500)
.go();
