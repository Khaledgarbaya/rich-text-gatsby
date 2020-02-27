import React from "react"
import { graphql } from "gatsby"
import { BLOCKS, INLINES, MARKS } from "@contentful/rich-text-types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Layout from "../components/layout"

const IndexPage = ({ data }) => {
  const firstRichContent = data.allContentfulRichContent.nodes[0]
  const options = {
    renderNode: {
      [BLOCKS.HEADING_1]: (node, children) => (
        <h1 className="heading1">{children}</h1>
      ),
      [BLOCKS.HEADING_2]: (node, children) => (
        <h2 className="heading2">{children}</h2>
      ),
      [BLOCKS.HEADING_3]: (node, children) => (
        <h3 className="heading3">{children}</h3>
      ),
      [BLOCKS.HEADING_4]: (node, children) => (
        <h4 className="heading4">{children}</h4>
      ),
      [BLOCKS.EMBEDDED_ASSET]: (node, children) => (
        <img src={`https:${node.data.target.fields.file["en-US"].url}`} />
      ),
      [BLOCKS.PARAGRAPH]: (node, children) => (
        <p className="copy">{children}</p>
      ),
    },
    renderMark: {},
  }
  return (
    <Layout>
      {documentToReactComponents(firstRichContent.content.json, options)}
    </Layout>
  )
}
export const query = graphql`
  {
    allContentfulRichContent {
      nodes {
        title
        content {
          json
        }
      }
    }
  }
`
export default IndexPage
