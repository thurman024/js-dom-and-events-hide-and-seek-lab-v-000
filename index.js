function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
  let ranks = document.querySelectorAll('ul.ranked-list li')
  for (var i in ranks) {
    ranks[i].innerHTML = parseInt(ranks[i].innerHTML) + n
  }
}

function deepestChild() {
  let nodes = document.getElementById('grand-node')
  let next = nodes.children[0]
  while (next) {
    nodes = next
    next = nodes.children[0]
  }
  return nodes
}
