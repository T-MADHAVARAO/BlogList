// Write your JS code here
import BlogItem from '../BlogItem'
import './index.css'

const BlogsList = props => {
  const {blogsList} = props
  return (
    <div className="home-container">
      <div className="profileCont">
        <img
          src="https://media.licdn.com/dms/image/C4E03AQEG8KznRkatyA/profile-displayphoto-shrink_800_800/0/1659539280659?e=1692230400&v=beta&t=egLAW9hTL355zMyfrUW5DV3kRMXyt-JaxyZrtCZIP-I"
          alt="profile"
          className="profile"
        />
        <h1>Wade Warren</h1>
        <p>Software developer at UK</p>
      </div>
      <ul className="blogsCont">
        {blogsList.map(each => (
          <BlogItem blogItem={each} key={each.id} />
        ))}
      </ul>
    </div>
  )
}

export default BlogsList
