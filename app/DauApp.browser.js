//onsave jtree build produceWebApp
class DauCommander extends AbstractCommander {
  constructor(app) {
    super(app)
    this._app = app
  }
}
class DauApp extends AbstractTreeComponent {
  constructor() {
    super(...arguments)
    this._commander = new DauCommander(this)
  }
  createParser() {
    return new jtree.TreeNode.Parser(undefined, {
      githubTriangleComponent: githubTriangleComponent,
      navBarComponent: navBarComponent,
      copyPasterComponent: copyPasterComponent,
      dauFormComponent: dauFormComponent,
      floatingScoreComponent: floatingScoreComponent,
      TreeComponentFrameworkDebuggerComponent: TreeComponentFrameworkDebuggerComponent
    })
  }
  static getDefaultStartState() {
    return `navBarComponent
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
class dauFormComponent extends AbstractTreeComponent {
  toHakonCode() {
    return `label
 width 200px
 display inline-block`
  }
  toStumpCode() {
    const def = new dauscoreNode().getDefinition().getNodeTypeDefinitionByNodeTypeId("dauscoreNode")
    return `form
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
 textarea`
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
 h1 140`
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
  constructor() {
    super(...arguments)
    this.githubLink = `https://github.com/treenotation/dauscore/tree/master/app`
  }
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
window.DauApp = DauApp
