import React from "react"
import { css } from "@emotion/core"
import { rhythm } from "../utils/typography"
import { StaticQuery, Link, graphql } from "gatsby"


export default () => (
    <StaticQuery 
        query={graphql`
            query {
                allMarkdownRemark(
                    sort: { 
                    fields: [frontmatter___date], 
                    order: DESC }) {
                        totalCount
                        edges {
                            node {
                            id
                            frontmatter {
                                title
                                date(formatString: "DD MMMM, YYYY")
                            }
                            fields {
                                slug
                            }
                            excerpt
                            }
                        }
                }
            }
        `
        }
        render={data => (
            data.allMarkdownRemark.edges.map(({ node }) => (
                <div key={node.id}>
                    <Link              
                        to={node.fields.slug}              
                        css={css`                
                            text-decoration: none;                
                            color: inherit;              
                        `
                    }            
                    >
                    <h3
                        css={css`
                        margin-bottom: ${rhythm(1 / 4)};
                        `}
                    >
                        {node.frontmatter.title}{" "}
                        <span
                        css={css`
                            color: #bbb;
                        `}
                        >
                        — {node.frontmatter.date}
                        </span>
                    </h3>
                    <p>{node.excerpt}</p>
                    </Link>
                </div>
            )
        ))}
    />
)
