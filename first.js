var circles = d3.selectAll('circle')
circles.style("fill", "steelblue")
circles.attr("r", 30)
x = [1, 1, 1]
function anim() {
  d3.selectAll('circle').each(function(d,i) {

    var el = d3.select(this)
    var t = parseInt(el.attr('cx'))
    if ((t + 5*x[i]) <= 0) {
      x[i] = x[i] * -1;
    } else if ((t + (5*x[i])) >= 500) {
      x[i] = x[i] * -1
    }
    el.attr('cx', t + x[i] * 5*(Math.random()*5 - 2));
  })
  setTimeout(anim, 50)
}
anim()
