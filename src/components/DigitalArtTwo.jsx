import { OrbitControls } from "@react-three/drei";
import { Canvas} from "@react-three/fiber";

function ChairModalOne() {

}
const DigitalArtTwo = () => {
  return (
    <div className="digitalArt-outter">
      <div>
        <Canvas camera={{ fov: 20, position: [7, 10, -20] }}>
          <gridHelper args={[50, 50, "0x000000"]} />
          <directionalLight position={[0, 0, 4]} />
          <directionalLight position={[0, 4.5, -5.2]} />
          <ChairModalOne />
          <OrbitControls />
        </Canvas>
      </div>
      <div className="digitalArt-info">
        <h1>Chair Design</h1>
        <p>
          <strong>Digital Artwork</strong> - "The incomplete" collection, <br /> <br />
          id <strong>62NPD01</strong>
        </p>
      </div>
    </div>
  );
};

export default DigitalArtTwo;
