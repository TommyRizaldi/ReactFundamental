import Hello from "../components/hello"
import Welcome from "../components/welcome"


export default function HomePage() {
    const data = "Ruli"
    return (
      <>
        <Hello name={data} />
        <Welcome />
      </>
    )
}