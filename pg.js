window.onscroll = function (e) {  
    const smallScreen = document.getElementById('small-screen');
    var pos =  document.documentElement.scrollTop
    console.log("pos", pos)
    if(pos < 690) {
      goRight()
      smallScreen.style.backgroundColor = "blue"
    }
    if(pos > 690) {
      goLeft()
      smallScreen.style.backgroundColor = "red"
    }
    if(pos > 1165) {
      goRight()
      smallScreen.style.backgroundColor = "pink"
    }
    if(pos > 1630) {
      goLeft()
      smallScreen.style.backgroundColor = "purple"
    }
  
  } 
  function goRight() {
    const el = document.getElementById('sticky');
    el.style.transform = "skew(-7deg, 5deg)"
    el.style.marginLeft = "50%"
  }
  function goLeft() {
    const el = document.getElementById('sticky');
    el.style.transform = "skew(7deg, -5deg)"
    el.style.marginLeft = "0%"
  }
  