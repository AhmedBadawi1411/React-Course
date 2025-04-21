import './PostComponent.css'
export default function PostComponent({
    title="This is the post title",
    body="",
    children
}) {

    return (
        <div className='post'>
            <h3 className='post-title'>{title}</h3>
            <hr/>
            {children}
            <p className="post-content">{body}</p>
        </div>
    )
}