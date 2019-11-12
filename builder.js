const { jtree } = require("jtree")
const { AbstractBuilder } = require("jtree/products/AbstractBuilder.node.js")
const { Disk } = require("jtree/products/Disk.node.js")
const stumpNode = require("jtree/products/stump.nodejs.js")
const hakonNode = require("jtree/products/hakon.nodejs.js")
const dauGrammarPath = __dirname + "/dauscore.grammar"

class Builder extends AbstractBuilder {
  produceWebApp(outputFileName) {
    return this.produceProductFromInstructionsTree(
      new jtree.TreeNode(`browserProduct
 outputFileName DauApp.browser.js
 files app/DauApp.ts`).nodeAt(0),
      __dirname
    )
  }

  produceTcfBundle() {
    // todo: move this to jtree
    const combined = jtree
      .combineFiles([
        __dirname + "/node_modules/jtree/sandbox/lib/jquery.min.js",
        __dirname + "/node_modules/jtree/products/jtree.browser.js",
        __dirname + "/node_modules/jtree/products/stump.browser.js",
        __dirname + "/node_modules/jtree/products/hakon.browser.js",
        __dirname + "/node_modules/jtree/products/TreeComponentFramework.browser.js"
      ])
      .toString()
    Disk.write(__dirname + `/app/tcfBundle.browser.js`, combined)
  }

  _getOutputFilePath(outputFileName) {
    // todo: remove
    return __dirname + "/app/" + outputFileName
  }

  produceDauGrammar() {
    jtree.formatFile(dauGrammarPath, __dirname + "/node_modules/jtree/langs/grammar/grammar.grammar")
    jtree.compileGrammarForBrowser(dauGrammarPath, __dirname + "/", true)
    jtree.compileGrammarForNodeJs(dauGrammarPath, __dirname + "/", true)
  }
}

module.exports = { Builder }

if (!module.parent) new Builder().main(process.argv[2], process.argv[3], process.argv[4])
