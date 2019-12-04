//onsave jtree build produceWebApp

const { AbstractTreeComponent, AbstractCommander, WillowConstants, TreeComponentFrameworkDebuggerComponent, AbstractGithubTriangleComponent } = require("jtree/products/TreeComponentFramework.node.js")
const { jtree } = require("jtree")
const duscoreNode = require("../duscore.nodejs.js")

class DuCommander extends AbstractCommander {
  constructor(app: DuApp) {
    super(app)
    this._app = app
  }

  evaluteScoreAndUpdateCopyPasterCommand() {
    const formData = new FormData(document.getElementById("duFormComponent"))
    const tree = new jtree.TreeNode()
    for (let pair of formData.entries()) {
      tree.appendLine(pair[0] + " " + pair[1])
    }

    this._app.setDuProgram(tree).renderAndGetRenderReport()
  }

  loadFromPasteCommand(value) {
    const tree = new jtree.TreeNode(value)
    tree.forEach(node => {
      const element = document.getElementsByName(node.getWord(0))[0]
      element.value = node.getWord(1)
    })
  }

  private _app: DuApp
}

class DuApp extends AbstractTreeComponent {
  private _commander = new DuCommander(this)
  createParser() {
    return new jtree.TreeNode.Parser(undefined, {
      githubTriangleComponent: githubTriangleComponent,
      navBarComponent: navBarComponent,
      headerComponent: headerComponent,
      copyPasterComponent: copyPasterComponent,
      duFormComponent: duFormComponent,
      floatingScoreComponent: floatingScoreComponent,
      TreeComponentFrameworkDebuggerComponent: TreeComponentFrameworkDebuggerComponent
    })
  }
  private _duProgram = new duscoreNode()
  setDuProgram(tree) {
    this._duProgram = new duscoreNode(tree)
    // todo: remove the below.
    this.getNode("copyPasterComponent").setWord(1, Date.now())
    this.getNode("floatingScoreComponent").setWord(1, Date.now())
    return this
  }
  getDuProgram() {
    return this._duProgram
  }

  static getDefaultStartState() {
    return `navBarComponent
headerComponent
duFormComponent
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
    return `h1 DuScore Worksheet`
  }
}

class duFormComponent extends AbstractTreeComponent {
  toHakonCode() {
    return `label
 width 200px
 display inline-block`
  }
  toStumpCode() {
    const def = new duscoreNode().getDefinition().getNodeTypeDefinitionByNodeTypeId("duscoreNode")
    return `form
 id duFormComponent
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
  .getDuProgram()
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
 p DuScore is
 h1 ${this.score}`
  }
  get score() {
    const program = this.getParent().getDuProgram()
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
 a DATA USABILITY SCORE
  href https://duscore.treenotation.org/
  class logo
 span A holistic scoring rubric for datasets`
  }
}

class githubTriangleComponent extends AbstractGithubTriangleComponent {
  githubLink = `https://github.com/treenotation/duscore/tree/master/app`

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

export { DuApp }
