import Link from 'next/link'

const Sidebar = () => {
  return (
    <>
      <amp-sidebar id="sidebar" className="sidebar" layout="nodisplay">
        <button on="tap:sidebar.toggle" className="sidebar-trigger">
          ✕
        </button>
        <ul className="menu">
          {Array(4).fill("").map((_, i) => {
            return (
              <li key={i}>
                <Link href="/">
                  导航
                </Link>
              </li>
            )
          })}
        </ul>
      </amp-sidebar>
      <style jsx>{`
        .sidebar {
          background-color: #fff;
          color: #333;
          min-width: 250px;
          width: 250px;
        }
        .sidebar-trigger {
          background: transparent;
          border: 0;
          outline: none;
          padding: 15px 20px;
          cursor: pointer;
          font-size: 22px;
        }
        .menu {
          list-style: none;
        }
        .menu a {
          text-transform: uppercase;
          display: inline-block;
          margin-bottom: 15px;
        }
        .menu a:hover {
          color: #333;
        }
      `}</style>
    </>
  )
}

export default Sidebar

