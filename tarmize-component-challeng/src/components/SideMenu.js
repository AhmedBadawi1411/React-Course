import TagButtonComponent from "./TagButtonComponent"

export default function  SideMenu({tags}) {
    return (
        <div className="side-menu" style={sideMenu}>
            {tags.map((tag)=>(
                <TagButtonComponent tag={tag}></TagButtonComponent>
            ))}
        </div>
    )
}

const sideMenu = {
    display: "flex",
    flexWrap: "wrap",
    alignItems:"center",
    justifyContent: "center",
    gap: "16px",
    border: "solid 4px #007575",
    padding: "16px 48px"
}