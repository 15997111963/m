const Layout = props => {
  return (
    <div className="site-wrapper">
      <div className="content-wrapper">{props.children}</div>
      <style jsx global>{`
        html, body, div, ul, li, h1, h2, h3, h4, h5, h6, p, dl, dt, dd, ol, form, input, textarea, th, td, select {
          margin: 0;
          padding: 0,
        }
        * {
          box-sizing: border-box;
          touch-action: pan-y
        }
        html, body {
          min-height: 100%;
          font-size: 14px;
          font-family: PingFangSC-Regular, sans-serif
        }
        body {
          color:#333;
          background-color: #fff
        }
        h1, h2, h3, h4, h5, h6, b, strong {
          font-weight:normal
        }
        ul, ol {
          list-style: none
        }
        img {
          display: block
        }
        a {
          text-decoration: none
        }
        i, b, strong {
          font-style: normal;
          font-weight: normal
        }
        table {
          border-collapse: collapse;
          table-layout: fixed
        }
        input, textarea, button {
          outline: none;
          border: none
        }
        textarea {
          resize: none;
          overflow: auto
        }
        .ellipse {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap
        }
        .content-wrapper {
          position: relative;
          min-height: 1px;
          padding: 20px;
          max-width: 600px;
          margin: 40px auto;
        }
        .sidebar-trigger {
          background: transparent;
          border: 0;
          outline: none;
          padding: 15px 20px;
          cursor: pointer;
          font-size: 22px;
        }
        .menu li {
          min-width: 200px
        }
      `}</style>
    </div>
  )
}

export default Layout
