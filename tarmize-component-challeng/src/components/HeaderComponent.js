export default function  HeaderComponent() {
    return (
        <header style={headerStyle}>
            <h1>Tarmeez Academy</h1>
        </header>
    )
}

const headerStyle = {
    height: "120px",
    alignText: "center",
    display:"flex",
    justifyContent:"center",
    alignItems: "center",
    backgroundColor: "#007575",
    color: "#ffffff",
    boxShadow: "0 4px 6px rgba(27, 26, 26, 0.479)"

}