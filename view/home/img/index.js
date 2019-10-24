import "./style.less"

const Img = () => (
  <div className="img">
    <amp-img
      className="avatar"
      width={200}
      height={200}
      src="/static/image/header.png" alt=""/>
    <style jsx>{`
      .avatar {
        float: left;
        width: 50px;
        height: 50px;
        margin: 0 10px 10px 0;
        border-radius: 50%;
      }
    `}</style>
  </div>
)

export default Img