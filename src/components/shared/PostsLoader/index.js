import { Card, Skeleton } from 'antd'
import classes from './PostsLoader.module.scss'

const PostsLoader = ({ count = 1 }) => (
  <div>
    {Array.from({ length: count }).map((_, index) => (
      <Card className={classes.card} key={index}>
        <Skeleton avatar active />
        <Skeleton.Image className={classes.image} />
      </Card>
    ))}
  </div>
)

export default PostsLoader
