// Write your JS code here
import './index.css'

const BlogItem = props => {
  const {blogItem} = props
  const {title, description, publishedDate} = blogItem
  return (
    <li>
      <div className="titleCont">
        <h1>{title}</h1>
        <p>{publishedDate}</p>
      </div>
      <p>{description}</p>
    </li>
  )
}

export default BlogItem
