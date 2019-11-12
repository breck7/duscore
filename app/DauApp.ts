//onsave jtree build produceWebApp

const { AbstractTreeComponent, AbstractCommander, WillowConstants, TreeComponentFrameworkDebuggerComponent, AbstractGithubTriangleComponent } = require("jtree/products/TreeComponentFramework.node.js")
const { jtree } = require("jtree")
const dauscoreNode = require("../dauscore.nodejs.js")

class DauCommander extends AbstractCommander {
  constructor(app: DauApp) {
    super(app)
    this._app = app
  }

  evaluteScoreAndUpdateCopyPasterCommand() {
    console.log(2)
    const formData = new FormData(document.getElementById("dauFormComponent"))
    const tree = new jtree.TreeNode()
    for (let pair of formData.entries()) {
      tree.appendLine(pair[0] + " " + pair[1])
    }

    this._app.setDauProgram(tree).renderAndGetRenderReport()
  }

  loadFromPasteCommand(value) {
    const tree = new jtree.TreeNode(value)
    tree.forEach(node => {
      const element = document.getElementsByName(node.getWord(0))[0]
      element.value = node.getWord(1)
    })
  }

  private _app: DauApp
}

class DauApp extends AbstractTreeComponent {
  private _commander = new DauCommander(this)
  createParser() {
    return new jtree.TreeNode.Parser(undefined, {
      githubTriangleComponent: githubTriangleComponent,
      navBarComponent: navBarComponent,
      headerComponent: headerComponent,
      copyPasterComponent: copyPasterComponent,
      dauFormComponent: dauFormComponent,
      floatingScoreComponent: floatingScoreComponent,
      TreeComponentFrameworkDebuggerComponent: TreeComponentFrameworkDebuggerComponent
    })
  }
  private _dauProgram = new dauscoreNode()
  setDauProgram(tree) {
    this._dauProgram = new dauscoreNode(tree)
    // todo: remove the below.
    this.getNode("copyPasterComponent").setWord(1, Date.now())
    this.getNode("floatingScoreComponent").setWord(1, Date.now())
    return this
  }
  getDauProgram() {
    return this._dauProgram
  }

  static getDefaultStartState() {
    return `navBarComponent
headerComponent
dauFormComponent
copyPasterComponent
floatingScoreComponent
githubTriangleComponent`
  }
  toHakonCode() {
    return `body
 font-family Roboto,sans-serif
 font-weight 100
 width 1000px
 margin auto
 padding-top 10px
h1
 font-weight 300`
  }
}

class headerComponent extends AbstractTreeComponent {
  toStumpCode() {
    return `h1 DauScore Worksheet`
  }
}

class dauFormComponent extends AbstractTreeComponent {
  toHakonCode() {
    return `label
 width 200px
 display inline-block`
  }
  toStumpCode() {
    const def = new dauscoreNode().getDefinition().getNodeTypeDefinitionByNodeTypeId("dauscoreNode")
    return `form
 id dauFormComponent
 stumpOnChangeCommand evaluteScoreAndUpdateCopyPasterCommand
${new jtree.TreeNode(def.toStumpString()).toString(1)}`
  }
}

class copyPasterComponent extends AbstractTreeComponent {
  toHakonCode() {
    return `.copyPasterComponent
 position fixed
 bottom 0px
 right 0px
 textarea
  width 200px
  height 200px`
  }
  toStumpCode() {
    return `div
 class copyPasterComponent
 div CopyPaster
 textarea
  stumpOnChangeCommand loadFromPasteCommand
  bern
${this.getParent()
  .getDauProgram()
  .toString(3)}`
  }
}

class floatingScoreComponent extends AbstractTreeComponent {
  toHakonCode() {
    return `.floatingScoreComponent
 position fixed
 top 30px
 right 10px
 width 170px
 text-align center`
  }
  toStumpCode() {
    return `div
 class floatingScoreComponent
 p DauScore is
 h1 ${this.score}`
  }
  get score() {
    const program = this.getParent().getDauProgram()
    return program ? program.computeScore() : "-"
  }
}

class navBarComponent extends AbstractTreeComponent {
  toHakonCode() {
    return `.logo
 padding-right 10px
 color black
 text-decoration none
 font-weight 500`
  }
  toStumpCode() {
    return `div
 a DAU
  href https://dauscore.treenotation.org/
  class logo
 span A holistic scoring rubric for datasets`
  }
}

class githubTriangleComponent extends AbstractGithubTriangleComponent {
  githubLink = `https://github.com/treenotation/dauscore/tree/master/app`

  toHakonCode() {
    return `.AbstractGithubTriangleComponent
 display block
 position absolute
 top 0
 right 0`
  }
  toStumpCode() {
    return `a
 class AbstractGithubTriangleComponent
 href ${this.githubLink}
 img
  src github-fork.svg`
  }
}

export { DauApp }
