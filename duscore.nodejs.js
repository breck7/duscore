#! /usr/bin/env node
{
  const { jtree } = require("/Users/breck/jtree/products/../index.js")

  class duscoreNode extends jtree.GrammarBackedNode {
    createParser() {
      return new jtree.TreeNode.Parser(
        this._getBlobNodeCatchAllNodeType(),
        Object.assign(Object.assign({}, super.createParser()._getFirstWordMapAsObject()), {
          title: titleNode,
          real: realNode,
          columnDomainsReduced: columnDomainsReducedNode,
          timeSpan: timeSpanNode,
          copyPasteTest: passesCopyPasteTestNode,
          goToDefinitionTest: passesGoToDefinitionTestNode,
          oneClickSynthTest: passesOneClickSynthTestNode,
          cellCheckTest: passesCellCheckTestNode,
          downloadTest: passesDownloadTestNode,
          sanityTest: passesSanityTestNode,
          reproducableTest: passesReproducableTestNode,
          processDocumentation: hasProcessDocumentationNode,
          machineDocumentation: hasMachineDocumentationNode,
          batchEffectsChecked: accountsForBatchEffectsNode,
          biasesListed: listsPotentialBiasesNode,
          rawDataAvailable: rawDataAvailableNode,
          rawDataCode: rawDataCodeNode,
          versionControlled: versionControlledNode,
          blameable: blameableNode,
          authorsListed: authorsListedNode,
          loginRequired: loginRequiredNode,
          publicDomain: publicDomainNode,
          directLink: directLinkNode,
          csvAvailable: csvAvailableNode,
          tsvAvailable: tsvAvailableNode,
          sqlAvailable: sqlAvailableNode,
          jsonAvailable: jsonAvailableNode,
          apacheArrowAvailable: apacheArrowAvailableNode,
          xmlAvailable: xmlAvailableNode,
          noiseless: noiselessNode,
          isomorphicSchema: isomorphicSchemaNode,
          standardsNotUsedCount: standardsNotUsedCountNode,
          externalGrammarsListed: externalGrammarsListedNode,
          easyToJoin: easyToJoinNode,
          price: priceNode,
          tableCount: tableCountNode,
          columnCount: columnCountNode,
          columnTypes: columnTypesNode,
          filesize: filesizeNode,
          rowCount: rowCountNode,
          rowDomainEstimate: rowDomainEstimateNode,
          futureWork: futureWorkNode,
          missingCellCount: missingCellCountNode,
          cellErrorCount: cellErrorCountNode,
          duplicatedRowCount: duplicatedRowCountNode,
          duplicatedCellCount: duplicatedCellCountNode,
          projectLink: projectLinkNode,
          specLink: specLinkNode,
          downloadLink: downloadLinkNode
        }),
        undefined
      )
    }
    computeScore() {
      return this.getTopDownArray()
        .map(node => node.computeScore())
        .reduce((total, current) => total + current, 0)
    }
    getGrammarProgram() {
      if (!this._cachedGrammarProgramRoot)
        this._cachedGrammarProgramRoot = new jtree.GrammarProgram(`tooling onsave jtree build produceDuGrammar
boolCell
 enum Yes No
keywordCell
stringCell
 highlightScope string
urlCell
 highlightScope constant
intCell
duscoreNode
 root
 inScope abstractQuestionNode
 javascript
  computeScore() {
   return this.getTopDownArray()
    .map(node => node.computeScore())
    .reduce((total, current) => total + current, 0)
  }
abstractQuestionNode
 abstract
abstractStringQuestionNode
 extends abstractQuestionNode
 cells keywordCell
 catchAllCellType stringCell
 abstract
  javascript
  computeScore() {
   return 0
  }
titleNode
 crux title
 string category Basics
 extends abstractStringQuestionNode
 description This dataset is titled {string+}
abstractBooleanQuestionNode
 extends abstractQuestionNode
 cells keywordCell boolCell
 abstract
 javascript
  computeScore() {
   return this.getWord(1) === "Yes" ? 0 : 10
  }
realNode
 crux real
 string category Basics
 extends abstractBooleanQuestionNode
 description The data is [real|synthesized]
columnDomainsReducedNode
 crux columnDomainsReduced
 string category Specifications
 extends abstractBooleanQuestionNode
 description The column domains [are|are not] appropriately reduced
timeSpanNode
 crux timeSpan
 string category Timeliness
 extends abstractBooleanQuestionNode
 description The measurements [are|are not] over a long enough time period
passesCopyPasteTestNode
 crux copyPasteTest
 string category Tests
 extends abstractBooleanQuestionNode
 description It [passes|fails] the copy/paste test
passesGoToDefinitionTestNode
 crux goToDefinitionTest
 string category Tests
 extends abstractBooleanQuestionNode
 description It [passes|fails] the goToDefinition test
passesOneClickSynthTestNode
 crux oneClickSynthTest
 string category Tests
 extends abstractBooleanQuestionNode
 description It [passes|fails] the 1 click synth test
passesCellCheckTestNode
 crux cellCheckTest
 string category Tests
 extends abstractBooleanQuestionNode
 description It [passes|fails] the cellCheck test
passesDownloadTestNode
 crux downloadTest
 string category Tests
 extends abstractBooleanQuestionNode
 description It [passes|fails] the download test
passesSanityTestNode
 crux sanityTest
 string category Tests
 extends abstractBooleanQuestionNode
 description It [passes|fails] basic sanity tests
passesReproducableTestNode
 crux reproducableTest
 string category Tests
 extends abstractBooleanQuestionNode
 description It [passes|fails] the reproduce from rawData test
hasProcessDocumentationNode
 crux processDocumentation
 string category Provenance
 extends abstractBooleanQuestionNode
 description The data collection steps [are|are not] listed
hasMachineDocumentationNode
 crux machineDocumentation
 string category Provenance
 extends abstractBooleanQuestionNode
 description The machines used to gather the dataset [are|are not] listed
accountsForBatchEffectsNode
 crux batchEffectsChecked
 string category Provenance
 extends abstractBooleanQuestionNode
 description The batches and potential batch effects [are|are not] listed
listsPotentialBiasesNode
 crux biasesListed
 string category Provenance
 extends abstractBooleanQuestionNode
 description Potential bias in the dataset [is|is not] explained
rawDataAvailableNode
 crux rawDataAvailable
 string category Provenance
 extends abstractBooleanQuestionNode
 description The rawData [is|is not] available
rawDataCodeNode
 crux rawDataCode
 string category Provenance
 extends abstractBooleanQuestionNode
 description The specifications and code needed to process the raw data [are|are not] available
versionControlledNode
 crux versionControlled
 string category Auditing
 extends abstractBooleanQuestionNode
 description The dataset [is|is not] version controlled
blameableNode
 crux blameable
 string category Auditing
 extends abstractBooleanQuestionNode
 description All rows and cells [are|are not] blameable
authorsListedNode
 crux authorsListed
 string category Auditing
 extends abstractBooleanQuestionNode
 description All authors and editors [are|are not] listed
loginRequiredNode
 crux loginRequired
 string category Accessibility
 extends abstractBooleanQuestionNode
 description A login [is|is not] required to download the data
publicDomainNode
 crux publicDomain
 string category Accessibility
 extends abstractBooleanQuestionNode
 description The data [is|is not] released to the public domain
directLinkNode
 crux directLink
 string category Accessibility
 extends abstractBooleanQuestionNode
 description A direct link to the data [is|is not] available
csvAvailableNode
 crux csvAvailable
 string category Formats
 extends abstractBooleanQuestionNode
 description The dataset [is|is not] available in CSV
tsvAvailableNode
 crux tsvAvailable
 string category Formats
 extends abstractBooleanQuestionNode
 description The dataset [is|is not] available in TSV
sqlAvailableNode
 crux sqlAvailable
 string category Formats
 extends abstractBooleanQuestionNode
 description The dataset [is|is not] available in SQL
jsonAvailableNode
 crux jsonAvailable
 string category Formats
 extends abstractBooleanQuestionNode
 description The dataset [is|is not] available in JSON
apacheArrowAvailableNode
 crux apacheArrowAvailable
 string category Formats
 extends abstractBooleanQuestionNode
 description The dataset [is|is not] available in ApacheArrow
xmlAvailableNode
 crux xmlAvailable
 string category Formats
 extends abstractBooleanQuestionNode
 description The dataset [is|is not] available in XML
noiselessNode
 crux noiseless
 string category Schema Design
 extends abstractBooleanQuestionNode
 description Format noise [has|has not been] minimized
isomorphicSchemaNode
 crux isomorphicSchema
 string category Schema Design
 extends abstractBooleanQuestionNode
 description The schema [is|is not] isomorphic
standardsNotUsedCountNode
 crux standardsNotUsedCount
 string category Joinability
 extends abstractBooleanQuestionNode
 description Common specified grammars and standards [are|are not] used
externalGrammarsListedNode
 crux externalGrammarsListed
 string category Joinability
 extends abstractBooleanQuestionNode
 description External grammars [are|are not] listed and specified
easyToJoinNode
 crux easyToJoin
 string category Joinability
 extends abstractBooleanQuestionNode
 description Data [is|is not] easy to join on orthogonal datasets
abstractCountQuestionNode
 extends abstractQuestionNode
 cells keywordCell intCell
 abstract
 javascript
  computeScore() {
   return parseInt(this.getWord(1) || 10)
  }
priceNode
 crux price
 string category Accessibility
 extends abstractCountQuestionNode
 description The price to download the data and specs is {number}
tableCountNode
 crux tableCount
 string category Specifications
 extends abstractCountQuestionNode
 description There are {integer} types/tables/kinds of entities
columnCountNode
 crux columnCount
 string category Specifications
 extends abstractCountQuestionNode
 description There are {integer} columns
columnTypesNode
 crux columnTypes
 string category Specifications
 extends abstractCountQuestionNode
 description There are {integer} columnTypes
filesizeNode
 crux filesize
 string category Data
 extends abstractCountQuestionNode
 description The fileSize is {integer} bytes
rowCountNode
 crux rowCount
 string category Data
 extends abstractCountQuestionNode
 description There are {integer} rows
rowDomainEstimateNode
 crux rowDomainEstimate
 string category Data
 extends abstractCountQuestionNode
 description The estimated number of potential rows in the domain is listed as {integer}
futureWorkNode
 crux futureWork
 string category Future Work
 extends abstractCountQuestionNode
 description The project lists {integer} missing columns that would be nice to have
missingCellCountNode
 crux missingCellCount
 string category Accuracy
 extends abstractCountQuestionNode
 description The dataset contains {integer} missing cells
cellErrorCountNode
 crux cellErrorCount
 string category Accuracy
 extends abstractCountQuestionNode
 description The dataset contains {integer} cellType errors
duplicatedRowCountNode
 crux duplicatedRowCount
 string category Normalization
 extends abstractCountQuestionNode
 description The dataset contains {integer} duplicated rows
duplicatedCellCountNode
 crux duplicatedCellCount
 string category Normalization
 extends abstractCountQuestionNode
 description The dataset contains {integer} duplicated cells
abstractUrlQuestionNode
 extends abstractQuestionNode
 cells keywordCell urlCell
 abstract
 javascript
  computeScore() {
   return this.getWord(1) ? 0 : 100
  }
projectLinkNode
 crux projectLink
 string category Basics
 extends abstractUrlQuestionNode
 description The project link is {url}
specLinkNode
 crux specLink
 string category Specifications
 extends abstractUrlQuestionNode
 description The specLink is {url}
downloadLinkNode
 crux downloadLink
 string category Data
 extends abstractUrlQuestionNode
 description The downloadLink is {url}`)
      return this._cachedGrammarProgramRoot
    }
    static getNodeTypeMap() {
      return {
        duscoreNode: duscoreNode,
        abstractQuestionNode: abstractQuestionNode,
        abstractStringQuestionNode: abstractStringQuestionNode,
        titleNode: titleNode,
        abstractBooleanQuestionNode: abstractBooleanQuestionNode,
        realNode: realNode,
        columnDomainsReducedNode: columnDomainsReducedNode,
        timeSpanNode: timeSpanNode,
        passesCopyPasteTestNode: passesCopyPasteTestNode,
        passesGoToDefinitionTestNode: passesGoToDefinitionTestNode,
        passesOneClickSynthTestNode: passesOneClickSynthTestNode,
        passesCellCheckTestNode: passesCellCheckTestNode,
        passesDownloadTestNode: passesDownloadTestNode,
        passesSanityTestNode: passesSanityTestNode,
        passesReproducableTestNode: passesReproducableTestNode,
        hasProcessDocumentationNode: hasProcessDocumentationNode,
        hasMachineDocumentationNode: hasMachineDocumentationNode,
        accountsForBatchEffectsNode: accountsForBatchEffectsNode,
        listsPotentialBiasesNode: listsPotentialBiasesNode,
        rawDataAvailableNode: rawDataAvailableNode,
        rawDataCodeNode: rawDataCodeNode,
        versionControlledNode: versionControlledNode,
        blameableNode: blameableNode,
        authorsListedNode: authorsListedNode,
        loginRequiredNode: loginRequiredNode,
        publicDomainNode: publicDomainNode,
        directLinkNode: directLinkNode,
        csvAvailableNode: csvAvailableNode,
        tsvAvailableNode: tsvAvailableNode,
        sqlAvailableNode: sqlAvailableNode,
        jsonAvailableNode: jsonAvailableNode,
        apacheArrowAvailableNode: apacheArrowAvailableNode,
        xmlAvailableNode: xmlAvailableNode,
        noiselessNode: noiselessNode,
        isomorphicSchemaNode: isomorphicSchemaNode,
        standardsNotUsedCountNode: standardsNotUsedCountNode,
        externalGrammarsListedNode: externalGrammarsListedNode,
        easyToJoinNode: easyToJoinNode,
        abstractCountQuestionNode: abstractCountQuestionNode,
        priceNode: priceNode,
        tableCountNode: tableCountNode,
        columnCountNode: columnCountNode,
        columnTypesNode: columnTypesNode,
        filesizeNode: filesizeNode,
        rowCountNode: rowCountNode,
        rowDomainEstimateNode: rowDomainEstimateNode,
        futureWorkNode: futureWorkNode,
        missingCellCountNode: missingCellCountNode,
        cellErrorCountNode: cellErrorCountNode,
        duplicatedRowCountNode: duplicatedRowCountNode,
        duplicatedCellCountNode: duplicatedCellCountNode,
        abstractUrlQuestionNode: abstractUrlQuestionNode,
        projectLinkNode: projectLinkNode,
        specLinkNode: specLinkNode,
        downloadLinkNode: downloadLinkNode
      }
    }
  }

  class abstractQuestionNode extends jtree.GrammarBackedNode {}

  class abstractStringQuestionNode extends abstractQuestionNode {
    get keywordCell() {
      return this.getWord(0)
    }
    get stringCell() {
      return this.getWordsFrom(1)
    }
  }

  class titleNode extends abstractStringQuestionNode {
    get category() {
      return `Basics`
    }
  }

  class abstractBooleanQuestionNode extends abstractQuestionNode {
    get keywordCell() {
      return this.getWord(0)
    }
    get boolCell() {
      return this.getWord(1)
    }
    computeScore() {
      return this.getWord(1) === "Yes" ? 0 : 10
    }
  }

  class realNode extends abstractBooleanQuestionNode {
    get category() {
      return `Basics`
    }
  }

  class columnDomainsReducedNode extends abstractBooleanQuestionNode {
    get category() {
      return `Specifications`
    }
  }

  class timeSpanNode extends abstractBooleanQuestionNode {
    get category() {
      return `Timeliness`
    }
  }

  class passesCopyPasteTestNode extends abstractBooleanQuestionNode {
    get category() {
      return `Tests`
    }
  }

  class passesGoToDefinitionTestNode extends abstractBooleanQuestionNode {
    get category() {
      return `Tests`
    }
  }

  class passesOneClickSynthTestNode extends abstractBooleanQuestionNode {
    get category() {
      return `Tests`
    }
  }

  class passesCellCheckTestNode extends abstractBooleanQuestionNode {
    get category() {
      return `Tests`
    }
  }

  class passesDownloadTestNode extends abstractBooleanQuestionNode {
    get category() {
      return `Tests`
    }
  }

  class passesSanityTestNode extends abstractBooleanQuestionNode {
    get category() {
      return `Tests`
    }
  }

  class passesReproducableTestNode extends abstractBooleanQuestionNode {
    get category() {
      return `Tests`
    }
  }

  class hasProcessDocumentationNode extends abstractBooleanQuestionNode {
    get category() {
      return `Provenance`
    }
  }

  class hasMachineDocumentationNode extends abstractBooleanQuestionNode {
    get category() {
      return `Provenance`
    }
  }

  class accountsForBatchEffectsNode extends abstractBooleanQuestionNode {
    get category() {
      return `Provenance`
    }
  }

  class listsPotentialBiasesNode extends abstractBooleanQuestionNode {
    get category() {
      return `Provenance`
    }
  }

  class rawDataAvailableNode extends abstractBooleanQuestionNode {
    get category() {
      return `Provenance`
    }
  }

  class rawDataCodeNode extends abstractBooleanQuestionNode {
    get category() {
      return `Provenance`
    }
  }

  class versionControlledNode extends abstractBooleanQuestionNode {
    get category() {
      return `Auditing`
    }
  }

  class blameableNode extends abstractBooleanQuestionNode {
    get category() {
      return `Auditing`
    }
  }

  class authorsListedNode extends abstractBooleanQuestionNode {
    get category() {
      return `Auditing`
    }
  }

  class loginRequiredNode extends abstractBooleanQuestionNode {
    get category() {
      return `Accessibility`
    }
  }

  class publicDomainNode extends abstractBooleanQuestionNode {
    get category() {
      return `Accessibility`
    }
  }

  class directLinkNode extends abstractBooleanQuestionNode {
    get category() {
      return `Accessibility`
    }
  }

  class csvAvailableNode extends abstractBooleanQuestionNode {
    get category() {
      return `Formats`
    }
  }

  class tsvAvailableNode extends abstractBooleanQuestionNode {
    get category() {
      return `Formats`
    }
  }

  class sqlAvailableNode extends abstractBooleanQuestionNode {
    get category() {
      return `Formats`
    }
  }

  class jsonAvailableNode extends abstractBooleanQuestionNode {
    get category() {
      return `Formats`
    }
  }

  class apacheArrowAvailableNode extends abstractBooleanQuestionNode {
    get category() {
      return `Formats`
    }
  }

  class xmlAvailableNode extends abstractBooleanQuestionNode {
    get category() {
      return `Formats`
    }
  }

  class noiselessNode extends abstractBooleanQuestionNode {
    get category() {
      return `Schema Design`
    }
  }

  class isomorphicSchemaNode extends abstractBooleanQuestionNode {
    get category() {
      return `Schema Design`
    }
  }

  class standardsNotUsedCountNode extends abstractBooleanQuestionNode {
    get category() {
      return `Joinability`
    }
  }

  class externalGrammarsListedNode extends abstractBooleanQuestionNode {
    get category() {
      return `Joinability`
    }
  }

  class easyToJoinNode extends abstractBooleanQuestionNode {
    get category() {
      return `Joinability`
    }
  }

  class abstractCountQuestionNode extends abstractQuestionNode {
    get keywordCell() {
      return this.getWord(0)
    }
    get intCell() {
      return parseInt(this.getWord(1))
    }
    computeScore() {
      return parseInt(this.getWord(1) || 10)
    }
  }

  class priceNode extends abstractCountQuestionNode {
    get category() {
      return `Accessibility`
    }
  }

  class tableCountNode extends abstractCountQuestionNode {
    get category() {
      return `Specifications`
    }
  }

  class columnCountNode extends abstractCountQuestionNode {
    get category() {
      return `Specifications`
    }
  }

  class columnTypesNode extends abstractCountQuestionNode {
    get category() {
      return `Specifications`
    }
  }

  class filesizeNode extends abstractCountQuestionNode {
    get category() {
      return `Data`
    }
  }

  class rowCountNode extends abstractCountQuestionNode {
    get category() {
      return `Data`
    }
  }

  class rowDomainEstimateNode extends abstractCountQuestionNode {
    get category() {
      return `Data`
    }
  }

  class futureWorkNode extends abstractCountQuestionNode {
    get category() {
      return `Future Work`
    }
  }

  class missingCellCountNode extends abstractCountQuestionNode {
    get category() {
      return `Accuracy`
    }
  }

  class cellErrorCountNode extends abstractCountQuestionNode {
    get category() {
      return `Accuracy`
    }
  }

  class duplicatedRowCountNode extends abstractCountQuestionNode {
    get category() {
      return `Normalization`
    }
  }

  class duplicatedCellCountNode extends abstractCountQuestionNode {
    get category() {
      return `Normalization`
    }
  }

  class abstractUrlQuestionNode extends abstractQuestionNode {
    get keywordCell() {
      return this.getWord(0)
    }
    get urlCell() {
      return this.getWord(1)
    }
    computeScore() {
      return this.getWord(1) ? 0 : 100
    }
  }

  class projectLinkNode extends abstractUrlQuestionNode {
    get category() {
      return `Basics`
    }
  }

  class specLinkNode extends abstractUrlQuestionNode {
    get category() {
      return `Specifications`
    }
  }

  class downloadLinkNode extends abstractUrlQuestionNode {
    get category() {
      return `Data`
    }
  }

  module.exports = duscoreNode
  duscoreNode

  if (!module.parent) new duscoreNode(jtree.TreeNode.fromDisk(process.argv[2]).toString()).execute()
}
