
export default function Die(props) {
    const styles = {
        backgroundColor: props.isHeld ? "#59E391" : "white",
    }
    return(
        <div className="flex items-center justify-center w-12 h-12 text-3xl font-bold shadow-md cursor-pointer rounded-xl" style={styles}>
        <h2>{props.value}</h2>
        </div>
    );
}