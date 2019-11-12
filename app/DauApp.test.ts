#!/usr/bin/env ts-node

const { DauApp } = require("./DauApp")

const { jtree } = require("jtree")

const testTree: any = {}

testTree.basics = (equal: any) => {
  const app = new DauApp()
  equal(true, true) // todo: add tests
}

/*NODE_JS_ONLY*/ if (!module.parent) jtree.TestRacer.testSingleFile(__filename, testTree)
export { testTree }
