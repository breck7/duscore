#! /usr/bin/env node
const { jtree } = require("jtree")
const { Disk } = require("jtree/products/Disk.node.js")

const tree = Disk.read(__dirname + "/sample.checklist")

const categories = tree.split("\n\n")

const grammar = new jtree.TreeNode(`abstractQuestionNode
 abstract`)

categories.forEach(section => {
  section = new jtree.TreeNode(section)
  const cat = section.shift().toString()
  section.forEach(sentence => {
    grammar.appendLineAndChildren(
      `Node`,
      `string category ${cat}
extends abstractQuestionNode
description ${sentence.getLine()}`
    )
  })
})

Disk.write(__dirname + "/duscore.grammar", grammar.toString())
