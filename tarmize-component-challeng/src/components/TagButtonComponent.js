import './TagButtonStyle.css';
export default function TagButtonComponent({tag}) {
    return (
    <button className="tag-btn" >
        {tag}    
    </button>)
}
