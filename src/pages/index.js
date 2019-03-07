import React from "react"
import { css } from "@emotion/core"
import Layout from "../components/layout"
import Projectlist from "../components/projectlist"

export default ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <div>
        <h3
          css={css`
            display: inline-block;
            border-bottom: 1px solid;
          `}
        >
          My Portfolio
        </h3>

        <Projectlist></Projectlist>
      </div>
    </Layout>
  )
}