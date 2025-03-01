import TagButtonComponent from "./TagButtonComponent"

export default function  SideMenu() {
    return (
        <div className="side-menu" style={sideMenu}>
            <TagButtonComponent/>
            <TagButtonComponent/>
            <TagButtonComponent/>
            <TagButtonComponent/>
            <TagButtonComponent/>
            <TagButtonComponent/>
            <TagButtonComponent/>
            <TagButtonComponent/>
            <TagButtonComponent/>
            <TagButtonComponent/>
            <TagButtonComponent/>
            <TagButtonComponent/>
            <TagButtonComponent/>
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